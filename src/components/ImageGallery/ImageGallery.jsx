import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import imagesApi from 'services/imagesApi';
import { ImageGalleryError } from '../ImageGalleryError/ImageGalleryError';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {
  ImgList,
  Section,
  Container,
  LoadMore,
  IoImagesSvg,
} from './ImageGallery.styled';

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

  // перевірка на зміну nextQuery у пропсах

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery || prevState.currentPage !== currentPage) {
      this.setState({ status: 'pending' });

      imagesApi
        .fetchImages(nextQuery, currentPage)
        .then(({ hits, totalHits }) => {
          console.log('------>', hits);

          this.setState(prevState => ({
            images: currentPage === 1 ? hits : [...prevState.images, ...hits],
            status: 'resolved',
            totalPages: Math.floor(totalHits / 12),
          }));

          if (totalHits === 0) {
            throw new Error(
              `Sorry, there are no images ${nextQuery} matching your search query. Please try again.`
            );
          }

          // if (this.state.error) {
          //   this.setState({ error: null });
          // }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

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
      return <IoImagesSvg />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ImageGalleryError message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <Section>
          <Container>
            <ImgList>
              {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
              ))}
            </ImgList>
            {currentPage <= totalPages &&
              images.length > 0 &&
              status !== 'pending' && (
                <LoadMore
                  type="button"
                  onClick={this.onLoadMoreClick}
                  disabled={!isActive}
                >
                  Load more
                </LoadMore>
              )}
          </Container>
        </Section>
      );
    }
  }
}

export default ImageGallery;
