import React from 'react'

function ButtonLink(props){
    return (
    <a className='ButtonLink' href='{props.href}'>{props.children}</a>
    )
}

export default ButtonLink