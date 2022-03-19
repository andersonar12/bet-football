import { Routes, Route } from "react-router-dom";
import { Subpage1 } from "./Subpage1";
import { Subpage2 } from "./Subpage2";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="subpage1" element={<Subpage1 />} />
      <Route path="subpage2" element={<Subpage2 />} />
    </Routes>
  );
};
