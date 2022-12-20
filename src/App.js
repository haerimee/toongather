// import './App.css';
// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';

// import Main from './pages/Main';

// function App() {
//   return (
//     <div className="App">

//       {/* Main */}
//       <Routes>
//         <Route exact path="/" element={<Main />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
