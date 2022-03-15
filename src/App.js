import './App.css';
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {BrowserRouter as Router, Link, Route, Routes, NavLink} from "react-router-dom";
import MainPage from "./views/MainPage";
import Achievements from "./views/Achievements";

function App() {
  return (
    <div className="App">
        <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} theme="dark" mode="horizontal" >
              <Menu.Item key="1"><Link to={'/'}>Занятия</Link></Menu.Item>
              <Menu.Item key="2"><Link to={'achievements'}>Достижения</Link></Menu.Item>
          </Menu>
        </Header>
        <Content >
                <Routes>
                    <Route exact path={'/'} element={<MainPage />}/>
                    <Route exact path={'achievements'} element={<Achievements />} />
                </Routes>
        </Content>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
