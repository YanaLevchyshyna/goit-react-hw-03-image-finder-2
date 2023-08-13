import PropTypes from 'prop-types';
import { ErrorEl } from './ImageGalleryError.styled';
export const ImageGalleryError = ({ message }) => {
  return (
    <div role="alert">
      <ErrorEl>{message}</ErrorEl>
    </div>
  );
};

ImageGalleryError.propTypes = {
  message: PropTypes.string,
};
