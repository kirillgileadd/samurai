import './App.scss';
import React from 'react';
import Header from './componets/Header/Header';
import NavBar from './componets/NavBar/NavBar';
import Profile from './componets/Profile/Profile';
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from  'react-router'
import Activity from "./componets/Activity/Activity";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";




const App = (props) => {



    return (
        <BrowserRouter>
            <section className="main">
                <div className="main__inner">
                    <NavBar/>
                    <Header/>
                </div>
                <div className="wrapper-content">
                    <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={ () => <Profile posts={props.posts}/>}/>
                    <Route path="/activity" component={Activity}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default App
