import hero from '../img/hero.jpeg'
import Button from './button';

export default function Hero(){
    const heroImg = {
        backgroundImage : `url(${hero})`,
        }
        const overlayStyle = {
            position: 'absolute',
            top: 0,
            left:0,
            right:0,
            bottom:0,
            backgroundColor: 'rgba(16, 108, 189, 0.7)'
          };
    return <div style={heroImg} className="flex justify-center items-center bg-blue-500 h-[600px] bg-cover bg-no-repeat text-white relative">

        <div className="flex flex-col justify-center items-center gap-8" style = {overlayStyle}> 
            <h2 className="text-6xl font-semibold">Transforming Homes with Expert Pressure Washing</h2>
            <p className="text-2xl">Revitalize your space with our professional services. We bring out the beauty in every surface.</p>
            <Button>Get A Quote</Button>
        </div>
    </div>
}