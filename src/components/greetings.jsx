import React from "react";
import './greetings.css';

export default function Greetings(props) {

    const messages = {
        de: 'Hallo',
        fr: 'Bonjour',
        en: 'Hi',
    };

    const message = messages[props.lang] || messages['en'];

    return (
        <div>
            {message} {props.children}
        </div>
    );
}
    
    // if (lang === "de") {
    //     return `hallo + ${children}`
    // }
    // if (lang === "fr") {
    //     return `Coucou + ${children}`
    // }
    // if (lang === "en") {
    //     return `hi + ${children}`
    // }