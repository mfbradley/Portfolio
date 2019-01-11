import React from 'react';
import NavBar from '../../Components/NavBar';

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