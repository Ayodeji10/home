import React from 'react';
import './aspirant.css'
import { Link } from 'react-router-dom';

const Aspirant = () => {
    return (
        <div className="container-fluid" id="aspirant">
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
                                <a className="nav-link"><Link to='/polls'>POLLS</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active"><Link to='/aspirant'>ASPIRANTS</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to='/about'>ABOUT US</Link></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto nav-avatar">
                            <li className="nav-item"><a href="../aspirant dashboard edit/index.html" className="nav-link">GBM</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                {/* filter  */}
                <div className="row">
                    <div className="name-filter">
                        <input type="text" placeholder="Search by Name" />
                        <a href><i className="fas fa-search" /></a>
                    </div>
                    <div className="row filter">
                        <div className="col-lg-4 col-md-4 col-sm-12">
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
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <span>Accreditation Status</span>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <select>
                                        <option>Confirmed</option>
                                        <option>Suggested</option>
                                        <option>Interested</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <span>Political Party</span>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <select>
                                        <option>African Action Congress (AAC)</option>
                                        <option>All Progressives Congress (APC)</option>
                                        <option>All People's Party (APP)</option>
                                        <option>African Renaissance Party (ARP)</option>
                                        <option>Citizens Popular Party (CPP)</option>
                                        <option>Labour Party (LP)</option>
                                        <option>New Nigeria Peoples Party (NNPP)</option>
                                        <option>National Democratic Party (NDP)</option>
                                        <option>People's Democratic Party (PDP)</option>
                                        <option>Progressive Peoples Alliance (PPA)</option>
                                        <option>People Progressive Party (PPP)</option>
                                        <option>Young Democratic Party (YDP)</option>
                                        <option>Young Progressive Party (YPP)</option>
                                        <option>Youth Party (YP)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* aspirant  */}
                <div className="row aspirants">
                    <div className="col-lg-6 col-sm-6">
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspirantt">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <h3>President Mohammed Buhari</h3>
                                    <p><span>Current Office:</span> President, Federal republic of Nigeria</p>
                                    <p><span>Political Party:</span> APC</p>
                                    <p><span>Aspirant office:</span> Nil</p>
                                    <p><span>Accreditation status:</span> Confirmed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 detail">
                        <div className="top">
                            <div className="row">
                                <div className="col-lg-7 col-7">
                                    <h1>President Mohammed Buhari</h1>
                                    <p>President, Federal republic of Nigeria</p>
                                    <button>Vote</button>
                                </div>
                                <div className="col-lg-5 col-5">
                                    <img src="../img/buhari.svg" alt />
                                </div>
                            </div>
                        </div>
                        <div className="buttom">
                            <p><span>Current Office: </span>President, Federal republic of Nigeria</p>
                            <p><span>Political Party: </span>APC</p>
                            <p><span>Aspirant office: </span>Nil</p>
                            <p><span>Accreditation status: </span>Confirmed</p>
                            <p><span>Born: </span>17 December 1942 (age 78 years)</p>
                            <p><span>Career Profile: </span>Muhammad Buhari GCFR is a Nigerian politician who has been
            president of Nigeria since 2015. Buhari is a retired Nigerian Army Major General and served
            as military head of state from 1983 to 1985, after taking power in a military coup d'état.
          </p>
                            <p><span>Educational Qualification: </span>Mons Officer Cadet School (1962-1963), Nigeria
            Military training college (1962-1964), Defense Service Staff College (1973-1974), US Army
            War College (1979-1980)</p>
                            <p><span>Business Founded: </span>N/A</p>
                            <p><span>Investment Owned: </span>N/A</p>
                            <p><span>Criminal History: </span>N/A</p>
                            <p><span>Family History: </span>N/A</p>
                            <p><span>Ethnicity: </span>Hausa</p>
                            <p><span>Religious Biases: </span>Islam</p>
                            <p><span>Other Affiliations: </span>N/A</p>
                        </div>
                    </div>
                </div>
                {/* pages  */}
                <div className="pages">
                    <button><i className="fas fa-chevron-left" />Previous</button>
                    <span>Page 1 of 83</span>
                    <button>Next<i className="fas fa-chevron-right" /></button>
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

export default Aspirant