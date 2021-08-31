import React,{useState} from 'react'
import {Button,Box,TextField,Divider,Typography} from '@material-ui/core'

import useStyles from '../styles/app';
const View = (props) =>{
const {summary,description} = props.viewvalue;
    const classes = useStyles();

    const [modalStyle] = useState();

    return(
            <Box style={modalStyle} className={classes.paper}>
              <Typography variant="h6" p={3}>View Task</Typography>
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
             <Divider/>
             <Box mt={3}>
             <Button variant="contained" color="secondary" onClick={()=>props.handleviewClose()}>
          Close
          </Button>
          
             </Box>
              </form>
          
            </Box>
          );
         
    
}
export default View;
