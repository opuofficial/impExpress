import Container from "../components/Container";
import HomeBanner from "../assets/images/HomeBanner.jpg";
import { Button, Col, DatePicker, Row, Select } from "antd";
import { locationsData } from "../const/const";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearchBuses = () => {
    if (!from) {
      return toast.error("Select departure");
    }

    if (!to) {
      return toast.error("Select destination");
    }

    if (!date) {
      return toast.error("Select date");
    }

    navigate(`/bus-ticket?from=${from}&to=${to}`);
  };

  return (
    <div className="relative">
      <div
        className="py-28 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${HomeBanner})`,
        }}
      >
        <div>
          <Container>
            <div className="text-light text-4xl font-bold">
              <div className="mb-1">Bangladesh's No. 1 online</div>
              <div>bus ticket booking site</div>
            </div>
          </Container>
        </div>
      </div>

      <div className="max-w-3xl shadow-lg mx-auto px-4 pt-8 pb-16 rounded-2xl relative -top-12 bg-white">
        <Row gutter={12}>
          <Col span={8}>
            <div>
              <label className="font-semibold mb-2 inline-block text-slate-700">
                From
              </label>
              <Select
                options={locationsData}
                showSearch
                className="w-full"
                size="large"
                onChange={(e) => setFrom(e)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <label className="font-semibold mb-2 inline-block text-slate-700">
                To
              </label>
              <Select
                options={locationsData}
                showSearch
                className="w-full"
                size="large"
                onChange={(e) => setTo(e)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <label className="font-semibold mb-2 inline-block text-slate-700">
                Date of Journey
              </label>
              <DatePicker
                className="w-full"
                size="large"
                onChange={(e) => setDate(e.format())}
              />
            </div>
          </Col>
        </Row>

        <Button
          size="large"
          type="primary"
          className="w-[300px] font-semibold py-7 rounded-full text-xl absolute top-[130px] left-[50%] -translate-x-[50%]"
          onClick={handleSearchBuses}
        >
          <SearchOutlined />
          <span>Search buses</span>
        </Button>
      </div>
    </div>
  );
}

export default Home;
