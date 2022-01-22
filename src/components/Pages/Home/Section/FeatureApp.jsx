import React, { Fragment } from 'react'

const FeatureApp = () => {
    return (
        <Fragment>
            <section>
                <div id="features-app-section-2" class="pad-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 features-app-content-left animated out" data-animation="fadeInLeft" data-delay="0">
                                <div class="section_header">
                                    <h2>Simple. Intuitive. <span>Powerful.</span></h2>
                                </div>
                                <p> Lorem ipsum <span>dolor</span> sit amet, consectetur adipisicing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul class="features-app-list">
                                    <li>
                                        <div class="feature-app-box animated out" data-animation="fadeInLeft" data-delay="0">
                                            <div class="app-feature-icon pull-left"><span class="pe-7s-graph"></span></div>
                                            <div class="feature-app-box-content">
                                                <h6>Beautiful, modern design</h6>
                                                <p>Mauris vehicula tortor id augue rutrum consequat ac at massa. Interdum et malesuada fames ac ante ipsum primis.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="feature-app-box animated out" data-animation="fadeInLeft" data-delay="0">
                                            <div class="app-feature-icon pull-left"><span class="pe-7s-config"></span></div>
                                            <div class="feature-app-box-content">
                                                <h6>Easy to set up</h6>
                                                <p>Phasellus consequat facilisis volutpat ma faucibus odio vitae semper. Ae volutpat lobortis.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="feature-app-box animated out" data-animation="fadeInLeft" data-delay="0">
                                            <div class="app-feature-icon pull-left"><span class="pe-7s-refresh-2"></span></div>
                                            <div class="feature-app-box-content">
                                                <h6>Stunning flexibility</h6>
                                                <p>Phasellus consequat facilisis volutpat ma faucibus odio vitae semper. Ae volutpat lobortis.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="feature-app-box animated out" data-animation="fadeInLeft" data-delay="0">
                                            <div class="app-feature-icon pull-left"><span class="pe-7s-lock"></span></div>
                                            <div class="feature-app-box-content">
                                                <h6>Reliable and Secure Platform</h6>
                                                <p>Phasellus consequat facilisis volutpat ma faucibus odio vitae semper. Ae volutpat lobortis.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div class="col-sm-5 col-sm-offset-1 text-center img-app-right animated out" data-animation="fadeInRight" data-delay="0">
                                <figure>
                                    <img src="assets/images/app/phone-2.png" alt="" />
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default FeatureApp