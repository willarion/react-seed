import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  styleType,
  ...props
}) => {
  return (
    <button
      className={classNames(className, styles.button, styles[styleType])}
      {...props}
    />
  );
};
