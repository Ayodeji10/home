import React from 'react';
import './polls.css'
import { Link } from 'react-router-dom';

const Polls = () => {
    return (
        <div className="container-fluid" id="polls">
            {/* navigation bar  */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
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
                                <a className="nav-link active"><Link to='/polls'>POLLS</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to='/aspirant'>ASPIRANTS</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to='/about'>ABOUT US</Link></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto nav-avatar">
                            <li className="nav-item"><a href="../voter dashboard/index.html" className="nav-link">EK</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                {/* filter  */}
                <div className="row filter">
                    <div className="col-lg-6 col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <span>Office</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <select>
                                    <option>Presidency</option>
                                    <option>Senate</option>
                                    <option>GOvernorship</option>
                                    <option>House of Assemblies</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <span>State</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <select>
                                    <option>Abia</option>
                                    <option>Adamawa</option>
                                    <option>Akwa Ibom</option>
                                    <option>Anambra</option>
                                    <option>Bauchi</option>
                                    <option>Borno</option>
                                    <option>Cross River</option>
                                    <option>Delta</option>
                                    <option>Edo</option>
                                    <option>Enugu</option>
                                    <option>Imo</option>
                                    <option>Jigawa</option>
                                    <option>Kaduna</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* aspirant  */}
                <div className="row aspirants">
                    <div className="col-lg-6 col-sm-6">
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="candidate">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>Ifeanyi Ubah</h3>
                                    <p><span>Political Party: </span>APC</p>
                                    <p><span>Votes: </span>345675</p>
                                    <p className="percent">20%<span>345675/4584933</span></p>
                                    <button>Vote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 detail">
                        <h1>Individual Result Analysis</h1>
                        <div className="top">
                            <div className="row">
                                <div className="col-lg-5 col-5">
                                    <img src="../img/IFEANYI-UBAH.png" alt />
                                </div>
                                <div className="col-lg-7 col-7">
                                    <h2>Ifeanyi Ubah</h2>
                                    <h1>345675 Votes<br />20%</h1>
                                </div>
                            </div>
                        </div>
                        <div className="buttom">
                            <table>
                                <tbody><tr>
                                    <th>Gender Distribution</th>
                                    <th>Male</th>
                                    <th>Female</th>
                                </tr>
                                    <tr>
                                        <td>Votes</td>
                                        <td>259824</td>
                                        <td>194558</td>
                                    </tr>
                                    <tr>
                                        <td>Age Bracket</td>
                                        <td>(35-66)</td>
                                        <td>(45-55)</td>
                                    </tr>
                                    <tr>
                                        <td>Number of Changed Decision</td>
                                        <td>3456</td>
                                        <td>9345</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            Changed Decision Statistics
                  <div>
                                                <p>Found a Preferred Candidate (9345)</p>
                                                <p>Prefer not to Disclose Reason (9345)</p>
                                                <p>No reason (9345)</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>Patrick Ifeanyi Ubah, is a Nigerian businessman, entrepreneur and
                                        currently the
                                        Senator, representing Anambra South Senatorial District in the Nigerian senate and
                  CEO of Capital Oil, which he founded in 2001.</td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div>
                {/* leaderboard  */}
                <div className="leaderboard">
                    <h1>leaderboard</h1>
                    <table>
                        <tbody><tr>
                            <th />
                            <th>Name</th>
                            <th>Party</th>
                            <th>Votes</th>
                            <th>Percentage</th>
                        </tr>
                            <tr>
                                <td><img src="../img/IFEANYI-UBAH.png" alt /></td>
                                <td>Professor Yemi Osinbajo</td>
                                <td>APC</td>
                                <td>1934578</td>
                                <td>42%</td>
                            </tr>
                            <tr>
                                <td><img src="../img/buhari.svg" alt /></td>
                                <td>General Mohammed Buhari</td>
                                <td>APC</td>
                                <td>345675</td>
                                <td>20%</td>
                            </tr>
                            <tr>
                                <td><img src="../img/IFEANYI-UBAH.png" alt /></td>
                                <td>Professor Yemi Osinbajo</td>
                                <td>APC</td>
                                <td>1934578</td>
                                <td>42%</td>
                            </tr>
                            <tr>
                                <td><img src="../img/buhari.svg" alt /></td>
                                <td>General Mohammed Buhari</td>
                                <td>APC</td>
                                <td>345675</td>
                                <td>20%</td>
                            </tr>
                            <tr>
                                <td><img src="../img/IFEANYI-UBAH.png" alt /></td>
                                <td>Professor Yemi Osinbajo</td>
                                <td>APC</td>
                                <td>1934578</td>
                                <td>42%</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>
    )
}

export default Polls