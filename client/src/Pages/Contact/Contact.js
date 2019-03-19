import React from 'react';
import Content from '../../Components/Content';
import ContactForm from "../../Components/ContactForm";
import './Contact.scss'

class Contact extends React.Component {

    render() {
        return (
            <div className="Contact">
                <Content className="contact-content"
                    contentTitle="Contact"
                    paragraph="Please fill out this form to get in touch"
                />
                <ContactForm />
            </div>
        )
    }
}

export default Contact;