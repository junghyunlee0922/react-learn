import './02-widgets.css'

// import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const weatherImg = () => (
  <svg
    width="55"
    height="52"
    viewBox="0 0 55 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_479_28)">
      <rect
        x="14.4375"
        y="10.3125"
        width="30"
        height="28.25"
        rx="11.75"
        fill="#FFEF9A"
      />
    </g>
    <g filter="url(#filter1_i_479_28)">
      <path
        d="M42.4375 26.6875C42.4375 33.8672 36.6172 39.6875 29.4375 39.6875C22.2578 39.6875 16.4375 33.8672 16.4375 26.6875C16.4375 19.5078 22.2578 13.6875 29.4375 13.6875C36.6172 13.6875 42.4375 19.5078 42.4375 26.6875Z"
        fill="url(#paint0_linear_479_28)"
      />
    </g>
    <g filter="url(#filter2_b_479_28)">
      <g filter="url(#filter3_i_479_28)">
        <path
          d="M36.8532 33.3911C36.9436 32.878 36.9907 32.3503 36.9907 31.8116C36.9907 26.7725 32.8676 22.6875 27.7815 22.6875C24.0004 22.6875 20.7516 24.9452 19.3333 28.1741C18.1843 27.1913 16.6933 26.5978 15.0641 26.5978C11.4311 26.5978 8.48605 29.5481 8.48605 33.1875C8.48605 33.3902 8.49519 33.5907 8.51306 33.7887C6.76569 34.6367 5.5625 36.416 5.5625 38.4737C5.5625 41.3532 7.91856 43.6875 10.8249 43.6875H35.6751C38.5814 43.6875 40.9375 41.3532 40.9375 38.4737C40.9375 35.9955 39.1924 33.9211 36.8532 33.3911Z"
          fill="url(#paint1_linear_479_28)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_479_28"
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
          result="effect1_foregroundBlur_479_28"
        />
      </filter>
      <filter
        id="filter1_i_479_28"
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
          result="effect1_innerShadow_479_28"
        />
      </filter>
      <filter
        id="filter2_b_479_28"
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
          result="effect1_backgroundBlur_479_28"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_479_28"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_i_479_28"
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
          result="effect1_innerShadow_479_28"
        />
      </filter>
      <linearGradient
        id="paint0_linear_479_28"
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
        id="paint1_linear_479_28"
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

const fineDust = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 43C29.7739 43 34.3523 41.1036 37.7279 37.7279C41.1036 34.3523 43 29.7739 43 25C43 20.2261 41.1036 15.6477 37.7279 12.2721C34.3523 8.89642 29.7739 7 25 7L25 25V43Z"
      fill="url(#paint0_linear_405_40)"
    />
    <path
      d="M25 7C20.2261 7 15.6477 8.89642 12.2721 12.2721C8.89642 15.6477 7 20.2261 7 25C7 29.7739 8.89642 34.3523 12.2721 37.7279C15.6477 41.1036 20.2261 43 25 43L25 25V7Z"
      fill="url(#paint1_linear_405_40)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_405_40"
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
        id="paint1_linear_405_40"
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


const renderWidgets = () => (
  <div className="widgets">
    <div className="widgetWeather">
      <div className='weatherImg'>
      <span>-0.9°</span>
        <p>어제보다 1.3° 낮아요</p>
      </div>
        {weatherImg()}
    </div>
    <div className="widgetFineDust">
      <p>미세먼지</p>
      {fineDust()}
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(renderWidgets());