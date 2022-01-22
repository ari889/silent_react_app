import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <section>
                <div id="about-team">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="title-section">
                                    <h3>Our team skills</h3>
                                </div>
                                <p>Sit ad etiam dissentias, viderer intellegebat usu et, per aliquam delectus ut. In inermis suavitate tincidunt quo, habeo lorem quis nulla eget, dictum pretium magna. Praesent id metus mattis tellus consectetur posuere. Aenean vel enim ut massa luctus efficitur a nec magna.</p>
                            </div>

                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="progress-bars">


                                    <div class="p-bar">

                                        <div class="progress-meta">
                                            <h6 class="progress-title">photoshop</h6>
                                            <h6 class="progress-value">75%</h6>
                                        </div>

                                        <div class="progress">
                                            <div class="progress-bar" aria-valuenow="75" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                    </div>

                                    <div class="p-bar">

                                        <div class="progress-meta">
                                            <h6 class="progress-title">html</h6>
                                            <h6 class="progress-value">95%</h6>
                                        </div>

                                        <div class="progress">
                                            <div class="progress-bar" aria-valuenow="95" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                    </div>

                                    <div class="p-bar">
                                        <div class="progress-meta">
                                            <h6 class="progress-title">css</h6>
                                            <h6 class="progress-value">85%</h6>
                                        </div>

                                        <div class="progress">
                                            <div class="progress-bar" aria-valuenow="85" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                    </div>

                                    <div class="p-bar">
                                        <div class="progress-meta">
                                            <h6 class="progress-title">jquery</h6>
                                            <h6 class="progress-value">73%</h6>
                                        </div>

                                        <div class="progress">
                                            <div class="progress-bar" aria-valuenow="73" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About