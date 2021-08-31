import React,{useState} from 'react'
import {Button,Box,TextField,Divider,Typography} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from '../styles/app';
const Edit = (props) =>{
const {summary,description,date,priority} = props.editvalue;
    const classes = useStyles();

    const [modalStyle] = useState();

    return(
            <Box style={modalStyle} className={classes.paper}>
              <Typography variant="h6" p={3}>Edit Task</Typography>
              <Divider />
          
              <form noValidate autoComplete="off">
              <Box mt={3}>
              <TextField
                required
                id="standard-multiline-flexible"
                label="Summary"
                placeholder="Summary"
                variant="outlined"
                defaultValue={summary}
                onChange={(e) =>props.onchangesummary(e)}
                style={{width:"600px"}}
                inputProps={{ maxLength: 140 }}
          
              />
              </Box>
          
              <Box mt={3} >
              <TextField
              required
                id="standard-multiline-flexible"
                label="Description"
                placeholder="Description"
                variant="outlined"
                onChange={(e) =>props.onchangedescription(e)}
                defaultValue={description}
                multiline
                maxRows={6}
                 style={{width:"600px"}}
                inputProps={{ maxLength: 500 }}
          
          
              />
              </Box>
             
             <Box mt={3} className={classes.date}>
               <Box>
               <TextField
          id="date"
          label="Due Date"
          type="date"
          defaultValue="2021-08-28"
          onChange={(e) =>props.onchangedate(e)}
          defaultValue={date}
           className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          />
              </Box>
          
               <Box>
               <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={(e) =>props.onchangepriority(e)}
                      defaultValue={priority}
    
                    >
                        <MenuItem value={0}>None</MenuItem>
                        <MenuItem value={10}>Low</MenuItem>
                      <MenuItem value={20}>Medium</MenuItem>
                      <MenuItem value={30}>High</MenuItem>
                    </Select>
               </Box>
             </Box>
             <Divider/>
             <Box mt={3}>
             <Button variant="contained" color="secondary" onClick={()=>props.handleeditClose()}>
          Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={()=>props.onedit(props.editvalue)} >
          Save
          </Button>
             </Box>
              </form>
          
            </Box>
          );
         
    
}
export default Edit;
