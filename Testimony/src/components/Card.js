import React from "react";
import {FaQuoteLeft , FaQuoteRight } from 'react-icons/fa'; 
 

function Card(props){

    let review = props.review;

return(
    <div className="flex flex-col md:relative">

<div className="absolute top-[-7rem] z-[10] mx-auto">
    <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25"/>

<div className="bg-violet-500 rounded-full w-[140px] h-[140px] absolute top-[-6px] z-[-20] left-[10px]"></div>

</div>

<div className="text-center mt-7">
    <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
    <p className="text-violet-400 uppercase">{review.job}</p>
</div>

<div className="mx-auto mt-5 text-violet-400">
    <FaQuoteLeft/>
</div>

<div className="text-center mt-4 text-slate-500">
    {review.text}
</div>

<div className="mx-auto mt-5 text-violet-400">
    <FaQuoteRight/>
</div>


    </div>
)

}

export default Card;