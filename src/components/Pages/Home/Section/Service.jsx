import React, { Fragment } from 'react'

const Service = () => {
    return (
        <Fragment>
            <section>
                <div id="banner-services" data-stellar-background-ratio="0">
                    <div class="container">
                        <div class="row">

                            <div class="col-sm-6">
                                <div class="banner-content animated out" data-animation="fadeInUp" data-delay="0">
                                    <h3 class="banner-heading">Looking for exclusive digital services?</h3>
                                    <div class="banner-decription">
                                        Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus.
                                    </div>
                                    <div>
                                        <a href="contact.html" class="btn btn-sm btn-clean">Lets talk</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="banner-image animated out" data-animation="fadeInUp" data-delay="0">
                                    <img src="assets/images/temp/banner-img.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Service