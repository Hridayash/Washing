import Button from "./button";

export default function ContactUs(){
        const inputStyle = "rounded-md h-8 p-4 w-[90%]";

    return<div className="bg-blue-400 flex items-center justify-center my-8 py-8 w-1/3 mx-[35%] rounded-xl"> 
    <form className="flex flex-col gap-4 w-full items-center">
        <h2 className="text-white">Inquire for a Quote</h2>
        <p className="text-white">We will reach out to you at our earliest convenience</p>
        <input type="text"  placeholder="Name" className={inputStyle} required/>
        <input type="phone" placeholder="Number" className={inputStyle}required />
        <input type = "email" placeholder="Email" className={inputStyle} required/>
        <textarea placeholder="Message"  className={inputStyle + "resize-none h-40 box-border w-[90%]"} required/>
        <Button>Send Message</Button>
    </form>
    </div>
}