import PropTypes from 'prop-types';

const SuccessIcon = ({ className, ...rest }) => {
  return (
    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}
    {...rest}>
      <path
        d="M24 0.666687L0 11.3334V27.3334C0 42.1334 10.24 55.9734 24 59.3334C37.76 55.9734 48 42.1334 48 27.3334V11.3334L24 0.666687ZM42.6667 27.3334C42.6667 39.3867 34.72 50.5067 24 53.8134C13.28 50.5067 5.33333 39.3867 5.33333 27.3334V14.8L24 6.50669L42.6667 14.8V27.3334ZM11.76 28.9067L8 32.6667L18.6667 43.3334L40 22L36.24 18.2134L18.6667 35.7867L11.76 28.9067Z"
        fill="#10B981"
      />
    </svg>
  );
};

SuccessIcon.propTypes = {
  className: PropTypes.string,
};

export default SuccessIcon;
