import { User, Box, Bell, BarChart4, Truck, Scroll, Map } from "lucide-react";

const Menu = () => {
  return (
    <main className="flex flex-col h-svh w-[280px] bg-white font-semibold text-slate-600 text-sm divide-y-2 divide-slate-200">
      <div className="flex flex-col px-3 py-5 gap-y-1">
        <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100  cursor-pointer">
          <div className="flex flex-1 gap-x-3">
            <Box className="w-5 h-5" />
            <span>Requests</span>
          </div>
          <div className="p-1 rounded-sm bg-slate-100 text-xs">25</div>
        </div>

        <div className="flex gap-x-3 px-4 py-2 rounded-sm hover:bg-slate-100 font-semibold text-slate-600 text-sm cursor-pointer">
          <div className="flex flex-1 gap-x-3">
            <Bell className="w-5 h-5" />
            <span>Notifications</span>
          </div>
          <div className="p-1 rounded-sm bg-slate-100 text-xs">25</div>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 font-semibold text-slate-600 text-sm">
        <nav className="flex flex-col px-3 py-5 gap-y-1">
          <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100 cursor-pointer">
            <div className="flex flex-1 gap-x-3">
              <BarChart4 className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
          </div>

          <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100  cursor-pointer">
            <div className="flex flex-1 gap-x-3">
              <Truck className="w-5 h-5" />
              <span>Shipments</span>
            </div>
          </div>

          <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100 cursor-pointer">
            <div className="flex flex-1 gap-x-3">
              <Scroll className="w-5 h-5" />
              <span>Parcels</span>
            </div>
          </div>

          <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100 cursor-pointer">
            <div className="flex flex-1 gap-x-3">
              <Map className="w-5 h-5" />
              <span>Branches</span>
            </div>
          </div>

          <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100 cursor-pointer">
            <div className="flex flex-1 gap-x-3">
              <User className="w-5 h-5" />
              <span>Clients</span>
            </div>
          </div>
        </nav>

        <button className="mx-3 my-5 p-2 rounded-sm bg-slate-800 text-white">Create shipment</button>
      </div>

      <div className="flex flex-col px-3 py-5 gap-y-1 font-semibold text-slate-600 text-sm">
        <div className="flex justify-between px-4 py-2 rounded-sm hover:bg-slate-100 cursor-pointer">
          <div className="flex flex-1 gap-x-3">
            <User className="w-5 h-5" />
            <span>Requests</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
