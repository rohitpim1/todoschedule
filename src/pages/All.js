import React from 'react'
import {Container,Paper,Grid,Button} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Edit from './Edit';
import View from './View';
import useStyles from '../styles/app';

const All = (props) => {
  const classes = useStyles();
 
     return (
        <Container>
            <Grid>
                <Grid item xs={10} mx-auto>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="right" onClick={()=>{props.sortsummary()}} onDoubleClick={()=>{props.dbsortsummary()}} style={{cursor:"pointer"}}>summary</TableCell>
            <TableCell align="right" onClick={()=>{props.sortpriority()}} onDoubleClick={()=>{props.dbsortpriority()}} style={{cursor:"pointer"}}>Priority</TableCell>
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right" onClick={()=>{props.sortdate()}} onDoubleClick={()=>{props.dbsortdate()}} style={{cursor:"pointer"}}>Due By</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        {
           (props.arr)? 
           (
            props.arr.map((elem,index)=>{
            
              return(
                  
                  <TableRow key={index}  style={{backgroundColor:elem.completed ? "green":"",cursor:"pointer"}}>
                  <TableCell align="right" onClick={()=>props.handleviewOpen(elem)} style={{cursor:"pointer"}}>{elem.summary}</TableCell>
                                      <Modal
                                     open={props.viewopen}
                                     onClose={props.handleviewClose}
                                     aria-labelledby="simple-modal-title"
                                     aria-describedby="simple-modal-description"
                                     >
                                    <View 
                                    elem={elem} 
                                    index={index} 
                                    viewvalue={props.viewvalue}
                                    onchangesummary={props.onchangesummary} 
                                    onchangedescription={props.onchangedescription} 
                                    onchangedate={props.onchangedate} 
                                    onchangepriority={props.onchangepriority} 
                                    handleviewClose={props.handleviewClose}
                                    />
                                    </Modal>
                  
                  
                  <TableCell align="right">{elem.priority}</TableCell>
                  <TableCell align="right">{new Date().toISOString().slice(0, 10)}</TableCell>
                  <TableCell align="right">{elem.date}</TableCell>
                  <TableCell align="right">
                  <Button onClick={()=>props.handleeditOpen(elem)} style={{marginLeft:"20px"}}><EditIcon/></Button> 
                                     <Modal
                                     open={props.editopen}
                                     onClose={props.handleeditClose}
                                     aria-labelledby="simple-modal-title"
                                     aria-describedby="simple-modal-description"
                                     >
                                    <Edit 
                                    elem={elem} 
                                    index={index} 
                                    editvalue={props.editvalue}
                                    onchangesummary={props.onchangesummary} 
                                    onchangedescription={props.onchangedescription} 
                                    onchangedate={props.onchangedate} 
                                    onchangepriority={props.onchangepriority} 
                                    handleeditClose={props.handleeditClose}
                                    onedit={props.onedit}
                                    />
                                    </Modal>

                    <Button variant="contained" color="primary" onClick={()=>props.oncompleted(index)} style={{marginLeft:"20px"}}>{elem.completed? "Reopen" : "Done"}</Button> 
                    <Button onClick={()=>props.ondelete(elem.summary)}><DeleteIcon/></Button>
                    </TableCell>
               
                </TableRow>
               
              )
          })): (
            <TableRow>please add some task</TableRow>
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
export default All;