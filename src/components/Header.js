import React from 'react'


const styles = {
    header:{
    color: 'red',
    display: 'inline',
    margin: 0
    }
}
const Header = (props) => (

    <h1
    style = {styles.header}
    >
        {props.text}

    </h1>
)


export default Header