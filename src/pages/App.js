import React,{useState} from 'react'
import {Switch,Route} from 'react-router-dom'
import Todo from './Todo'
import Navbar from './Navbar'
import All from './All'
import Pending from './Pending'
import Completed from './Completed'
import {Divider,Button,Box,TextField,Typography} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from '../styles/app';

export const App = () => {
const classes = useStyles();


  const [modalStyle] = useState();
  const [open, setOpen] = useState(false);
  const [editopen, setedit] = useState(false);
  const [viewopen, seteview] = useState(false);
  const[editvalue,setvalue] = useState([]);
  const[viewvalue,setviewvalue] = useState([]);


  const[summary , setsummary] = useState('');
  const[description , setdescription] = useState('');
  const[date , setdate] = useState('');
  const[priority , setpriority] = useState('');
  const[completed,setcompleted] = useState(false);
  const[searchValue,setsearchValue] = useState('');
 
  const[arr,setarr] = useState([]);
 const[pendingArr,setpendingArr] = useState([]);
const[completedArr,setcompletedArr] = useState([]);



/*modal function */
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleeditOpen = (e) => {
  setedit(true);
  setvalue(e);
};

const handleeditClose = () => {
  setedit(false);
};

const handleviewOpen = (e) => {
  seteview(true);
  setviewvalue(e);
};

const handleviewClose = () => {
  seteview(false);
};



/*array function*/
const onchangesummary = (e) =>{

    setsummary(e.target.value);
  }


  const onchangedescription = (e) =>{
    
    setdescription(e.target.value);
  }


  const onchangedate = (e) =>{
    setdate(e.target.value);
}


const onchangepriority = (e) =>{
    if(e.target.value=== 0)
    setpriority("none");
    else if(e.target.value=== 10)
    setpriority("low");
    else if(e.target.value=== 20)
    setpriority("medium");
       else
       setpriority("high");
  

  }

  const onchangesearchfilter = (e) =>{
    setsearchValue(e.target.value);
    setarr(arr.filter((arry)=>{
      return arry.summary.toLowerCase().includes(searchValue.toLowerCase());
    }))
  }
  

  //sorting
  const sortsummary = () =>{
    setarr(arr.sort((a, b) => a.summary.localeCompare(b.summary)));   
  }

  const dbsortsummary = () =>{
    setarr(arr.sort((a, b) => b.summary.localeCompare(a.summary)));
  }
  const sortpriority = () =>{
    setarr(arr.sort((a, b) => a.priority.localeCompare(b.priority)));   
  }

  const dbsortpriority = () =>{
    setarr(arr.sort((a, b) => b.priority.localeCompare(a.priority)));
  }
  const sortdate = () =>{
    setarr(arr.sort((a, b) => a.date.toString().localeCompare(b.date.toString())));   
  }

  const dbsortdate = () =>{
    setarr(arr.sort((a, b) => b.date.toString().localeCompare(a.date.toString())));
  }

const onSave = ()=>{
  if(summary.length>10 && description.length>10){
    setarr([{summary,priority,description,date,completed}, ...arr])
    setpendingArr([{summary,priority,description,date,completed},...pendingArr])
  setsummary('');
  setdescription('');
  setdate('');
  setpriority(''); } 
  else
  {
    alert("please enter more than 10 characters");
  }

}

const ondelete = (e) =>{
  setarr(arr.filter((arry)=>arry.summary !== e));
  setcompletedArr(completedArr.filter((arry)=>arry.summary!== e));
  setpendingArr(pendingArr.filter((arry)=>arry.summary !== e));
}


const oncompleted = (e) =>{
 const Task = [...arr];
  console.log(Task[e]);
Task[e].completed = true;
setarr(Task);
setcompleted(!completed);
setcompletedArr(Task.filter((arry)=>arry.completed === true));
setpendingArr(Task.filter((arry)=>arry.completed === false));
}

const onedit = (e) => alert(e.summary);



const body = (
  <Box style={modalStyle} className={classes.paper}>
    <Typography variant="h6" p={3}>Add Task</Typography>
    <Divider />

    <form noValidate autoComplete="off">
    <Box mt={3}>
    <TextField
      required
      id="standard-multiline-flexible"
      label="Summary"
      placeholder="Summary"
      variant="outlined"
      value={summary}
      onChange={(e) =>onchangesummary(e)}
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
      value={description}
      onChange={(e) =>onchangedescription(e)}

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
value={date}
onChange={(e) =>onchangedate(e)}

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
            value={priority}
            onChange={(e) =>onchangepriority(e)}

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
   <Button variant="contained" color="secondary" onClick={()=>handleClose()}>
Cancel
</Button>
<Button variant="contained" color="primary" onClick={()=>onSave()}>
Save
</Button>
   </Box>
    </form>

  </Box>
);


  return (
    <>
  <Todo 
  body={body} 
  open={open} 
  handleClose={handleClose} 
  handleOpen={handleOpen} 
  searchValue = {searchValue}
  onchangesearchfilter={onchangesearchfilter} />
    <Navbar/>
   <Switch>
     
     <Route exact path="/">
       <All arr={arr} 
       ondelete={ondelete} 
       oncompleted={oncompleted} 
       completed={completed} 
       onchangesummary={onchangesummary} 
       onchangedescription={onchangedescription} 
       onchangedate={onchangedate} 
       onchangepriority={onchangepriority}
       summary={summary}
       description={description}
       priority={priority}
       date={date}
      onedit={onedit}
      sortsummary={sortsummary}
      dbsortsummary={dbsortsummary}
      sortdate={sortdate}
      dbsortdate={dbsortdate}
      editopen={editopen}
      handleeditOpen={handleeditOpen}
      handleeditClose={handleeditClose}
      editvalue={editvalue}
      viewopen={viewopen}
      handleviewOpen={handleviewOpen}
      handleviewClose={handleviewClose}
      viewvalue={viewvalue}
        />
     </Route>

     <Route exact path="/All">
       <All arr={arr}  
       ondelete={ondelete} 
       oncompleted={oncompleted} 
       completed={completed} 
       onchangesummary={onchangesummary} 
       onchangedescription={onchangedescription} 
       onchangedate={onchangedate} 
       onchangepriority={onchangepriority}
       summary={summary}
       description={description}
       priority={priority}
       date={date} 
       onedit={onedit}
       sortsummary={sortsummary}
       dbsortsummary={dbsortsummary}
       sortpriority={sortpriority}
       dbsortpriority={dbsortpriority}
       sortdate={sortdate}
      dbsortdate={dbsortdate}
      editopen={editopen}
      handleeditOpen={handleeditOpen}
      handleeditClose={handleeditClose}
      editvalue={editvalue}
      viewopen={viewopen}
      handleviewOpen={handleviewOpen}
      handleviewClose={handleviewClose}
      viewvalue={viewvalue}
      />
     </Route>

     <Route exact path="/Pending">
       <Pending pendingArr={pendingArr} ondelete={ondelete} oncompleted={oncompleted}/>
     </Route>
     <Route exact path="/Completed">
       <Completed completedArr={completedArr} ondelete={ondelete} oncompleted={oncompleted}/>
       </Route>

   </Switch>
    </>
  )
}
export default App;
