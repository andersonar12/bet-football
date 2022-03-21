import { Link } from "react-router-dom";
import { useSharedCounter } from "../../hooks/useSharedCounter";
import { Sidebar } from "./components/Sidebar";
import { MainCarousel } from "./components/MainCarousel";
import "./styles.scss";
import TableBet from "./components/TableBet";

export const Home = () => {
  //CustomHook para compartir un useState() entre 2 o mas componentes
  const { count } = useSharedCounter();

  return (
    <div className="container-fluid bg-dark">
      <div className="row ">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 bg-dark border-end">
          <Sidebar />
        </div>

        <div className="col outlet ">
          <div className="row">
            <div className="col-9">
              <MainCarousel />
            </div>
            <div className="col p-3 coupon me-3">
              <div className="d-flex align-items-start flex-column h-100">
                <button className="btn btn-primary mb-auto ">
                  <i className="fas fa-trophy"></i>
                </button>

                <div className="w-100">
                  <h2 className="text-primary">Comienza BetSlip</h2>
                  <h2 className="fw-bolder">Con este cupon</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sit accusamus
                    dolorem quisquam
                  </p>
                </div>

                <button className="btn btn-primary mt-auto ">¿Como empezar?</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-9">
              <TableBet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
