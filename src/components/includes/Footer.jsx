import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div id="footer-section" class="text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <ul class="footer-social-links">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Dribbble</a></li>
                                    <li><a href="#">Behance</a></li>
                                    <li><a href="#">Pinterest</a></li>
                                </ul>
                                <p class="copyright">
                                    &copy; 2016 Salient - Created By <a href="http://templatestock.co">Template Stock</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;