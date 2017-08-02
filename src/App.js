import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Request from 'superagent';
import 'bulma/css/bulma.css';
import './App.css';
import Home from './Home';
import About from './About';
import Events from './Events';
import {TemperatureConverter} from 'cis137-components';







class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            temp: ''
        };
    }

    componentDidMount() {
        Request
            .get(`http://api.openweathermap.org/data/2.5/weather?zip=21157,us&APPID=${process.env.REACT_APP_WEATHER_ACCESS_KEY}`)
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(res);
                this.setState({
                    temp: res.body.main.temp,

                });
            })
    }



    render() {
        return (
            <BrowserRouter>

                <section className="hero">
                    <div className="hero-head">
                        <div className="nav-right nav-menu">

                            <div className="navigation">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/events">Events</Link></li>
                                </ul>



                                    <h1 className="title"><strong>Baltimore Area Triathlon Club Inc.</strong>
                                    </h1>
                                <h3 className="subtitle">Current Temperature</h3>
                                <h4>
                                    <strong><TemperatureConverter kelvin={this.state.temp} toUnit="F"/></strong>
                                </h4>
                                </div>
                        </div>

                            </div>
                    <div id="footer">
                    <footer className="hero is-primary">
                        <div className="container">
                            <div className="content has-text-centered">
                                <div className="footer">
                                    <h3>
                                        BATC<strong> Newsletter</strong>
                                    </h3>
                                    <form action="/action_page.php">
                                        <strong>E-mail:</strong>
                                        <input type="email" name="email" />
                                        <div className="Block">
                                            <a className="button is-primary is-outlined">Subscribe</a>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </footer>
                    </div>


                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/events" exact component={Events}/>




                </section>




            </BrowserRouter>

        );
    }
}


export default App;

