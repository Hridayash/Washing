export default function Button({children , ...props}){
    return <button className = "bg-blue-800 text-white rounded-md p-2 m-2  hover:text-blue-500 hover:bg-white hover:ease-out transition duration-300 ease-in-out" {...props}>{children}</button>
}