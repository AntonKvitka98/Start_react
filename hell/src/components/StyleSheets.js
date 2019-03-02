import React from 'react'
import './MyStyle.css'

function StyleSheets(props) {
    let className = props.primary ? 'primary' : ''


    return(
        <div>
            <h2 className={'${className} font-xl'}>STYLE  sheets</h2>

        </div>
    )

}
export default StyleSheets