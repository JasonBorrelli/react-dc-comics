export default function Footer() {
    return (
        <footer>
            <div className="bg-zinc-800 flex justify-between p-5 items-center">
                <button className="text-white bg-transparent border border-blue-500 px-3 py-2 align-center ml-100">SIGN-UP NOW!</button>
                <div className="flex items-center gap-5 px-100 py-5">
                    <p className=" flex text-blue-500 text-lg font-bold bg-transparent px-3 py-2 align-center">FOLLOW US</p>
                    <ul className="flex space-between gap-5 justify-center align-center">
                        <img className="w-10 h-10" src="src/assets/img/footer-facebook.png" alt="" />
                        <img className="w-10 h-10" src="src/assets/img/footer-twitter.png" alt="" />
                        <img className="w-10 h-10" src="src/assets/img/footer-youtube.png" alt="" />
                        <img className="w-10 h-10" src="src/assets/img/footer-pinterest.png" alt="" />
                        <img className="w-10 h-10" src="src/assets/img/footer-periscope.png" alt="" />
                    </ul>
                </div>

            </div>
        </footer>
    )
}