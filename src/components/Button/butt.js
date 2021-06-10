

const butt =(anything) =>{
    const handleClickEvent = () => anything.onClick(anything.number)
    return (
        <button  className={anything.className} variant="dark" onClick={handleClickEvent}>
            {anything.number}
        </button>
    )
}

export default butt;