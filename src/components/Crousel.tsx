
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: "900",
  display: "swap",
  subsets: ["latin"]
});

interface CarouselSlide {
  image: string;
  text: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full md:h-[500px] h-[400px]">
            <Image priority src={slide.image} width={1200} height={800} alt={`Slide ${index}`} className="w-full h-full opacity-45" />
            
            <h1 className={`absolute px-4 md:px-0 ${poppins.className} top-[200px] inset-0 text-center flex items-center justify-center bg-clip-text text-transparent text-lg  md:text-3xl font-extrabold bg-gradient-to-r from-gray-700 via-indigo-900 to-gray-700 `}>
               {slide.text}
            </h1>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
