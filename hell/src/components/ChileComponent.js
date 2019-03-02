import React from 'react'

function ChileComponent(props) {

    return(
        <div>
            <button onClick={() => props.greetHandler('child')}>Click Parent</button>
        </div>
    )

}
export default ChileComponent