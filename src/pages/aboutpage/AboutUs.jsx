import React from 'react'
import Styles from'./AboutUs.module.css'

function About() {
  return (
    <div>
       <div className={Styles.main}>
              <div className={Styles.first}>

                <div className={Styles.leftimg}>
                <img src=""  />
                </div>
                <div className={Styles.rightcontent}>
                   <h1>About Us</h1>
                   <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,<br/>
                     aliquid necessitatibus maxime error sapiente similique voluptatem,<br/> 
                    corporis deserunt laboriosam, obcaecati aspernatur cumque fugit<br/>
                     mollitia perferendis at tenetur fuga deleniti consequuntur.</pre>
                    <br/><br/>,<br/>
                   
                     <button style={{backgroundColor:"red", width:"100px"}}>Learn More</button>
                </div>
                     
              </div>
              
              
              <br/><br/><br/>

              <div className={Styles.second}>

                  <div className={Styles.leftcontent}>
                    <h1 style={{color:"red"}}>Why Choose US</h1>
                      <p>
                        <li> 💪Consulation With expert</li>
                      </p>
                      <p>Whatever you want from a workout, make DMT part of your training
                        <br/> programme for quicker and more effective results.</p>

                     <p>
                        <li >🏋️‍♂️ Best workout facilities</li>
                      </p>
                       <p >Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                  </div>
                  <div className={Styles.rightimg}>right imag</div>

              </div>
   
     </div>
    </div>
  )
}

export default About