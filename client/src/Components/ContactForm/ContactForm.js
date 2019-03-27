import React from "react";
import "./ContactForm.scss";

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form id="contact-form" action="https://formspree.io/mbradleystylist@gmail.com" method="POST">
               
                <input className="name-input" placeholder="Name" type="text" name="name" />
                <input placeholder="Company" type="text" name="company" />
                <input placeholder="Email" type="email" name="_replyto" />
                <input placeholder="Phone Number" type="phone" name="phone" />
                <textarea form="contact-form" rows="5" columns="100" name="message" placeholder="Message"></textarea>

                <input id="submit" type="submit" value="Send" />
            </form>
        )
    }
}

export default ContactForm;