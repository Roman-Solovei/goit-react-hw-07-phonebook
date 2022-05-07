import React from 'react';
import { useDeleteContactMutation } from 'redux/contactSlice';
import PropTypes from 'prop-types';
import s from './contactlistitem.module.css';



export default function ContactListItem({ name, phone, id }) {
  
const [delContact, { isLoading: isDeleting }] = useDeleteContactMutation();  

    return (<li className={s.listItem} key={ id }>
        { name }:   { phone } 
        <button className={s.listButton}
            onClick={()=>delContact(id)}
            disabled={ isDeleting }
        >
            { !isDeleting ? "Delete" : "Deleting..." } 
            
        </button>
    </li>)
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,    
}
