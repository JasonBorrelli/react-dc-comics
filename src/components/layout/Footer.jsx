export default function Footer() {
    // Array con i dati delle icone social per rendere il codice più pulito e modulare
    const socialLinks = [
        { name: "Facebook", src: "src/assets/img/footer-facebook.png", url: "#" },
        { name: "Twitter", src: "src/assets/img/footer-twitter.png", url: "#" },
        { name: "YouTube", src: "src/assets/img/footer-youtube.png", url: "#" },
        { name: "Pinterest", src: "src/assets/img/footer-pinterest.png", url: "#" },
        { name: "Periscope", src: "src/assets/img/footer-periscope.png", url: "#" },
    ];

    return (
        <footer className="w-full bg-zinc-800">
            {/* Contenitore responsive: colonna su mobile, riga da desktop (md:) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Pulsante SIGN-UP */}
                <button
                    type="button"
                    className="border-2 border-blue-500 text-white font-bold uppercase text-sm px-6 py-2.5 
                     hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
                >
                    Sign-up Now!
                </button>

                {/* Sezione Social */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <span className="text-blue-500 font-extrabold uppercase text-base sm:text-lg tracking-wider">
                        Follow Us
                    </span>

                    {/* Rendering dinamico con .map() */}
                    <ul className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                        {socialLinks.map((social) => (
                            <li key={social.name}>
                                <a
                                    href={social.url}
                                    aria-label={social.name}
                                    className="inline-block transition-transform duration-200 hover:scale-120 active:scale-95"
                                >
                                    <img
                                        src={social.src}
                                        alt={social.name}
                                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                                        loading="lazy"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    );
}