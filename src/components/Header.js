import React from 'react'

const Header = (props) => (

    <h1
    style = {{
        color: 'red',
        display: 'inline',
        margin: 0
    }}
    >
        {props.text}

    </h1>
)


export default Header