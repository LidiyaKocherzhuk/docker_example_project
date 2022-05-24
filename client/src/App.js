import {Routes, Route } from "react-router-dom";

import './App.css';
import {Login, Logo, Page1, Registration} from './components';

function App() {

    return (
        <div>
            <Routes>

                <Route path={'/'} element={<Page1/>}>
                    <Route index element={<Logo/>}/>
                    <Route path={'registration'} element={<Registration/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    {/*<Route path={'logout'} element={<Logout/>}/>*/}
                </Route>

            </Routes>

        </div>
);
}

export default App;
