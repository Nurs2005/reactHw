import '../App.css'

export default function Button({inputValue}) {
    return (
        <button onClick={()=> console.log(inputValue)} className="btn"></button>
    )
}