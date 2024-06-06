import pic from "../img/pressureWashing.jpeg"

export default function AboutUs(){
    return <div className="bg-blue-400 text-white flex justify-center items-center gap-16 w-[70%] mx-[15%]">
        <img src={pic} alt="" className="w-[30%]"/>
        <article>
        <h1>About Us</h1>
        <p>Welcome to One touch Pressure washing, 
        your trusted partner for professional pressure washing services. 
        With a commitment to excellence and a passion for enhancing the beauty 
        and longevity of your property, we take pride in being a leading name in the
         pressure washing industry. </p>
        <h1>Our Mission</h1>
        <p>At One touch Pressure washing , our mission is simple yet impactful : to deliver top-notch pressure 
        washing solutions that not only meet but exceed our clients' expectations. We believe in the transformative 
        power of a clean exterior, and our dedicated team works tirelessly to rejuvenate your surfaces, leaving them looking brand new.</p>
        </article>
    </div>
}