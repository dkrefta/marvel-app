import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { debounce } from 'lodash';
import SearchForm from '../SearchForm/SearchForm';

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={debounce(this.props.onChange, 2000)}
        />
      </div>
    );
  }
}

SearchBar = reduxForm({
  form: 'SearchForm'
})(SearchBar);

export default SearchBar;
