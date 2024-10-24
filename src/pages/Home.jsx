import '../style.css'
import img1 from '../images/1.png'
import img2 from '../images/2.png'



import Carousel from 'react-bootstrap/Carousel';


const Home=()=>{
    return(
        <>

         <div>
         <Carousel>
      <Carousel.Item>
      <img src={img1} style={{height:"100%", width:"100%"}}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} style={{height:"100%", width:"100%"}}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
         </div>

        </>
    )
}


export default Home;