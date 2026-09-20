export default function Card(props) {
    return (
        <div className="flex flex-col items-center ">
            <img src={props.thumb} alt={props.title} className="w-40 h-60 object-cover" />
            <h3>{props.title}</h3>
            <p>{props.price}</p>

        </div>

    )
}