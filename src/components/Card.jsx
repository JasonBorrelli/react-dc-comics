export default function Card(props) {
    return (
        <div className="flex flex-col items-center ">
            <img src={props.thumb} alt={props.title} className="w-40 h-60 object-cover hover:cursor-pointer hover:opacity-80 hover:transition-opacity" onClick={props.onImageClick} />
            <h3 className="mt-2 text-xs uppercase font-bold text-white line-clamp-2">{props.title}</h3>


        </div>

    )
}