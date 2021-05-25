import { Button } from "bootstrap"

const regBtn = (anythingElse) =>{
    return(
        <Button variant="primary" onClick={anythingElse.onCLick}>{anythingElse.message}</Button>
    )
}

export default regBtn;