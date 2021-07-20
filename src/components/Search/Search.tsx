import React from 'react';
import { useMessagesSearchString } from '../../hooks/useSearchParams';
import { useHistory } from 'react-router';

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
      className="form-inline form-search pull-left"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleInput}
        className="form-control"
        type="text"
        value={input}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" className="btn btn-search">
        <i className="icon-search" />
      </button>
    </form>
  );
};
