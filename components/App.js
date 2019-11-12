import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';

// import projects:
import TrainerTD from './projects/TrainerTD';
import YouNav from './projects/YouNav';
import MatchMaker from './projects/MatchMaker';
import TeamAppleStore from './projects/TeamAppleStore';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='*' component={Navbar} />
                    <Route exact path='/' component={Projects} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />

                    <Route exact path='/TrainerTD' component={TrainerTD} />
                    <Route exact path='/YouNav' component={YouNav} />
                    <Route exact path='/MatchMaker' component={MatchMaker} />
                    <Route exact path='/TeamAppleStore' component={TeamAppleStore} />

                    <Route path='*' component={Footer} />
                </div>
            </Router>
        )
    }
}

export default App;