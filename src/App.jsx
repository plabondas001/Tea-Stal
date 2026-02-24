import { Suspense } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import LoadData from "./Components/LoadData/LoadData";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

const fetchData = async () => {
  const res = await fetch("/blogs.json");
  return res.json();
};

function App() {
  const promiseData = fetchData();

  return (
    <div>
      {/* Navbar */}
      <section>
        <Navbar></Navbar>
        
      </section>

      {/* Header */}
      <section>
        <Header></Header>
      </section>

      {/* Main */}

      {/* LoadData */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <LoadData promiseData={promiseData}></LoadData>
      </Suspense>
    

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Footer></Footer>
    </div>
  );
}

export default App;
