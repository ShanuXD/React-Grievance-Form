import React, { Component } from 'react'

export default class ContactForm extends Component {

    handelForm = (event)=>{
        event.preventDefault()
        const email = event.target.elements.email.value
        const title = event.target.elements.title.value
        const description = event.target.elements.description.value

        const contact ={
            email,
            title,
            description,
            status: null
        }

        this.props.addContact(contact)

    }

    render() {
        return (
            <div className="form-container">
                <form className="form" onSubmit={this.handelForm}>
                    <label htmlFor="email">Email:</label>
                    <input required name="email" type="email" placeholder="Enter your email..." />
                    <br />
                    <label htmlFor="title">Title:</label>
                    <input required name="title" type="text" placeholder="Enter a title"/>
                    <br />
                    <label htmlFor="description">Description:</label>
                    <input required name="description" type="text" placeholder="Provide a discription"/>
                    <br />
                    <button>Sumit</button>
                </form>
            </div>
        )
    }
}
