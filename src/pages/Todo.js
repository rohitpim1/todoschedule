import React from 'react'
import useStyles from '../styles/app';
import {Container,Typography,Box,Grid,TextField,FormControl} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Modal from '@material-ui/core/Modal';
 const Todo = (props) => {
    const classes = useStyles();
  return (
         <Container>
           <Grid>
             <Grid item xs={10}>
               <Box className={classes.rootup}>
                 <Box>
                 <Typography variant="h4">ToDo App</Typography>
                 </Box>
                 <Box>
                 <div>
      <button type="button" onClick={props.handleOpen}>
        <AddCircleIcon/>
      </button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {props.body}
      </Modal>
    </div>
                 </Box>
               </Box>
               <form className={classes.root} noValidate autoComplete="off">
             <Box>
             <Typography variant="h6">Order By</Typography>
             <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                
              >
                  <MenuItem value={0}>None</MenuItem>
                  <MenuItem value={10}>Low</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>High</MenuItem>
              </Select>
            </FormControl>
             </Box>
          <Box>
          <Typography variant="h6">Search</Typography>
           <TextField id="outlined-basic" label="search task" style={{width:"600px"}} variant="outlined" value={props.searchValue} onChange={(e)=>props.onchangesearchfilter(e)}/>
          </Box>
        
      </form>

      
             </Grid>
           </Grid>
         </Container>
        )
    
}
export default Todo;