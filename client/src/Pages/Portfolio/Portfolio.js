import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import './Portfolio.scss';
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
                        <ProjectSquare className="two"
                            projectText={"Train Scheduler"}
                            languages={"HTML, CSS, Js, jQuery, Firebase, Moment.js"}
                            github={"https://github.com/mfbradley/Train-Scheduler"}
                            site={"https://mfbradley.github.io/Train-Scheduler/"} />

                        <ProjectSquare className="three"
                            projectText={"News Scraper"}
                            languages={"Node.js, Express, Handlebars, MongoDB, Mongoose, Cheerio, Request, Heroku"}
                            github={"https://github.com/mfbradley/mongo_scraper"}
                            site={"https://secret-depths-22228.herokuapp.com/"}
                        />
                        <ProjectSquare
                            projectText={"Burger App"}
                            languages={"Node.js, MVC, Express, Handlebars, MySQL"}
                            github={"https://github.com/mfbradley/burger"}
                            site={"https://floating-brushlands-15137.herokuapp.com/"}
                        />
                        <ProjectSquare
                            projectText={"Convoy"}
                            languages={"Materialize, Node.js, Express, SendGrid, Yarn, Firebase, Google Maps, React"}
                            github={"https://github.com/mfbradley/convoy"}
                            site={"https://warm-woodland-20139.herokuapp.com/"}
                        />
                        <ProjectSquare
                            projectText={"Flash Cards"}
                            languages={"React, JSX, Materialize, CSS"}
                            github={"https://github.com/amesmr/js-flashcards"}
                            site={"https://flashcards-and-quizzes.herokuapp.com/"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;