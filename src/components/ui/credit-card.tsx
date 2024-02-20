import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';
import { Card, CardContent } from "./card";

import { nationlCodeValidator } from 'react-vite-saber-utils-library-test'

export interface CreditCardProps
 {
  backGroundColor: string,
  cardNumber: string,
  expireMonth: string,
  expireYear: string,
  cvv2?: string,
  cardName: string,
  userNamme: string,
}

function CreditCard({backGroundColor , cvv2, userNamme ,cardName, expireMonth,expireYear,cardNumber} : CreditCardProps) {

  console.log( nationlCodeValidator('0016242351'))
  console.log( nationlCodeValidator('1111111111'))

    return (
        <Card className="w-full aspect-video bg-red relative">
          <div style={{backgroundColor: backGroundColor}} className={`w-full h-full object-full rounded-xl absolute`}/>
          <div className="absolute p-3 flex flex-col h-full w-full">
            <p className="w-full h-3/5 flex items-start justify-end p-2 font-black text-xl">
              {cardName}
            </p>
            <div className="w-full h-2/4">
              <div className="w-full flex flex-row justify-between">
                <div className="flex items-center"> 
                  <img src="ic-calender.svg" className="px-1"/>
                  <p>{`${expireYear}/${expireMonth}`}</p>
                </div>
                <p className="font-medium text-xs pl-3">{userNamme}</p>
              </div>
              <p className="mt-2 text-left pl-2 pt-1 ont-black text-xl">{cardNumber}</p>
              
            </div>
          </div>
           
       </Card>
      
)
}
CreditCard.displayName = "CardSlider"

export default CreditCard;