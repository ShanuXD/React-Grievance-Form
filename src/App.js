import "./App.scss";
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import AllContacts from "./components/AllContacts";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
    };
  }

  addContact = (contact)=>{
    this.setState({
      contacts:[...this.state.contacts, contact]
    })
  }

  updateContactStatus = (index, status)=>{
    const {contacts} = this.state

    const updated_contacts = contacts.map((contact, idx)=>{
    if(idx!==index) return contact
    return {...contact, status: status}
    })

    this.setState({
      contacts: updated_contacts
    })    
  }

  render() {

    return (
      <div className="container">
        <h1>Grievance Form</h1>
        <ContactForm addContact={this.addContact}/>
        <AllContacts contacts={this.state.contacts} updateContactStatus={this.updateContactStatus} />
      </div>
    );
  }
}
