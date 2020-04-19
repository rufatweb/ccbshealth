import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import * as emailjs from 'emailjs-com'

class QuoteForm extends React.Component {

  state = {
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    comment: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

  const { name, companyName, phoneNumber, email, comment } = this.state

  let templateParams = {
      from_name: name,
      emailAddress: email,
      notes: comment,
      phone: phoneNumber,
      company: companyName
    }


     emailjs.send(
      'gmail',
      'template_Uv0n3Bxw',
       templateParams,
      'user_DsPQJXfrLstvUgUPqLS9E'
    ).then(function(response) {
         console.log('SUCCESS!', response);
      }, function(error) {
         console.log('FAILED...', error);
      });



   this.setState({name: '',
     companyName: '',
     phoneNumber: '',
     email: '',
     comment: ''})

     this.props.handleSubmit()
    }

  render () {
    return  <div id="form">
    <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Name</label>
      <input name='name' value={this.state.name} placeholder='Name' onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Company Name</label>
      <input name='companyName' value={this.state.companyName} placeholder='Company Name' onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Phone Number</label>
      <input name='phoneNumber' type="number" value={this.state.phoneNumber} placeholder='Phone Number' onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input name='email' type="email" value={this.state.email} placeholder='Email Address' onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Comments</label>
      <textarea name='comment' value={this.state.comment} placeholder='...' onChange={this.handleChange}/>
    </Form.Field>
    <Button type='submit'>Get your quote</Button>
  </Form>
  </div>
  }
}

export default QuoteForm;
