import Fitness from "../images/fitness_plan.png";
import Jate from "../images/jate.png";
import Social from "../images/social_network_api.png";
import Books from "../images/book-search.png";
import Gamer from "../images/gamer-match.png";
import Film from "../images/api_project.png";

const projects = [
  {
    id: 1,
    url: "https://github.com/Ryan-M-Taylor/Fitness-Plan",
    screenshot: Fitness,
    title: "Fitness Plan",
    description: "Application to create and share fitness plans",
    deployed: "https://protected-woodland-15218.herokuapp.com/",
    tech: "express, handlebars.js, mysql2, sequelize",
  },
  {
    id: 2,
    url: "https://github.com/Ryan-M-Taylor/PWA-Text-Editor",
    screenshot: Jate,
    title: "Just Another Text Editor",
    description: "A progressive web application text editor",
    deployed: "https://evening-ravine-79423.herokuapp.com/",
    tech: "IndexedDB, webpack, babel, service worker, manifest.json, progressive web application",
  },
  {
    id: 3,
    url: "https://github.com/Ryan-M-Taylor/MongoDB-Social-Network-API",
    screenshot: Social,
    title: "Social Network Api",
    description: "Creates social network using command line",
    deployed:
      "https://drive.google.com/file/d/1ZqOV_yQA6v2m9ms57sLEwMQX1uhbIq3e/view",
    tech: "MongoDB, mongoose, express, Node.js",
  },
  {
    id: 4,
    url: "https://github.com/Ryan-M-Taylor/Book-Search-Engine",
    screenshot: Books,
    title: "Book Search",
    description: "Application to search for books and save to favorites",
    deployed: "https://afternoon-shore-57278.herokuapp.com/",
    tech: "Apollo, API, GraphQL, MongoDB Atlas, Heroku",
  },
  {
    id: 5,
    url: "https://github.com/Ryan-M-Taylor/Gamer-Match",
    screenshot: Gamer,
    title: "Gamer Match",
    description: "Social gaming site to find other gamers to play with",
    deployed: "https://peaceful-brook-99319.herokuapp.com/",
    tech: "React, Bootstrap, Apollo, GraphQL, jsonwebtoken, bcrypt",
  },
  {
    id: 6,
    url: "https://github.com/Ryan-M-Taylor/API-Project",
    screenshot: Film,
    title: "Film Finder",
    description: "Application to search for movies and relevant movie info",
    deployed: "https://ryan-m-taylor.github.io/API-Project/",
    tech: "JavaScript, APIs, CSS, HTML",
  },
];

export default projects;
