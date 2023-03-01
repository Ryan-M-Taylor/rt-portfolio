import Fitness from "../images/fitness_plan.png";
import Jate from "../images/jate.png";
import Social from "../images/social_network_api.png";
import Tech from "../images/tech_blog.png";
import Note from "../images/note-taker.png";
import Film from "../images/api_project.png";

const projects = [
  {
    id: 1,
    url: "https://github.com/Ryan-M-Taylor/Fitness-Plan",
    screenshot: Fitness,
    title: "Fitness plan",
    description: "Creates fitness plan",
    deployed: "https://protected-woodland-15218.herokuapp.com/",
  },
  {
    id: 2,
    url: "https://github.com/Ryan-M-Taylor/PWA-Text-Editor",
    screenshot: Jate,
    title: "Just Another Text Editor",
    description: "Text editor",
    deployed: "https://evening-ravine-79423.herokuapp.com/",
  },
  {
    id: 3,
    url: "https://github.com/Ryan-M-Taylor/MongoDB-Social-Network-API",
    screenshot: Social,
    title: "Social Network Api",
    description: "Creates social network",
    deployed:
      "https://drive.google.com/file/d/1ZqOV_yQA6v2m9ms57sLEwMQX1uhbIq3e/view",
  },
  {
    id: 4,
    url: "https://github.com/Ryan-M-Taylor/MVC-Tech-Blog",
    screenshot: Tech,
    title: "Tech Blog",
    description: "Pro tech blog",
    deployed: "https://agile-thicket-19861.herokuapp.com/",
  },
  {
    id: 5,
    url: "https://github.com/Ryan-M-Taylor/Note-Taker",
    screenshot: Note,
    title: "Note Taker",
    description: "Helps take notes",
    deployed: "https://rmt-note-taker.herokuapp.com/",
  },
  {
    id: 6,
    url: "https://github.com/Ryan-M-Taylor/API-Project",
    screenshot: Film,
    title: "Film Finder",
    description: "Searches for movies",
    deployed: "https://ryan-m-taylor.github.io/API-Project/",
  },
];

export default projects;
