import PropTypes from 'prop-types';

const FailIcon = ({ className, ...rest }) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"  className={`${className}`}
    {...rest}>
      <g clipPath="url(#clip0_19_2270)">
        <path
          d="M32 2.66675L8 13.3334V29.3334C8 44.1334 18.24 57.9734 32 61.3334C45.76 57.9734 56 44.1334 56 29.3334V13.3334L32 2.66675ZM50.6667 29.3334C50.6667 41.3867 42.72 52.5067 32 55.8134C21.28 52.5067 13.3333 41.3867 13.3333 29.3334V16.8001L32 8.50675L50.6667 16.8001V29.3334Z"
          fill="#DC2626"
        />
        <path
          d="M20.6593 20.6593C20.868 20.4503 21.1159 20.2845 21.3888 20.1714C21.6616 20.0582 21.9541 20 22.2495 20C22.5448 20 22.8373 20.0582 23.1102 20.1714C23.383 20.2845 23.6309 20.4503 23.8396 20.6593L32.0003 28.817L40.1611 20.6593C40.3699 20.4505 40.6178 20.2849 40.8906 20.1718C41.1635 20.0588 41.4559 20.0007 41.7512 20.0007C42.0465 20.0007 42.3389 20.0588 42.6118 20.1718C42.8846 20.2849 43.1325 20.4505 43.3413 20.6593C43.5502 20.8681 43.7158 21.116 43.8288 21.3889C43.9418 21.6617 44 21.9541 44 22.2495C44 22.5448 43.9418 22.8372 43.8288 23.11C43.7158 23.3829 43.5502 23.6308 43.3413 23.8396L35.1836 32.0003L43.3413 40.1611C43.7631 40.5828 44 41.1548 44 41.7512C44 42.3476 43.7631 42.9196 43.3413 43.3413C42.9196 43.7631 42.3476 44 41.7512 44C41.1548 44 40.5828 43.7631 40.1611 43.3413L32.0003 35.1836L23.8396 43.3413C23.4179 43.7631 22.8459 44 22.2495 44C21.653 44 21.0811 43.7631 20.6593 43.3413C20.2376 42.9196 20.0007 42.3476 20.0007 41.7512C20.0007 41.1548 20.2376 40.5828 20.6593 40.1611L28.817 32.0003L20.6593 23.8396C20.4503 23.6309 20.2845 23.383 20.1714 23.1102C20.0582 22.8373 20 22.5448 20 22.2495C20 21.9541 20.0582 21.6616 20.1714 21.3888C20.2845 21.1159 20.4503 20.868 20.6593 20.6593Z"
          fill="#DC2626"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_2270">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

FailIcon.propTypes = {
  className: PropTypes.string,
};

export default FailIcon;