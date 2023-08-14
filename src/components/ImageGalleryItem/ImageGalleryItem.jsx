import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
// import Fab from '@mui/material/Fab';
// import CancelIcon from '@mui/icons-material/Cancel';
// import IconButton from '@mui/material/IconButton';

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
        <li>
          <div>
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
          </div>
        </li>
        <div></div>
      </>
    );
  }
}

export default ImageGalleryItem;
