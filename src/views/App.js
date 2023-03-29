import Home from '../components/Home';
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from '../routes/route';
import { Fragment } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import Login from '../components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const LayoutCustomer = route.layout === null ? Fragment : Home;
            const Page = route.component;
            if (route.path.includes("admin")) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page></Page>
                    </Layout>
                  }
                />
              )
            }
            else if (route.path.includes("login")) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Login />
                  }
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <LayoutCustomer>
                      <Page />
                    </LayoutCustomer>
                  }
                />
              );
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
