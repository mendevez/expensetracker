import React from 'react';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ initialValues, onSubmit }) => {
  const { name, cost, description } = initialValues;
  const { register, handleSubmit } = useForm();
  const submitData = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="app-form add-box-shadow add-border-radius"
    >
      <input
        className="app-form-input "
        placeholder="Name"
        name="name"
        type="text"
        defaultValue={name}
        ref={register}
      />
      <input
        className="app-form-input "
        placeholder="Cost"
        name="cost"
        type="text"
        defaultValue={cost}
        ref={register}
      />

      <input
        className="app-form-input"
        placeholder="description"
        name="description"
        type="text"
        defaultValue={description}
        ref={register}
      />
      <button className="btn-form-button"> Submit </button>
    </form>
  );
};
export default ExpenseForm;
