import React from 'react';
import {
  useMessagesSearchString,
  useResetSearch,
  useSearchParams,
} from '../../hooks/useSearchParams/useSearchParams';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import styles from './Search.module.css';

interface SearchProps {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
}

export const Search: React.FC<SearchProps> = ({
  input,
  handleInput,
  resetInput,
}) => {
  const history = useHistory();
  const params = useMessagesSearchString({ search: input });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({
      pathname: '/home',
      search: params,
    });
  };

  const paramsWithoutSearch = useResetSearch();

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push({
      pathname: '/home',
      search: paramsWithoutSearch,
    });
    resetInput();
  };

  return (
    <form
      name="search"
      className={classNames(
        'form-inline form-search pull-left',
        styles.searchForm,
      )}
      onSubmit={handleSubmit}
    >
      <div className={classNames(styles.searchGroup)}>
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
      </div>
      <button
        type="reset"
        onClick={handleReset}
        className={classNames(
          useSearchParams().search
            ? styles.resetBtn
            : [styles.resetBtn, styles.resetBtn_hidden],
        )}
      >
        reset search
      </button>
    </form>
  );
};
