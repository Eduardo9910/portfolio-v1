/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/navigation';
import { jsonManageSections } from '../../configs/json-manage-sections';

function CarouselProjects() {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        810: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
      }}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full"
    >
      {jsonManageSections.arrayProjects.map((el) => (
        <SwiperSlide key={el.id}>
          <ProjectCard
            title={el.name}
            description={el.description}
            image={el.image}
            color={el.color}
            technologies={el.technologies}
            href={el.href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselProjects;
