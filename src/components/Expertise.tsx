import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareGitlab } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "React.js",
    "Node.js",
    "Express.js",
    "Golang",
    "C++",
    "C#",
    "Java",
    "Python",
    "SQL",
    "SQLite",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "GitLab",
    "Linux",
    "Pandas",
    "Selenium",
    ".NET",
    "OpenGL",
    "Window Forms",
    "PyQt5",
    "REST API",
    "WPF"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="4x" />
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Node.js. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSquareGitlab} size="4x" />
                    <h3>Tech & Automation</h3>
                    <p>Following are the technologies that I have worked with.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>                
            </div>
        </div>
    </div>
    );
}

export default Expertise;