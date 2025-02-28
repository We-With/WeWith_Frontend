interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const TimerIcon = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M32 23C32 29.6274 26.6274 35 20 35C13.3726 35 8 29.6274 8 23C8 16.3726 13.3726 11 20 11C26.6274 11 32 16.3726 32 23Z"
        fill="#62ABF5"
      />
      <path
        d="M29 23C29 27.9706 24.9706 32 20 32C15.0294 32 11 27.9706 11 23C11 18.0294 15.0294 14 20 14C24.9706 14 29 18.0294 29 23Z"
        fill="#C4DDF5"
      />
      <path
        d="M22 23C22 24.1046 21.1046 25 20 25C18.8954 25 18 24.1046 18 23C18 21.8954 18.8954 21 20 21C21.1046 21 22 21.8954 22 23Z"
        fill="#0A7FF5"
      />
      <path
        d="M14 7C14 5.89543 14.8954 5 16 5H24C25.1046 5 26 5.89543 26 7C26 8.10457 25.1046 9 24 9H16C14.8954 9 14 8.10457 14 7Z"
        fill="#62ABF5"
      />
      <path
        d="M19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V16Z"
        fill="#0A7FF5"
      />
    </svg>
  )
}
