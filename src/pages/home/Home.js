import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import Pop from '../../components/Popup'

const Home = () => {
    const popup = (e) => {
        e.preventDefault();
        document.querySelector('.pop-up').style.display = 'block'
        document.querySelector('.add').classList.add("main");
    }

    return (
        <div id="home">
            <div className="main add">
                <div className="container">
                    {/* navigation bar  */}
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <Link to='/'><h1>BALLOTBOX.NG</h1></Link>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span />
                                <span />
                                <span />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link"><Link to='/polls'>POLLS</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><Link to='/aspirant'>ASPIRANTS</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><Link to='/about'>ABOUT US</Link></a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item"><a className="nav-link login" onClick={popup}>LOGIN</a></li>
                                    <li className="nav-item"><a className="nav-link login" onClick={popup}>SIGN UP</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="row banner">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <h1>VIRTUAL VOTING EXPERIENCE FOR NIGERIA</h1>
                                </div>
                                <div className="item">
                                    <h1>A DIRECT REPLICA OF REAL LIFE VOTING SYSTEM</h1>
                                </div>
                            </div>
                            <button>Learn more</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                            <img src={require("../../img/Image_enny.png").default} className="img-fluid d-none d-sm-block" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <Pop />
        </div>
    )
}

export default Home