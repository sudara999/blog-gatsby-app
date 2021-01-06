import React from "react";

export default function LogoSvg() {
  let logo;
  if (window.innerWidth >= 768) {
    logo = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="193"
        height="48"
        viewBox="0 0 232 48"
        fill="none"
      >
        <path
          d="M10 15.4V35.7C10 37 9.4 37.6 7.7 37.6 7.5 37.6 7.2 37.6 6.9 37.6V42.3C7.4 42.4 7.8 42.4 8.2 42.4 13.1 42.4 16.2 40.7 16.2 35.8V15.4H10ZM13.1 13.1C14.9 13.1 16.3 11.7 16.3 10.1 16.3 8.4 14.9 7.1 13.1 7.1 11.3 7.1 9.9 8.4 9.9 10.1 9.9 11.7 11.3 13.1 13.1 13.1ZM25.8 35.3C28.5 35.3 30.4 34.3 31.5 32.3H31.6V35H37.5V21.7C37.5 17.5 33.8 15.1 28.8 15.1 23.5 15.1 20.5 17.8 20 21.3L25.8 21.6C26.1 20.3 27.1 19.5 28.7 19.5 30.3 19.5 31.3 20.3 31.3 21.6V21.7C31.3 22.9 30 23.1 26.6 23.4 22.6 23.7 19.3 25.2 19.3 29.6 19.3 33.4 22 35.3 25.8 35.3ZM27.7 31.2C26.2 31.2 25.2 30.6 25.2 29.2 25.2 28 26.2 27.2 28 26.9 29.2 26.8 30.6 26.5 31.3 26.2V28C31.3 29.9 29.7 31.2 27.7 31.2ZM47.6 23.8C47.6 21.6 48.9 20.2 50.9 20.2 52.8 20.2 54 21.5 54 23.7V35H60.3V22.5C60.3 18.1 57.6 15.1 53.4 15.1 50.5 15.1 48.3 16.6 47.5 19H47.3V15.4H41.3V35H47.6V23.8ZM69.7 35.3C72.4 35.3 74.3 34.3 75.4 32.3H75.5V35H81.4V21.7C81.4 17.5 77.7 15.1 72.7 15.1 67.4 15.1 64.4 17.8 63.9 21.3L69.7 21.6C70 20.3 71 19.5 72.7 19.5 74.2 19.5 75.2 20.3 75.2 21.6V21.7C75.2 22.9 73.9 23.1 70.5 23.4 66.5 23.7 63.2 25.2 63.2 29.6 63.2 33.4 65.9 35.3 69.7 35.3ZM71.6 31.2C70.2 31.2 69.1 30.6 69.1 29.2 69.1 28 70.1 27.2 71.9 26.9 73.1 26.8 74.5 26.5 75.2 26.2V28C75.2 29.9 73.6 31.2 71.6 31.2ZM85.2 35H91.5V24.3C91.5 22 93.1 20.4 95.4 20.4 96.1 20.4 97.2 20.6 97.8 20.8V15.3C97.3 15.2 96.7 15.1 96.1 15.1 93.9 15.1 92.2 16.3 91.5 18.9H91.3V15.4H85.2V35ZM108.5 35.4C114.7 35.4 118.4 31.3 118.4 25.2 118.4 19.2 114.7 15.1 108.5 15.1 102.4 15.1 98.6 19.2 98.6 25.2 98.6 31.3 102.4 35.4 108.5 35.4ZM108.6 30.7C106.2 30.7 105 28.5 105 25.2 105 21.9 106.2 19.7 108.6 19.7 110.8 19.7 112.1 21.9 112.1 25.2 112.1 28.5 110.8 30.7 108.6 30.7ZM138.8 21.4C138.5 17.5 135.3 15.1 130 15.1 124.6 15.1 121.3 17.4 121.3 21.4 121.3 24.4 123.2 26.3 127.1 27L130.5 27.7C132.2 28 132.9 28.5 132.9 29.4 132.9 30.4 131.8 31 130.2 31 128.4 31 127.2 30.3 127 28.8L120.8 29C121.2 32.9 124.6 35.4 130.2 35.4 135.4 35.4 139.3 32.8 139.3 28.7 139.3 25.8 137.4 24.1 133.4 23.4L129.7 22.7C128 22.3 127.5 21.8 127.5 21 127.5 20 128.6 19.4 130.1 19.4 131.7 19.4 132.9 20.3 133.1 21.5L138.8 21.4ZM142.4 35H148.6V23.4C148.6 21.4 149.7 20.2 151.4 20.2 153 20.2 154.1 21.3 154.1 23.1V35H160.1V23.3C160.1 21.4 161.1 20.2 162.8 20.2 164.4 20.2 165.6 21.3 165.6 23.2V35H171.8V21.8C171.8 17.6 169.3 15.1 165.5 15.1 162.6 15.1 160.4 16.6 159.6 19H159.4C158.9 16.6 156.8 15.1 154.1 15.1 151.4 15.1 149.3 16.6 148.5 19H148.3V15.4H142.4V35ZM184.8 35.4C191 35.4 194.8 31.3 194.8 25.2 194.8 19.2 191 15.1 184.8 15.1 178.7 15.1 174.9 19.2 174.9 25.2 174.9 31.3 178.7 35.4 184.8 35.4ZM184.9 30.7C182.6 30.7 181.3 28.5 181.3 25.2 181.3 21.9 182.6 19.7 184.9 19.7 187.1 19.7 188.4 21.9 188.4 25.2 188.4 28.5 187.1 30.7 184.9 30.7Z"
          className="logo-text"
        />
        <rect x="198" y="29" width="26" height="6" className="logo-rect" />
      </svg>
    );
  } else {
    logo = (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5149 7.18182V22.267C10.5043 24.1527 9.67331 25.1435 8.16053 25.1435C6.71166 25.1435 5.82743 24.2166 5.77416 22.5227H0.522034C0.500727 27.2209 3.78198 29.2983 7.86223 29.2983C12.4858 29.2983 15.7031 26.5178 15.7138 22.267V7.18182H10.5149Z"
          className="logo-text"
        ></path>
        <rect x="18" y="23" width="19" height="6" className="logo-rect"></rect>
      </svg>
    );
  }

  return <div>{logo}</div>;
}
