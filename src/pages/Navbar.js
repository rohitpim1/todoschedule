import React from 'react'
import {NavLink} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Box} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    nav:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
      },
      list:{
          listStyle:"none"
      }
}))
const Navbar = () => {
    const classes = useStyles();
    return (
        <Box mt={3}>
  <ul className={classes.nav}>
    <li className={classes.list}><NavLink to="/All" style={{textDecoration:"none", color:'black'}}>All</NavLink></li>
    <li className={classes.list}><NavLink to="/Pending" style={{textDecoration:"none", color:'black'}}>Pending</NavLink></li>
    <li className={classes.list}><NavLink to="/Completed" style={{textDecoration:"none", color:'black'}}>Completed</NavLink></li>
</ul>
</Box>
    )
}

export default Navbar
