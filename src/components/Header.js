import React from 'react'
const styles = {
    color: 'red',
    display: 'inline',
    margin: 0
}
const Header = (props) => (

    <h1
    style = {styles}
    >
        {props.text}

    </h1>
)


export default Header