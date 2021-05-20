
const IconButton = (anything) => {
    return (
        <span id={anything.id} className={anything.className} onClick={anything.onClick}>
            {anything.value}
        </span>
    )
}
export default IconButton;