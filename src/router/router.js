/* Modules */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Layout from './Layout';
/* Containers */
import App from '../containers/App/App';
import DetailsPage from '../containers/DetailsPage/DetailsPage';

const MyRouter = () => (
  <React.Fragment>
    <Layout>
      <Route exact path="/" component={App} />
      <Route exact path="/details-page/:id" component={DetailsPage} />
    </Layout>
  </React.Fragment>
);

export default withRouter(connect()(MyRouter));
