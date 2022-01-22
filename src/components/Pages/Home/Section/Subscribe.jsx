import React, { Fragment } from 'react'

const Subscribe = () => {
    return (
        <Fragment>
            <section>
                <div id="subscribe-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
                                <div class="newsletter-title text-center">
                                    <h4>Stay informed with our newsletter</h4>
                                </div>
                                <form class="form-inline subscription-form mailchimp" id="subscribeform">

                                    <h5 class="subscription-success"></h5>
                                    <h5 class="subscription-error"></h5>

                                    <div class="form-group newsletter-field">
                                        <input type="email" name="EMAIL" class="form-control" id="subscriber-email" placeholder="jane.doe@example.com" />
                                    </div>

                                    <button type="submit" id="subscribe-button" class="btn btn-sm btn-dark">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Subscribe