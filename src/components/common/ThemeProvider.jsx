import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { selectIsDarkTheme } from "../../redux/themeSlice";

function ThemeProvider({ children }) {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const getBackgroundColor = () => {
    return isDarkTheme ? "rgb(0, 4, 20)" : "rgb(0, 4, 20)";
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#081A51",
        },
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.darkAlgorithm,
      }}
    >
      <div
        style={{ backgroundColor: getBackgroundColor(), minHeight: "100vh" }}
      >
        {children}
      </div>
    </ConfigProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
