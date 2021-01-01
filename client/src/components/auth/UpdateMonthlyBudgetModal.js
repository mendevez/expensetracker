import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from '../../redux/selectors/modalSelectors';
import { updateMonthlyBudget } from '../../redux/actions/authActions';
const UpdateMonthlyBudgetModal = () => {
  const dispatch = useDispatch();
  const userMonthlyBudget = useSelector(selectModalData);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { monthlyBudget: userMonthlyBudget },
  });
  const submitData = (data) => {
    dispatch(updateMonthlyBudget(data));
  };
  return (
    <div className="modal-update-monthly-budget add-border-radius">
      <form className="modal-form" onSubmit={handleSubmit(submitData)}>
        <h1 className="app-form-title">Update Monthly Budget</h1>
        <input
          className="app-form-input"
          name="monthlyBudget"
          placeholder="Monthly Budget"
          type="text"
          ref={register({
            required: true,
            pattern: /^[0-9]*$/,
          })}
        />
        {errors.monthlyBudget && (
          <span className="app-form-error"> Monthly budget is required</span>
        )}
        {errors.monthlyBudget && (
          <span className="app-form-error">
            Monthly budget must be a number
          </span>
        )}
        <button className="btn-form">Update</button>
      </form>
    </div>
  );
};

export default UpdateMonthlyBudgetModal;
