import SpecialCard from "./SpecialsCard";

import { AiFillLike } from "react-icons/ai";
import { TbPigMoney } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";




export default function Specials(){
   return <div className="flex justify-centre items-center gap-16 mx-96">
    <SpecialCard icon = {<AiFillLike/>} title="Best Work"/>
    <SpecialCard icon = {<TbPigMoney/>} title="Best Price"/>
    <SpecialCard icon = {<FaClock/>} title="24/7 Service"/>
   </div>
}