import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                            <h1>BALLOTBOX</h1>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <div className="row menu">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <h1>Get Started</h1>
                                    <h3>Login</h3>
                                    <h3>SIgn up</h3>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <h1>Polls</h1>
                                    <h3>Presidency</h3>
                                    <h3>Senate</h3>
                                    <h3>Governorship</h3>
                                    <h3>House of Assemblies</h3>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <h1>About us</h1>
                                    <h3>Aspirants</h3>
                                    <h3>About us</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <i className="fab fa-facebook-f" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <i className="fab fa-twitter" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <i className="fab fa-instagram" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Copyright @ 2021 BALLOTBOX</h4>
            </div>
        </footer>
    )
}

export default Footer
