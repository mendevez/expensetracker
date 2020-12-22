import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { setSearchKeyword } from '../../redux/actions/expenseActions';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchKeyword(keyword));
  };
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search expenses"
        className="search-bar-input"
      />
      <button className="btn-search">
        <FontAwesomeIcon icon="search" />
      </button>
    </form>
  );
};

export default SearchBar;
