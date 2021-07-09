import React, { Component } from "react";

export default class AllContacts extends Component {

  render() {
    const { contacts, updateContactStatus } = this.props;

    const all_contacts = contacts.map((contact, index) => {
      const { email, title, description, status } = contact;
      
      return (
        <div className="contact" key={index}>
          <div className="contact__email">{email}</div>
          <div className="contact__title">{title}</div>
          <div className="contact__description">{description}</div>
          <div className="contact__status">
            {status === null?
            <div>
                <button className="btn resolve" onClick={(event)=>updateContactStatus(index, event.target.innerText)}>Resolve</button>
                <button className="btn reject" onClick={(event)=>updateContactStatus(index, event.target.innerText)}>Reject</button>
            </div>:
            <div className={ status==="Resolve"?`resolve`:"reject"}>
                {status}
            </div>
            }
            
          </div>
        </div>
      );
    });

    return (
    <div className="all-contacts">
        {contacts.length !==0 ?all_contacts: "No Contact Present!" }
    </div>);
  }
}
