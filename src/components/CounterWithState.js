import React from 'react'

{/*count jests nazwą właściwości, count równa się zero bo od tej liczby zaczynamy odliczanie

Component się zmieni zawsze gdy zmieni się stan dlatego stan nie może ybć zmieniany bezpośrednio
this.setState zostanie połączone ze state = {count: ...}*/
}

class CounterWithState extends React.Component {
    state = {
        count: 0

    }

    render() {
        const funkcjaZmieniajacaStanButtonMinus = () => {
            this.setState({
                count: this.state.count -1
            })

        }
        const funkcjaZmieniajacaStanButtonPlus = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={funkcjaZmieniajacaStanButtonMinus}> -</button>
                    <button onClick={funkcjaZmieniajacaStanButtonPlus}> +</button>
                </div>
            </div>
        )
    }

}

export default CounterWithState