import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Deliverable from '../pages/Deliverable';
import ThreeDViewerPage from '../pages/ThreeDViewerPage';



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path=":projectId/deliverables" element={<Deliverable />} />
                    <Route path=":projectId/deliverables/3d" element={<ThreeDViewerPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;