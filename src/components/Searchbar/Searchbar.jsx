import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, FormEl, Button, InputName } from './Searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  // Відповідає за оновлення стану
  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({ searchQuery: value.toLowerCase() });
  };

  //   Викликається під час відправлення форми
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('Please fill the form !', {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Header>
        <FormEl onSubmit={this.handleSubmit}>
          <InputName
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleChange}
          />
          <Button type="submit">Search</Button>
        </FormEl>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
