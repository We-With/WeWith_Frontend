interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  isClose?: boolean;
}

export const Alarm = ({
  size = 24,
  onClick,
  className,
  isClose
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      {
        isClose ?
          <>
            <path d="M3 2L21 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.37647 2.43713L2.51793 3.99663C2.20062 4.26289 2.15923 4.73595 2.42548 5.05326C2.69174 5.37056 3.1648 5.41195 3.48211 5.1457L5.44118 3.50184L4.37647 2.43713ZM6.85856 4.91922C4.673 6.50883 3.25002 9.08804 3.25002 12C3.25002 16.8325 7.16753 20.75 12 20.75C14.912 20.75 17.4912 19.327 19.0808 17.1415L18.0042 16.0649C16.6992 17.9886 14.4967 19.25 12 19.25C7.99595 19.25 4.75002 16.0041 4.75002 12C4.75002 9.50333 6.01149 7.30084 7.93513 5.99579L6.85856 4.91922ZM18.4216 1.42548C18.1043 1.15923 17.6312 1.20062 17.3649 1.51793C17.0987 1.83523 17.1401 2.3083 17.4574 2.57455L20.5216 5.1457C20.8389 5.41195 21.3119 5.37056 21.5782 5.05326C21.8444 4.73595 21.803 4.26289 21.4857 3.99663L18.4216 1.42548ZM10.8724 4.83707C11.2394 4.77981 11.616 4.75002 12 4.75002C16.0041 4.75002 19.25 7.99595 19.25 12C19.25 12.4059 19.2167 12.8035 19.1529 13.1903C19.0855 13.599 19.3621 13.985 19.7708 14.0524C20.1795 14.1199 20.5654 13.8432 20.6329 13.4345C20.71 12.9673 20.75 12.4881 20.75 12C20.75 7.16753 16.8325 3.25002 12 3.25002C11.5383 3.25002 11.0844 3.28585 10.6412 3.35501C10.2319 3.41886 9.95191 3.8024 10.0158 4.21166C10.0796 4.62092 10.4632 4.90093 10.8724 4.83707Z" fill="currentColor" />
          </>
          :
          <path d="M12 8V13H17M21.0036 5.57115L17.9395 3M6.06418 3L3 5.57115M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      }
    </svg>
  )
}