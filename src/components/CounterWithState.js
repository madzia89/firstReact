import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

// {/*count jests nazwą właściwości, count równa się zero bo od tej liczby zaczynamy odliczanie
//
// Component się zmieni zawsze gdy zmieni się stan dlatego stan nie może ybć zmieniany bezpośrednio
// this.setState zostanie połączone ze state = {count: ...}
// Funkcje tutaj są właściwościami component i dzięki temu że są zapisane nad renderem, nie są wywołaywane z każdym renderem
// */
// }

const styles = {
    btn: {
        margin: "10px"
    }
}
class CounterWithState extends React.Component {
    state = {
        count: 0

    }
    funkcjaZmieniajacaStanButtonMinus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    funkcjaZmieniajacaStanButtonPlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <RaisedButton
                        label={"-"}
                        primary={true}
                        onClick={this.funkcjaZmieniajacaStanButtonMinus}
                        style={styles.btn}
                    />
                    <RaisedButton
                        label={"+"}
                        secondary={true}
                        onClick={this.funkcjaZmieniajacaStanButtonPlus}
                        style={styles.btn}
                    />
                </div>
            </div>
        )
    }

}

export default CounterWithState