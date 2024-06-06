import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    const footerContatctStyle = "flex  items-center gap-4"
    const footerH1 = "text-xl font-bold"

    return <footer className="flex justify-around items-center bg-blue-400 mt-16 p-16 text-white">
        <div className="flex flex-col gap-4">
            <h1 className={footerH1}>Get in Touch</h1>
            <div className={footerContatctStyle}>
                <FaPhoneAlt/>
                <p>+1 900 000 0000</p>
            </div>
            <div className={footerContatctStyle}>
                <MdEmail/>
                <p>Omar@hafid.com</p>
            </div>
            <div className={footerContatctStyle}>
                <FaLocationDot/>
                <p>69 ShorKing Stree, Toronto</p>
            </div>
        </div>



        <div className="flex flex-col w-1/3">
            <h1 className={footerH1}>About Us</h1>
            <p>Welcome to One touch Pressure washing, your trusted partner for professional 
                pressure washing services. With a commitment to excellence and a passion for
                 enhancing the beauty and longevity of 
                your property, we take pride in being a leading name in the pressure washing industry.</p>
        </div>

        <div>
            <h1 className={footerH1}>Services</h1>
            <ul>
                <li>Some Thhing</li>
                <li>Some Thhing</li>
                <li>Some Thhing</li>
                <li>Some Thhing</li>
                <li>Some Thhing</li>
            </ul>
        </div>
        
    </footer>
}