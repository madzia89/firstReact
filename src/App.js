import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MyfirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import MappingArray from './components/MappingArray'
import MappingArrayTwo from './components/MappingArrayTwo'
import Header from './components/Header'
import CounterWithState from './components/CounterWithState'
import Dashboard from "./components/Dashboard"
import Hello from './components/Hello'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'

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

                        <Drawer
                            docked={false}
                            onRequestChange={this.drawerBtnClickHandler}
                            open={this.state.isDrawerOpen}
                        >
                            <RaisedButton
                                label="Close Menu"
                                onClick={this.drawerBtnClickHandler}
                            />

                            <Link to={'/Hello/Magda'}><MenuItem>Hello </MenuItem></Link>
                            <Link to={'/mapping-array'}><MenuItem>MappingArray </MenuItem></Link>
                            <Link to={'/mapping-array-two'}><MenuItem>MappingArrayTwo </MenuItem></Link>
                            <Link to={'/counter-with-state'}><MenuItem>CounterWithState </MenuItem></Link>
                            <Link to={'/my-first-component'}><MenuItem>MyfirstComponent </MenuItem></Link>
                            <Link to={'/add-a'}><MenuItem>AddFirst </MenuItem></Link>
                            <Link to={'/add-b'}><MenuItem>AddSecond </MenuItem></Link>
                            <Link to={'/header'}><MenuItem>header </MenuItem></Link>
                        </Drawer>


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
