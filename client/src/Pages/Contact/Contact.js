import React from 'react';
import NavBar from '../../Components/NavBar';
import Content from '../../Components/Content';

class Contact extends React.Component {

    render() {
        return (
            <div>
                <NavBar
                    text="Morgan Palacpac"
                    nav1="About"
                    nav2="Portfolio"
                    nav3="Contact"
                />

                <Content
                    contentTitle="Contact"
                    paragraph="Fill out this form to get in touch"
                />
            </div>
        )
    }
}

export default Contact;