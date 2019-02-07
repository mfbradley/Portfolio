import React from "react";
import "./Typewriter.css";

class Typewriter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "",
            deleting: false,
            typingSpeed: "",
            count: 0
        }
    }
    type = () => {
        var wordArr = [ "Creative", "Web Developer", "Stylist", "Driven", "Outdoor Enthusiast", "Designer"]
        const { deleting, text, typingSpeed } = this.state;
        let count = this.state.count
        if (count === wordArr.length) {
           
                count = 0
        }

        this.setState({
            text: deleting ? wordArr[count].substring(0, text.length - 1) : wordArr[count].substring(0, text.length + 1),
            typingSpeed: deleting ? 30 : 150
        });

        if (!deleting && text === wordArr[count]) {

            setTimeout(() => this.setState({ deleting: true }), 500);

        } else if (deleting && text === '') {

            var newCount = count + 1
            this.setState({
                deleting: false,
                count: newCount
            });

        }

        setTimeout(this.type, typingSpeed);

    }

    componentDidMount() {
        this.type();
    }
    render() {
        return (
            <div id="Typewriter" className="Typewriter">{this.state.text}
            </div>
        )
    }
}

export default Typewriter;