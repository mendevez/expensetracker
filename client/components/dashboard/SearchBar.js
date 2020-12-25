import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setSearchKeyword } from '../../redux/actions/expenseActions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchKeyword(keyword));
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
