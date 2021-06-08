import React, { useState } from 'react';

export default function Account() {
    const [voter, setVoter] = useState(true)

    const remove = (e) => {
        e.preventDefault();
        document.querySelector('.main').classList.remove("main");
        e.target.parentElement.parentElement.style.display = 'none'
    }

    if (!voter) {
        return (
            <>
                <h3>Create an accont<i className="fas fa-times" onClick={remove} /></h3>
                <div className="button">
                    <p>Choose account type</p>
                    <button id="voter" style={{ color: "#CFCFCF", borderBottom: 'solid 5px #CFCFCF' }} onClick={() => setVoter(true)}>Voter</button>
                    <button id="aspirant" style={{ color: "#008753", borderBottom: 'solid 5px #008753' }}>Aspirant</button>
                </div>
                <div className="options">
                    <button> <img src="/img/alternate_email_black_24dp.svg" alt /> Sign up with Email</button>
                    <button> <img src="../img/search.svg" alt /> Sign up with Google</button>
                    <button> <img src="../img/facebook-app-symbol.svg" alt /> Sign up with Facebook</button>
                    <button> <img src="../img/twitter.svg" alt /> Sign up with Twitter</button>
                </div>
                <div className="form">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>First Name</p>
                            <input type="text" placeholder="Enter First Name" />
                        </div>
                        <div className="col-lg-6">
                            <p>Last Name</p>
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <p>Email</p>
                    <input type="text" placeholder="Enter your email address" />
                    <p>Password</p>
                    <input type="text" placeholder="Enter your Password" />
                    <p>Confirm Password</p>
                    <input type="text" placeholder="Enter Password Again" />
                    <p>Office</p>
                    <select>
                        <option>Presidency</option>
                        <option>Senate</option>
                        <option>Governorship</option>
                        <option>House of Representatives</option>
                    </select>
                    <p>Political Party</p>
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
                    <div className="term">
                        <p>I understand that I must complete my profile and be confirmed by INEC as a candidate before
                        contesting at
        any level on BallotBox</p>
                        <input type="checkbox" />
                    </div>
                    <button>Sign Up</button>
                </div>
                <div className="invite">
                    <p>Want to invite someone?</p>
                    <input type="text" placeholder="invite@samplemail.com" />
                    <button>Send Invite <i className="fas fa-angle-right" /></button>
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Create an accont<i className="fas fa-times" onClick={remove} /></h3>
            <div className="button">
                <p>Choose account type</p>
                <button id="voter">Voter</button>
                <button id="aspirant" onClick={() => setVoter(false)}>Aspirant</button>
            </div>
            <div className="options">
                <button> <img src="../img/alternate_email_black_24dp.svg" alt /> Sign up with Email</button>
                <button> <img src="../img/search.svg" alt /> Sign up with Google</button>
                <button> <img src="../img/facebook-app-symbol.svg" alt /> Sign up with Facebook</button>
                <button> <img src="../img/twitter.svg" alt /> Sign up with Twitter</button>
            </div>
            <div className="form">
                <div className="row">
                    <div className="col-lg-6">
                        <p>First Name</p>
                        <input type="text" placeholder="Enter First Name" />
                    </div>
                    <div className="col-lg-6">
                        <p>Last Name</p>
                        <input type="text" placeholder="Enter Last Name" />
                    </div>
                </div>
                <p>Email</p>
                <input type="text" placeholder="Enter your email address" />
                <p>Password</p>
                <input type="text" placeholder="Enter your Password" />
                <p>Confirm Password</p>
                <input type="text" placeholder="Enter Password Again" />
                <button>Sign Up</button>
            </div>
            <div className="invite">
                <p>Want to invite someone?</p>
                <input type="text" placeholder="invite@samplemail.com" />
                <button>Send Invite <i className="fas fa-angle-right" /></button>
            </div>
        </>
    )
}
