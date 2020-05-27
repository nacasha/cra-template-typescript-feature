import React from 'react';

import List from '../../components/List';
import ListHeader from '../../components/ListHeader';
import ListItem from '../../components/ListItem';

import styles from './IncludesPage.module.scss';

const IncludesPage: React.FC = () => (
  <div className={styles.container}>
    <List>
      <ListHeader>Included dependencies</ListHeader>
      <ListItem>@reduxjs/toolkit</ListItem>
      <ListItem>connected-react-router</ListItem>
      <ListItem>history</ListItem>
      <ListItem>node-sass</ListItem>
      <ListItem>react-helmet-async</ListItem>
      <ListItem>react-redux</ListItem>
      <ListItem>react-router</ListItem>
      <ListItem>react-scripts</ListItem>
      <ListItem>redux-persist</ListItem>
    </List>
  </div>
);

export default IncludesPage;
