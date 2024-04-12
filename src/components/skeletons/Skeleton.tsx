import { FC } from "react";
import "./skeleton.scss";

interface SkeletonProps {
  classes: string;
}

const Skeleton: FC<SkeletonProps> = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};
export default Skeleton;
