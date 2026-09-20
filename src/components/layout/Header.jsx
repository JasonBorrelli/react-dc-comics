import Logo from "./ui/Logo.jsx"


export default function Header() {
    return (
        <header>
            <div className="flex justify-between container mx-auto mt-5 mb-5">
                <Logo />
                <ul className="flex space-between gap-5 bg white text-black p-8 uppercase font-bold text-xs pl-50">

                    <a href="#" className="hover:text-blue-500 cursor-pointer">Characters</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Comics</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Movies</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">TV</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Games</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Collectibles</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Videos</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Fans</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">News</a>
                    <a href="#" className="hover:text-blue-500 cursor-pointer">Shop</a>
                </ul>
            </div>
        </header>
    )
}
