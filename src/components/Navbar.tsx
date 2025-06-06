import { UserOutlined } from "@ant-design/icons";
import Container from "./Container";
import { Button } from "antd";

function Navbar() {
  return (
    <nav className="py-4 font-bold shadow">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-primary">ImpExpress</div>
          <div>
            <Button className="flex items-center gap-2" type="primary">
              <UserOutlined />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
