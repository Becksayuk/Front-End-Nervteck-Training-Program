import React from 'react'
import './App.css';
import data from './data.js';
import ImageCard from './ImageCard/ImageCard';
import {useState} from "react";



function App() {

   const [query, setQuery] = useState("")
  return(
  
    <div>
      <div className="container"> 
    <h1> PhotoGallery</h1>
     <input  type="text" placeholder="     Search Anything " onChange={event => setQuery(event.target.value)}  ></input>
      </div> 

      <div className="wrapper">
         {data.filter(image =>{
           if (query ===""){
             return image;
           }else if (image.name.toLowerCase().includes(query.toLowerCase())){
             return image;
           }
         })
         .map((image, index) => ( 
         <ImageCard 
         key={index}
         name= {image.name}
         description={image.desciption}
         rating={image.rating}
         picture= {image.picture} 
         />
         ))}

      </div>
    
      
  </div>

  )
}
// the <> creates a single elemnt, but when the code is compild it is not added to the final markup.
export default App;
