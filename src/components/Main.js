import React from 'react';
import SocialMedia from '../components/SocialMedia';
import logo from '../images/logo.png'

export default function Main() {
    return (
        <div>
            <div className="container-fluid m-0">
                <div className="row">
                    <div className="col-lg-6 img p-4 p-lg-5">
                        <img src={logo} alt="" className="img-fluid" width='100' />
                    </div>
                    <div className="col-lg-6 main-text py-5 px-4 px-md-5 p-lg-5">
                        <h2 className="display-6 fw-bold mx-3 mx-lg-5 mt-0 mt-md-5 pt-lg-5 pt-0 mt-lg-5 mb-0">HARMONIZE YOUR SPACE</h2>
                        <p className="lead fw-bold mx-3 mx-lg-5 col-10 col-lg-6">Unlock balance and Positive Energy with Feng-Shui Mastery</p>
                        <p className='mx-3 mx-lg-5 mt-4 mb-5 col-10 col-lg-8'>At our Feng-Shui Hub, embark on a transformative journey to revitalize your surroundings and enrich your life.</p>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </div>
    )
}
