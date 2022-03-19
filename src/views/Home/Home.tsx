import { Link } from "react-router-dom";
import { useSharedCounter } from "../../hooks/useSharedCounter";
import { HomeRouter } from "./HomeRouter";
import { Sidebar } from "./components/Sidebar";
export const Home = () => {
  //CustomHook para compartir un useState() entre 2 o mas componentes
  const { count } = useSharedCounter();

  return (
    <div className="container-fluid bg-dark">
      <div className="row ">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 bg-dark border-end">
          <Sidebar />
        </div>

        <div className="col pt-5 outlet">{/* <HomeRouter /> */}</div>
      </div>
    </div>
  );
};
