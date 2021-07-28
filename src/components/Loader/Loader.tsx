import React from 'react';
import classNames from 'classnames';
import styles from './Loader.module.scss';

export const Loader: React.FC = ({}) => {
  return <div className={classNames(styles.loader)} />;
};
