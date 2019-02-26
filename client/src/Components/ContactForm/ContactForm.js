import React from "react";
import "./ContactForm.css";

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form action="https://formspree.io/your@email.com" method="POST">
                <input type="text" name="name" />
                <input type="email" name="_replyto" />
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default ContactForm;