import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://mb0227.github.io/Chess/index.html" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mb0227.github.io/Chess/index.html" target="_blank" rel="noreferrer"><h2>Chess</h2></a>
                <p>Developed a chess game application with multiplayer features such as Human vs Human in normal and Chess960 mode along with Human Vs AI using C# and WPF.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Collision-Detection-Project" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Collision-Detection-Project" target="_blank" rel="noreferrer"><h2>Collision Detection and Response</h2></a>
                <p>Developed a collision detection and response system with C++ and OpenGL (freeglut). </p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Restaurant-Management-System" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Restaurant-Management-System" target="_blank" rel="noreferrer"><h2>Restaurant Management System</h2></a>
                <p>Developed a restaurant management system using C#, Window Forms and SQL, allowing for efficient handling of orders and inventory management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Tetris" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Tetris" target="_blank" rel="noreferrer"><h2>Tetris</h2></a>
                <p>Developed a classic Tetris game using Java, featuring multiple levels and a scoring system.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Online-Store-Scrapper-Sorter" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Online-Store-Scrapper-Sorter" target="_blank" rel="noreferrer"><h2>Online Store Scrapper and Sorter</h2></a>
                <p>This application built in Python using PyQt5, scrapes online stores data and allows searching and sorting using various algorithms and displays their time complexity.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Solitaire-Console" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Solitaire-Console" target="_blank" rel="noreferrer"><h2>Klondike Solitaire</h2></a>
                <p>Developed a console version of the classic Klondike Solitaire game using C#. The game features a user-friendly interface and follows standard Solitaire rules.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/book-api-js" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/book-api-js" target="_blank" rel="noreferrer"><h2>Book API JS</h2></a>
                <p>Developed a RESTful API for managing book data using Node.js, Express and MongoDB. The API supports CRUD operations and is designed for scalability and performance.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Password-Manager-CPP" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Password-Manager-CPP" target="_blank" rel="noreferrer"><h2>Password Manager</h2></a>
                <p>Developed a custom password manager application using C++ that securely stores and manages user passwords with encryption.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Warzone" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Warzone" target="_blank" rel="noreferrer"><h2>Warzone</h2></a>
                <p>Developed a fun game using C# and Window Forms, making use of OOP and Design Pattern concepts.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mb0227/Password-Generator" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mb0227/Password-Generator" target="_blank" rel="noreferrer"><h2>Password Generator</h2></a>
                <p>Developed a custom password generator application using React.js that creates secure passwords based on user-defined criteria.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;