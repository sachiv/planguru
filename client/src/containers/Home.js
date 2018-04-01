import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <section class="hero is-dark is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Full Height title
      </h1>
        <h2 class="subtitle">
          Full Height subtitle
      </h2>
      </div>
    </div>
  </section>
);

export default Home;
