import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MyfirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import MappingArray from './components/MappingArray'
import MappingArrayTwo from './components/MappingArrayTwo'
import Header from './components/Header'
import CounterWithState from "./components/CounterWithState"
import Dashboard from "./components/Dashboard"

//exact
const App = () => (
    <div>
        <Router>
            <div>
                <Link to={'/'}>Home </Link>
                <Link to={'/mapping-array'}>MappingArray </Link>
                <Link to={'/mapping-array-two'}>MappingArrayTwo </Link>
                <Link to={'/counter-with-state'}>CounterWithState </Link>
                <Link to={'/my-first-component'}>MyfirstComponent </Link>
                <Link to={'/add-a'}>AddFirst </Link>
                <Link to={'/add-b'}>AddSecond </Link>
                <Link to={'/header'}>header </Link>

                <hr/>
                <Route exact path={'/'} component={Dashboard}/>
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
export default App
