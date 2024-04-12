import Skeleton from "./Skeleton";

const SkeletonCategoryGrid = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Skeleton classes="card-category" />
          </div>
          <div className="col-6">
            <Skeleton classes="card-category" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkeletonCategoryGrid;
