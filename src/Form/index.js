import React from 'react'
import { Button, Form } from 'semantic-ui-react'


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
    this.setState({name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    comment: ''})
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
      <input name='phoneNumber' value={this.state.phoneNumber} placeholder='Phone Number' onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input name='email' value={this.state.email} placeholder='email' onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Comments</label>
      <textarea name='comment' value={this.state.comment} placeholder='...' onChange={this.handleChange}/>
    </Form.Field>
    <Button type='submit' >Get your quote</Button>
  </Form>
  </div>
  }
}

export default QuoteForm;
