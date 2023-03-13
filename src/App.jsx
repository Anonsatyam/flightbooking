import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Lounge from './Components/Lounge/Lounge';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      {/* <Lounge/> */}
    </div>
  )
}

export default App