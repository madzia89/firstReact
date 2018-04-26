import React from 'react'
import MyfirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import MappingArray from './components/MappingArray'
import MappingArrayTwo from './components/MappingArrayTwo'
import Header from './components/Header'
import CounterWithState from "./components/CounterWithState"

//poniższe propsy są przekazywane do "funkcji" którą tutaj importujemy
const App = () => (
    <div>
        <MyfirstComponent name="SomeName"/>
        <Add numberA={5} numberB={10}/>
        <Add numberA={565} numberB={121}/>
        <Header text={"A Ala ma kota"} isRed={false}/>
        <hr/>
        <MappingArray/>
        <hr/>
        <MappingArrayTwo/>
        <hr/>
        <CounterWithState/>
    </div>

)
export default App
