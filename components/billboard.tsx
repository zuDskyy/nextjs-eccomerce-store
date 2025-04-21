"use client";

import { Billboard as BillboardType } from '@/types'

import Image from 'next/image';


interface BillboardProps {
  data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  
    return (
      <div className=" relative w-[90%] mx-auto md:h-[600px] h-[200px]  overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
       
        >
          
            <div  className="w-full flex-shrink-0 relative md:h-[600px] h-[200px]">
              <Image
                src={data?.imageUrl}
                alt={`billboard-1`}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
       
        </div>
  
        {/* Prev / Next Buttons */}
        {/* <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <Button
           
            onClick={prevSlide}
            className="bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
          
            onClick={nextSlide}
            className="bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div> */}
  
        {/* Dots */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div> */}
      </div>
  )
}

export default Billboard
