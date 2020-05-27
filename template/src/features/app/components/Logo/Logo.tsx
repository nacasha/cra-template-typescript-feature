import React from 'react';

import logo from 'src/assets/logo.svg';

import styles from './Logo.module.scss';

const Logo: React.FC = () => (
  <img
    className={styles.logo}
    src={logo}
    alt="logo"
  />
);

export default Logo;
