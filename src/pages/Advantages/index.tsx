import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import Section from "@components/layout/Section";
import SliderItem from "@/pages/Advantages/components/SliderItem";

import LoyaltyImage from "@assets/images/advantages/Loyalty.png";
import ConsultationsImage from "@assets/images/advantages/Consultations.png";
import SpeedImage from "@assets/images/advantages/Speed.png";
import ApproachImage from "@assets/images/advantages/Approach.png";
import ExperienceImage from "@assets/images/advantages/Experience.png";
import IconRight from "@assets/images/advantages/icon-right.svg?react";
import IconLeft from "@assets/images/advantages/icon-left.svg?react";

import type { ISlide } from "@/interfaces/Slider/SliderItem.ts";

import "swiper/css";
import styles from "./styles/advantages.module.scss";

const SLIDERS_DATA: ISlide[] = [
  {
    id: 0,
    text: "Наличие довольных клиентов",
    image: LoyaltyImage,
    title: "Лояльность",
  },
  {
    id: 1,
    text: "Возможность получения консультаций по телефону и в мессенджерах",
    image: ConsultationsImage,
    title: "Живые консультации",
    isRightPlaced: true,
  },
  {
    id: 2,
    text: "Оперативное реагирование на заявки и выезд специалиста в удобное для клиента время",
    image: SpeedImage,
    title: "Скорость и удобство",
  },
  {
    id: 3,
    text: "Индивидуальный и профессиональный подход к каждому проекту",
    image: ApproachImage,
    title: "Гибкий подход",
    isRightPlaced: true,
  },
  {
    id: 4,
    text: "Выполнено более 1000 проектов",
    image: ExperienceImage,
    title: "Проектный опыт",
  },
  {
    id: 5,
    text: "Наличие довольных клиентов",
    image: LoyaltyImage,
    title: "Лояльность",
  },
  {
    id: 6,
    text: "Возможность получения консультаций по телефону и в мессенджерах",
    image: ConsultationsImage,
    title: "Живые консультации",
    isRightPlaced: true,
  },
  {
    id: 7,
    text: "Оперативное реагирование на заявки и выезд специалиста в удобное для клиента время",
    image: SpeedImage,
    title: "Скорость и удобство",
  },
  {
    id: 8,
    text: "Индивидуальный и профессиональный подход к каждому проекту",
    image: ApproachImage,
    title: "Гибкий подход",
    isRightPlaced: true,
  },
  {
    id: 9,
    text: "Выполнено более 1000 проектов",
    image: ExperienceImage,
    title: "Проектный опыт",
  },
];

const Advantages = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return index < 5 ? '<div class="' + className + '">' + "</div>" : "";
    },
  };

  return (
    <Section
      classNameSection={styles.advantages}
      classNameInner={styles.advantages__inner}
      title="Преимущества"
      hasBlur={false}
      hasBorder={false}
    >
      <Swiper
        className={styles.advantages__swiper}
        effect="coverflow"
        slidesPerView={5}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 100,
          modifier: 2.7,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Navigation, Pagination]}
        centeredSlides
        loop
      >
        {SLIDERS_DATA.map((item) => (
          <SwiperSlide>
            <SliderItem key={item.id} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={clsx(
          styles.advantages__button,
          styles.advantages__buttonPrev,
          "swiper-button-prev",
        )}
      >
        <IconLeft />
      </button>
      <button
        className={clsx(
          styles.advantages__button,
          styles.advantages__buttonNext,
          "swiper-button-next",
        )}
      >
        <IconRight />
      </button>
    </Section>
  );
};

export default Advantages;
