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
    constructor() {
        super()
        console.log('counter component is created')
        this.state = {
            count: 0
        }
        this.funkcjaZmieniajacaStanButtonMinus = () => {
            this.setState({
                count: this.state.count - 1
            })
        }
        this.funkcjaZmieniajacaStanButtonPlus = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        console.log('counter is mounted')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    componentWillUpdate(){
        console.log('component will update')
    }
    componentDidUpdate(){
        console.log('component did update')
    }

    render() {
        console.log('rendering')
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