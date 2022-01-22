import React, { Fragment } from 'react'

const Testimonial = () => {
    return (
        <Fragment>
            <section>
                <div id="testimonials-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">

                                <div class="testimonials-carousel">

                                    <ul class="testimonials-slider">

                                        <li>
                                            <img src="assets/images/temp/client-photo.jpg" alt="" />
                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusultricies porta posuere.</p>
                                            <div class="testimonials-author"> ClasDesign - Front End Developer </div>
                                        </li>

                                        <li>
                                            <img src="assets/images/temp/client-photo.jpg" alt="" />
                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusultricies porta posuere <a href="#">http://goo.gl/1OhxkS</a>.</p>
                                            <div class="testimonials-author">John Doe -  Web Developer</div>
                                        </li>

                                        <li>
                                            <img src="assets/images/temp/client-photo.jpg" alt="" />
                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusultricies porta posuere. <a href="#">http://goo.gl/1OhxkS</a>.</p>
                                            <div class="testimonials-author">John Doe - Web Designer</div>
                                        </li>

                                    </ul>

                                    <div class="tc-arrows">
                                        <div class="tc-arrow-left"></div>
                                        <div class="tc-arrow-right"></div>
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

export default Testimonial