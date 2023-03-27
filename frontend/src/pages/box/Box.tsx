import { Route, Routes } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import BottomNav from "../../components/BottomNav";
import BoxHome from "./BoxHome";
import BoxDetail from "./BoxDetail";

function Box() {
  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<BoxHome />} />
        <Route path="/detail" element={<BoxDetail/>}/>
      </Routes>
      <BottomNav />
    </div>
  );
}

export default Box;
