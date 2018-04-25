import React from 'react'

const MyFirstComponent = (props) => {
    console.log(props.name)
    return <div> Hello {props.name}!</div>
}

export default MyFirstComponent