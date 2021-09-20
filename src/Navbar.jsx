//import './css/Navbar.css'
import {Link} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navbar: {
    "background-color": "#000000",
    padding: "0",
    height: "80vh"
  },
  hd: {
    "border": "0",
    "border-top": "1px solid white"
  },
  playlistLink: {
    "color": "#9c9c9c",
    "text-decoration": "none",
    "&:hover": {
       "color": "white",
    },
  }
});

function Navbar() {
  const playlists = ["playlist1", "playlist2", "playlist3", "playlist4"]
  const classes = useStyles();

  return (
    <Grid direction="column" justifyContent="center" alignItems="center" className={classes.navbar} container>
  
      <Grid item xs={4}>
        <h1>🐝 Kaveret</h1>
      </Grid>

      <Grid item xs={4}>
        <p><a href="#">Home</a></p>
        <p><a href="#">Search</a></p>
      </Grid>

      <Grid item xs={4}>
        {playlists.map(playlist => {
          return (
            <p>
              <Link className={classes.playlistLink} to={`/playlist/${playlist}`}>{playlist}</Link>
            </p>
          );
        })}
      </Grid>

    </Grid>
  );
}

export default Navbar;
