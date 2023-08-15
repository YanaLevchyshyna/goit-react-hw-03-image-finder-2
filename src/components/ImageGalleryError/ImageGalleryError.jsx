import PropTypes from 'prop-types';
import { ErrorEl, ImgError } from './ImageGalleryError.styled';
import errorImage from './errorImage.jpeg';
export const ImageGalleryError = ({ message }) => {
  return (
    <div role="alert">
      <ErrorEl>{message}</ErrorEl>
      <ImgError src={errorImage} alt="Error" />
    </div>
  );
};

ImageGalleryError.propTypes = {
  message: PropTypes.string,
};
