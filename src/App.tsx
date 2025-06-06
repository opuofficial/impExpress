import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { ConfigProvider, type ThemeConfig } from "antd";
import BusTicket from "./pages/BusTicket";
import { Toaster } from "react-hot-toast";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#d63941",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="bus-ticket" element={<BusTicket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
