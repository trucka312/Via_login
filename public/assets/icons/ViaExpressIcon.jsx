import PropTypes from "prop-types";

const ViaExpress = ({ className, ...rest }) => {
  return (
    <svg
      width="141"
      height="99"
      viewBox="0 0 141 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <rect x="0.0234375" y="7.62939e-06" width="140" height="99" rx="4" fill="white" />
      <path
        d="M87.3194 39.9588C86.7157 39.9588 86.3334 40.4016 86.3334 41.106C86.3334 42.1929 86.3133 43.2797 86.3334 44.3666C86.3334 44.749 86.2127 44.9301 85.8908 45.1113C81.1019 47.7278 76.3129 50.3644 71.524 52.981C71.3832 53.0615 71.2423 53.1218 71.0612 53.2225C71.0411 53.1017 71.0411 53.0212 71.0411 52.9407C71.0411 47.5869 71.0411 42.2331 71.0612 36.8995C71.0612 36.7183 71.2423 36.4768 71.4033 36.3762C72.7514 35.6113 74.0996 34.8868 75.4477 34.1421C75.5684 34.0817 75.7093 34.0213 75.9105 33.9408V34.5446C75.9105 35.6918 75.9105 36.819 75.9105 37.9662C75.9105 38.9726 76.6751 39.3952 77.5605 38.9323C78.6873 38.3285 79.8141 37.6844 80.961 37.0806C81.4439 36.819 81.6451 36.4567 81.6451 35.9132C81.625 34.3433 81.6451 32.7533 81.625 31.1834C81.625 30.9016 81.6854 30.7205 81.947 30.5796C83.3152 29.8349 84.6835 29.0902 86.0517 28.3455C86.1322 28.3052 86.2127 28.2851 86.3334 28.265C86.3334 29.7745 86.3334 31.2639 86.3334 32.7332C86.3334 33.4779 86.7157 33.9207 87.3194 33.9408C87.9431 33.9609 88.3456 33.498 88.3456 32.7131C88.3456 30.7003 88.3456 28.6876 88.3456 26.6749C88.3456 26.1315 88.1242 25.7692 87.6413 25.5076C81.9872 22.408 76.3331 19.3085 70.6991 16.1888C70.2363 15.9472 69.8338 15.9271 69.371 16.1888C63.7169 19.3085 58.0426 22.4281 52.3684 25.5277C51.9056 25.7894 51.6843 26.1315 51.7044 26.6548C51.7245 27.2788 51.7044 27.8826 51.7044 28.5468V43.4408C51.7044 44.0848 51.7245 44.6886 51.7044 45.2924C51.6843 45.8359 51.9056 46.1981 52.3885 46.4799C58.0628 49.5795 63.7169 52.6992 69.3912 55.8189C69.8338 56.0604 70.2363 56.0604 70.6789 55.8189C76.3331 52.6992 82.0073 49.5795 87.6816 46.4799C88.1444 46.2384 88.3657 45.8761 88.3657 45.3528C88.3456 43.9641 88.3657 42.5753 88.3657 41.1865C88.3456 40.3814 87.9431 39.9386 87.3194 39.9588ZM79.5927 35.3296C79.5927 35.4302 79.472 35.5711 79.3714 35.6113C78.9287 35.873 78.4659 36.1145 77.9227 36.4164C77.9227 35.2088 77.9227 34.0817 77.9227 32.9747C77.9227 32.8741 78.0031 32.7533 78.0836 32.6929C78.5464 32.4111 79.0293 32.1696 79.5927 31.8476C79.5927 33.0753 79.6129 34.2024 79.5927 35.3296ZM69.8137 18.2417C69.9747 18.1612 70.2564 18.2216 70.4375 18.3222C74.2606 20.4154 78.0635 22.5087 81.8866 24.6019C82.9933 25.2057 84.0798 25.8095 85.2469 26.4536C83.7378 27.2989 82.2689 28.104 80.8 28.8688C80.6592 28.9292 80.3976 28.8285 80.2165 28.7279C76.7154 26.8158 73.2344 24.9038 69.7332 22.9716C68.3247 22.2068 66.9162 21.4218 65.4473 20.6167C66.9565 19.7915 68.365 18.9864 69.8137 18.2417ZM61.8657 22.5892C63.2944 21.7237 63.2943 21.7438 64.7833 22.5489C69.1296 24.944 73.4959 27.3391 77.8623 29.7343C78.0635 29.8349 78.2647 29.9556 78.5665 30.1368C78.0031 30.4387 77.5403 30.7205 77.0172 30.962C76.8965 31.0224 76.6751 30.9016 76.5343 30.8211C71.9667 28.3254 67.3991 25.8095 62.8517 23.3137C62.5096 23.1125 62.1474 22.9313 61.7651 22.7099C61.8255 22.6093 61.8456 22.6093 61.8657 22.5892ZM69.029 52.9206C69.029 53.0011 69.029 53.0816 69.0088 53.2426C67.0369 52.1557 65.1254 51.1091 63.2139 50.0625C60.1956 48.4121 57.1573 46.7416 54.1391 45.0912C53.8976 44.9503 53.7367 44.8295 53.7367 44.4874C53.7367 39.1537 53.7367 33.82 53.7367 28.4864C53.7367 28.4059 53.7367 28.3254 53.7568 28.2046C53.8775 28.265 53.9982 28.2851 54.0988 28.3455C58.928 31.0023 63.7773 33.659 68.6265 36.3158C68.868 36.4567 69.0491 36.5774 69.0491 36.9196C69.029 42.2533 69.029 47.5869 69.029 52.9206ZM70.2765 34.6452C70.1155 34.7258 69.8338 34.6654 69.6527 34.5647C66.1918 32.6929 62.7511 30.7809 59.2902 28.8889C57.8213 28.0838 56.3524 27.2788 54.8433 26.4334C55.1049 26.2724 55.3464 26.1516 55.5677 26.0309C56.7951 25.3466 58.0225 24.6622 59.2701 24.0182C59.431 23.9377 59.7127 23.8974 59.8536 23.9779C64.7833 26.6749 69.7131 29.3921 74.6429 32.0891C74.663 32.1092 74.6831 32.1294 74.7435 32.2099C73.2545 33.0351 71.7655 33.8603 70.2765 34.6452Z"
        fill="#ECAD48"
      />
      <path
        d="M87.3803 35.9334C87.9236 35.9535 88.3461 36.3963 88.3461 36.9398C88.326 37.5033 87.8632 37.9461 87.2998 37.926C86.7565 37.9059 86.334 37.4429 86.334 36.9196C86.3541 36.336 86.8169 35.9133 87.3803 35.9334Z"
        fill="#ECAD48"
      />
      <path
        d="M20.728 67.3636L23.7564 76.5227H23.8757L26.8984 67.3636H29.2166L25.1143 79H22.5121L18.4155 67.3636H20.728ZM32.8572 67.3636V79H30.7493V67.3636H32.8572ZM36.6342 79H34.3842L38.4808 67.3636H41.0831L45.1854 79H42.9354L39.8274 69.75H39.7365L36.6342 79ZM36.7081 74.4375H42.8445V76.1307H36.7081V74.4375ZM50.6868 79V67.3636H58.255V69.1307H52.7947V72.2898H57.8629V74.0568H52.7947V77.233H58.3004V79H50.6868ZM62.1669 67.3636L64.7294 71.625H64.8203L67.3942 67.3636H69.7976L66.2124 73.1818L69.8544 79H67.4112L64.8203 74.7671H64.7294L62.1385 79H59.7067L63.3828 73.1818L59.7521 67.3636H62.1669ZM71.4524 79V67.3636H75.8161C76.71 67.3636 77.46 67.5303 78.0661 67.8636C78.6759 68.197 79.1361 68.6553 79.4467 69.2386C79.7611 69.8182 79.9183 70.4773 79.9183 71.2159C79.9183 71.9621 79.7611 72.625 79.4467 73.2046C79.1323 73.7841 78.6683 74.2405 78.0547 74.5739C77.4411 74.9034 76.6854 75.0682 75.7876 75.0682H72.8956V73.3352H75.5036C76.0263 73.3352 76.4543 73.2443 76.7876 73.0625C77.121 72.8807 77.3672 72.6307 77.5263 72.3125C77.6892 71.9943 77.7706 71.6288 77.7706 71.2159C77.7706 70.803 77.6892 70.4394 77.5263 70.125C77.3672 69.8106 77.1191 69.5663 76.782 69.3921C76.4486 69.214 76.0187 69.125 75.4922 69.125H73.5604V79H71.4524ZM81.7493 79V67.3636H86.1129C87.0069 67.3636 87.7569 67.5189 88.3629 67.8296C88.9728 68.1402 89.433 68.5758 89.7436 69.1364C90.058 69.6932 90.2152 70.3428 90.2152 71.0852C90.2152 71.8314 90.0561 72.4792 89.7379 73.0284C89.4235 73.5739 88.9595 73.9962 88.3459 74.2955C87.7322 74.5909 86.9785 74.7386 86.0845 74.7386H82.9766V72.9886H85.8004C86.3232 72.9886 86.7512 72.9167 87.0845 72.7727C87.4179 72.625 87.6641 72.411 87.8232 72.1307C87.986 71.8466 88.0675 71.4981 88.0675 71.0852C88.0675 70.6724 87.986 70.3201 87.8232 70.0284C87.6603 69.733 87.4122 69.5095 87.0788 69.358C86.7455 69.2027 86.3156 69.125 85.7891 69.125H83.8572V79H81.7493ZM87.7607 73.7273L90.6413 79H88.2891L85.4595 73.7273H87.7607ZM92.1555 79V67.3636H99.7237V69.1307H94.2635V72.2898H99.3317V74.0568H94.2635V77.233H99.7692V79H92.1555ZM108.198 70.5625C108.145 70.0663 107.922 69.6799 107.528 69.4034C107.138 69.1269 106.63 68.9886 106.005 68.9886C105.566 68.9886 105.189 69.0549 104.874 69.1875C104.56 69.3201 104.319 69.5 104.153 69.7273C103.986 69.9546 103.901 70.214 103.897 70.5057C103.897 70.7481 103.952 70.9583 104.062 71.1364C104.175 71.3144 104.329 71.4659 104.522 71.5909C104.715 71.7121 104.929 71.8144 105.164 71.8977C105.399 71.9811 105.636 72.0511 105.874 72.108L106.965 72.3807C107.405 72.483 107.827 72.6212 108.232 72.7955C108.641 72.9697 109.007 73.1894 109.329 73.4546C109.655 73.7197 109.912 74.0398 110.102 74.4148C110.291 74.7898 110.386 75.2292 110.386 75.733C110.386 76.4148 110.211 77.0152 109.863 77.5341C109.514 78.0493 109.011 78.4527 108.352 78.7443C107.696 79.0322 106.903 79.1761 105.971 79.1761C105.066 79.1761 104.28 79.036 103.613 78.7557C102.95 78.4754 102.431 78.0663 102.056 77.5284C101.685 76.9905 101.484 76.3352 101.454 75.5625H103.528C103.558 75.9678 103.683 76.3049 103.903 76.5739C104.122 76.8428 104.408 77.0436 104.761 77.1761C105.117 77.3087 105.514 77.375 105.954 77.375C106.412 77.375 106.814 77.3068 107.158 77.1705C107.507 77.0303 107.78 76.8371 107.977 76.5909C108.174 76.3409 108.274 76.0492 108.278 75.7159C108.274 75.4129 108.185 75.1629 108.011 74.9659C107.836 74.7652 107.592 74.5985 107.278 74.4659C106.967 74.3296 106.603 74.2083 106.187 74.1023L104.863 73.7614C103.905 73.5152 103.147 73.1421 102.59 72.6421C102.037 72.1383 101.761 71.4697 101.761 70.6364C101.761 69.9508 101.946 69.3504 102.317 68.8352C102.692 68.3201 103.202 67.9205 103.846 67.6364C104.49 67.3485 105.219 67.2046 106.033 67.2046C106.859 67.2046 107.583 67.3485 108.204 67.6364C108.829 67.9205 109.319 68.3163 109.675 68.8239C110.031 69.3277 110.215 69.9072 110.227 70.5625H108.198ZM118.589 70.5625C118.536 70.0663 118.312 69.6799 117.918 69.4034C117.528 69.1269 117.021 68.9886 116.396 68.9886C115.956 68.9886 115.579 69.0549 115.265 69.1875C114.951 69.3201 114.71 69.5 114.543 69.7273C114.377 69.9546 114.291 70.214 114.288 70.5057C114.288 70.7481 114.343 70.9583 114.452 71.1364C114.566 71.3144 114.719 71.4659 114.913 71.5909C115.106 71.7121 115.32 71.8144 115.555 71.8977C115.79 71.9811 116.026 72.0511 116.265 72.108L117.356 72.3807C117.795 72.483 118.218 72.6212 118.623 72.7955C119.032 72.9697 119.397 73.1894 119.719 73.4546C120.045 73.7197 120.303 74.0398 120.492 74.4148C120.682 74.7898 120.776 75.2292 120.776 75.733C120.776 76.4148 120.602 77.0152 120.254 77.5341C119.905 78.0493 119.401 78.4527 118.742 78.7443C118.087 79.0322 117.293 79.1761 116.362 79.1761C115.456 79.1761 114.67 79.036 114.004 78.7557C113.341 78.4754 112.822 78.0663 112.447 77.5284C112.076 76.9905 111.875 76.3352 111.844 75.5625H113.918C113.949 75.9678 114.074 76.3049 114.293 76.5739C114.513 76.8428 114.799 77.0436 115.151 77.1761C115.507 77.3087 115.905 77.375 116.344 77.375C116.803 77.375 117.204 77.3068 117.549 77.1705C117.897 77.0303 118.17 76.8371 118.367 76.5909C118.564 76.3409 118.665 76.0492 118.668 75.7159C118.665 75.4129 118.576 75.1629 118.401 74.9659C118.227 74.7652 117.983 74.5985 117.668 74.4659C117.358 74.3296 116.994 74.2083 116.577 74.1023L115.254 73.7614C114.295 73.5152 113.538 73.1421 112.981 72.6421C112.428 72.1383 112.151 71.4697 112.151 70.6364C112.151 69.9508 112.337 69.3504 112.708 68.8352C113.083 68.3201 113.593 67.9205 114.237 67.6364C114.88 67.3485 115.61 67.2046 116.424 67.2046C117.25 67.2046 117.973 67.3485 118.594 67.6364C119.219 67.9205 119.71 68.3163 120.066 68.8239C120.422 69.3277 120.606 69.9072 120.617 70.5625H118.589Z"
        fill="#0D0F11"
      />
    </svg>
  );
};

ViaExpress.propTypes = {
  className: PropTypes.string,
};

export default ViaExpress;