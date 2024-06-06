import img from '../img/pressureWashing.jpeg'
export default function ServicesCard({note}){

    const imgStyle = {
        backgroundImage : `url(${img})`
    }

    return <div style ={imgStyle} className="bg-blue-500 h-[400px] w-[400px] flex items-center justify-center
     text-white  bg-cover overflow-hidden rounded-xl" >
        <h2 className="text-3xl">{note}</h2>
    </div>
}