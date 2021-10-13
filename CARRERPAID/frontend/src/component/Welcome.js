import { Grid, Typography, Button} from "@material-ui/core";
import Background from '../image/welcome.jpeg';
import { useHistory } from "react-router-dom";
import '../App.css'


const Welcome = (props) => {
  let history = useHistory();
  const handleClick = (location) => {

    console.log(location);
    history.push(location);
  };
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="left"
      justify="flex-end"
      style={{ paddingLeft: "120px",
       paddingBottom:"100px",
      backgroundImage: `url(${Background})`,
      height: `95vh`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    }}
    >
      <Grid item >
      <h1 style={{color: "#3f51b5", 'font-size': "200%"}}>WELCOME TO CAREERPAID</h1>
          <div style={{ width: "400px", 'font-size': "150%", textIndent: "80px", textAlign:"justify", fontFamily:"cursive" }}>
            <p> <i>
                "CARRERPAID is developed for providing easy interaction between recruiter and job seekers."
              </i>
            </p>
          </div>
          <div>
          <Button color="secondary" style={{ color: "#3f51b5", 'font-size': "120%"}} onClick={() => handleClick("/signup")}>
          <b>Let's Get Started</b>
          </Button>
          </div>
        {/* <Typography variant="h2">&nbsp;&nbsp;&nbsp;&nbsp;Welcome <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to <br></br> CARRERPAID</Typography> */}
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
