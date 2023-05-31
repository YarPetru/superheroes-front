import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    e.code === 'Escape' && onClose();
  };

  const handleOverlayClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return !isOpen ? null : (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-50"
        onClick={handleOverlayClick}
      >
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 max-h-5/6 w-1/2 bg-grey-main rounded-lg shadow-course-card text-center flex flex-col items-center gap-12">
          {children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
