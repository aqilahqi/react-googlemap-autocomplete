import CustomHeader from "./components/CustomHeader";
import Map from "./components/Map";
import SearchBox from "./components/SearchBox";
import SearchHistory from "./components/SearchHistory";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import { Col, Row } from "antd";
import "./App.css";

const App = () => {
  return (
    <Layout className="layout">
      <div className="mainPage">
        <Header>
          <Row>
            <Col xs={{ span: 24 }} xl={{ span: 14, offset: 4 }}>
              <CustomHeader />
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col xs={{ span: 24 }} xl={{ span: 8, offset: 4 }}>
              <Map />
            </Col>
            <Col xs={{ span: 24 }} xl={{ span: 6 }}>
              <div>
                <SearchBox />
                <SearchHistory />
              </div>
            </Col>
          </Row>
        </Content>
      </div>
    </Layout>
  );
};

export default App;
