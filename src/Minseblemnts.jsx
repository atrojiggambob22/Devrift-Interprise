import React from "react";
import fi from '../public/Images/fi.png';
import f2 from '../public/Images/f2.png';
import f3 from '../public/Images/f3.png';
import f4 from '../public/Images/f4.png';
import f5 from '../public/Images/f5.png';
import f6 from '../public/Images/f6.png';
import './WizardChan.css';
import FadeInSection from "./FadeInSection";

const  Minseblemnts=()=>{
    return(
        <>
         <div className='sec4' style={{overflow:"hidden"}}>
             <FadeInSection delay={0.4}>


                    <div className='sec4-sub2' style={{overflow:'hidden'}}>
                        <div className='sec4-sub1-ch1' style={{overflow:'hidden'}}>
                            <h3> <span style={{backgroundColor:'rgb(174, 248, 128)', borderRadius:'3px'}}>Search Engine</span> <span style={{backgroundColor:'rgb(174, 248, 128)',borderRadius:'4px'}}> <br /> Optimization</span>
                            </h3>

                            <div className='sec4-sub1-icon'>
                             <div>
                            <img src="../public/Images/arrow-1.png" alt="" />

                             </div>

                              <div>
                                <h6 style={{color:'black'}}>Learn More</h6>
                             </div>
                            
                        </div>
                        </div>

                        <div className='sec4-sub1-imgi'>
                            <img src={fi} alt="" />
                        </div>
                        </div>
             </FadeInSection>
                        
                         <FadeInSection delay={0.6}>

                        <div className='sec4-sub2'>
                        <div className='sec4-sub1-ch2' style={{overflow:"hidden"}}>
                            <h3 style={{overflow:"hidden"}}> <span style={{backgroundColor:'white', borderRadius:'3px'}}>Pay Per Click</span>  <span style={{backgroundColor:'white', borderRadius:'3px'}}> <br /> advertising</span></h3>
                            <div className='sec4-sub1-icon' style={{position:"relative", top:"30px"}}>
                             <div  className="firsttimewrr1">
                             <img src="../public/Images/arrow-1.png" alt="" />
                             </div>
                            <div className="sec4-sub1-ch2-211">
                                <h6 style={{color:'black'}}>Learn More</h6>
                             </div>
                        </div>
                        </div>
                        <div className='sec4-sub1-img2'>
                        <img src={f3} alt="" />
                        </div>
                        </div>
                         </FadeInSection>

                         <FadeInSection delay={0.8}>


                        <div className='sec4-sub2'>
                        <div className='sec4-sub1-ch3'>
                            <h3> <span style={{backgroundColor:'white', borderRadius:'3px'}} > Social Media</span>  <span style={{backgroundColor:'white', borderRadius:'3px'}}> <br />Marketing</span></h3>
                            <div className='sec4-sub1-icon'>
                             <div>
                                 <img src="../public/Images/arrow-2.png" alt="" />
                             </div>
                            <div>
                                <h6 style={{color:'white'}}>Learn More</h6>
                             </div>
                        </div>
                        </div>
                        <div className='sec4-sub1-img3'>
                        <img src={f2} alt="" />
                        </div>
                        </div>
                         </FadeInSection>

                         <FadeInSection delay={0.10}>

                        <div className='sec4-sub2'>
                        <div className='sec4-sub1-ch4'>
                            <h3> <span style={{backgroundColor:'rgb(174, 248, 128)',borderRadius:'3px'}}>E-mail</span><br /><span style={{backgroundColor:'rgb(174, 248, 128)', borderRadius:'3px'}}>  marketing </span></h3>
                            <div className='sec4-sub1-icon'>
                             <div>
                             <img src="../public/Images/arrow-1.png" alt="" />
                             </div>
                            <div>
                                <h6>Learn More</h6>
                             </div>
                        </div>
                        </div>
                        <div className='sec4-sub1-img4'>
                        <img src={f4} alt="" />
                        </div>
                        </div>
                         </FadeInSection>


                         <FadeInSection delay={0.12}>


                        <div className='sec4-sub2'>
                        <div className='sec4-sub1-ch5'>
                            <h3> <span style={{backgroundColor:'white', borderRadius:'3px'}}>Content</span><br /><span style={{backgroundColor:'white', borderRadius:'3px'}}>Creation</span> </h3>
                            <div className='sec4-sub1-icon'>
                             <div>
                                <img src="../public/Images/arrow-1.png" alt="" />
                             </div>
                            <div>
                                <h6>Learn More</h6>
                             </div>
                        </div>
                        </div>
                        <div className='sec4-sub1-img5'>
                        <img src={f6} alt="" />
                        </div>
                        </div>
                         </FadeInSection>
        

                         <FadeInSection delay={0.14}>

                        <div className='sec4-sub2'>
                        <div className='sec4-sub1-ch6'>
                            <h3> <span style={{backgroundColor:'rgb(174, 248, 128)',borderRadius:'3px'}}>Analytic and </span><span style={{backgroundColor:'rgb(174, 248, 128)', borderRadius:'3px'}}> <br /> Tracking</span>  </h3>
                            <div className='sec4-sub1-icon'>
                             <div>
                             <img src="../public/Images/arrow-2.png" alt="" />
                             </div>
                            <div>
                                <h6 style={{color:'black'}}>Learn More</h6>
                             </div>
                        </div>
                        </div>
                        <div className='sec4-sub1-img6'>
                        <img src={f5} alt="" />
                        </div>
                        </div>

                         </FadeInSection>

        
                </div>
        </>
    )
}
export default Minseblemnts