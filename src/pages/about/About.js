import React from 'react';
import './about.css'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div id="about">
            <div className="main">
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
                                        <a className="nav-link active"><Link to='/about'>ABOUT US</Link></a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto nav-avatar">
                                    <li className="nav-item"><a href="../voter dashboard/index.html" className="nav-link">EK</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* banner  */}
                    <div className="row banner">
                        <div className="col-lg-12">
                            <h1>BALLOTBOX</h1>
                            <p>VIRTUAL VOTING EXPERIENCE FOR NIGERIA,A DIRECT REPLICA OF REAL LIFE VOTING SYSTEM</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* body  */}
            <div className="container-fluid merit">
                <div className="container">
                    <div className="row">
                        <h1>Why our Solution?</h1>
                        <p>Virtual voting experience for Nigeria, a direct replica of real life voting system</p>
                        <div className="col-lg-4 col-sm-6">
                            <img src="../img/noun_secure_3323085.svg" alt />
                            <h3>Private and secure</h3>
                            <p>Our third-party service provides a layer of separation between the voting process and individuals
                            involved. No unsecured paper ballots, each vote is captured with a date and timestamp along with
            the voter's internet address</p>
                        </div>
                        <div className=" col-lg-4 col-sm-6">
                            <img src="../img/add_task_black_24dp.svg" alt />
                            <h3>Participation Mazimization</h3>
                            <p>It takes only a minute or two to vote. People can vote online when it suits them, email reminders
            and online convenience boost participation for busy owners</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <img src="../img/savings_black_24dp.svg" alt />
                            <h3>Save Money</h3>
                            <p>No paper ballots and no printing. 100% hosted and electronic. No time or resources needed for
            manual hand counts. Conduct multiple votes annually</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <img src="../img/noun_Audit_2404408.svg" alt />
                            <h3>Auditable</h3>
                            <p>Algorithms are in place to ensure that only users accredited by an official document participate
            in the fianl vote count</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <img src="../img/noun_precision_3528990.svg" alt />
                            <h3>Precision</h3>
                            <p>Virtual voting eliminates errors in manual count, which brings with it an accurate and quick
            publication of results, with receipt of vote for each vote cast.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <img src="../img/noun_Mobile_2496108.svg" alt />
                            <h3>Mobile Reaady</h3>
                            <p>Elections are optimized for desktop and mobile devices. Voters can vote from a web browser or our
            iOS &amp; Android apps.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* strate  */}
            <div className="container-fluid strata">
                <div className="container">
                    <div className="row">
                        <h1>Four Government Strata, One Plaform</h1>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card">
                                <img src="../img/Seal_of_the_President_of_Nigeria.svg.svg" alt />
                                <h3>PRESIDENCY</h3>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-sm-6">
                            <div className="card">
                                <img src="../img/senate.svg" alt />
                                <h3>SENATE</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card">
                                <img src="../img/Coat_of_arms_of_Nigeria.svg.svg" alt />
                                <h3>GOVERNORSHIP</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card">
                                <img src="../img/Seal_of_the_House_of_Representatives_of_Nigeria.svg.svg" alt />
                                <h3>HOUSE OF ASSEMBLIES</h3>
                            </div>
                        </div>
                        <p>Making the Nigerian Electoral system modern, secure, and effective.</p>
                    </div>
                </div>
            </div>
            {/* voter  */}
            <div className="container-fluid voter">
                <div className="container">
                    <div className="row">
                        <h1>Voter</h1>
                        <div className="col-lg-4 col-sm-4">
                            <img src="../img/noun_register_3698254.svg" alt />
                            <h3>Register</h3>
                            <p>To register to vote, voters are added to an electoral roll of eligible voters as with any
                            election, by signing up. They then use their credentials, email and password, to access the
            voting system.</p>
                        </div>
                        <div className=" col-lg-4 col-sm-4">
                            <img src="../img/noun_Vote_1361375.svg" alt />
                            <h3>Vote</h3>
                            <p>After signing up, voters can cast a ballot by clicking on the specific election and selecting
            their voting choices. Then all they need to do is click on the “vote” button.</p>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <img src="../img/noun_verification_1654914.svg" alt />
                            <h3>Verification</h3>
                            <p>Voters in any category, without a valid VIN can still vote,but their votes will be recorded as
            ‘ineligible votes’.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Aspirant  */}
            <div className="container-fluid aspirant">
                <div className="container">
                    <div className="row">
                        <h1>Aspirant</h1>
                        <div className="col-lg-4 col-sm-4">
                            <img src="../img/noun_register_3698254.svg" alt />
                            <h3>Register</h3>
                            <p>To register to vote, voters are added to an electoral roll of eligible voters as with any
                            election, by signing up. They then use their credentials, email and password, to access the
            voting system.</p>
                        </div>
                        <div className=" col-lg-4 col-sm-4">
                            <img src="../img/noun_Vote_1361375.svg" alt />
                            <h3>Vote</h3>
                            <p>After signing up, voters can cast a ballot by clicking on the specific election and selecting
            their voting choices. Then all they need to do is click on the “vote” button.</p>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <img src="../img/noun_verification_1654914.svg" alt />
                            <h3>Verification</h3>
                            <p>Voters in any category, without a valid VIN can still vote,but their votes will be recorded as
            ‘ineligible votes’.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Values  */}
            <div className="container-fluid values">
                <div className="container">
                    <div className="row">
                        <h1>Our Core Values</h1>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card2">
                                <img src="../img/noun_mirror_3950030.svg" alt />
                                <h3>Transparency</h3>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-sm-6">
                            <div className="card2">
                                <img src="../img/noun_One_2817940.svg" alt />
                                <h3>Integrity</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card2">
                                <img src="../img/noun_Handshake_562118.svg" alt />
                                <h3>Respect</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card2">
                                <img src="../img/noun_Scale_3244382.svg" alt />
                                <h3>Truth</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start  */}
            <div className="container-fluid start">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <img src="../img/shutterstock_1798399480.svg" alt />
                    </div>
                    <div className="col-lg-6 col-sm-6 box-content">
                        <div>
                            <h1>Get started today</h1>
                            <h3>Determine the future of Nigeria virtually sign up</h3>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* invite  */}
            <div className="container-fluid invite">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 invite-text">
                        <div>
                            <h1>Invite your friends</h1>
                            <p>Send invites to you friends, they can start voting now.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 invite-input">
                        <div>
                            <p>Email</p>
                            <input type="text" placeholder="friend@samplemail.com" />
                            <button>Send Invite <i className="fas fa-angle-right" /></button>
                            <p>SMS</p>
                            <input type="text" placeholder="08109934442" />
                            <button>Send Invite <i className="fas fa-angle-right" /></button>
                            <p>Whatsapp</p>
                            <input type="text" placeholder="+2348109934442" />
                            <button>Send Invite <i className="fas fa-angle-right" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About