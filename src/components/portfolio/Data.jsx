import evento from "../../assets/evento.jpg";
import friggering from "../../assets/fridgering.jpg";
import LandF from "../../assets/LandF.jpg";
import ChatApp from "../../assets/ChatApp.jpg";
import SeeThis from "../../assets/SeeThis.png";
import WeatherApp from "../../assets/WeatherApp.png";

export const projectsData = [
  {
    id: 1,
    image: evento,
    title: "Evento",
    category: "Web",
    description:
      "This project name “Evento”. Ticket System Web Application project was created as a project in the CPE241 subject. In this project we design and developed Font-End by Typescript, Back-End by Node.js ,and link API by Postman .  ",
    github: "https://github.com/Keetawin/CPE241-WebProject",
  },
  {
    id: 2,
    image: friggering,
    title: "Fridgering",
    category: "App",
    description:
      "Fridgering is a software that helps you create recipes from the ingredients in your fridge. It also helps you find recipes if you have an idea for a dish but don't know what ingredients to add. Team design application by Figma, use scrum process and plan by Notion. We develop application by flutter and link API by Postman.",
    github: "https://github.com/Keetawin/Fridgering",
  },
  {
    id: 3,
    image: LandF,
    title: "Learn with Friends Prototype",
    category: "Design",
    description:
      "This Design is Web-app for help student learning and planning. This same like MsTeam but It more friendly to use with friends. It only have a prototype.",
    figma:
      "https://www.figma.com/proto/g1zvRU3WGeq8wMdUhAywtc/Skoolio?node-id=9-1305&t=hd3lcz6nhYJtJJsv-1",
  },
  {
    id: 4,
    image: ChatApp,
    title: "Chat.app",
    category: "Web",
    description:
      "Chat.app is miniproject for learning Vite, and socket.io. Chat.app have minimal style and easy to learning to use.",
    github: "https://github.com/KongJen/Chat.app",
    web: "https://chat-app-dfco.onrender.com/",
  },
  {
    id: 5,
    image: SeeThis,
    title: "See.this",
    category: "Web",
    description:
      "See.this is a contemplative project centered around observing a rock, inviting reflection on the passage of time and the nature of patience. In a world filled with constant activity, sometimes simply watching a rock can provide a moment of calm amidst the chaos.",
    github: "https://github.com/KongJen/See.this",
    web: "see-this.vercel.app",
  },
  {
    id: 6,
    image: WeatherApp,
    title: "Weather.app",
    category: "App",
    description:
      "This is applicattion pull API from WeatherAPI use XML and JAVA to write this for review my knowledge.",
    github: "https://github.com/KongJen/Weather.App",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web",
  },
  {
    name: "App",
  },
  {
    name: "Design",
  },
];
