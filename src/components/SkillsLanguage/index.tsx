import { LanguageContainer } from "./styles";
import { register} from 'swiper/element-bundle'
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from "swiper/react";
import IconReact from '../../../public/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png'
import IconJs from '../../../public/icons8-js-96.png'
import IconHtml from '../../../public/icons8-html-144.png'
import IconTailwind from '../../../public/icons8-tailwind-css-100.png'
import IconBootstrap from '../../../public/bootstrap.svg'
import IconPhp from '../../../public/icons8-php-96.png'
import IconCss from '../../../public/icons8-css-144.png'
import { useState, useEffect} from 'react'

export function SkillsLanguage() {
  const [slidePerView, setSlidePerView] = useState(3)
  const data =[
    {id: '1', image: IconHtml},
    {id: '2', image: IconCss},
    {id: '3', image: IconJs},
    {id: '4', image: IconReact},
    {id: '5', image: IconBootstrap},
    {id: '5', image: IconTailwind},
    {id: '6', image: IconPhp},
  ]

  useEffect(() => {

    function handleResize(){
      if(window.innerWidth < 820){
        setSlidePerView(1)
      } else if(window.innerWidth < 1200) {
        setSlidePerView(3)
      }
      else {
        setSlidePerView(4)
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])

  return (
    <LanguageContainer>
     
      <div className="container">
        <h1>Minhas tecnologias</h1>
        <Swiper
              slidesPerView={slidePerView}
              navigation
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.image}
                    alt="Slider"
                    className="slide-item"
                      />
                  </SwiperSlide>
                ))}
              </Swiper>
      </div>
    </LanguageContainer>
  );
}