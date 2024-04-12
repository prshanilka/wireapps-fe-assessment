import Skeleton from "./Skeleton";

const SkeletonProductGrid = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Skeleton classes="card" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Skeleton classes="card" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Skeleton classes="card" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Skeleton classes="card" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkeletonProductGrid;
