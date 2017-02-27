import React, { Component } from 'react';
import Navigation from './Navigation';
import Booking from './Booking';
import Section from './Section';
import Panel from './Panel';

export default class Home extends Component {
  render() {
    const one = 'Want to see what it\'s like to fly in style? Cruise through our mood-lit cabin with Google Street View. You can poke around first class or check out the view from your seat.';
    const two = 'In a hurry? Make a “B” line for the car with a preferred main cabin seat towards the front of the plane, or treat yourself to priority security and boarding for a small fee.';
    const three = 'Travel in style with an upgrade to Main Cabin Select. Enjoy extra legroom, priority boarding and security, a checked bag, plus free movies, food and drinks. Live it up, way up.';
    const four = 'We just made “day of travel” a breeze with the new Virgin America App. Now you can book a flight, check-in, download your boarding pass, check flight status and more–on the fly.';
    const five = 'Book flights for yourself, your company and your clients with our Corporate travel programs, including travel rewards through Elevate Inc. and sweet options to customize any trip.';
    const six = 'Live large at 35,000 feet. Join Elevate and start racking up points, perks and reward flights with no blackout dates.';

    return (
      <div className="home">
        <Navigation />
        <Booking />
        <div className="section--container">
          <Section img={'src/components/HPM-Icon-rooster.png'} title={'Time To Fly'} text={'Leave the nest for a hot spot with sweet low fares from $49 one way.'} subtext={'Restrictions apply'} button_text={'GRAB A SEAT'} />
          <Section img={'src/components/HPM-Tailfins.png'} title={'Friends with Benefits'} text={'More flights, more rewards, and more to love with Alaska Airlines.'} subtext={'View frequently asked questions'} button_text={'LEARN MORE'} />
          <Section img={'src/components/HPM-CC.png'} title={'Take Off Faster'} text={'Earn 10K points and let the perks fly with a Virgin America Visa Signature Card.'} subtext={'Terms and conditions apply'} button_text={'LEARN MORE'} />
        </div>
        <div className="panel--container">
          <Panel title={'TEST-DRIVE EVERY SEAT.'} img={'src/components/one.png'} text={one} button_text={'TAKE TOUR'} />
          <Panel title={'FIRST ONE ON, FIRST ONE OFF.'} img={'src/components/two.jpeg'} text={two} button_text={'LEARN MORE'} />
          <Panel title={'FEEL THE UPGRADE.'} img={'src/components/three.png'} text={three} button_text={'EXPERIENCE IT'} />
          <Panel title={'GET YOUR APP OVER HERE.'} img={'src/components/four.png'} text={four} button_text={'DOWNLOAD APP'} />
          <Panel title={'MAKE BUSINESS A PLEASURE.'} img={'src/components/five.png'} text={five} button_text={'LEARN MORE'} />
          <Panel title={'PACK YOUR POINTS.'} img={'src/components/six.jpeg'} text={six} button_text={'JOIN ELEVATE'} />
        </div>
        <div className="pair">
          <div className="element element--left">
            <div className="element__title">
              Get Deals, Offers, And More.
            </div>
            <div className="element__text">
              <span className="element__text--link">Sign up to receive special fares, promotional offers, and news.</span><br />
              <span className="element__text element__text--link">Virgin America&apos;s Privacy Policy</span>
            </div>
            <div className="button">
              Sign Up Now
            </div>
          </div>
          <div className="element element--right">
            <div className="element__title">
              News And Updates
            </div>
            <div className="element__text">
              <span className="element__text--link">Alaska Airlines and Virgin America grow San Francisco hub with flights to popular destinations</span><br />
              <span className="element__text--link">Alaska Air Group Closes Acquisition Of Virgin America</span><br />
              <span className="element__text--link">Virgin America Celebrates Nine Years Of Making Flying Fun</span><br />
              <span className="element__text--link">Virgin America Expands Service To New York Area</span><br />
              <span className="news">MORE NEWS</span>
            </div>
          </div>
        </div>
        <div className="table--wrapper">
          <table className="table">
            <tr>
              <th>Site Map</th>
              <th>Blog</th>
              <th>Guest Services Commitment</th>
              <th>Corporate & Group Travel</th>
              <th>What is Elevate?</th>
              <th>Tarmac Delay Contingency Plan</th>
            </tr>
            <tr>
              <th>Contact Us/FAQs</th>
              <th>About Us</th>
              <th>Accessibility Services</th>
              <th>Travel Agency</th>
              <th>Virgin America Credit Card</th>
              <th>Investor Relations</th>
            </tr>
            <tr>
              <th>Contract of Carriage</th>
              <th>Press & Awards</th>
              <th>Accessibility Services Form</th>
              <th>Travel Insurance</th>
              <th>Advertise Onboard</th>
              <th>Corporate Responsibility</th>
            </tr>
            <tr>
              <th>Int&apos;l Contract of Carriage</th>
              <th>All News & Updates</th>
              <th>Mobile App</th>
              <th>Careers</th>
              <th>Email Unsubscribe</th>
              <th>Privacy Policy</th>
            </tr>
          </table>
        </div>
        <div className="contact--container">
          <div className="contact">
            <i className="fa fa-facebook-square" />
            <i className="fa fa-twitter" />
            <i className="fa fa-youtube-play" />
            <i className="fa fa-instagram" />
            <i className="fa fa-google-plus-official" />
            <i className="fa fa-snapchat-square" />
            <i className="fa fa-linkedin-square" />
          </div>
        </div>
        <div className="footer">
          <div className="footer__copyright">
            (c) 2017 Virgin America
          </div>
        </div>
      </div>
    );
  }
}
