import React from 'react'
import Header from './Header'
//funkcja ta przyjmuje props
//w divie jest działane które pobiera propsy z addp.js i wstawia je w działania, efekt tego działania widzimy w app.js

//to można zapisać tak jak poniżej: const Add = (props) => (
class Add extends React.Component {
   render() {
       return(
        <div>
            Suma {this.props.numberA} i {this.props.numberB} jest równa
            <Header text={this.props.numberA + this.props.numberB} isRed={true}/>
        </div>
       )
    }
}
export default Add