import AppRouter from "../router/Router";
import { Footer, Header, NavBar } from "../../widgets";

function App() {
  return (
    <>
      <AppRouter>
        <Header>
          <NavBar />
        </Header>
      </AppRouter>
      <Footer />
    </>
  );
}

export default App;
