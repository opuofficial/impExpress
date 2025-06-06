import { Button, Drawer } from "antd";
import { useState } from "react";
import Container from "./Container";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils";
import SleeperLayout from "./SleeperLayout";
import SleeperPlusSeaterLayout from "./SleeperPlusSeaterLayout";

type BusCardProps = {
  name: string;
  time: string;
  seats: number;
  price: number;
  seatLayoutType: string;
};

function BusCard({ name, time, seats, price, seatLayoutType }: BusCardProps) {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const from = capitalizeFirstLetter(query.get("from"));
  const to = capitalizeFirstLetter(query.get("to"));
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="rounded-lg shadow-md p-4 mb-2">
        <div className="flex justify-between font-semibold text-xl">
          <div>{name}</div>
          <div>
            {time} ({seats} seats)
          </div>
          <div>{price.toLocaleString()} Taka</div>
        </div>
        <div className="flex justify-end mt-2">
          <Button
            type="primary"
            size="large"
            className="rounded-full"
            onClick={showDrawer}
          >
            View seats
          </Button>
        </div>
      </div>

      <Drawer
        title={`${from} - ${to}`}
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        height={"95%"}
        placement="bottom"
      >
        <Container>
          {seatLayoutType == "sleeper" ? (
            <SleeperLayout />
          ) : (
            <SleeperPlusSeaterLayout />
          )}
        </Container>
      </Drawer>
    </>
  );
}

export default BusCard;
