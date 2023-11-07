import PropTypes from 'prop-types';

const MailIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <g clipPath="url(#clip0_1330_26341)">
        <path
          d="M15.1908 4.803C15.1908 4.06967 14.5908 3.46967 13.8574 3.46967H3.19076C2.45742 3.46967 1.85742 4.06967 1.85742 4.803V12.803C1.85742 13.5363 2.45742 14.1363 3.19076 14.1363H13.8574C14.5908 14.1363 15.1908 13.5363 15.1908 12.803V4.803ZM13.8574 4.803L8.52409 8.12967L3.19076 4.803H13.8574ZM13.8574 12.803H3.19076V6.13633L8.52409 9.46967L13.8574 6.13633V12.803Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1330_26341">
          <rect width="16" height="16" fill="white" transform="translate(0.523438 0.802979)" />
        </clipPath>
      </defs>
    </svg>
  );
};

MailIcon.propTypes = {
  className: PropTypes.string,
};

export default MailIcon;
