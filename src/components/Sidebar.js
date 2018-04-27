import React from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import {Link} from 'react-router-dom'

const Sidebar = (props) => (

    <Drawer
        docked={false}
        onRequestChange={props.drawerBtnClickHandler}
        open={props.isDrawerOpen}
    >

        <RaisedButton
            label="Close Menu"
            onClick={props.drawerBtnClickHandler}
        />

        <Link to={'/Hello/Magda'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                Hello
            </MenuItem>
        </Link>

        <Link to={'/mapping-array'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                MappingArray
            </MenuItem>
        </Link>

        <Link to={'/mapping-array-two'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                MappingArrayTwo
            </MenuItem>
        </Link>

        <Link to={'/counter-with-state'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                CounterWithState
            </MenuItem>
        </Link>

        <Link to={'/my-first-component'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                MyfirstComponent
            </MenuItem>
        </Link>

        <Link to={'/add-a'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                AddFirst </MenuItem>
        </Link>

        <Link to={'/add-b'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                AddSecond
            </MenuItem>
        </Link>

        <Link to={'/header'}>
            <MenuItem onClick={props.drawerBtnClickHandler}>
                header
            </MenuItem>
        </Link>

    </Drawer>

)

export default Sidebar