const Loader = ({ className, type }) => {
  return (
    <div
      className={`loading ${
        type === 'ring'
          ? 'loading-ring'
          : type === 'dots'
          ? 'loading-dots'
          : 'loading-spinner'
      } ${className}`}
    ></div>
  )
}

export default Loader
