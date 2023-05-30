import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addHero, editHero } from 'store/heroes';

const LogoutModal = ({ onClose, children }) => {
  const dispatch = useDispatch();

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

  const onLogout = () => {
    // dispatch(authOperations.logOut());
    onClose();
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-50"
        onClick={handleOverlayClick}
      >
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 max-h-5/6 w-1/2 bg-grey-main rounded-lg text-center flex flex-col items-center gap-20">
          {children}
        </div>
      </div>
    </>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LogoutModal;
