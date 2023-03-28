import { Route, Routes } from "react-router";
import SponsorHome from "./SponsorHome";
import SponsorPerformList from "./SponsorPerformList";
import SponsorBehindList from "./SponsorBehindList";
import SponsorPerformForm from "./SponsorPerformForm";
import BottomNav from "../../components/BottomNav";

function Sponsor() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SponsorHome />} />
        <Route path="/performlist" element={<SponsorPerformList />} />
        <Route path="/behindlist" element={<SponsorBehindList />} />
        <Route path="/performlist/add" element={<SponsorPerformForm />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default Sponsor;
