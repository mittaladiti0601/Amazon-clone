import React, { useEffect } from 'react'
import './Home.css'
import Product from './Product'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function Home() {
  useEffect(() => Slider(0), []);
  return (

    <div className='home'>
        <div className='home_container'>
        <div className='homeSliderContainer'>
          <div className='homeSlide'>
          <img className='home_image' src='https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg'
        alt=''
        />
          </div>
          <div className='homeSlide'>
          <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg'
        alt=''
        />
          </div>
          <div className='homeSlide'>
          <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg'
        alt=''
        />
          </div>
        </div>
        {/* <div className='image_btn_container'>
          <button class="slider_btn"><ArrowBackIosNewOutlinedIcon/></button>
          <button class="slider_btn"><ArrowForwardIosOutlinedIcon/></button>

        </div> */}

        <div className='home_row'>
            <Product 
            id = '1'
            title ='Samsung Galaxy Buds2 Pro, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (Graphite, with Mic)'
            price = {17950}
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51X0kXtlBCL._SX679_.jpg'
            rating={4}/>
            <Product
            id = '2'
            title ='RK ROYAL KLUDGE RK71 Gaming Keyboard, Triple Mode 2.4Ghz/BT5.1/USB-C Wireless Keyboard'
            price = {168}
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61nghmq8GPL._SL1500_.jpg'
            rating={5}/>
            <Product
            id = '2'
            title ='Omron HEM 7120 Fully Automatic Digital Blood Pressure Monitor With Intellisense Technology - Arm Circumference (22-32Cm)'
            price = {168}
            image='https://m.media-amazon.com/images/I/81eIfnfHiIL._SX522_.jpg'
            rating={4}/>
            <Product
            id = '2'
            title ='C & E HDMI cable – 4K HDMI cord (HDMI to HDMI cable @60Hz High Speed with Ethernet 10 ft Ultra'
            price = {168}
            image='https://m.media-amazon.com/images/I/41AMmPdoXfL._SY445_SX342_QL70_FMwebp_.jpg'
            rating={5}/>
        </div>

        <div className='home_row'>
            <Product
            id = '3'
            title ={'BODYCARE Women\'s Jacquard & Polycotton Non Padded Non-Wired Regular Bra (Pack of 3)'}
            price = {168}
            image='https://m.media-amazon.com/images/I/41AEqscXaAL.jpg'
            rating={4}/>
            <Product
            id = '4'
            title ='Green Soul Trigger Multipurpose Electric Height Adjustable Engineered Wood Table Desk, Ergonomic Spacious Sit-Stand Desk, Digital Display with Memory Preset Option- (62"X29"X46" | Black)'
            price = {168}
            image='https://m.media-amazon.com/images/I/51NCNCaLsjL._SX679_.jpg'
            rating={5}/>
            <Product
            id = '4'
            title ='FOVERA Gel Insoles Pair for Walking, Running, Sports, Formal & Safety Shoes-All Day Comfort Shoe Inserts with Dual Gel Technology-Made In India -Full Sole for Every Shoe (Male (Large),Pack of 1 Pair)'
            price = {168}
            image='https://m.media-amazon.com/images/I/81VUxsq2b-L._SX522_.jpg'
            rating={5}/>
        </div>

        <div className='home_row'>
            <Product
            id = '5'
            title ='kossto Premium Magnetic Back Brace Posture Corrector Therapy'
            price = {168}
            image='https://m.media-amazon.com/images/I/71W2yQJnDnL._SX522_.jpg'
            rating={5}/>

            <Product
            id = '5'
            title ='Zeiss Lens Cleaner for Glasses Camera Laptops Cellphones with Microfiber Cloth-30ml (1 Pack)'
            price = {168}
            image='https://m.media-amazon.com/images/I/6104i1MAFvS._SX679_.jpg'
            rating={4}/>

            <Product
            id = '5'
            title ='The perfect us by Durjoy Datta'
            price = {168}
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/815Hgt0wjeL.jpg'
            rating={5}/>

            <Product
            id = '5'
            title ='Manta Sleep Mask-100% Blackout Eye Mask-Zero Eye Pressure-Adjustable Eye Cups'
            price = {168}
            image='https://m.media-amazon.com/images/I/81j8r-5rdEL._SX679_.jpg'
            rating={5}/>

            <Product
            id = '5'
            title ='Mr IRONSTONE L Shaped Laminated Engineered Wood Finish Desk,Home Gaming Desk'
            price = {168}
            image='https://m.media-amazon.com/images/I/81ioD6WoCeL._SX679_.jpg'
            rating={5}/>
        </div>
        </div>
    </div>
  )
}



function Slider(Counter){
  const slides = document.querySelectorAll('.home_image');
  slides.forEach((slides, index) => {
    if (index !== Counter){
      slides.style.visibility = 'hidden';
      slides.classList.add(`image-${index}`);
    }
  });
  moveCarousel(Counter, slides, slides.length);
}

function moveCarousel(Counter, slides, len){
  if(slides){
    if(Counter >= len-1) Counter = 0;
    else Counter += 1;

    slides.forEach((slide, index) => {
      if(index === Counter){
        slide.style.visibility = `visible`;
      }
      else{
        slide.style.visibility = `hidden`;
      }
    });
  }
  setTimeout(() => {
    moveCarousel(Counter, slides, len);
  }, 3000);
}

export default Home;