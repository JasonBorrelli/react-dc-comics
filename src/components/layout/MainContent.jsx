import ProductList from "../section/ProductList.jsx";
import Panel from "./ui/Panel.jsx";

export default function MainContent() {
    return (
        <main>

            <div className="relative bg-[oklch(0.23_0_0)] text-white text-center pt-12 pb-8">



                <Panel />
                <div className="container mx-auto px-4 relative">
                    <span className="absolute bottom-0 translate-y-1/2 left-4 z-10 bg-[#0282f9] text-white font-extrabold text-sm md:text-xl uppercase px-5 py-2.5 shadow-md select-none tracking-wider">
                        CURRENT SERIES
                    </span>
                </div>
                <ProductList />

                <button className="bg-[#0282f9] hover:bg-blue-600 transition-colors text-white font-bold uppercase px-12 py-2.5 my-6 cursor-pointer">
                    LOAD MORE
                </button>
            </div>
        </main>
    );
}