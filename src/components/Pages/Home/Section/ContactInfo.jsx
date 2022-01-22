import React, { Fragment } from 'react'

const ContactInfo = () => {
    return (
        <Fragment>
            <section>
                <div class="contact-info">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <a href="#"><i class="pe-7s-map-marker"></i>123 Road. New York.</a>
                            </div>
                            <div class="col-sm-4">
                                <a href="tel:+123000456"><i class="pe-7s-phone"></i>+123 000 456</a>
                            </div>
                            <div class="col-sm-4">
                                <a href="mailto:hello@hotmail.com"><i class="pe-7s-mail"></i>hello@hotmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactInfo