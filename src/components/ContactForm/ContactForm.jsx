import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { Input, Form, Button, Label } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handelSubmit}>
        <Label htmlFor={this.nameInputId}>
          <br />
          Name
          <br />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </Label>

        <Label htmlFor={this.numberInputId}>
          <br />
          Number
          <br />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </Label>
        <br />
        <Button type="submit">Add contacts</Button>
      </Form>
    );
  }
}
export default ContactForm;

ContactForm.propType = {
  name: PropTypes.string,
  number: PropTypes.string,
  handelSubmit: PropTypes.func,
  numberInputId: PropTypes.string,
  nameInputId: PropTypes.string,
};
