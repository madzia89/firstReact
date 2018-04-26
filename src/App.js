import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MyfirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import MappingArray from './components/MappingArray'
import MappingArrayTwo from './components/MappingArrayTwo'
import Header from './components/Header'
import CounterWithState from "./components/CounterWithState"
import Dashboard from "./components/Dashboard"

//poniższe propsy są przekazywane do "funkcji" którą tutaj importujemy
const App = () => (
    <div>


        <Router>
            <div>
                <Link to={'/'}>Home </Link>
                <Link to={'/mapping-array'}>MappingArray </Link>
                <Link to={'/mapping-array-two'}>MappingArrayTwo </Link>
                <Link to={'/counter-with-state'}>CounterWithState </Link>

                <hr/>
                <Route exact path={'/'} component={Dashboard}/>
                <Route path={'/mapping-array'} component={MappingArray}/>
                <Route path={'/mapping-array-two'} component={MappingArrayTwo}/>
                <Route path={'/counter-with-state'} component={CounterWithState}/>

            </div>
        </Router>
        <hr/>
        <MyfirstComponent name="SomeName"/>
        <Add numberA={5} numberB={10}/>
        <Add numberA={565} numberB={121}/>
        <Header text={"A Ala ma kota"} isRed={false}/>


    </div>

)
export default App
