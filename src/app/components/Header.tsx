import Link from "next/link"

function Header(){
    return(
        <div className="bg-pink-500 w-full h-[80px] flex justify-center item-cente border-b-2">
            <div className="w-[80%] h-full flex sm:flex-col md:flex-row justify-between items-center item-center">
                {/* left side */}
            <div>
               {/* llogo */}   
            <h1 className="text-3xl font-bold"> <b> TOY SHOP </b></h1>
        </div>
        {/* right side */}
        
        <div>
        <ul className="flex gap-x-5 mr-4 ">
        <li>
        <Link className="hover:underline" href={"/"}><b><u>Home</u></b></Link>
        </li>
        <li>
        <Link className="hover:underline" href={"/"}><b><u>about</u></b></Link>
        </li>
        <li>
        <Link  className="hover:underline" href={"/"}><b><u>Contact</u></b></Link>
        </li>
        <li>
        <Link className="hover:underline" href={"/"}><b><u>sign up</u></b></Link>
        </li>

        </ul>
        </div>
        </div>

      
            <ul>
                <li>

                </li>
            </ul>
        </div>
    )
}

export default Header;