import React from 'react';
import { useMessagesSearchString } from '../../hooks/useSearchParams/useSearchParams';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import styles from './Search.module.css';

interface SearchProps {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ input, handleInput }) => {
  const history = useHistory();
  const params = useMessagesSearchString({ search: input });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({
      pathname: '/home',
      search: params,
    });
  };

  return (
    <form
      name="search"
      className={classNames(
        'form-inline form-search pull-left',
        styles.searchGroup,
      )}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleInput}
        className={classNames('form-control', styles.searchInput)}
        type="text"
        value={input}
        name="search"
        placeholder="Search..."
      />
      <button
        type="submit"
        className={classNames('btn btn-search', styles.searchBtn)}
      >
        <i className={classNames('icon-search')} />
      </button>
    </form>
  );
};
