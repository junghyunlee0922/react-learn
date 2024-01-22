// no module (without from)
import "./01-searchbar.css";

// module
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// DOM Script === Vanilla Script
function bodyStyling() {
  document.body.style.cssText = `
    padding: 20px;
    background-color: #f4f6f8;
  `;
}

bodyStyling();

/* -------------------------------------------------------------------------- */

const renderIconCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      fill="url(#paint0_linear_81_8)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_81_8"
        x1="5"
        y1="-1.92473e-07"
        x2="19.5"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#06FD10" />
        <stop offset="1" stopColor="#00E1CE" />
      </linearGradient>
    </defs>
  </svg>
);

const renderIconNaver = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H8L15.5 12V0H24V24H15.1875L8 12.5L8 24H0V0Z"
      fill="url(#paint0_linear_81_3)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_81_3"
        x1="4.5"
        y1="-1.93715e-07"
        x2="20.5"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BF008" />
        <stop offset="1" stopColor="#03CCA8" />
      </linearGradient>
    </defs>
  </svg>
);

const renderSearchButton = () => (
  <button type="submit" aria-label="검색" title="검색">
    {renderIconCircle()}
  </button>
);

const renderFormControl = () => (
  <div role="group">
    <label htmlFor="search" className="sr-only">
      검색어
    </label>
    <input id="search" type="search" placeholder="검색어를 입력해주세요." />
  </div>
);

const renderSearchBar = () => (
  <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
    <div className="searchBarGroup" role="group">
      {renderIconNaver()}
      {renderFormControl()}
    </div>
    {renderSearchButton()}
  </form>
);

const sunImg = () => (
  <svg
    width="55"
    height="52"
    viewBox="0 0 55 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_1202_28)">
      <rect
        x="14.4375"
        y="10.3125"
        width="30"
        height="28.25"
        rx="11.75"
        fill="#FFEF9A"
      />
    </g>
    <g filter="url(#filter1_i_1202_28)">
      <path
        d="M42.4375 26.6875C42.4375 33.8672 36.6172 39.6875 29.4375 39.6875C22.2578 39.6875 16.4375 33.8672 16.4375 26.6875C16.4375 19.5078 22.2578 13.6875 29.4375 13.6875C36.6172 13.6875 42.4375 19.5078 42.4375 26.6875Z"
        fill="url(#paint0_linear_1202_28)"
      />
    </g>
    <g filter="url(#filter2_b_1202_28)">
      <g filter="url(#filter3_i_1202_28)">
        <path
          d="M36.8532 33.3911C36.9436 32.878 36.9907 32.3503 36.9907 31.8116C36.9907 26.7725 32.8676 22.6875 27.7815 22.6875C24.0004 22.6875 20.7516 24.9452 19.3333 28.1741C18.1843 27.1913 16.6933 26.5978 15.0641 26.5978C11.4311 26.5978 8.48605 29.5481 8.48605 33.1875C8.48605 33.3902 8.49519 33.5907 8.51306 33.7887C6.76569 34.6367 5.5625 36.416 5.5625 38.4737C5.5625 41.3532 7.91856 43.6875 10.8249 43.6875H35.6751C38.5814 43.6875 40.9375 41.3532 40.9375 38.4737C40.9375 35.9955 39.1924 33.9211 36.8532 33.3911Z"
          fill="url(#paint1_linear_1202_28)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_1202_28"
        x="4.8125"
        y="0.6875"
        width="49.25"
        height="47.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="4.8125"
          result="effect1_foregroundBlur_1202_28"
        />
      </filter>
      <filter
        id="filter1_i_1202_28"
        x="16.4375"
        y="13.6875"
        width="26"
        height="26.625"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.625" />
        <feGaussianBlur stdDeviation="1.125" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1202_28"
        />
      </filter>
      <filter
        id="filter2_b_1202_28"
        x="2.1875"
        y="19.3125"
        width="42.125"
        height="27.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.6875" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1202_28"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1202_28"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_i_1202_28"
        x="5.5625"
        y="22.6875"
        width="35.375"
        height="22.25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.375" />
        <feGaussianBlur stdDeviation="0.625" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1202_28"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1202_28"
        x1="27.4628"
        y1="33.7634"
        x2="38.159"
        y2="15.004"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF9900" />
        <stop offset="1" stop-color="#FFEE94" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1202_28"
        x1="7.8125"
        y1="41.8125"
        x2="43.5"
        y2="15.125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0.58" />
      </linearGradient>
    </defs>
  </svg>
);

const munge = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 43C29.7739 43 34.3523 41.1036 37.7279 37.7279C41.1036 34.3523 43 29.7739 43 25C43 20.2261 41.1036 15.6477 37.7279 12.2721C34.3523 8.89642 29.7739 7 25 7L25 25V43Z"
      fill="url(#paint0_linear_52_40)"
    />
    <path
      d="M25 7C20.2261 7 15.6477 8.89642 12.2721 12.2721C8.89642 15.6477 7 20.2261 7 25C7 29.7739 8.89642 34.3523 12.2721 37.7279C15.6477 41.1036 20.2261 43 25 43L25 25V7Z"
      fill="url(#paint1_linear_52_40)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_52_40"
        x1="25"
        y1="7"
        x2="25"
        y2="38.0909"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#5E9EFD" />
        <stop offset="1" stop-color="#B1D0FE" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_52_40"
        x1="25"
        y1="7"
        x2="25"
        y2="37.2727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#BBD6FF" />
        <stop offset="1" stop-color="#E9F2FF" />
      </linearGradient>
    </defs>
  </svg>
);

const renderWedgets = () => (
  <div>
    <div>
      <span>-0.9°</span>
      <p>어제보다 1.3° 낮아요</p>
      {sunImg()}
    </div>
    <div>
      <p>미세먼지</p>
      {munge()}
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(renderSearchBar());
createRoot(document.getElementById("root")).render(renderWedgets());