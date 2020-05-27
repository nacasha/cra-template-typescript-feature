import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppNavigation.module.scss';

const AppNavigation: React.FC = () => (
  <div className={styles.container}>
    <Link to="/">
      Main
    </Link>
    <Link to="/features">
      Features
    </Link>
    <Link to="/includes">
      Includes
    </Link>
  </div>
);

export default AppNavigation;
