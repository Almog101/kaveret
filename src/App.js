import './App.css';

import '@fontsource/roboto';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

import Mediabar from './Mediabar.jsx'
import Navbar from './Navbar.jsx'


const useStyles = makeStyles({
  container: {
    padding: "0",
  },

  app: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    "z-index": "999"
  }
});

function Playlist (props) {
  const playlistName = props.match.params.name;

  return (<h1>{playlistName}</h1>);
}

function App() {
  const classes = useStyles(); 

   return (
     <Router>
      <div className={classes.app}>
        <Grid container spacing={3}>
          <Grid className={classes.container} item xs={2}>
            <Navbar/>
          </Grid>

          <Grid className={classes.container} item xs={10}>
            <div id="main" >
              <Route path="/playlist/:name" component={Playlist}/>
            </div>
          </Grid>

          <Grid className={classes.container} item xs={12}>
            <Mediabar/>
          </Grid>
        </Grid>
      </div>
     </Router>
  );
}

export default App;
