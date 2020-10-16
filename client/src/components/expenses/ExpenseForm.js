import React from 'react';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ initialValues, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: initialValues,
  });
  const submitData = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="app-form add-box-shadow add-border-radius"
    >
      {errors.name && (
        <span className="app-form-errors"> Name is required</span>
      )}
      {errors.cost && (
        <span className="app-form-errors"> Cost is required</span>
      )}
      {errors.category && (
        <span className="app-form-errors">Please select a category</span>
      )}

      <select
        placeholder="Category"
        className="app-form-input"
        name="category"
        ref={register({
          required: true,
        })}
      >
        <option value="" disabled>
          Category
        </option>
        <option value="Rent">Rent</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Clothing">Clothing</option>
        <option value="Insurance">Insurance</option>
        <option value="Education">Education</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      
      <input
        className="app-form-input "
        placeholder="Name"
        name="name"
        type="text"
        ref={register({
          required: true,
        })}
      />
      <input
        className="app-form-input "
        placeholder="Cost"
        name="cost"
        type="text"
        ref={register({
          required: true,
        })}
      />

      <input
        className="app-form-input"
        placeholder="description"
        name="description"
        type="text"
        ref={register}
      />

      <button className="btn-form-button"> Submit </button>
    </form>
  );
};
export default ExpenseForm;
