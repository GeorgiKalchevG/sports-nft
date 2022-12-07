import React, { FC, ReactNode } from 'react';
import styles from './index.module.scss'
import cx from 'classnames'
const Button: FC<{ children: ReactNode, kind?: 'primary' | 'secondary', size?:'small'}> = ({children, kind = 'primary', size=''}) => {

  return (
    <button className={cx(styles[kind], styles.button, styles[size])}>
      <span>{children}</span>
    </button>
  );
};

export default Button;