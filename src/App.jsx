import UserRoute from "./routes/UserRoute";
import Toaster from "./components/common/Toaster";
import Spinner from "./components/common/Spinner";
import ThemeProvider from "./components/common/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Spinner />
      <Toaster />
      <ThemeProvider>
        <Routes>
          <Route path={"/*"} element={<UserRoute />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
