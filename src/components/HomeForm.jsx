import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from './util/InputField';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 10) {
    errors.name = 'Must be 10 characters or less';
  }

  return errors;
};

function HomeForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={InputField} type="text" name="name" label="name" />

      <button type="submit">Enter</button>
    </form>
  );
}

export default reduxForm({
  form: 'home',
  validate,
})(HomeForm);
