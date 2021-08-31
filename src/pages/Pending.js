import React from 'react'
import {Container,Paper,Grid,Button,Typography} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"50px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}))
 const Pending = (props) => {
     const classes = useStyles();
    return (
        <Container>
            <Grid>
                <Grid item xs={10} mx-auto>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">summary</TableCell>
            <TableCell align="right">Priority</TableCell>
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right">Due By</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { (props.pendingArr) ? 
          (
            props.pendingArr.map((elem,index)=>{
            
              return(
                  <TableRow key={index} style={{backgroundColor:elem.completed ? "green":""}}>
                    <TableCell align="right">{elem.summary}</TableCell>
                  <TableCell align="right">{elem.priority}</TableCell>
                  <TableCell align="right">{new Date().toISOString().slice(0, 10)}</TableCell>
                  <TableCell align="right">{elem.date}</TableCell>
                  <TableCell align="right">
                    <Button><EditIcon/></Button> 
                    <Button variant="contained" color="primary" onClick={()=>props.oncompleted(index)}>{elem.completed? "Reopen" : "Done"}</Button> 
                    <Button onClick={()=>props.ondelete(elem.summary)}><DeleteIcon/></Button>
                    </TableCell>
               
                </TableRow>
               
              )
          })
          ) : (
          <TableRow>empty</TableRow>
          )
        }
          
        </TableBody>
      </Table>
    </TableContainer>
            
                </Grid>
            </Grid>
        </Container>
    )
}
export default Pending;