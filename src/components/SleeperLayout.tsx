import DriverIcon from "../assets/images/driver-icon.png";

const SleeperSeat = () => {
  return (
    <div className="mb-2">
      <div className="h-12 w-6 border rounded bg-slate-200"></div>
      <div className="text-slate-400 text-xs">Sold</div>
    </div>
  );
};

function SleeperLayout() {
  return (
    <div className="flex gap-6">
      <div className="border rounded-md w-[144px]">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-slate-500 p-2">Lower deck</div>
          <div>
            <img
              className="w-5 opacity-8 py-2 px-4 box-content"
              src={DriverIcon}
              alt="Driver"
            />
          </div>
        </div>
        <div className="flex gap-2 rounded-md justify-center py-2">
          <div>
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
          </div>
          <div className="ml-5">
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
          </div>
          <div>
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
          </div>
        </div>
      </div>

      <div className="border rounded-md w-[144px]">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-slate-500 p-2">Upper deck</div>
          <div></div>
        </div>
        <div className="flex gap-2 rounded-md justify-center py-2">
          <div>
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
          </div>
          <div className="ml-5">
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
          </div>
          <div>
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
            <SleeperSeat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SleeperLayout;
