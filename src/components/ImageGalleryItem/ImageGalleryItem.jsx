import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { ImgItem, PhotoCard } from './ImageGalleryItem.styled';

import { Component } from 'react';

class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired,
  };

  state = {
    open: false,
    currentImg: '',
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  toggleModal = () => {
    this.setState(({ open }) => ({
      open: !open,
    }));
  };

  render() {
    const { image } = this.props;
    const { open } = this.state;

    return (
      <>
        <ImgItem>
          <PhotoCard>
            <img
              src={image.webformatURL}
              alt={image.tags}
              onClick={this.toggleModal}
            />
            {open && (
              <Modal
                largeImageURL={image.largeImageURL}
                tags={image.tags}
                onClose={this.toggleModal}
              />
            )}
          </PhotoCard>
        </ImgItem>
      </>
    );
  }
}

export default ImageGalleryItem;
