import React from 'react';
import classNames from 'classnames';
import styles from './Loader.module.scss';

interface LoaderProps {
  small: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ small }) => {
  return (
    <div
      className={classNames(
        small ? styles.loader : [styles.loader, styles.loader_big],
      )}
    />
  );
};
