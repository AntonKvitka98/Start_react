import React from 'react'

function FragmentDemo() {

    function clickHandle() {
        console.log('click done')
    }

    return(

        <React.Fragment>
            <h1> Fragment Demo</h1>
            <p>Example text</p>
        </React.Fragment>

    )

}
export default FragmentDemo