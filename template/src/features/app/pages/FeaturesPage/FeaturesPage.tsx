import React from 'react';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

import styles from './FeaturesPage.module.scss';

const FeaturesPage: React.FC = () => (
  <div className={styles.container}>
    <List>
      <ListItem>Typescript</ListItem>
      <ListItem>Feature First Organization</ListItem>
      <ListItem>Auto generate CSS Module definitions</ListItem>
      <ListItem>Popular ESLint rules to follow most best practices</ListItem>
      <ListItem>React Router and React Helmet Async</ListItem>
      <ListItem>
        Ready to use Redux setup configured using Redux Toolkit
        with support of persisting state
      </ListItem>
      <ListItem>
        VSCode debug configurations, workspace
        settings and recommended extensions
      </ListItem>
    </List>
  </div>
);

export default FeaturesPage;
