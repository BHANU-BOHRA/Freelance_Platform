import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
<<<<<<< HEAD
        Made with 💗 by Bha
=======
        Made with 💗 by BHA
>>>>>>> 47ffad619c37479e1c3b21e6ee572648e3055def
      </div>
    </div>
  );
};

export default AppLayout;
