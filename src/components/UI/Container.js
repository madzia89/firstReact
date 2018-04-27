import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
    paper: {
        margin: '10px',
        padding: '10px'
    }
}

const Container = (props) =>(
    <Paper style ={styles.paper}>
        {props.children}
    </Paper>
)

export default Container