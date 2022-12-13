import appleStore from '../assets/pay/app.jpg'
import googlePlay from '../assets/pay/play.jpg'
import payment from '../assets/pay/pay.png'

const Footer = () => {
  return (
    <div className='footer exp'>
      <div className="left">
        <div>HamroFootware</div>
        <h5>Contact</h5>
        <div className="contact">
          <p><span>Address: </span>Street-90, Thaha Chowk Kathamandu</p>
          <p><span>Phone: </span>+977 988832732</p>
          <p><span>Gmial: </span>hamrofootware90@gmail.com</p>
        </div>
        <h5>Follow Us</h5>
        
      </div>
      <div className="middle">
        <div className="left">
          <h5>About</h5>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right">
          <h5>My Account</h5>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h5>Install App</h5>
        <p>From App Store or Google Play</p>
        <img src={appleStore} alt="apple store" className='payment'/>
        <img src={googlePlay} alt="google play" className='payment'/>
        <p>Secured Payment Gateways</p>
        <img src={payment} alt="payment gateways"/>
      </div>
    </div>
  )
}

export default Footer