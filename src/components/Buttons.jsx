/** @jsxImportSource theme-ui */

export const SecondaryButton = ({ width, height, children }) => {
  return (
    <button
      sx={{
        bg: "primary",
        border: "none",
        borderRadius: "50px",
        width: `${width}`,
        height: `${height}`,
        bg: "white",
        color: "primary",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {children}
    </button>
  );
};
