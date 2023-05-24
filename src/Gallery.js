import React, { useState } from 'react'
import imgList from './imgList.json'
import { FacebookShareButton,WhatsappShareButton,TwitterShareButton } from "react-share";
import {FaWhatsapp,FaFacebook,FaTwitter} from 'react-icons/fa'

const Gallery = () => {

    const [filteredGender, setFilteredGender] = useState('');

    const handleFilter = (gender) => {
      setFilteredGender(gender);
    };
  
    // Filter images based on gender
    const filteredImages = filteredGender
      ? imgList.filter((image) => image.gender === filteredGender)
      : imgList;



  return (
    <>
      <h1 className="text-3xl font-bold text-center">Image Gallery</h1>
      <hr className="my-2"/>
      <h2 className="text-xl font-semibold text-center">Get your Avatars now</h2>   
      {/* categories */}
      <div className="h-full w-full mt-5 p-4 flex flex-row justify-center"> 
        <button class=" w-28 mx-4 rounded-lg bg-gray-400 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-200 active:bg-blue-700 hover:text-black" onClick={()=> handleFilter('male')}>
                    Male
        </button>
        <button class=" w-28 mx-4 rounded-lg bg-gray-400 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-200 active:bg-blue-700 hover:text-black" onClick={()=> handleFilter('female')}>
                    Female
        </button>
        <button class=" w-28 mx-4 rounded-lg bg-gray-400 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-200 active:bg-blue-700 hover:text-black" onClick={()=> handleFilter('')}>
                    All
        </button>
     </div>
     {/* image grid */}
    <div className="flex justify-center"> 
    <div className="p-5 grid grid-flow-row gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    {filteredImages.map((image) => (
            <div
              key={image.id}
              className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-slate-400 bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] undefined"
            >
              <div className="h-full w-full">
                <div className="relative w-full h-48">
                  <img
                    src={image.imageSrc}
                    alt={image.id}
                    className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  />
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                  <div className="mb-2">
                    <p className="text-lg font-bold text-navy-700">{image.name}</p>
                    <p className="text-lg font-bold text-navy-700">{image.gender}</p>
                  </div>
                </div>
                <div className="flex items-center  md:items-center lg:justify-end">
                <FacebookShareButton url={image.imageSrc}>
                    <FaFacebook className="text-brand-500 hover:text-brand-600 mx-2" />
                  </FacebookShareButton>
                  <WhatsappShareButton url={image.imageSrc}>
                    <FaWhatsapp className="text-brand-500 hover:text-brand-600 mx-2" />
                  </WhatsappShareButton>
                  <TwitterShareButton url={image.imageSrc}>
                    <FaTwitter className="text-brand-500 hover:text-brand-600 mx-2" />
                  </TwitterShareButton>
                  
                </div>
              </div>
            </div>
          ))}
    </div>
    </div>
    </>
  )
}

export default Gallery


//<button className="absolute bottom-3 right-2 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"></button>