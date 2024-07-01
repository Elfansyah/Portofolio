import Menu from "./menu"
import images from "../assets/chatgpt.png"
import navTiga from "./script"

function NavBar() {
    return (
        <nav className="bg-[#344c36] flex justify-between h-20 m-auto sticky top-5 border-2 border-gray rounded-full mt-5 mr-16 ml-16">
            <div>
                <h3 class="text-white font-bold absolute top-7 left-24 sm:text=xl">Elfansyah</h3>
                <p className="w-12 h-12 bg-[#faad1b] rounded-full flex absolute top-4 left-8"><span className="font-bold text-3xl text m-auto font-mono">E</span></p>
            </div>
            <div className="font-medium text-lg flex absolute top-7 left-1/2 -translate-x-1/2 gap-10">
                <Menu>Home</Menu>
                <Menu>Profile</Menu>
                <Menu>Portofolio</Menu>
                <Menu>Contact</Menu>
            </div>
            <div>
            <a href='#' className='flex text-base font-semibold text-black bg-white py-2 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out absolute top-5 right-7'>Contact</a>  
            </div>    
        </nav>
    )
}

export default NavBar