import React from "react";
import "./Projects.css";
import crypto from "../../images/crypto.jpg";
// import Noted from "../../images/Noted.png";
import portfolio from "../../images/Portfolio.png";
// import inotepad from "../../images/inotepad.png";
// import chatApp from "../../images/chatApp.png";
// import cssChallenges from "../../images/cssChallenges.png";
import mySpotify from "../../images/myspotify.png";
import textUtils from "../../images/textutils.png";
import toDo from "../../images/todo.png";
import BookMyShow from "../../images/bookmyshow.png";
import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			projectName: "Crypto Dashboard",
			aboutProject: "an app to show real time cryptocurrency data ",
			description: "",
			imgURL: crypto,
			github: "https://github.com/nikhil-223/cryptocurrency-project",
			projectURL: "https://crypto-currency-board.netlify.app",
		},
		// {
		// 	projectName: "Talkr",
		// 	aboutProject: "a chatting app",
		// 	description: "In progress",
		// 	imgURL: chatApp,
		// 	github: "https://github.com/nikhil-223/chatting-app",
		// 	projectURL: "https://chatttingapp.netlify.app",
		// },
		// {
		// 	projectName: "Inotepad",
		// 	aboutProject: "a note making app",
		// 	description: "In progress",
		// 	imgURL: inotepad,
		// 	github: "https://github.com/nikhil-223/inotepad",
		// 	projectURL: "https://inotepad.netlify.app",
		// },
		// {
		// 	projectName: "Noted",
		// 	aboutProject: "a note making app created using Next.js",
		// 	description: "",
		// 	imgURL: Noted,
		// 	github: "https://github.com/nikhil-223/noted",
		// 	projectURL: "https://tobenoted.vercel.app",
		// },
		{
			projectName: "Portfolio",
			aboutProject: "My personal portfolio website",
			description: "",
			imgURL: portfolio,
			github: "https://github.com/nikhil-223/myPortfolio",
			projectURL: "https://nikhilshekhawat.netlify.app",
		},
		
		{
			projectName: "My Spotify",
			aboutProject: "Spotify Clone",
			description: "",
			imgURL: mySpotify,
			github: "https://github.com/Vijaypal2000/My-Spotify",
			projectURL: "https://my-spotify-omega.vercel.app/",
		},
		{
			projectName: "TextUtils",
			aboutProject: "count words,covert to uppercase,lowercase etc",
			description: "in progress",
			imgURL: textUtils,
			github: "https://github.com/Vijaypal2000/textutils",
			projectURL: "https://textutils-vijaypal2000.vercel.app/",
		},
		{
			projectName: "ToDo",
			aboutProject: "a user create,read,edit,delete to-do task",
			description: "",
			imgURL: toDo,
			github: "https://github.com/Vijaypal2000/react-todo-app",
			projectURL: "https://react-todo-app-vijaypal2000.vercel.app/",
		},
		{
			projectName: "Movie booking backend project",
			aboutProject: "an alma better capstone project",
			description: "",
			imgURL: BookMyShow,
			github: "https://github.com/nikhil-223/bookmyshow-project-server",
			projectURL: "https://bookmyshow-project-client.vercel.app",
		},
	];

	//intersection observer
		const cards= document.querySelectorAll('.project')
		const observer= new IntersectionObserver(entries =>{
			entries.forEach((entry,index)=>{
				entry.target.style.transitionDelay=`${index/10}s`
				if(entry.isIntersecting)
				entry.target.classList.add('visibleUp')
			})
		},{
			threshold:0.1
		})
		cards.forEach(card=>{
			observer.observe(card)
		})

	return (
		<section id="projects">
			<div className="projects-header">
				<span>
					<span className="darkText">{`P`}</span>ROJECTS</span>
			</div>
			<div className="project-list">
				{projects.map((item) => {
					return (
						<Project
							key={item.projectName}
							projectName={item.projectName}
							imgURL={item.imgURL}
							projectURL={item.projectURL}
							projectDesc={item.description}
							aboutProject={item.aboutProject}
							github={item.github}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
