import Carousel from 'react-bootstrap/Carousel';
import React ,{Component}from 'react';
import Link from '@material-ui/core/Link';
import {Route} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img/unnamed.jpg';
import reg from '../assets/img/reg.jpg';
import visitdetalis from '../assets/img/visitdetails.jpg';
import tech from '../assets/img/tech.jpg'

import '../Style/Home.css'
export default function Home(){
    return(
        <div>
         
            <br></br>
            <br></br> 
            <br></br>
            <div className="container-fluid d-flex justify-content-center" >
                <div className="row">

                    <div className="col-md-3">
                        <div className='card text-center shadow'>
                    <div className='overflow'>
                        <img src={reg} alt ="image 1" className="card-img-top"></img>
                    </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>{<FormattedMessage
                            id="Reg-home">
                            </FormattedMessage> }
                            </h4>
                        <p className='card-text text-secondary'>{<FormattedMessage
                            id="Reg-detail-home">
                            </FormattedMessage> }</p>
                        <Route render={({ history}) => (
                            <Link href="#" className='btn btn-outline-success'  onClick={() => { history.push('/SignUp') }}  variant="body2">
                            {<FormattedMessage
                            id="Reg-btn-home">
                            </FormattedMessage>}
                        </Link>
                        )} /> 
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                        <div className='card text-center'>
                    <div className='overflow'>
                        <img src={img1} alt ="image 1" className="card-img-top"></img>
                    </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>{<FormattedMessage
                            id="visit-home">
                            </FormattedMessage> }</h4>
                        <p className='card-text text-secondary'>{<FormattedMessage
                            id="visit-home-detail">
                            </FormattedMessage> }</p>

                            <Route render={({ history}) => (
                            <Link href="#" className='btn btn-outline-success'  onClick={() => { history.push('/Visit') }}  variant="body2">
                            {<FormattedMessage
                            id="visit-home-detail-btn">
                            </FormattedMessage>}
                        </Link>
                        )} /> 

                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                        <div className='card text-center'>
                    <div className='overflow'>
                        <img src={visitdetalis} alt ="image 1" className="card-img-top"></img>
                    </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>{<FormattedMessage
                            id="visit-dashboard-home">
                            </FormattedMessage> }</h4>
                        <p className='card-text text-secondary'>{<FormattedMessage
                            id="visit-dashboard-home-detail">
                            </FormattedMessage> }</p>

                            <Route render={({ history}) => (
                            <Link href="#" className='btn btn-outline-success'  onClick={() => { history.push('/Dashboard') }}  variant="body2">
                            {<FormattedMessage
                            id="visit-dashboard-home-detail-btn">
                            </FormattedMessage>}
                        </Link>
                        )} /> 
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                        <div className='card text-center'>
                    <div className='overflow'>
                        <img src={tech} alt ="image 1" className="card-img-top"></img>
                    </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>{<FormattedMessage
                            id="addtech-home">
                            </FormattedMessage> }</h4>
                        <p className='card-text text-secondary'>{<FormattedMessage
                            id="addtech-home-detail">
                            </FormattedMessage> }</p>

                            <Route render={({ history}) => (
                            <Link href="#" className='btn btn-outline-success'  onClick={() => { history.push('/Technician') }}  variant="body2">
                            {<FormattedMessage
                            id="addtech-home-detail-btn">
                            </FormattedMessage>}
                        </Link>
                        )} /> 
                        </div>
                    </div>
                    </div>

                </div>

            </div>

         

</div>
    );
}