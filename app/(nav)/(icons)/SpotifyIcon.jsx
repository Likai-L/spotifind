export default function SpotifyIcon({ size, ...rest }) {
  return (
    <svg
      fill="none"
      height={size || 35}
      viewBox="0 0 35 36"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M17.5001 33C25.5545 33 32.0834 26.2845 32.0834 18C32.0834 9.7155 25.5545 3 17.5001 3C9.44571 3 2.91675 9.7155 2.91675 18C2.91675 26.2845 9.44571 33 17.5001 33Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M9.625 13.95C14.875 11.85 20.8542 12.6 25.5208 15.9M11.5208 18.6C15.4583 17.1 19.8333 17.55 23.1875 20.1M12.8333 23.1C15.75 21.9 18.9583 22.35 21.5833 24.15"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
    </svg>
  );
}
