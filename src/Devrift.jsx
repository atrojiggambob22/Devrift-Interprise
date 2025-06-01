import React from "react";
import './Devrift.css'
import Minseblemnts from "./Minseblemnts";
import facebook from '../public/Images/facebook.png';
import instagram from '../public/Images/instagram.png';
import mainWha from '../public/Images/mainWha.png';
import X from '../public/Images/x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed,faToilet,faSquare,faBuilding,faWarehouse,faHome,faStore,faHouseChimney, faStar, faStarHalf, faLocation, faLocationPin, faLocationPinLock, faMapLocationDot, faLocationArrow, faMailBulk, faPhone, faArrowRight, faAdd} from '@fortawesome/free-solid-svg-icons'; 
// import { motion } from "motion/react"
// import { motion, useScroll } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import House from '/Images/House1.png'
import FadeInSection from "./FadeInSection";


const Devrift =() =>{


// const { scrollYProgress } = useScroll()

// const scrollIndicator = {
//     scaleX: scrollYProgress,
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "10px",
//     originX: 0,
//     backgroundColor: "#ff0088",
// }

    return(
        <>
       <div >
        
         {/* <motion.div id="scroll-indicator" style="scrollIndicator" /> */}
             <MainRift/>
       </div>
             <ScrollIndicator />
        
        </>

      
    )
}

const MainRift =()=>{
    return(
        <>
        
        <div>
            
            <div className="header">
                    <header>
            <div className="hheadspfonavs">
                <nav>
                    <div className="minnavss">
                        <h3>
                            About Us
                        </h3>
                    </div>

                    <div className="minnavss">
                        <h3>
                            Services
                        </h3>
                    </div>

                    <div className="minnavss">
                        <h3>
                                Project
                        </h3>
                    </div>

                    <div className="minnavss">
                        <h3>
                                Contact Us
                        </h3>
                    </div>
                </nav>
            </div>

            <div className="HeadofEmpoer">
                <div className="Empowerthem">
                    <h1 style={{color:"white"}}>Empowering Brands <br />  Through Creative Solutions</h1>
                    </div>
                <div className="Empoersub1">
                    <div className="minEmpero234r34">
                        <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore iusto veritatis cupiditate ad praesentium, nisi a corrupti ipsum asperiores necessitatibus mollitia aut, saepe nobis iure nihil. Labore, debitis voluptatem!</p>

                        <div >
                            <button>Learn More</button></div>
                    </div>

                    <div className="SecondPhae">
                        <div><img src="" alt="" /></div>
                        <div className="doenburn">
                            <button>Get Started</button>
                            <button>Join US Today</button>
                        </div>
                    </div>

                    <div>
                        <div>
                    <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon"/>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                          <FontAwesomeIcon icon={faStar} className="icon"/>  <FontAwesomeIcon icon={faStar} className="icon"/>  
                  </div>

                        <h3 style={{color:"white"}}> <span style={{fontSize:'40px'}}> 10 Years </span><br />
                             <span style={{position:'relative', left:'55px'}}>Experience </span>
                             </h3>
                    </div>
                </div>
            </div>
           </header>

            </div>
           


             <div className="Liners">
                
                        <div className="CheifLiners">
                            <h3>2000 <FontAwesomeIcon icon={faAdd} style={{color:'green', fontSize:'30px'}}  className="PLusicons" /> </h3>
                            <p>Category</p>
                        </div>
                        <div className="CheifLiners">
                            <h3>10<FontAwesomeIcon icon={faAdd} style={{color:'green',fontSize:'30px'}} className="PLusicons"/> </h3>
                            <p> Years Experience</p>
                        </div>
                        <div className="CheifLiners">
                            <h3>890  <FontAwesomeIcon icon={faAdd} style={{color:'green',fontSize:'30px'}} className="PLusicons"/> </h3>
                            <p>Hours of Design</p>
                        </div>
                        <div className="CheifLiners">
                            <h3>150M <FontAwesomeIcon icon={faAdd} style={{color:'green',fontSize:'30px'}} className="PLusicons" /></h3>
                            <p>Tracked Revenue</p>
                        </div>
                    </div>


           <div className="FirtBody">

                    <div className="IDeas">
                        <FadeInSection delay={0.6}>

                            <div className="IdeasmINin">
                            <div>
                                <h3>Turning Ideas into <br />Masterpeices</h3>
                                <div className="iininfinpingdom">
                                    <img src={House} alt=""  /></div>
                            </div>

                            <div>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, <br />animi aliquam? Asperiores, fugiat placeat vitae, velit libero et <br />provident nam quisquam repellat atque sint explicabo <br />consequuntur neque ab officia aut?</p>
                                
                                <div className="secondgrades" ><img src={House} alt="" /></div>
                                
                            </div>

                        </div>
                        </FadeInSection>
                    </div>

                    <div className="Services" style={{overflow:"hidden"}}>
                        <FadeInSection delay={0.2}>

                            <div style={{position:'relative', left:'120px'}}>
                            <div style={{marginBottom:"20px"}}>
                                <h3 >Our <span  className="bentServ" style={{backgroundColor:'darkgreen', color:'white'}}> Services</span></h3>
                                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sed autem perspiciatis fuga dignissimos facere!</p>
                            </div>
                            <div>
                                <FadeInSection delay={0.3}>
                                         <div className="minsib1serv minsib1serv1 ">
                                    <div>01</div>
                                    <div>UI/UX</div>
                                    <div className="arricon">
                                        <FontAwesomeIcon icon={faArrowRight}  />    
                                     </div>
                                </div>

                                </FadeInSection>

                                


                                <FadeInSection delay={0.4}>
                                <div className="minsib1serv minsib1serv2 ">
                                    <div>02</div>
                                    <div>Web Development</div>
                                    <div className="arricon"  >
                                        <FontAwesomeIcon icon={faArrowRight} />    
                                     </div>
                                </div>

                                </FadeInSection>

                                    <FadeInSection delay={0.5}>

                                <div className="minsib1serv minsib1serv1">
                                    <div>03</div>
                                    <div>3D Design's</div>
                                    <div className="arricon">
                                        <FontAwesomeIcon icon={faArrowRight}/>    
                                     </div> 
                                </div>
                                    </FadeInSection>

                                    <FadeInSection delay={0.6}>

                                <div className="minsib1serv minsib1serv2">
                                    <div>04</div>
                                    <div>Motion Graohics</div>
                                   <div className="arricon">
                                        <FontAwesomeIcon icon={faArrowRight}/>    
                                     </div>
                                </div>
                                    </FadeInSection>
                            </div>
                        </div>
                        </FadeInSection>
                        

                        <div style={{display:"flex",gap:"1px",justifyContent:'space-around',position:"relative", left:'120px',overflow:"hidden", top:"40px"}} className="thembeforebox">
                            <div className="Beforebocss" style={{marginRight:"20px"}}>
                                <img src={House} alt=""  style={{width:"300px",height:"80%", borderRadius:"30px", position:"relative", left:'-50px', margin:" 0 80px"}}/>
                            </div>

                            <div style={{position:"relative", left:'20px', top:"50px"}}>
                                
                                <div style={{marginBottom:'50px'}} className="boxipfinon">
                                    <div className="insidesbox">
                                                <FadeInSection delay={0.7}>
                                                     <div>
                                                    <p style={{width:'80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequuntur!</p>
                                            </div>

                                            <div>
                                                <h4>See how we work</h4>
                                                 {/* <div> <FontAwesome icon={}/> </div> */}
                                            </div>

                                                </FadeInSection>
                                           
                                    </div>
                                    
                                 </div>


                                <FadeInSection delay={0.7}>
                               <div className="boxipfinon boxipfion22">

                                    
                               
                                    <div className="insidesbox2" >
                                    <p style={{width:'80%'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, consectetur.</p>
                                <div>

                                </div>

                                <div>
                                        <h4>Meet OUr Expert</h4>
                                         {/* <div> <FontAwesome icon={}/> </div> */}
                                </div>
                                
                                </div>

                               </div>
                                </FadeInSection>
                                
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="thyinovactions">
                        <h2>Innovate</h2>
                        <FontAwesomeIcon icon={faStar}/>
                        <h2>Inspire</h2>
                        <FontAwesomeIcon icon={faStar}/>
                        <h2>Create</h2>
                        
                        
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:"column"}}>
                        <hr style={{marginTop:'40px'}} />
                        {/* <FontAwesomeIcon icon={faStar}/>
                        <hr /> */}
                    </div>

                    <div style={{margin:"50px"}}>
                        <div style={{display:'flex',justifyContent:"space-between"}} className="UNderthheinvac" >
                                    <div>
                            <h3 style={{fontSize:"40px"}} className="babaServe">Meet <span className="bentServ" style={{backgroundColor:'darkgreen', color:'white'}}>Members</span> </h3>
                        </div>
                        <div>
                           <div>
                            <p>Role & Expertise</p>
                           </div>
                        </div>
                        </div>

                        
                      
                    </div>
                    <div style={{overflow:'hidden'}} className="FatherMinseneln">
                             <Minseblemnts style={{overflow:'hidden'}}/>
                        </div>
                <footer>
                    <div className="firstminfooteddr">

                    <div>
                         <FadeInSection delay={0.4}>

                        <div>
                            <h3 style={{marginBottom:'30px',fontSize:'50px'}}>Get In Touch Today</h3>
                            <p style={{marginBottom:'30px',fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad et pariatur sequi numquam quia eum placeat sint beatae repellat?</p>
                        </div>

                         </FadeInSection>

                          <FadeInSection delay={0.6}>

                        <div className="minformsnsnfooter">
                            <input type="text" placeholder="Enter Your Email" />
                            <button >Submit</button>
                        </div>
                          </FadeInSection>
                    </div>
                     <FadeInSection delay={0.6}>
                         <div>
                        <img src={House} alt="" />
                    </div>
                     </FadeInSection>
                   
                    </div>

                    <div>
                       
                         <div  className='ThemFoots2'>
                      <div>
                       
                        <div className='main-figimgs'>
                          <p style={{margin:"20px"}}> Follow On</p>
                          <div className='Fimages
                          ' style={{display:'flex'}}>
                            {/* <FontAwesomeIcon icon={faFacebook}/> */}
                            <img src={mainWha} alt="" />
                            <img src={instagram} alt="" />
                            <img src={X} alt="" />
                            <img src={facebook} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className='unederthemiun'>
                        <h3>Discover</h3>
                        <div className='Discop'>
                          <p>About</p>
                          <p>Our Team</p>
                          <p>Testimonials</p>
                          <p>Gallery</p>
                          <p>Contact</p>
                        </div>
                      </div>
                      <div className='minipics'>
                        <h3>Gallery</h3>
                        <div className='minipics2'>
                          
                            <img src={House} alt="" /> 
                            <img src={House} alt="" />
                             <img src={House} alt="" />
                               <img src={House} alt="" />
                        </div>
                      </div>
                      <div></div>
                     
                      
              </div>
                    </div>
                    
                </footer>
           </div>
        </div>
        </> 
    )
}


export default Devrift;