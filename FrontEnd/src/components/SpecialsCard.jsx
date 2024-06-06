

export default function SpecialCard({title, icon }){
    return <div className="h-52 w-52 flex justify-center items-center flex-col gap-8 text-3xl text-white bg-blue-400 rounded-xl z-10 relative bottom-12 hover:text-blue-400 hover:bg-slate-200">
        {icon}
        <p>{title}</p>
    </div>
}