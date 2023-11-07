import PropTypes from 'prop-types';

const HeaderWaveTop = ({ className, ...rest }) => {
  return (
    <svg
      width="322"
      height="77"
      viewBox="0 0 322 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <path
        opacity="0.3"
        d="M269.29 -43.2169C295.215 -35.2796 332.11 -16.6896 319.062 6.12434C315.136 13.0032 306.006 17.74 296.31 20.8387C239.053 39.0983 215.498 -23.0513 162.771 -5.50105C129.958 5.44965 155.755 23.1945 178.279 29.4554C188.298 32.2357 198.965 36.3813 202.156 43.533C205.382 50.7368 199.439 58.146 191.969 63.2661C142.889 96.546 59.2298 62.2046 22.4086 30.9609C-58.913 -38.1681 105.476 -59.5386 172.003 -58.2452C205.068 -57.6335 238.396 -52.6807 269.29 -43.2169Z"
        fill="#ECAD48"
      />
    </svg>
  );
};

HeaderWaveTop.propTypes = {
  className: PropTypes.string,
};

export default HeaderWaveTop;
