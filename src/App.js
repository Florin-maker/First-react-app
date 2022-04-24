// import { Renderer } from 'leaflet';
import React from 'react'
import './myPage/stylesheet.css';
import { createBrowserHistory } from 'history'

export class Create extends React.Component {
  navigatePage () {
    createBrowserHistory.push("./myPage/Login.js")
  }

  render() {
    return(
      
      <div className="container"> 

          <h1 className="logo">Kite</h1>

              <form method='POST' action="./myPage/Login.js">
                  <label for="fname" class="name">Username</label>

                  <input 
                  type="text" 
                  class="inputs" 
                  name="Username" required />
              
                  <label for="lname" class="name">Password</label>

                  <input 
                  type="password" 
                  class="inputs" 
                  name="password" 
                  required 
                  />

                  <button onClick={this.navigatePage}  class="btn">Login</button>
                
              </form>

      </div>
    );
  }
}


export default Create;
