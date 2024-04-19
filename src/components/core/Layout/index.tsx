const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`layoutresponsive`}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
