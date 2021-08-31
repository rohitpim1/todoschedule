import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
    rootup:{
      marginTop:"20px",
      display:"flex",
      flexDirection:"row",
        justifyContent:"space-evenly",
  
        alignItems:"center"
    },
    root:{
      marginTop:"50px",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    nav:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    },
    paper: {
      position: 'absolute',
      top:"200px",
      left:"300px",
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    date:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    }
  }))

  export default useStyles;