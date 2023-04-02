import ImageItem from "./ImageItem";

function ImageList({imagesPlaceHolder}) {
    return ( <div className="imageList">
        {imagesPlaceHolder.map((image,index)=>{
           return <ImageItem key={index} imageItem={image}/>
        })}
    </div> );
}

export default ImageList;