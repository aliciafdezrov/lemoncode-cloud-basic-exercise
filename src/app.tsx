import * as React from "react";
import {store} from "./core/store";
import {Provider} from "react-redux";
import {CardGameScene, SplashScene} from "scenes";
import {NotFound} from "common";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {appBaseRoutes} from "core";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path={appBaseRoutes.splashScreen} element={<SplashScene/>}/>
                    <Route path={appBaseRoutes.cardGame} element={<CardGameScene/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
