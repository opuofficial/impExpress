import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import Container from "../components/Container";
import { capitalizeFirstLetter } from "../utils/utils";
import { Button } from "antd";
import BusCard from "../components/BusCard";
import { busData } from "../data";

function BusTicket() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const from = capitalizeFirstLetter(query.get("from"));
  const to = capitalizeFirstLetter(query.get("to"));

  return (
    <div>
      <Container>
        <div className="flex gap-4 items-center">
          <BackButton />
          <div className="font-semibold text-xl">
            {from} - {to} ({busData.length} buses)
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="p-2">
              <div className="text-xl">Filter</div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Button>AC</Button>
                <Button>Sleeper</Button>
                <Button>Single Seat</Button>
                <Button>Seater</Button>
                <Button>Non AC</Button>
                <Button>High Rated</Button>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            {busData.map((bus, index) => (
              <BusCard
                key={index}
                name={bus.name}
                time={bus.time}
                seats={bus.seats}
                price={bus.price}
                seatLayoutType={bus.seatLayoutType}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BusTicket;
