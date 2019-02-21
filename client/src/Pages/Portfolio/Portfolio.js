import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import './Portfolio.css';
import ProjectSquare from "../../Components/ProjectSquare";

import Image from '../../Components/Image';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Portfolio">
                <div className="container">
                    <h1 className="title">Portfolio</h1>
                    <div className="port-images">
                        <ProjectSquare
                            projectText={"Train Scheduler"}
                            languages={"HTML, CSS, Js, jQuery, Firebase, Moment.js"}
                            github={"https://github.com/mfbradley/Train-Scheduler"}
                            site={"https://mfbradley.github.io/Train-Scheduler/"} />
                        <ProjectSquare
                            projectText={"Psychic Game"}
                            languages={"HTML, CSS, Bootstrap, JS"}
                            github={"https://github.com/mfbradley/Psychic-Game"}
                            site={"https://mfbradley.github.io/Psychic-Game/"}
                        />
                        <ProjectSquare
                            projectText={"Mongo News Scraper"}
                            languages={"HTML, CSS, Bootstrap, JS, jQuery, Node.js, Express, MongoDB, Mongoose, Cheerio, Request, Heroku"}
                            github={"https://github.com/mfbradley/mongo_scraper"}
                            site={"https://secret-depths-22228.herokuapp.com/index.html#"}
                        />
                        <ProjectSquare
                            projectText={"React Memory Game"}
                            languages={"React, create-react-app, CSS, JSX"}
                            github={"https://github.com/mfbradley/clicky_react_app"}
                            site={"https://mfbradley.github.io/clicky_react_app"}
                        />
                        <ProjectSquare
                            projectText={"Gif App"}
                            languages={"HTML, CSS, JS, jQuery, Giphy API, Ajax"}
                            github={"https://github.com/mfbradley/GifTastic"}
                            site={"https://mfbradley.github.io/GifTastic/"}
                        />


                    </div>
                    <div className="port-images2">
                        <ProjectSquare
                            projectText={"Trivia"}
                            languages={"HTML, CSS, JS, jQuery"}
                            github={"https://github.com/mfbradley/TriviaGame"}
                            site={"https://mfbradley.github.io/TriviaGame/"}
                        />
                        <ProjectSquare
                            projectText={"Burger App"}
                            languages={"Node.js, MVC, Express, Handlebars, MySQL"}
                            github={"https://github.com/mfbradley/burger"}
                            site={"https://floating-brushlands-15137.herokuapp.com/"}
                        />
                        <ProjectSquare 
                            projectText={"Polimotions"}
                            languages={"HTML, CSS, Bootstrap, JS, jQuery, Face Plus Plus, Firebase"}
                            github={"https://github.com/mfbradley/Polimotions"}
                            site={"https://mfbradley.github.io/Polimotions/"}
                        />
                        <ProjectSquare 
                            projectText={"Convoy Group Travel"}
                            languages={"Materialize, Node.js, Express, SendGrid, Yarn, Firebase, Google Maps, React"}
                            github={"https://github.com/mfbradley/convoy"}
                            site={"https://warm-woodland-20139.herokuapp.com/"}
                        />
                        <ProjectSquare
                            projectText={"Harry Potter RPG"}
                            languages={"HTML, CSS, JS, jQuery, Bootstrap"}
                            github={"https://github.com/mfbradley/week-4-game"}
                            site={"https://mfbradley.github.io/week-4-game/"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;