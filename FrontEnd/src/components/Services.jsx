import ServicesCard from "./servicesCard.jsx";



export default function Services(){
    return<div className= "w-full ">
        <h2 className="text-blue-400 text-5xl text-center ">Our Services</h2>
        <div className="grid grid-cols-3 gap-16 justify-items-center justify-content-center mt-8">
        <ServicesCard note = "Some Washing"/>
        <ServicesCard note = "House washing "/>
        <ServicesCard note = "Driveway Washing"/>
        <ServicesCard note = "Patio washing"/>
        <ServicesCard note = "Pool Washing"/>
        <ServicesCard note = "Everything Washing"/>
        </div>

    </div>
}