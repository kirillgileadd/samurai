import './App.scss';
import React from 'react';
import Header from './componets/Header/Header';
import NavBar from './componets/NavBar/NavBar';
import Profile from './componets/Profile/Profile';
import Dialogs from "./componets/Dialogs/Dialogs";
import {Switch} from "react-router-dom";
import {Route} from 'react-router'
import Activity from "./componets/Activity/Activity";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import Friends from "./componets/Friends/Friends";
import Members from "./componets/Members/Members";

const App = (props) => {

    return (
        <section className="main">
            <div className="main__inner">
                <NavBar state={props.state.navBar} aside={props.state.aside}/>
                <Header/>
            </div>
            <div className="wrapper-content">
                <Switch>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/profile"
                           render={() => <Profile state={props.state.profilePage}
                                                  aside={props.state.aside}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/settings" component={Settings}/>
                    <div className="wrapper-box">
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/activity" component={Activity}/>
                        <Members/>
                    </div>
                </Switch>
            </div>
        </section>
    )
}

export default App
