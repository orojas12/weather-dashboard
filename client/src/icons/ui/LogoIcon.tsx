import React from "react";

export interface LogoIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  style?: { [property: string]: any };
  className?: string;
}

export default function LogoIcon(props: LogoIconProps) {
  const primaryColor = props.primaryColor || "#4791FF";
  const secondaryColor = props.secondaryColor || "#FFD500";

  return (
    <div>
      <svg
        width="176"
        height="24"
        viewBox="0 0 176 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        style={props.style}
      >
        <g clipPath="url(#clip0_16_180)">
          <g clipPath="url(#clip1_16_180)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.04524 12.9052C5.1279 13.9689 6.61233 14.625 8.25 14.625C11.5637 14.625 14.25 11.9387 14.25 8.625C14.25 8.09756 14.1819 7.58602 14.0541 7.09867C15.4187 5.29579 17.6227 4.125 20.1094 4.125C24.2515 4.125 27.6094 7.37354 27.6094 11.3808C27.6094 12.0981 27.5018 12.7911 27.3014 13.4455C28.1331 13.8975 28.8074 14.5503 29.274 15.3554C29.7411 16.1616 30 17.1205 30 18.1831C30 19.2458 29.7411 20.2047 29.274 21.0109C28.8068 21.8171 28.1313 22.4706 27.2979 22.9226C26.4646 23.3746 25.4734 23.625 24.375 23.625H5.625C4.52656 23.625 3.53541 23.3746 2.70208 22.9226C1.86874 22.4706 1.19322 21.8171 0.726038 21.0109C0.258852 20.2047 0 19.2458 0 18.1831C0 17.1205 0.258852 16.1616 0.726038 15.3554C1.19322 14.5492 1.86874 13.8957 2.70208 13.4437C2.96491 13.3011 3.24345 13.1786 3.5361 13.0777C3.53236 13.0528 3.75219 12.9971 4.04524 12.9052Z"
              fill={primaryColor}
            />
            <path
              d="M8.25 13.125C10.7353 13.125 12.75 11.1103 12.75 8.625C12.75 6.13972 10.7353 4.125 8.25 4.125C5.76472 4.125 3.75 6.13972 3.75 8.625C3.75 11.1103 5.76472 13.125 8.25 13.125Z"
              fill={secondaryColor}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 0.375C8.66421 0.375 9 0.710786 9 1.125V2.625C9 3.03921 8.66421 3.375 8.25 3.375C7.83579 3.375 7.5 3.03921 7.5 2.625V1.125C7.5 0.710786 7.83579 0.375 8.25 0.375ZM13.553 2.30513C13.8703 2.57138 13.9117 3.04445 13.6454 3.36176L12.6813 4.51082C12.415 4.82813 11.9419 4.86952 11.6246 4.60327C11.3073 4.33702 11.2659 3.86395 11.5322 3.54664L12.4964 2.39758C12.7626 2.08027 13.2357 2.03888 13.553 2.30513ZM1.10529 12.75C0.898182 12.3913 1.02109 11.9326 1.37981 11.7255L2.67885 10.9755C3.03757 10.7684 3.49626 10.8913 3.70337 11.25C3.91047 11.6087 3.78757 12.0674 3.42885 12.2745L2.12981 13.0245C1.77109 13.2316 1.3124 13.1087 1.10529 12.75ZM0.125335 7.1924C0.197262 6.78448 0.586256 6.51211 0.994177 6.58403L2.47139 6.84451C2.87931 6.91643 3.15169 7.30543 3.07976 7.71335C3.00783 8.12127 2.61884 8.39364 2.21092 8.32172L0.733705 8.06124C0.325784 7.98932 0.0534075 7.60032 0.125335 7.1924ZM2.947 2.30513C3.26431 2.03888 3.73737 2.08027 4.00362 2.39758L4.96781 3.54664C5.23406 3.86395 5.19267 4.33702 4.87536 4.60327C4.55806 4.86952 4.08499 4.82813 3.81874 4.51082L2.85456 3.36176C2.58831 3.04445 2.62969 2.57138 2.947 2.30513Z"
              fill={secondaryColor}
            />
          </g>
          <path
            d="M34.02 18.94C33.6733 18.5133 33.5 18.1333 33.5 17.8C33.5 17.4533 33.7867 17 34.36 16.44C34.6933 16.12 35.0467 15.96 35.42 15.96C35.7933 15.96 36.3133 16.2933 36.98 16.96C37.1667 17.1867 37.4333 17.4067 37.78 17.62C38.1267 17.82 38.4467 17.92 38.74 17.92C39.98 17.92 40.6 17.4133 40.6 16.4C40.6 16.0933 40.4267 15.84 40.08 15.64C39.7467 15.4267 39.3267 15.2733 38.82 15.18C38.3133 15.0867 37.7667 14.94 37.18 14.74C36.5933 14.5267 36.0467 14.28 35.54 14C35.0333 13.72 34.6067 13.28 34.26 12.68C33.9267 12.0667 33.76 11.3333 33.76 10.48C33.76 9.30667 34.1933 8.28667 35.06 7.42C35.94 6.54 37.1333 6.1 38.64 6.1C39.44 6.1 40.1667 6.20667 40.82 6.42C41.4867 6.62 41.9467 6.82667 42.2 7.04L42.7 7.42C43.1133 7.80667 43.32 8.13333 43.32 8.4C43.32 8.66667 43.16 9.03333 42.84 9.5C42.3867 10.1667 41.92 10.5 41.44 10.5C41.16 10.5 40.8133 10.3667 40.4 10.1C40.36 10.0733 40.28 10.0067 40.16 9.9C40.0533 9.79333 39.9533 9.70667 39.86 9.64C39.58 9.46667 39.22 9.38 38.78 9.38C38.3533 9.38 37.9933 9.48667 37.7 9.7C37.42 9.9 37.28 10.1867 37.28 10.56C37.28 10.92 37.4467 11.2133 37.78 11.44C38.1267 11.6667 38.5533 11.82 39.06 11.9C39.5667 11.98 40.12 12.1067 40.72 12.28C41.32 12.44 41.8733 12.64 42.38 12.88C42.8867 13.12 43.3067 13.54 43.64 14.14C43.9867 14.7267 44.16 15.4533 44.16 16.32C44.16 17.1867 43.9867 17.9533 43.64 18.62C43.2933 19.2733 42.84 19.78 42.28 20.14C41.2 20.8467 40.0467 21.2 38.82 21.2C38.1933 21.2 37.6 21.1267 37.04 20.98C36.48 20.82 36.0267 20.6267 35.68 20.4C34.9733 19.9733 34.48 19.56 34.2 19.16L34.02 18.94ZM44.8602 12.22C44.8602 11.9133 44.8668 11.6867 44.8802 11.54C44.9068 11.38 44.9668 11.2 45.0602 11C45.2468 10.6533 45.7668 10.48 46.6202 10.48C47.2602 10.48 47.7135 10.5933 47.9802 10.82C48.2068 11.0067 48.3268 11.2933 48.3402 11.68C48.3535 11.8133 48.3602 12.0067 48.3602 12.26V19.26C48.3602 19.5667 48.3468 19.8 48.3202 19.96C48.3068 20.1067 48.2468 20.28 48.1402 20.48C47.9668 20.8267 47.4535 21 46.6002 21C45.7602 21 45.2468 20.82 45.0602 20.46C44.9668 20.26 44.9068 20.0867 44.8802 19.94C44.8668 19.7933 44.8602 19.56 44.8602 19.24V12.22ZM48.1402 8.52C48.0468 8.70667 47.8735 8.84 47.6202 8.92C47.3668 9 47.0268 9.04 46.6002 9.04C46.1868 9.04 45.8535 9 45.6002 8.92C45.3468 8.84 45.1668 8.7 45.0602 8.5C44.9668 8.3 44.9068 8.12667 44.8802 7.98C44.8668 7.82 44.8602 7.58667 44.8602 7.28C44.8602 6.97333 44.8668 6.74667 44.8802 6.6C44.9068 6.44 44.9668 6.26667 45.0602 6.08C45.2468 5.72 45.7668 5.54 46.6202 5.54C47.4602 5.54 47.9668 5.72 48.1402 6.08C48.2468 6.28 48.3068 6.46 48.3202 6.62C48.3468 6.76667 48.3602 6.99333 48.3602 7.3C48.3602 7.60667 48.3468 7.84 48.3202 8C48.3068 8.14667 48.2468 8.32 48.1402 8.52ZM52.7978 11.86C53.4245 10.9133 54.1778 10.44 55.0578 10.44C56.4178 10.44 57.4311 11.02 58.0978 12.18C58.2445 11.98 58.4178 11.7733 58.6178 11.56C58.8311 11.3333 59.1645 11.0933 59.6178 10.84C60.0711 10.5733 60.5378 10.44 61.0178 10.44C62.0845 10.44 62.9778 10.8533 63.6978 11.68C64.4178 12.4933 64.7778 13.8467 64.7778 15.74V19.24C64.7778 19.5467 64.7645 19.78 64.7378 19.94C64.7245 20.0867 64.6645 20.26 64.5578 20.46C64.3845 20.82 63.8711 21 63.0178 21C62.1778 21 61.6645 20.8133 61.4778 20.44C61.3845 20.24 61.3245 20.0667 61.2978 19.92C61.2845 19.76 61.2778 19.5267 61.2778 19.22V15.72C61.2778 14.56 60.8645 13.98 60.0378 13.98C59.5711 13.98 59.2511 14.1333 59.0778 14.44C58.9178 14.7467 58.8378 15.18 58.8378 15.74V19.24C58.8378 19.56 58.8245 19.7933 58.7978 19.94C58.7845 20.0867 58.7245 20.26 58.6178 20.46C58.4311 20.82 57.9111 21 57.0578 21C56.2178 21 55.7045 20.8133 55.5178 20.44C55.4245 20.24 55.3645 20.0667 55.3378 19.92C55.3245 19.76 55.3178 19.5267 55.3178 19.22V15.72C55.3178 14.56 54.9045 13.98 54.0778 13.98C53.2778 13.98 52.8778 14.56 52.8778 15.72V19.26C52.8778 19.5667 52.8645 19.8 52.8378 19.96C52.8245 20.1067 52.7645 20.28 52.6578 20.48C52.4578 20.8267 51.9378 21 51.0978 21C50.2578 21 49.7445 20.82 49.5578 20.46C49.4645 20.26 49.4045 20.0867 49.3778 19.94C49.3645 19.7933 49.3578 19.56 49.3578 19.24V12.2C49.3578 11.8933 49.3645 11.6667 49.3778 11.52C49.4045 11.36 49.4711 11.1867 49.5778 11C49.7778 10.64 50.2511 10.46 50.9978 10.46C51.7445 10.46 52.2311 10.58 52.4578 10.82C52.6845 11.06 52.7978 11.4067 52.7978 11.86ZM65.7695 23.86V12.18C65.7695 11.8733 65.7762 11.6467 65.7895 11.5C65.8162 11.3533 65.8762 11.1867 65.9695 11C66.1562 10.64 66.6029 10.46 67.3095 10.46C68.0162 10.46 68.4895 10.5533 68.7295 10.74C68.9829 10.9133 69.1295 11.1733 69.1695 11.52C69.6762 10.8267 70.4695 10.48 71.5495 10.48C72.6429 10.48 73.6762 10.9933 74.6495 12.02C75.6229 13.0467 76.1095 14.24 76.1095 15.6C76.1095 16.96 75.6229 18.1533 74.6495 19.18C73.6895 20.2067 72.6629 20.72 71.5695 20.72C70.4762 20.72 69.6829 20.4133 69.1895 19.8V23.84C69.1895 24.1467 69.1762 24.3733 69.1495 24.52C69.1362 24.6667 69.0762 24.8333 68.9695 25.02C68.8762 25.22 68.7095 25.36 68.4695 25.44C68.2295 25.52 67.9029 25.56 67.4895 25.56C67.0762 25.56 66.7429 25.52 66.4895 25.44C66.2495 25.36 66.0762 25.2267 65.9695 25.04C65.8762 24.8533 65.8162 24.6867 65.7895 24.54C65.7762 24.3933 65.7695 24.1667 65.7695 23.86ZM69.7295 14.44C69.4229 14.8 69.2695 15.1933 69.2695 15.62C69.2695 16.0467 69.4229 16.44 69.7295 16.8C70.0495 17.1467 70.4495 17.32 70.9295 17.32C71.4229 17.32 71.8362 17.1467 72.1695 16.8C72.5162 16.4533 72.6895 16.06 72.6895 15.62C72.6895 15.18 72.5295 14.7867 72.2095 14.44C71.8895 14.08 71.4695 13.9 70.9495 13.9C70.4429 13.9 70.0362 14.08 69.7295 14.44ZM76.8102 7.26C76.8102 6.95333 76.8168 6.72667 76.8302 6.58C76.8568 6.42 76.9168 6.24 77.0102 6.04C77.1968 5.68 77.7168 5.5 78.5702 5.5C79.3835 5.5 79.8902 5.68 80.0902 6.04C80.1968 6.24 80.2568 6.42 80.2702 6.58C80.2968 6.74 80.3102 6.97333 80.3102 7.28V16.54C80.3102 17.02 80.3502 17.3267 80.4302 17.46C80.5102 17.58 80.6835 17.64 80.9502 17.64C81.2302 17.64 81.4168 17.6533 81.5102 17.68C81.6035 17.6933 81.7168 17.7467 81.8502 17.84C82.1168 18.0133 82.2502 18.4867 82.2502 19.26C82.2502 20.1 82.1168 20.6133 81.8502 20.8C81.5035 21.04 80.6768 21.08 79.3702 20.92C78.3435 20.7867 77.6768 20.4467 77.3702 19.9C76.9968 19.2467 76.8102 18.2067 76.8102 16.78V7.26ZM92.7178 14.48C92.7178 15.2933 92.5111 15.9 92.0978 16.3C91.6978 16.6867 91.2511 16.88 90.7578 16.88H86.0178C86.0178 17.2533 86.2378 17.5667 86.6778 17.82C87.1178 18.0733 87.5578 18.2 87.9978 18.2C88.7711 18.2 89.3778 18.12 89.8178 17.96L90.0378 17.88C90.3578 17.7333 90.6245 17.66 90.8378 17.66C91.2645 17.66 91.6311 17.96 91.9378 18.56C92.1111 18.92 92.1978 19.2267 92.1978 19.48C92.1978 20.6667 90.7778 21.26 87.9378 21.26C86.9511 21.26 86.0711 21.0933 85.2978 20.76C84.5378 20.4133 83.9445 19.96 83.5178 19.4C82.6778 18.32 82.2578 17.1133 82.2578 15.78C82.2578 14.1 82.7978 12.76 83.8778 11.76C84.9711 10.7467 86.3311 10.24 87.9578 10.24C89.8111 10.24 91.1711 10.8933 92.0378 12.2C92.4911 12.8933 92.7178 13.6533 92.7178 14.48ZM88.4978 15.06C89.0045 15.06 89.2578 14.8467 89.2578 14.42C89.2578 14.1133 89.1378 13.8667 88.8978 13.68C88.6711 13.4933 88.3378 13.4 87.8978 13.4C87.4711 13.4 87.0445 13.58 86.6178 13.94C86.1911 14.2867 85.9778 14.66 85.9778 15.06H88.4978Z"
            fill={secondaryColor}
          />
          <path
            d="M110.963 6.42C111.856 6.74 112.303 7.16667 112.303 7.7C112.303 7.87333 112.223 8.2 112.063 8.68L108.223 19.78C108.196 19.8733 108.149 19.9867 108.083 20.12C108.016 20.2533 107.836 20.4333 107.543 20.66C107.263 20.8733 106.923 20.98 106.523 20.98C106.136 20.98 105.796 20.8733 105.503 20.66C105.223 20.4333 105.036 20.2133 104.943 20L102.603 13.1C101.123 17.4733 100.369 19.7 100.343 19.78C100.316 19.86 100.256 19.9733 100.163 20.12C100.069 20.2667 99.9627 20.4 99.8427 20.52C99.536 20.8267 99.1693 20.98 98.7427 20.98C98.316 20.98 97.9627 20.88 97.6827 20.68C97.416 20.48 97.236 20.28 97.1427 20.08L97.0027 19.78L93.1427 8.68C92.996 8.24 92.9227 7.91333 92.9227 7.7C92.9227 7.16667 93.3693 6.74667 94.2627 6.44C94.6493 6.30667 94.996 6.24 95.3027 6.24C95.6227 6.24 95.8627 6.34667 96.0227 6.56C96.196 6.77333 96.3493 7.1 96.4827 7.54L98.6827 14.22L100.863 7.64C101.049 7.08 101.389 6.69333 101.883 6.48C102.096 6.38667 102.369 6.34 102.703 6.34C103.049 6.34 103.369 6.45333 103.663 6.68C103.956 6.89333 104.143 7.10667 104.223 7.32L106.523 14.26L108.723 7.54C108.829 7.23333 108.916 7.00667 108.983 6.86C109.049 6.71333 109.169 6.57333 109.343 6.44C109.529 6.29333 109.756 6.22 110.023 6.22C110.289 6.22 110.603 6.28667 110.963 6.42ZM121.557 14.48C121.557 15.2933 121.35 15.9 120.937 16.3C120.537 16.6867 120.09 16.88 119.597 16.88H114.857C114.857 17.2533 115.077 17.5667 115.517 17.82C115.957 18.0733 116.397 18.2 116.837 18.2C117.61 18.2 118.217 18.12 118.657 17.96L118.877 17.88C119.197 17.7333 119.464 17.66 119.677 17.66C120.104 17.66 120.47 17.96 120.777 18.56C120.95 18.92 121.037 19.2267 121.037 19.48C121.037 20.6667 119.617 21.26 116.777 21.26C115.79 21.26 114.91 21.0933 114.137 20.76C113.377 20.4133 112.784 19.96 112.357 19.4C111.517 18.32 111.097 17.1133 111.097 15.78C111.097 14.1 111.637 12.76 112.717 11.76C113.81 10.7467 115.17 10.24 116.797 10.24C118.65 10.24 120.01 10.8933 120.877 12.2C121.33 12.8933 121.557 13.6533 121.557 14.48ZM117.337 15.06C117.844 15.06 118.097 14.8467 118.097 14.42C118.097 14.1133 117.977 13.8667 117.737 13.68C117.51 13.4933 117.177 13.4 116.737 13.4C116.31 13.4 115.884 13.58 115.457 13.94C115.03 14.2867 114.817 14.66 114.817 15.06H117.337ZM129.102 11.58C129.182 10.8333 129.708 10.46 130.682 10.46C131.202 10.46 131.588 10.5 131.842 10.58C132.095 10.66 132.268 10.8 132.362 11C132.468 11.2 132.528 11.38 132.542 11.54C132.568 11.6867 132.582 11.9133 132.582 12.22V19.22C132.582 19.5267 132.568 19.76 132.542 19.92C132.528 20.0667 132.475 20.24 132.382 20.44C132.195 20.7867 131.735 20.96 131.002 20.96C130.282 20.96 129.795 20.8733 129.542 20.7C129.302 20.5133 129.162 20.2467 129.122 19.9C128.628 20.6067 127.802 20.96 126.642 20.96C125.495 20.96 124.428 20.4333 123.442 19.38C122.455 18.3267 121.962 17.1067 121.962 15.72C121.962 14.32 122.455 13.1 123.442 12.06C124.442 11.0067 125.535 10.48 126.722 10.48C127.175 10.48 127.588 10.56 127.962 10.72C128.335 10.88 128.595 11.0333 128.742 11.18C128.888 11.3133 129.008 11.4467 129.102 11.58ZM125.462 15.74C125.462 16.18 125.635 16.58 125.982 16.94C126.328 17.2867 126.748 17.46 127.242 17.46C127.735 17.46 128.142 17.28 128.462 16.92C128.795 16.56 128.962 16.1667 128.962 15.74C128.962 15.3 128.802 14.8933 128.482 14.52C128.175 14.1467 127.755 13.96 127.222 13.96C126.702 13.96 126.275 14.1467 125.942 14.52C125.622 14.8933 125.462 15.3 125.462 15.74ZM139.696 14L138.396 13.92V16.68C138.396 17.04 138.449 17.3 138.556 17.46C138.676 17.62 138.889 17.7 139.196 17.7C139.516 17.7 139.756 17.7133 139.916 17.74C140.089 17.7533 140.269 17.8133 140.456 17.92C140.762 18.0933 140.916 18.54 140.916 19.26C140.916 20.1 140.729 20.6133 140.356 20.8C140.156 20.8933 139.976 20.9533 139.816 20.98C139.669 20.9933 139.449 21 139.156 21C137.769 21 136.716 20.6867 135.996 20.06C135.276 19.4333 134.916 18.3733 134.916 16.88V13.92C134.662 13.96 134.389 13.98 134.096 13.98C133.802 13.98 133.556 13.8667 133.356 13.64C133.169 13.4133 133.076 13.0267 133.076 12.48C133.076 11.9333 133.109 11.54 133.176 11.3C133.242 11.0467 133.336 10.8667 133.456 10.76C133.669 10.5867 133.936 10.5 134.256 10.5L134.916 10.58V8.52C134.916 8.21333 134.922 7.98667 134.936 7.84C134.962 7.69333 135.029 7.53333 135.136 7.36C135.309 7.02667 135.822 6.86 136.676 6.86C137.582 6.86 138.122 7.10667 138.296 7.6C138.362 7.81333 138.396 8.15333 138.396 8.62V10.58C138.982 10.5267 139.422 10.5 139.716 10.5C140.022 10.5 140.249 10.5133 140.396 10.54C140.556 10.5533 140.736 10.6133 140.936 10.72C141.282 10.8933 141.456 11.4067 141.456 12.26C141.456 13.1 141.276 13.6133 140.916 13.8C140.716 13.8933 140.536 13.9533 140.376 13.98C140.229 13.9933 140.002 14 139.696 14ZM147.8 10.5C149.133 10.5 150.24 11.0067 151.12 12.02C152.013 13.0333 152.46 14.2733 152.46 15.74V19.26C152.46 19.5667 152.447 19.8 152.42 19.96C152.407 20.1067 152.347 20.28 152.24 20.48C152.067 20.8267 151.553 21 150.7 21C149.887 21 149.38 20.8267 149.18 20.48C149.073 20.28 149.007 20.1 148.98 19.94C148.967 19.78 148.96 19.54 148.96 19.22V15.72C148.96 15.1733 148.807 14.7467 148.5 14.44C148.193 14.1333 147.8 13.98 147.32 13.98C146.853 13.98 146.44 14.1267 146.08 14.42C145.72 14.7 145.513 15.02 145.46 15.38V19.26C145.46 19.5667 145.447 19.8 145.42 19.96C145.407 20.1067 145.347 20.28 145.24 20.48C145.067 20.8267 144.553 21 143.7 21C142.86 21 142.347 20.82 142.16 20.46C142.067 20.26 142.007 20.0867 141.98 19.94C141.967 19.7933 141.96 19.56 141.96 19.24V7.28C141.96 6.97333 141.967 6.74667 141.98 6.6C142.007 6.44 142.067 6.26667 142.16 6.08C142.347 5.72 142.867 5.54 143.72 5.54C144.56 5.54 145.067 5.72 145.24 6.08C145.347 6.28 145.407 6.46 145.42 6.62C145.447 6.76667 145.46 6.99333 145.46 7.3V11.72C146.127 10.9067 146.907 10.5 147.8 10.5ZM163.63 14.48C163.63 15.2933 163.423 15.9 163.01 16.3C162.61 16.6867 162.163 16.88 161.67 16.88H156.93C156.93 17.2533 157.15 17.5667 157.59 17.82C158.03 18.0733 158.47 18.2 158.91 18.2C159.683 18.2 160.29 18.12 160.73 17.96L160.95 17.88C161.27 17.7333 161.536 17.66 161.75 17.66C162.176 17.66 162.543 17.96 162.85 18.56C163.023 18.92 163.11 19.2267 163.11 19.48C163.11 20.6667 161.69 21.26 158.85 21.26C157.863 21.26 156.983 21.0933 156.21 20.76C155.45 20.4133 154.856 19.96 154.43 19.4C153.59 18.32 153.17 17.1133 153.17 15.78C153.17 14.1 153.71 12.76 154.79 11.76C155.883 10.7467 157.243 10.24 158.87 10.24C160.723 10.24 162.083 10.8933 162.95 12.2C163.403 12.8933 163.63 13.6533 163.63 14.48ZM159.41 15.06C159.916 15.06 160.17 14.8467 160.17 14.42C160.17 14.1133 160.05 13.8667 159.81 13.68C159.583 13.4933 159.25 13.4 158.81 13.4C158.383 13.4 157.956 13.58 157.53 13.94C157.103 14.2867 156.89 14.66 156.89 15.06H159.41ZM171.494 10.58C171.748 10.66 171.954 10.8 172.114 11C172.288 11.1867 172.374 11.4933 172.374 11.92C172.374 12.3467 172.248 12.8133 171.994 13.32C171.741 13.8267 171.374 14.08 170.894 14.08C170.654 14.08 170.421 14.0267 170.194 13.92C169.981 13.8133 169.694 13.76 169.334 13.76C168.974 13.76 168.634 13.8867 168.314 14.14C168.008 14.3933 167.854 14.7 167.854 15.06V19.26C167.854 19.5667 167.841 19.8 167.814 19.96C167.801 20.1067 167.741 20.28 167.634 20.48C167.434 20.8267 166.914 21 166.074 21C165.434 21 164.974 20.8867 164.694 20.66C164.481 20.4733 164.361 20.1867 164.334 19.8C164.334 19.6667 164.334 19.4733 164.334 19.22V12.2C164.334 11.8933 164.341 11.6667 164.354 11.52C164.381 11.36 164.441 11.1867 164.534 11C164.721 10.64 165.241 10.46 166.094 10.46C166.894 10.46 167.394 10.6133 167.594 10.92C167.741 11.1333 167.814 11.3533 167.814 11.58C167.881 11.4867 167.974 11.3733 168.094 11.24C168.228 11.1067 168.501 10.9267 168.914 10.7C169.328 10.4733 169.688 10.36 169.994 10.36C170.314 10.36 170.581 10.38 170.794 10.42C171.008 10.4467 171.241 10.5 171.494 10.58Z"
            fill={primaryColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_16_180">
            <rect width="176" height="24" rx="8" fill="white" />
          </clipPath>
          <clipPath id="clip1_16_180">
            <rect width="30" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
