import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Deliverable from '../pages/Deliverable';
import ThreeDViewerPage from '../pages/ThreeDViewerPage';
import Login from '../pages/login';
import Dashboard from '../pages/Dashboard';
import SurveyPage from '../pages/SurveyPage';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="survey" element={<SurveyPage />} />
                    <Route path=":projectId/deliverables" element={<Deliverable />} />
                    <Route path=":projectId/deliverables/3d" element={<ThreeDViewerPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;