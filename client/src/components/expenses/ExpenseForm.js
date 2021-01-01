import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ initialValues, onSubmit, title, buttonText }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: initialValues,
  });
  const submitData = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitData)}
        className="app-form add-border-radius add-box-shadow"
      >
        <h3 className="app-form-title">{title}</h3>
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
        {errors.category && (
          <span className="app-form-error">Please select a category</span>
        )}

        <input
          className="app-form-input"
          placeholder="Name"
          name="name"
          type="text"
          ref={register({
            required: true,
            pattern: /[a-zA-z]+/,
          })}
        />
        {errors.name?.type === 'required' && (
          <span className="app-form-error"> Name is required</span>
        )}
        {errors.name?.type === 'pattern' && (
          <span className="app-form-error"> Name can only be alphabetic</span>
        )}
        <input
          className="app-form-input "
          placeholder="Cost"
          name="cost"
          type="text"
          ref={register({
            required: true,
            pattern: /^[0-9]*$/,
          })}
        />
        {errors.cost && (
          <span className="app-form-error"> Cost is required</span>
        )}
        {errors.cost && (
          <span className="app-form-error"> Cost must be a number </span>
        )}

        <input
          className="app-form-input"
          placeholder="description"
          name="description"
          type="text"
          ref={register}
        />

        <button className="btn-form"> {buttonText} </button>
      </form>
    </div>
  );
};

ExpenseForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ExpenseForm;
