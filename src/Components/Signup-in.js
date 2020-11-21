import '../Style/Signup-in.css';
import React from 'react';
import log from '../assets/img/log.svg';
import register from '../assets/img/register.svg';
import {Route} from 'react-router-dom';
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
}
const SignUpIn = () => { 
     return (
       <div class="container">
       <div class="forms-container">
         <div class="signin-signup">
           <form action="#" class="sign-in-form">
             <h2 class="title">Sign in</h2>
             <div class="input-field">
               <i class="fas fa-user"></i>
               <input type="text" placeholder="Username" />
             </div>
             <div class="input-field">
               <i class="fas fa-lock"></i>
               <input type="password" placeholder="Password" />
             </div>
             <Route render={({ history}) => (
                 <input type="submit" value="Login" class="btn solid" onClick={() => { history.push('/login') }} />
              )} />
             <p class="social-text">Or Sign in with social platforms</p>
             <div class="social-media">
               <a href="#" class="social-icon">
                 <i class="fab fa-facebook-f"></i>
               </a>
               <a href="#" class="social-icon">
                 <i class="fab fa-google"></i>
               </a>
             </div>
           </form>
           <form action="#" class="sign-up-form">
             <h2 class="title">Sign up</h2>
             <div class="input-field">
               <i class="fas fa-user"></i>
               <input type="text" placeholder="Username" />
             </div>
             <div class="input-field">
               <i class="fas fa-envelope"></i>
               <input type="email" placeholder="Email" />
             </div>
             <div class="input-field">
               <i class="fas fa-lock"></i>
               <input type="password" placeholder="Password" />
             </div>
             <div class="input-field">
               <i class="fas fa-phone-alt"></i>
               <input type="text" placeholder="Phone" />
             </div>
             <input type="submit" class="btn" value="Sign up" />
             <p class="social-text">Or Sign up with social platforms</p>
             <div class="social-media">
               <a href="#" class="social-icon">
                 <i class="fab fa-facebook-f"></i>
               </a>
               <a href="#" class="social-icon">
                 <i class="fab fa-google"></i>
               </a>
             </div>
           </form>
         </div>
       </div>
   
       <div class="panels-container">
         <div class="panel left-panel">
           <div class="content">
             <h3>New here ?</h3>
             <p>
               We always need good quality items to sell so if you don’t need it, don’t throw it away! You can donate to us in many simple ways.
             </p>
             <button class="btn transparent" id="sign-up-btn">
               Sign up
             </button>
           </div>
           <img src={log} class="image" alt="" />
         </div>
         <div class="panel right-panel">
           <div class="content">
             <h3>One of us ?</h3>
             <p>
               We always need good quality items to sell so if you don’t need it, don’t throw it away! You can donate to us in many simple ways.
   
             </p>
             <button class="btn transparent" id="sign-in-btn">
               Sign in
             </button>
           </div>
           <img src={register} class="image" alt="" />
         </div>
       </div>
      <script src=""></script>
     </div>
     );
   };
   
   export default SignUpIn;

