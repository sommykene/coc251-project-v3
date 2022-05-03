import {
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import logo from "./assets/images/logo.svg";

import HomeScreen from "./screens/home/HomeScreen";
import CultureHomeScreen from "./screens/culture/CultureHomeScreen";

// External routes files
import { VocabRoutes } from "./screens/vocab/VocabRoutes";
import { PracticeRoutes } from "./screens/practice/PracticeRoutes";
import { LearnRoutes } from "./screens/learn/LearnRoutes";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img style={styles.logo} src={logo} />
      </Link>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="learn/*" element={<LearnRoutes />} />
          <Route path="practice/*" element={<PracticeRoutes />} />
          <Route path="vocab/*" element={<VocabRoutes />} />
          <Route path="culture/*" element={<CultureHomeScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

const PrivateRoute = () => {
  const token = sessionStorage.getItem("Auth Token");
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

const styles = {
  logo: {
    position: "fixed",
    top: 15,
    left: 15,
    width: "30px",
  },
};
export default App;
