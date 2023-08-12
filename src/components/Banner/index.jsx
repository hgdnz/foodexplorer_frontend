import { ImgBanner } from './styles'
import svgBanner from '../../assets/banner.svg';


export function Banner(){
  return (
    <ImgBanner>
     <img src={svgBanner} alt="banner mix de doces" />
    </ImgBanner>    
    )
}