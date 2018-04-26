import React from 'react'

const Hello = (props) => {
    return <div> Hello {props.match.params.name}!</div>
}

export default Hello