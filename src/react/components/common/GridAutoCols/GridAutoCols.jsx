function GridAutoCols({ children, min, max, fitOrFill = 'fit', ...props }) {
  const { className, style, ...rest } = props;

  return (
    <div
      {...rest}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-${fitOrFill}, minmax(${min}, ${max}))`,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default GridAutoCols;
