import React, { Component } from 'react';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
    render() {
        return (
            <section class="bg-dark">
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="footer-left col-xs-12 col-md-6" class="bg-light">
                                <p class="copyrights" class= "bg-light">
                                    Copyright  2022 NBA Media Ventures, LLC. All rights reserved.
                                    No portion of NBA.com may be duplicated, redistributed or manipulated in any form.
                                    This site is operated jointly by NBA and WarnerMedia. To opt out of the sale of your personal information as permitted by the California Consumer
                                    Privacy Act, please use the links below to visit each companys privacy center. If you make a request through the WarnerMedia Privacy Center,
                                    it will apply to data controlled jointly by the NBA and WarnerMedia as well as other data controlled by WarnerMedia. If you make a request through
                                    the NBA Privacy Center, it will apply to data controlled independently by the NBA.
  <a href="https://www.nba.com/privacy-policy#Cookies">NBA Privacy Center</a>  |
  <a href="https://www.warnermediaprivacy.com">WarnerMedia Privacy Center</a>  |
  <a href="https://privacy.nba.com">Do Not Sell My Personal Information</a>  |
  <a href="http://www.nba.com/news/termsofuse">Terms of Use</a>  |
  <a href="https://www.nba.com/accessibility">Accessibility and Closed Caption</a> 
                                    <a href="https://www.nba.com/accessibility">Accessibility and Closed Caption</a> 
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

        );
    }
}
export default Footer;