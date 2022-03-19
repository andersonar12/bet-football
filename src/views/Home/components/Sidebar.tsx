import "./styles.scss";

export const Sidebar = () => {
  const countries = [
    {
      country: "Colombia",
      flagIcon: "icons8-colombia-96.png",
    },
    {
      country: "Alemania",
      flagIcon: "icons8-germany-96.png",
    },
    {
      country: "USA",
      flagIcon: "icons8-usa-96.png",
    },
    {
      country: "Mexico",
      flagIcon: "icons8-mexico-96.png",
    },
    {
      country: "Inglaterra",
      flagIcon: "icons8-england-circular-96.png",
    },
    {
      country: "España",
      flagIcon: "icons8-spain-96.png",
    },
  ];

  const leagues = [
    {
      name: "La Liga",
      logo: "la-liga.png",
    },
    {
      name: "Premier League",
      logo: "premier.png",
    },
    {
      name: "Serie A",
      logo: "serie-a.png",
    },
    {
      name: "Bundesliga",
      logo: "bundesliga.png",
    },
    {
      name: "Ligue 1",
      logo: "ligue-1.png",
    },
  ];
  return (
    <div className="sidebar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <p className="d-flex fs-5 align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-5">
        <i className="fas fa-globe-americas"></i>
        <span className="d-none ms-2 d-sm-inline fw-bolder">Paises</span>
      </p>
      <ul
        className="nav nav-pills w-100 flex-column mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        {countries.map((item, i) => (
          <li className="nav-item w-100" key={i}>
            <a className={`nav-link align-middle fw-bolder ${i === 0 && "active"} `}>
              <img src={require(`assets/countries/${item.flagIcon}`)} width="30" alt="..." />
              <span className="ms-1 d-none d-sm-inline">{item["country"]}</span>
            </a>
          </li>
        ))}
        <li className="text-center w-100">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownCountries"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mas paises
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownCountries">
              <li>
                <a className="dropdown-item">Uruguay</a>
              </li>
              <li>
                <a className="dropdown-item">Italia</a>
              </li>
              <li>
                <a className="dropdown-item">Polonia</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <p className="mt-3 fs-5">
        <i className="fas fa-futbol"></i>
        <span className="d-none ms-2 d-sm-inline fw-bolder">Ligas</span>
      </p>
      <ul
        className="nav nav-pills w-100 flex-column mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        {leagues.map((item, i) => (
          <li className="nav-item w-100" key={i}>
            <a className={`nav-link align-middle fw-bolder ${i === 0} `}>
              <img
                src={require(`assets/leagues/${item.logo}`)}
                className="rounded-circle"
                width="30"
                alt="..."
              />
              <span className="ms-2 d-none d-sm-inline">{item["name"]}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
