import Logo from "./ui/Logo.jsx"


export default function Header() {
    return (
        <header>
            <div className="flex justify-between container mx-auto mt-5">
                <Logo />
                <ul className="flex space-between gap-5 bg white text-black p-8 uppercase font-bold text-xs pl-50">

                    <a href="#">Characters</a>
                    <a href="#">Comics</a>
                    <a href="#">Movies</a>
                    <a href="#">TV</a>
                    <a href="#">Games</a>
                    <a href="#">Collectibles</a>
                    <a href="#">Videos</a>
                    <a href="#">Fans</a>
                    <a href="#">News</a>
                    <a href="#">Shop</a>
                </ul>
            </div>
        </header>
    )
}
