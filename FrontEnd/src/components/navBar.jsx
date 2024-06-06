import logo from '../img/logo.png'


export default function NavBar(){
    return <nav className = "flex justify-between items-center px-4 text-blue-400 bg-white h-14">
        <img src={logo} alt="logImg"  className="h-12 mix-blend-multiply"/>
        <ul className=" flex justify-center items-center gap-8 text-l cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Contact Us</li>
        </ul>

        <h1 className ="cursor-pointer">+1 900 0000 000</h1>
        
    </nav>
}