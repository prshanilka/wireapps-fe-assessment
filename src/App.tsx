import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SkeletonProductGrid from "@/components/skeletons/SkeletonProductGrid";
import ErrorFallback from "@/components/ErrorFallback";
import HomePage from "@/pages/HomePage";
import "./styles/main.scss";

const Category = lazy(() => import("./pages/CategoryPage"));

function App() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate("/")}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="category/:category"
            element={
              <Suspense fallback={<SkeletonProductGrid />}>
                <Category />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
