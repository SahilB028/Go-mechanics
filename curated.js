import React from 'react'
import brake from './brake.png'
import batt from './batt.png'
import glasses from './glasses.png'
import light from './light.png'
import tyres from './light.png'
import mirror from './mirror.png'
import clutch from './clutch.png'
import body from './body.png'
import AC from './AC.png'
import stering from './streing.png'
import suspension from './suspension.png'
import goconnet from './goconnect.png'

export default function () {
  return (
<>
<div id="heading">
<div className="heading"> 
  <h2>Curated Customer Service</h2>
            <div className="curated">
              
              <div className="custom">
               <a href="#"><img src={batt} width="100px" height="100px"/>
                 <p>Batteries</p></a>
                 
                
              </div>
              
                        <div className="custom">
                    <a href="">    <img src={brake} width="100px" height="100px"/>
                    
                         <p>Brake</p></a>
                      
                        </div>
             
                   <div className="custom">
                     <a href="">     <img src={glasses} width="100px" height="100px"/>
                     <p>Glasses</p></a>
                    
                   </div>
                   
                        <div className="custom">
                         <a href="">    <img src={light} width="100px" height="100px"/>
                         <p>Lights</p></a>
                          
                        </div>
                        </div>
                        
                        <div className="curated">
                        <div className="custom">
                          <a href="#"><img src={tyres} width="100px" height="100px"/>
                            <p>Tyres</p></a>
                            
                           
                         </div>
                        
                        
                                   <div className="custom">
                               <a href="">    <img src={mirror} width="100px" height="100px"/>
                                    <p>Mirror</p></a>
                                 
                                   </div>
                        
                              <div className="custom">
                                <a href="">     <img src={clutch} width="100px" height="100px"/>
                                <p>Clutch</p></a>
                               
                              </div>
                              
                                   <div className="custom">
                                    <a href="">    <img src={body} width="100px" height="100px"/>
                                    <p>Body Parts</p></a>
                                     
                                    </div>
                        </div>
                        
                        
                        <div className="curated">
                          <div className="custom">
                            <a href="#"><img src={AC}width="100px" height="100px"/>
                              <p>Periodic Service</p></a>
                              
                             
                           </div>
                                                                                           
                                 <div className="custom">
                                 <a href="">    <img src={stering} width="100px" height="100px"/>
                                      <p>AC Service & Repair</p></a>
                                   
                                     </div>
                          
                                <div className="custom">
                                  <a href="">     <img src={suspension} width="100px" height="100px"/>
                                  <p>Batteries</p></a>
                                 
                                </div>
                                
                                     <div className="custom">
                                      <a href="">    <img src={goconnet} width="100px" height="100px"/>
                                      <p>Tyres & Wheel Care</p></a>
                                       </div>
                                     </div>
                                     </div>
                                     </div>
                                    
                                    
                                    
                                  
           
           </>
  )
}
