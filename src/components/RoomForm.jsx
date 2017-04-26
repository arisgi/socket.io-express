import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from './util/InputField';

const validate = (values) => {
  const errors = {};

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 80) {
    errors.message = 'Must be 80 characters or less';
  }

  return errors;
};

function RoomForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={InputField} type="text" name="message" label="message" />

      <button type="submit">Send</button>
    </form>
  );
}

export default reduxForm({
  form: 'room',
  validate,
})(RoomForm);
