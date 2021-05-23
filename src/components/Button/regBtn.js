import { Button } from "bootstrap"

const regBtn = (anythingElse) =>{
    return(
        <Button variant="primary" onClick={anythingElse.onCLick}></Button>
    )
}

export default regBtn;