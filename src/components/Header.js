import React from 'react'


const styles = {
    header: {
        display: 'inline',
        margin: 0
    }

}

//style poniżej sprawdzają czy dany header nie ma przypadkiem określonego header isRed = {false} jeżeli nie ma false wówczas bierze rzeczy z powyższej zmiennej styles i dodatkowo dodaje color red. Jeżeli ma false wówczas nie dodaje coloru red tylko bierze do stylów tylko rzeczy ze zmiennej style
const Header = (props) => (

    <h1 style={
            props.isRed ?
                {...styles.header, color: 'red'}
                : styles.header
    }
    >
        {props.text}
    </h1>
)


export default Header