import React from "react";
import css from "./ContactsList.module.css"

    const ContactList =({contactsArr, deleteContact}) => (
    
        contactsArr.map(contact => (
        <li key={contact.id}>
            <span  className={css["span-name"]}>{contact.name}:</span>
            <span  className={css["span-number"]}>{contact.number}</span> 
            <button 
                type="button"
                className={css["delete-btn"]}
                onClick={() => deleteContact(contact.id)}
                id={contact.id}
            >Delete
            </button>
        </li>
    ))
    )

export default ContactList;

