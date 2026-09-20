import Logo from "./ui/Logo.jsx";

export default function Header() {
    return (
        <header>
            <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto mt-5 mb-5 px-4">
                <Logo />
                <ul className="flex flex-wrap justify-center lg:justify-end gap-5 bg-white text-black p-4 lg:p-8 uppercase font-bold text-xs">
                    <span className="hover:text-blue-500">Characters</span>
                    <span className="hover:text-blue-500">Comics</span>
                    <span className="hover:text-blue-500">Movies</span>
                    <span className="hover:text-blue-500">TV</span>
                    <span className="hover:text-blue-500">Games</span>
                    <span className="hover:text-blue-500">Collectibles</span>
                    <span className="hover:text-blue-500">Videos</span>
                    <span className="hover:text-blue-500">Fans</span>
                    <span className="hover:text-blue-500">News</span>
                    <span className="hover:text-blue-500">Shop</span>
                </ul>
            </div>
        </header>
    );
}