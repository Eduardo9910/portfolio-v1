/* eslint-disable import/no-unresolved */
import { ReactSVG } from 'react-svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import $ from 'jquery';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { SkillsInterface } from '../../interfaces/skills-Interface';
import { useTranslation } from 'react-i18next';

interface Props {
  jsonSkills: SkillsInterface[];
}

function CarouselSkills({ jsonSkills }: Props) {
  const { t } = useTranslation();
  function changelabel(el: React.MouseEvent<HTMLElement>) {
    const element = $(el.target).parent();
    element.addClass('animate-bounce');
    const name = element.attr('data-name')?.split('_');
    if (name)
      name[1] == 'L'
        ? $('#learningTitle').empty().append(t('lbl-learning'), ' - ', name[0])
        : $('#skillsTitle').empty().append(t('lbl-skills'), ' - ', name[0]);
  }
  function removeAnimation(el: React.MouseEvent<HTMLElement>) {
    const element = $(el.target).parent();
    element.removeClass('animate-bounce');
    const name = element.attr('data-name')?.split('_');
    if (name)
      name[1] == 'L'
        ? $('#learningTitle').empty().append(t('lbl-learning'))
        : $('#skillsTitle').empty().append(t('lbl-skills'));
  }

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      freeMode={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
        740: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
        1018: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1512: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="swiperSkills pt-6"
    >
      {jsonSkills.map((skill) => (
        <SwiperSlide
          key={skill.id}
          data-name={skill.name}
          onMouseEnter={changelabel}
          onMouseLeave={removeAnimation}
        >
          <ReactSVG src={skill.icon} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselSkills;
