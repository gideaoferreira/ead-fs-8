import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import PageHome from "./pages/home/PageHome";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PageHome />
      </div>
      <Footer />
    </>
  );
}

export default App;
