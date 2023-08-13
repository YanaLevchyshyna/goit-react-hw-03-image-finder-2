import PropTypes from 'prop-types';

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
    showModal: false,
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { image } = this.props;
    // const { showModal } = this.state;

    return (
      <>
        <li>
          <a href={image.largeImageURL}>
            <div>
              <img
                src={image.webformatURL}
                alt={image.tags}
                data-source={image.largeImageURL}
              />
            </div>
          </a>
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
