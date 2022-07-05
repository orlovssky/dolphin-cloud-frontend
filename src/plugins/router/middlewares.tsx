import { Navigate } from "react-router-dom";
import { getValue } from "services/utils/common/localStorage.utils";

function RequireAuth({ children }: { children: JSX.Element }) {
  if (!getValue("dolphin-api-token")) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}

function RequireUnauth({ children }: { children: JSX.Element }) {
  if (getValue("dolphin-api-token")) {
    return <Navigate to="/" />;
  }
  return children;
}

export { RequireAuth, RequireUnauth };
