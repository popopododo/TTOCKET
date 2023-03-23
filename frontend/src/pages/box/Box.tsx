import { Route, Routes } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import BottomNav from "../../components/BottomNav";
import BoxHome from "./BoxHome";

function Box() {
  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<BoxHome />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default Box;
