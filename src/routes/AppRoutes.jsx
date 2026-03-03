import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Expertise from '../pages/Expertise';



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='contact' element={<Contact/>}/>
                    <Route path= 'about' element = {<About/>} />
                    <Route path= 'expertise' element = {<Expertise/>} />
                </Route>
                

            </Routes>
        </Router>
    )
}

export default AppRoutes;