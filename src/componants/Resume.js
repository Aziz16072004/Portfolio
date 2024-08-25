import { useEffect, useState } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos'
function Resume() {
    
    const content = {
        experience: {
            name: "Experience",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            items: [
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
            ],
        },
        education: {
            name: "Education",
            items: [
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
                {
                    date: "2023",
                    name: "FullStack Web development bootcamp",
                    path: "codecademy",
                },
            ],
        },
        skills: {
            name: "Skills",
            description: "List your skills here.",
            items: [
                
                { name: "JavaScript" , icon:"logo-javascript" },
                { name: "React" , icon:"logo-react" },
                { name: "CSS" , icon:"logo-css3" },
                { name: "Node.js" , icon:"logo-nodejs" },
                { name: "HTML" , icon:"logo-html5" },
            ],
        },
        aboutMe: {
            name: "About Me",
            description: "Write a brief introduction about yourself.",
            items:[
                {name : "Name" , value:"Aziz Chaabani"},
                {name : "Experience" , value:"0 year"},
                {name : "Nationality" , value:"Tunisian"},
                {name : "Freelance" , value:"Available"},
                {name : "Phone" , value:"(212) 50 551 663"},
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
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
                    {resumeContent.description && <p>{resumeContent.description}</p>}
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