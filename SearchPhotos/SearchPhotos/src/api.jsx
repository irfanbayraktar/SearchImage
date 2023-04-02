import axios from 'axios'

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers:{
         Authorization:'Client-ID qN220uKm7Ga0X_O4lJrWeR8JUtGS95kMZ0HR7EuWtwE',
       },
       params:{
         query:term,
       },
     });
     debugger
     return response.data.results;
   }

   export default searchImages;