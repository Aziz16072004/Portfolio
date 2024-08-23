import { useEffect } from "react";
import introImage from "../imgs/introImage.jpg"
import Lines from "./Lines"
import 'aos/dist/aos.css'
import Aos from 'aos'

const Skills = ()=>{
    const skills =[{name : "Web Development", value:"75%"} , {name : "Multi Media", value:"25%"} , {name : "Robotic", value:"30%"},{name : "Mobile Development", value:"0%"}]
    useEffect(() => {
        Aos.init({duration:3000})
    }, []);
    return(
        <div className="skill" id="skill">
            
                <div className="sectionStart">
                <h3>MY SKILLS</h3>
                
                <Lines/>
            
                </div>
                <h1>
                    My Advantages
                </h1>
                <div className="skillsContainer">

                    {skills.map((ele,i)=>(

                    <div className="skillItem" data-aos={i % 2 ==0? ("fade-right"):("fade-left")}>
                        <div> 
                        <ion-icon name="code-outline"></ion-icon>
                        </div>
                        <h1>{ele.name}</h1>
                        <div className="progress" >
                        <span style={{ width: ele.value }}></span>
                        </div>
                    </div>
                    ))}
                </div>
            
        </div>
    )
}
export default Skills