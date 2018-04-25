import React from 'react'
import Header from './Header'
//funkcja ta przyjmuje props
//w divie jest działane które pobiera propsy z addp.js i wstawia je w działania, efekt tego działania widzimy w app.js

//to można zapisać tak jak poniżej: const Add = (props) => (
const Add = ({numberA, numberB}) =>(
    <div>
        Suma {numberA} i {numberB} jest równa {numberA + numberB}
        <Header text= {numberA + numberB} />
    </div>
)
export default Add