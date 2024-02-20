import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { render } from "react-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-cards';

import './styles.css';
import CreditCard from "./credit-card"


export interface CardSliderProps
 {
  cardList?: boolean
}

function CardSlider() {
    return (
        <>
        <Swiper
          effect={'cards'}
          cardsEffect={{
            perSlideRotate:0,
            perSlideOffset:5,

          }}
          creativeEffect={{
            shadowPerProgress:false,
            perspective: false,
            prev:{translate: [0,0,200]},
            next:{
                opacity:0.7,
                scale: 0.5,
                shadow:true,
                origin: 'right bottom'
            },


          }}
          grabCursor={false}
          modules={[EffectCards]}
          className="mySwiper"
        >
            
          <SwiperSlide >
            <CreditCard backGroundColor="#ff0000"  cvv2="2345" userNamme="جناب آقا باسره کسمایی" cardName=" 1 کارت خرید بانک ملی ایران"  expireMonth="10" expireYear="1402" cardNumber="" />
          </SwiperSlide>

          <SwiperSlide >
            <CreditCard backGroundColor="#ff1111"  cvv2="2345" userNamme="جناب آقای سید عرفان احمدی سادات ابراهیم نژاد" cardName="کارت خرید بانک ملی ایران 2"  expireMonth="10" expireYear="1402" cardNumber="" />
          </SwiperSlide>

          <SwiperSlide >
            <CreditCard backGroundColor="#ff1111"  cvv2="2345" userNamme="جناب آقای سید عرفان احمدی سادات ابراهیم نژاد" cardName="3 کارت خرید بانک ملی ایران"  expireMonth="10" expireYear="1402" cardNumber="" />
          </SwiperSlide>

          <SwiperSlide >
            <CreditCard backGroundColor="#ff1111"  cvv2="2345" userNamme="جناب آقای سید عرفان احمدی سادات ابراهیم نژاد" cardName="4 کارت خرید بانک ملی ایران"  expireMonth="10" expireYear="1402" cardNumber="" />
          </SwiperSlide>

        </Swiper>
      </>
)
}
CardSlider.displayName = "CardSlider"

export default CardSlider;