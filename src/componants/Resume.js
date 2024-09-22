import { useEffect, useState } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos'
function Resume() {
    
    const content = {
        experience: {
            name: "Experience",
            items: [
                {
                    date: "2023",
                    name: "a trainer at WeCode",
                    path: "Youth Center-tunis",
                },
                {
                    date: "2023",
                    name: "Member in GDSC (Google Developer Student Club)",
                    path: "Manar University",
                },
                {
                    date: "2023",
                    name: "Member in Discovery Club Junior",
                    path: "Manouba",
                },
                {
                    date: "2021",
                    name: "Member in  Youth Center ",
                    path: "Youth Center-Tunis",
                }
            ],
        },
        education: {
            name: "Education",
            items: [
                {
                    date: "2023-2025",
                    name: "currently studying Computer Engineering",
                    path: "Manar University",
                },
                {
                    date: "2023",
                    name: "received my high school diploma in Computer Science ",
                    path: "Tunis",
                },
                
            ],
        },
        skills: {
            name: "Skills",
            items: [
                
                { name: "JavaScript" , icon:"logo-javascript" },
                { name: "React" , icon:"logo-react" },
                { name: "CSS" , icon:"logo-css3" },
                { name: "Node.js" , icon:"logo-nodejs" },
                { name: "HTML" , icon:"logo-html5" },
                { name: "Ardouino" , icon:"hardware-chip-outline" },
            ],
        },
        aboutMe: {
            name: "About Me",
            items:[
                {name : "Name" , value:"Aziz Chaabani"},
                {name : "Experience" , value:"0 year"},
                {name : "Nationality" , value:"Tunisian"},
                {name : "Freelance" , value:"Available"},
                {name : "Phone" , value:"(216) 50 551 663"},
                {name : "Email" , value:"mouhamedazizchaabani@gmail.com"},
                {name : "Languages" , value:"Arab , English , Frensh "},
            ]
        },
    };

    const [resumeContent, setResumeContent] = useState({});

    useEffect(() => {
        setResumeContent(content.experience); // Default to experience
    }, []);

    const handleButtonClick = (section) => {
        setResumeContent(content[section]);
    };
    useEffect(() => {
        Aos.init({duration:3000})
    }, []);
    return (
        <div className="resume container">
            <div className="resumeFeature" data-aos="fade-up">
                <h1>Why Hire me?</h1>
                <p>With my strong background in Web Development, hands-on experience as a trainer, and commitment to continuous learning, I am confident that I can bring value to your team and help drive impactful results</p>
                <div>
                    {Object.keys(content).map((key) => (
                        <button
                            key={key}
                            onClick={() => handleButtonClick(key)}
                            className={resumeContent.name === content[key].name ? "activeItem" : ""}
                        >
                            {content[key].name}
                        </button>
                    ))}
                </div>
            </div>

            {resumeContent.name && (
                <div className="resumeContant" data-aos="fade-up">
                    <h1>{resumeContent.name}</h1>
                    <div className="resumeContantContainer">
                    {(resumeContent.name === "Experience" || resumeContent.name === "Education") &&
    resumeContent.items.map((item, index) => (
        <div key={index} className="resumeContantItem">
            {item.date && <p className="resumeContantItemDate">{item.date}</p>}
            <h2 className="resumeContantItemName">{item.name}</h2>
            {item.path && (
                <p className="resumeContantItemPath">
                    <span>.</span>
                    {item.path}
                </p>
            )}
        </div>
    ))}
     {resumeContent.name === "Skills" &&
    resumeContent.items.map((item,index)=>(
        <div className="skillContantItem">
            <ion-icon name={item.icon}></ion-icon>
        </div>
    ))}
     {resumeContent.name === "About Me" && (
    <div className="AboutMe">
        {resumeContent.items.map((item, index) => (
            <div key={index} className="AboutMeItem">
                <p>{item.name} <span>{item.value}</span></p> 
            </div>
        ))}
    </div>
)}

                    </div>
                </div>
            )}
        </div>
    );
}

export default Resume;