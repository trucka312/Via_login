import PropTypes from 'prop-types';

const AddressIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M5.52409 0.136292C2.94409 0.136292 0.857422 2.22296 0.857422 4.80296C0.857422 8.30296 5.52409 13.4696 5.52409 13.4696C5.52409 13.4696 10.1908 8.30296 10.1908 4.80296C10.1908 2.22296 8.10409 0.136292 5.52409 0.136292ZM2.19076 4.80296C2.19076 2.96296 3.68409 1.46962 5.52409 1.46962C7.36409 1.46962 8.85742 2.96296 8.85742 4.80296C8.85742 6.72296 6.93742 9.59629 5.52409 11.3896C4.13742 9.60962 2.19076 6.70296 2.19076 4.80296Z"
        fill="white"
      />
    </svg>
  );
};

AddressIcon.propTypes = {
  className: PropTypes.string,
};

export default AddressIcon;
