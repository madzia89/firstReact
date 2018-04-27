import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MyfirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import MappingArray from './components/MappingArray'
import MappingArrayTwo from './components/MappingArrayTwo'
import Header from './components/Header'
import CounterWithState from './components/CounterWithState'
import Dashboard from "./components/Dashboard"
import Hello from './components/Hello'
import AppBar from 'material-ui/AppBar'
import Sidebar from './components/Sidebar'

//exact
class App extends React.Component {
    state = {
        isDrawerOpen: false

    }
    drawerBtnClickHandler = () => this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
    })

    render() {
        return (
            <div>
                <AppBar
                    title="Home"
                    onLeftIconButtonClick={this.drawerBtnClickHandler}
                />
                <Router>
                    <div>
                        <Sidebar
                            isDrawerOpen={this.state.isDrawerOpen}
                            drawerBtnClickHandler={this.drawerBtnClickHandler}
                        />

                        <Route exact path={'/'} component={Dashboard}/>
                        <Route path={'/hello/:name'} component={Hello}/>
                        <Route path={'/mapping-array'} component={MappingArray}/>
                        <Route path={'/mapping-array-two'} component={MappingArrayTwo}/>
                        <Route path={'/counter-with-state'} component={CounterWithState}/>
                        <Route path={'/my-first-component'} render={() => (
                            <MyfirstComponent name="SomeName"/>
                        )}/>
                        <Route path={'/add-a'} render={() => (
                            <Add numberA={5} numberB={10}/>
                        )}/>
                        <Route path={'/add-b'} render={() => (
                            <Add numberA={565} numberB={121}/>
                        )}/>
                        <Route path={'/header'} render={() => (
                            <Header text={"A Ala ma kota"} isRed={false}/>
                        )}/>

                    </div>
                </Router>
            </div>
        )
    }
}

export default App
