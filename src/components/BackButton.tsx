import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="py-4 text-2xl cursor-pointer inline-block"
    >
      <ArrowLeftOutlined />
    </div>
  );
}

export default BackButton;
