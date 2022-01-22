import React, { Fragment } from 'react'

const Creative = () => {
    return (
        <Fragment>
            <section>
                <div id="creative-section-1" class="pad-sec">
                    <div class="container">
                        <div class="row">

                            <div class="col-sm-7 img-creative-left text-center animated out" data-animation="fadeInLeft" data-delay="0">
                                <figure>
                                    <img src="assets/images/temp/cover.png" alt="" />
                                </figure>
                            </div>

                            <div class="col-sm-5 creative-content-right animated out" data-animation="fadeInRight" data-delay="0">
                                <div class="section_header">
                                    <h2>Creative project</h2>
                                </div>

                                <p> Lorem ipsum <span>dolor</span> sit amet, consectetur adipisicing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                <div class="view-more">
                                    <a href="#services-section" class="btn btn-lg btn-primary">View online</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Creative