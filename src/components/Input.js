import '../App.css'
export default function Input({ inputValue, setInputValue }) {
    const onChange = (e) => {
        const value = e.currentTarget.value
        setInputValue(value)
    }
    return (
        <input value={inputValue} onChange={onChange} className="inp" type="text" />
    )
}