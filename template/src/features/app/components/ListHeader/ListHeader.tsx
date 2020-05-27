import React from 'react';

import styles from './ListHeader.module.scss';

const ListItem: React.FC = ({ children }) => (
  <li className={styles.listHeader}>
    {children}
  </li>
);

export default ListItem;
