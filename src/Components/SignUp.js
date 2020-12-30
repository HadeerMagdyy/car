import React from 'react';
import '../Style/SignUp.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {Route} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import vechile from '../assets/img/undraw_Vehicle_sale_a645.svg';
import towing from '../assets/img/undraw_towing_6yy4.svg';
import wave from '../assets/img/Wave.png';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


  
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      color:green
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 360,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));
 
  
    
export default function SignUp() {
    
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    }
  return (
      
      <div>
          <img className="wave"src={wave}></img>
          <div className="containerr">
              <div className="img">
                  <img src={towing}></img>
              </div>
              <div className="login-content">
                  <form>
                      <img src={vechile}></img>
                      <h2 className="title">Welcome</h2>
                      <div className="input-div one">
                          <div className="i">
                              <i className="fas fa-user"></i>
                          </div>
                          <div className="div">
                              <h5 id="username">{<FormattedMessage
                                id="userName-signup">
                                </FormattedMessage>}
                                </h5>
                              <input type="text" className="input"></input>
                          </div>
                      </div>

                      <div className="input-div pass">
                          <div className="i">
                              <i className="fas fa-mobile-alt"></i>
                          </div>
                          <div className="div">
                              <h5 id="mobile">{<FormattedMessage
                                id="phone-signup">
                                </FormattedMessage>}</h5>
                              <input type="text" className="input"></input>
                          </div>
                      </div>

                
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-autowidth-label">{<FormattedMessage
                                id="CarType-signup">
                                </FormattedMessage>}</InputLabel>
                        <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                 </FormControl>
                
                 <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-autowidth-label">{<FormattedMessage
                                id="CarModel-signup">
                                </FormattedMessage>}</InputLabel>
                        <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                 </FormControl>
                 <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-autowidth-label">{<FormattedMessage
                                id="CarColor-signup">
                                </FormattedMessage>}</InputLabel>
                        <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                 </FormControl>
                 <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-autowidth-label">{<FormattedMessage
                                id="CarYear-signup">
                                </FormattedMessage>}</InputLabel>
                        <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                 </FormControl>
          
                <div class="input-div pass">

                    <div class="i">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <div class="div">
                        <h5 id="plateNumber">{<FormattedMessage
                                id="PlateNum-signup">
                                </FormattedMessage>}</h5>
                        <input type="text" class="input"></input>
                    </div>
                </div>

                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <div class="div">
                        <h5 id="chasisNum">{<FormattedMessage
                                id="ChasisNum-signup">
                                </FormattedMessage>}</h5>
                        <input type="text" class="input"></input>
                    </div>
                </div>

                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <div class="div">
                        <h5 id="motorNum">{<FormattedMessage
                                id="MotorNum-signup">
                                </FormattedMessage>}</h5>
                        <input type="text" class="input"></input>
                    </div>
                </div>

                <div class="input-div pass">

                    <div class="i">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <div class="div">
                        <h5 id="plateNumber">{<FormattedMessage
                                id="Kilometer">
                                </FormattedMessage>}</h5>
                        <input type="text" class="input"></input>
                    </div>
                    </div>
                <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >
            <Route render={({ history}) => (
                 <Link href="#" onClick={() => { history.push('/visit') }}  variant="body2">
                 {<FormattedMessage
                  id="signInbutton-signin">
                  </FormattedMessage>}
               </Link>
              )} />   
          </Button>
                  </form>
              </div>

          </div>
      </div>
  );
}