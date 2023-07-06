import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft , FiChevronRight } from 'react-icons/fi';

function Testimonial(props){

    let reviews = props.reviews;
    let n = reviews.length ;
    const[index , setIndex] = useState(0);

    function leftshiftHandler(){
     if( index-1 < 0 ){
      setIndex(n-1); }

     else{
        setIndex(index-1); }

    }

    function rightshiftHandler(){
        if( index+1 >= n ){
            setIndex(0); }

        else{
            setIndex(index+1); }
    }

    function surpriseHandler(){
       let randomIndex = Math.floor(Math.random() * n);
       setIndex(randomIndex);
    }

return(

<div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center 
mt-10 p-10 transition-all duration-500 hover:shadow-xl rounded-md">
<div>
<Card review = {reviews[index]}/>
    </div>

<div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold justify-center">
    <button 
    onClick={leftshiftHandler}
    className="cursor-pointer hover:text-violet-500"><FiChevronLeft/></button>
    <button
    onClick={rightshiftHandler}
    className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
</div>

<div className="mt-6">
    <button
    onClick={surpriseHandler}
    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 
    cursor-pointer text-white px-10 py-2 rounded-md font-bold text-lg"> 
        Surprise Me!
    </button>
</div>

</div>

)

}

export default Testimonial;