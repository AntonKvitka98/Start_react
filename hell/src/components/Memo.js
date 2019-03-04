import React from 'react'

function Memo({name}) {
    console.log('click done')

    return(
        <div>
            {name * 2}
        </div>
    )

}
export default React.memo(Memo)