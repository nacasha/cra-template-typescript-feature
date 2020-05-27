import React from 'react';

import AppNavigation from '../AppNavigation';

import styles from './AppLayout.module.scss';

const AppLayout: React.FC = ({ children }) => (
  <div className={styles.mainPage}>
    <div className={styles.mainPageContent}>
      {children}

      <AppNavigation />
    </div>
  </div>
);

export default AppLayout;
