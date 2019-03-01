import React from 'react'

function FunctionClick() {

    function clickHandle() {
        console.log('click done')
    }

    return(
        <div>
           <button onClick={clickHandle}>Click</button>
        </div>
    )

}
export default FunctionClick