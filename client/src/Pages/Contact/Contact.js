import React from 'react';
import Content from '../../Components/Content';
import './Contact.css'

class Contact extends React.Component {

    render() {
        return (
            <div className="Contact">
                <Content
                    contentTitle="Contact"
                    paragraph="Fill out this form to get in touch"
                />
            </div>
        )
    }
}

export default Contact;