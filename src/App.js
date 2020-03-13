import React, { Component } from 'react';
import './App.css';
import './stylesheet/css/pages/products-page.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DynamicComponentsData from './DynamicComponentsData';
import DynamicComponent from './DynamicComponent';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DynamicComponentNew from "./DynamicComponentNew";

class App extends Component {
    render() {
        let dynamicComponents = DynamicComponentsData;

        return (
            <div className="App">
                <h1>Create Dynamic Routes And Components Demo</h1>
                <div className="dyn">dynn</div>
                <Router>
                    <NavLink to="/qq">aaaaaaa</NavLink>

                    <div>
                        <div>
                            {
                                dynamicComponents.map((item, index) => {
                                    return <div key={index}>
                                        <NavLink exact activeClassName="selected" to={item.route}>{item.title}</NavLink>
                                    </div>
                                })
                            }
                        </div>
                        <div>
                            <Route exact path="/qq">
                                <DynamicComponentNew />
                            </Route>
                            {
                                dynamicComponents.map((item, index) => {
                                    return <Route exact key={index} path={item.route} component={() => <DynamicComponent title={item.title} content={item.content} />} />
                                })
                            }
                        </div>
                    </div>
                </Router>
                {/*<OwlCarousel className="owl-theme" loop margin={10} nav>*/}
                {/*    <div class="item">*/}
                {/*        <img src="https://uploads.codesandbox.io/uploads/user/9480d5c0-6b58-40de-8854-caacb6c4a2f1/9UmX-11.jpg" />*/}
                {/*    </div>*/}
                {/*    <div class="item">*/}
                {/*        <img src="https://uploads.codesandbox.io/uploads/user/9480d5c0-6b58-40de-8854-caacb6c4a2f1/9UmX-11.jpg" />*/}
                {/*    </div>*/}
                {/*    <div class="item">*/}
                {/*        <img src="https://uploads.codesandbox.io/uploads/user/9480d5c0-6b58-40de-8854-caacb6c4a2f1/9UmX-11.jpg" />*/}
                {/*    </div>*/}
                {/*    <div class="item">*/}
                {/*        <img src="https://uploads.codesandbox.io/uploads/user/9480d5c0-6b58-40de-8854-caacb6c4a2f1/9UmX-11.jpg" />*/}
                {/*    </div>*/}
                {/*    <div class="item">*/}
                {/*        <img src="https://uploads.codesandbox.io/uploads/user/9480d5c0-6b58-40de-8854-caacb6c4a2f1/9UmX-11.jpg" />*/}
                {/*    </div>*/}
                {/*</OwlCarousel>*/}

            </div>
        );
    }
}

export default App;