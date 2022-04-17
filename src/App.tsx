import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from "./routesConfig";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <RoutesConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
