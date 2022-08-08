
import "../index.css";
import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  // offset: 130,
  duration: 1000
});

function Project(){

  const[work , setWork] = React.useState(false)

    return(
        <>
         <div style={{textAlign:"center" , marginBottom:"35px"}} >
           <p className="title1">FEATURED <span style={{color:"tomato"}} >PROJECTS</span></p>
        </div>

     {/* project 1 */}

        <div style={{textAlign:"center"}}>
          <p className="title2 project1"><span style={{color:"tomato"}}>CHAT</span> APP </p>
        </div>

    <div className="container"
     data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6" style={{padding:"0px"}}>
          <div style={{width:"100%" , height:"100%"}}>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="./images/filas/fila1.png" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/filaImg.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/fila3.png" alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/fila4.png" alt="Fourth slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/fila5.png" alt="Fifth slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
          
        </div>
        
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
       
          <p className="para1"><span className="imp">CHAT </span> is an <span className="imp"> APP </span>
          website having 
          all the necessary features , like 
          Interactive one on one chat <span className="imp"> APP </span> feature , <span className="imp">  </span>
            <span className="imp">  </span> , the <span className="imp"> LogIn  </span> 
            <span className="imp"> filtering  </span> <span className="imp"> sorting </span>          </p>
          <div className="usedIcons">

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MaterialUi</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>

          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>
          <a href="https://github.com/Shreedhar-sanakar/chatappFrontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
          </a>
          <a href="https://github.com/Shreedhar-sanakar/chatappBackend" target="blank" className="anchor">
            <button className="codeBtn">BackEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
          </a>
          <div className="ee">
          <a href = "https://regal-medovik-559333.netlify.app" target="blank" className="anchor">
            <button className="codeBtn">Live Demo <i className="fas fa-level-down-alt" style={{marginLeft:"8px"}}></i></button>
          </a>
          <div className="credentials">
            <div>
              <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
              <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
              <p  className="demoCred">shridhar.sanakar@gmail.com</p>
              <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
              <p  className="demoCred"> admin123</p>
            </div>
          </div>
          </div>
          
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>


    {/* projecct 2 */}
    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}> Money</span> Manager</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6"  style={{padding:"0px"}}>
          <div style={{width:"100%" , height:"100%"}}>
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="./images/rental/rent1.png" alt=" slide1"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent2.png" alt=" slide2"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent3.png" alt=" slide3"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent4.png" alt=" slide4"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent5.png" alt=" slide5"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          
          </div>
         
        </div>
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
       
          <p className="para1"><span className="imp">Money Manager </span>is a <span className="imp">Web Application</span>
          Develop a Money Manager Web Application that will be useful for managing personal finances as easy as pie! 
 <span className="imp"> start </span> 
          

          </p>
          <div  className="usedIcons">

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MaterialUi</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>
            
            <a href="https://github.com/Shreedhar-sanakar/money-manager-frontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <a href="https://github.com/Shreedhar-sanakar/money-manager-backend" target="blank" className="anchor">
            <button className="codeBtn">BackEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <div className="ee">
            <a href = "	https://poetic-choux-1c390d.netlify.app" target="blank" className="anchor">
            <button className="codeBtn" >  Live Demo <i className="fas fa-level-down-alt" style={{marginLeft:"8px"}}></i></button></a>
            <div className="credentials">
            <div>
              <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
              <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
              <p  className="demoCred">shridhar.sana@gmail.com</p>
              <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
              <p  className="demoCred"> admin123</p>
            </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

    
{/* project 4 */}
<div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>PASSWORD</span> REST</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6"  style={{padding:"0px"}}>
          <div style={{width:"100%" ,height:"100%"}}>
            <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./images/wallet/wallet1.png" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./images/wallet/wallet2.png" alt="Second slide"/>
                </div>
               
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
         
        </div>
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
          <p className="para1"><span className="imp">PASSWORD REST</span>  the task is to implement a correct password reset flow with email verification and proper update of the new password in the database for the web app
         
          </p>
          <div  className="usedIcons" >

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/chartjs.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Chart.Js</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>
            <a href="https://github.com/Shreedhar-sanakar/reset-fe" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <a href="https://github.com/Shreedhar-sanakar/reset-be" target="blank" className="anchor">
              <button className="codeBtn">BackEnd<i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <div className="ee">
            <a href = "https://splendid-kelpie-f4bca9.netlify.app" target="blank" className="anchor">
            <button className="codeBtn">Live Demo <i className="fas fa-level-down-alt" style={{marginLeft:"8px"}}></i></button>
            </a>
            <div className="credentials">
            <div>
              <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
              <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
              <p  className="demoCred">shridhar.sanakar@gmail.com</p>
              <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
              <p  className="demoCred"> admin123</p>
            </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

    {/* project 3 */}

  
  

{/* extra project 2 */}

<div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>DASHBOARD</span> PROFILE</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6" style={{padding:"10px"}}>
          <div style={{width:"100%" , height:"100%"}}>
         <img src="./images/bankDetailer.png" alt="covid-tracker" style={{width:"100%" ,  height:"100%"}}/>
          </div>
         
        </div>
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
       
          <p className="para1"><span className="imp">DASHBOARD</span>  Implement a admin DASHBOARD with CRUD
          
          </p>
         
          <div style={{display:"flex" }}>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/htmlIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">HTML</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/cssIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">CSS</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/jsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">JSS</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap" }}>
            <a href="https://github.com/Shreedhar-sanakar/React_DASHBOARD-with-CRUD" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <a href = "https://genuine-sfogliatella-93743d.netlify.app" target="blank" className="anchor">
            <button className="codeBtn">Live Demo <i className="fas fa-level-down-alt" style={{marginLeft:"8px"}}></i></button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>  


        
        
      
    
    <hr style={{marginTop:"0px"}}/>


    <div style={{display:"flex"  ,justifyContent:"center"}}>
      <button className="codeBtnss2" onClick={()=>{setWork(!work)}}>{work ? "VIEW LESS" : "VIEW MORE PROJECTS"}</button>
    </div>


        </>
    )
}

export default Project;
