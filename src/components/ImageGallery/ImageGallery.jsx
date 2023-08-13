import { Component } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imagesApi from 'services/imagesApi';
import { ImageGalleryError } from '../ImageGalleryError/ImageGalleryError';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    error: null,
    status: 'idle',
    currentPage: 1,
    isActive: true,
    totalPages: 0, // Зберігає загальну кількість сторінок
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery || prevState.currentPage !== currentPage) {
      console.log('searchQuery changed');
      console.log('currentPage changed');
      this.setState({ status: 'pending' });
    }
    if (this.state.error) {
      this.setState({ error: null });
    }
    imagesApi
      .fetchImages(nextQuery, currentPage)
      .then(({ hits, totalHits }) => {
        console.log('------>', hits);

        this.setState(prevState => ({
          images: currentPage === 1 ? hits : [...prevState.images, ...hits],
          status: 'resolved',
          totalPages: Math.floor(totalHits / 12),
        }));
        if (hits.length === 0) {
          throw new Error(
            `Sorry, there are no images ${nextQuery} matching your search query. Please try again.`
          );
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  }

  // fetchImagesAndUpdateState(nextQuery, currentPage) {
  //   imagesApi
  //     .fetchImages(nextQuery, currentPage)
  //     .then(({ hits, totalHits }) => {
  //       console.log('------>', hits);

  //       if (hits.length === 0) {
  //         throw new Error(
  //           `Sorry, there are no images ${nextQuery} matching your search query. Please try again.`
  //         );
  //       }
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...hits],
  //         status: 'resolved',
  //         totalPages: Math.floor(totalHits / 12),
  //       }));
  //     })
  //     .catch(error => this.setState({ error, status: 'rejected' }));
  // }

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    console.log(this.state);
    const { images, error, status, isActive, currentPage, totalPages } =
      this.state;

    if (status === 'idle') {
      return <p>Fill this search field</p>;
      /* /*--> зазначаємо якщо ім'я забули передати 
    або ж воно приводиться до фолс чи андефайнд */
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'rejected') {
      return <ImageGalleryError message={error.message} />;
    }
    if (images.length === 0) {
      return (
        <ImageGalleryError
          message={`Sorry, there are no images matching your search query. Please try again.`}
        />
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ul>
            {images.map(image => (
              <ImageGalleryItem key={image.id} image={image} />
            ))}
          </ul>
          {currentPage <= totalPages &&
            images.length > 0 &&
            status !== 'pending' && (
              <button
                type="button"
                onClick={this.onLoadMoreClick}
                disabled={!isActive}
              >
                Load more
              </button>
            )}
        </>
      );
    }
  }
}

export default ImageGallery;
