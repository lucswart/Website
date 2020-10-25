import * as React from "react";
import * as ReactFormWithConstraints from "react-form-with-constraints";
import "./ContactCss.css";

const {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback,
} = ReactFormWithConstraints;

class Form extends React.Component {
  handleChange = (e) => {
    this.form.validateFields(e.target);
  };

  contactSubmit = (e) => {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log("form is invalid: do not submit");
    } else {
      console.log("form is valid: submit");
    }
  };

  render() {
    return (
      <FormWithConstraints
        ref={(form) => (this.form = form)}
        onSubmit={this.contactSubmit}
        noValidate
      >
        <form
          class="form"
          action="https://formspree.io/f/mleobaov"
          method="POST"
        >
          <h2>CONTACT</h2>
          <p type="Naam:">
            <input
              name="name"
              size="30"
              placeholder="Naam"
              required
              onChange={this.handleChange}
              className="form-control"
            />
          </p>
          <FieldFeedbacks for="name">
            <FieldFeedback when="*" />
          </FieldFeedbacks>

          <p type="Email:">
            <input
              type="email"
              name="email"
              size="30"
              placeholder="Email"
              required
              onChange={this.handleChange}
              className="form-control"
            />
          </p>
          <FieldFeedbacks for="email">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
          <p type="Bericht:">
            <textarea
              name="comments"
              cols="40"
              rows="20"
              placeholder="Bericht"
              required
              minLength={5}
              onChange={this.handleChange}
              className="form-control"
            />
          </p>
          <FieldFeedbacks for="comments">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
          <input type="submit" class="Button" value="Versturen" />
          <div>
            <span class="fa fa-phone"></span>0613740759
            <span class="fa fa-envelope-o"></span> info@luccom.nl
          </div>
        </form>
      </FormWithConstraints>
    );
  }
}

const Contact = () => <Form />;

export default Contact;
