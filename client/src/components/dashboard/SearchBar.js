import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import {
  getExpenses,
} from '../../redux/actions/expenseActions';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getExpenses(keyword));
  };
  return (
    <form onSubmit={handleSubmit} className="search-bar ">
      <input
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search expenses"
        className="search-bar-input add-border-radius"
      />
      <button className="btn-search ">
        <FontAwesomeIcon icon="search" />
      </button>
    </form>
  );
};

export default SearchBar;
