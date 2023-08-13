import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  handleSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
