export const MainCarousel = () => {
  return (
    <div id="main-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item p-2 active">
          <img
            src={require(`assets/banners/main-banner.png`)}
            className="d-block w-100 rounded-3"
            alt=""
          />
        </div>
        <div className="carousel-item p-2">
          <img
            src={require(`assets/banners/main-banner.png`)}
            className="d-block w-100 rounded-3"
            alt=""
          />
        </div>
        <div className="carousel-item p-2">
          <img
            src={require(`assets/banners/main-banner.png`)}
            className="d-block w-100 rounded-3"
            alt=""
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#main-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#main-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
