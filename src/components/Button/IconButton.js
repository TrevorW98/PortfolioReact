
import './btn.css'
const IconButton = (anything) => {
    return (
        <button className="buttonBG">
            <span id={anything.id} className={anything.className} onClick={anything.onClick}>
                {anything.value}
            </span>
        </button>
    )
}
export default IconButton;