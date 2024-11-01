import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >


      <Navbar />
      <Home/>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default App;
