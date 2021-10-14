import {useState} from 'react';
import Navbar from './assets/components/navbar/Navbar';
import sidebar from './assets/components/sidebar/Sidebar';



const App = () => {

  const [sidebarOpen, setSidebarOpen]  = useState(false);
  const openSidebar =() => {
    setSidebarOpen(true);
  };

  const closeSidebar =() => {
    setSidebarOpen(false);
  };
  return (
    <div classname="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main />
      <sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     </div>
 
  );
};


export default App;