
import './Footer.css';
export default function Footer(){

    return (
      <>
      
      <footer className="contact py-5 ">
  <div className="container">
    <div className="row pt-3 pb-5 justify-content-between">
      
      <div className="col-md-6  mb-4 ">
        <h5 className="mb-3 text-white">Working Hours</h5>
        <ul className="ul0">
          <li><p>Sunday - Thursday</p><p className="pc">08:00 am - 09:00pm</p></li>
          <li><p>Only Friday</p><p className="pc">03:00 pm - 09:00pm</p></li>
        </ul>
        <p className="po"> Saturday Close</p>
      </div>
      <div className="col-md-6  mb-4 ">
        <h5 className="mb-3 text-white">Contact Us</h5>
        <ul className="ul1">
          <div className="d-flex align-items-center">
            <span><i className="fa-solid fa-location-dot pc" /></span>
            <li><p className="pc mb-1">Location: </p><p className="text-white">55 Main Street, New York</p></li>
          </div>
          <div className="d-flex align-items-center">
            <span><i className="fa-solid fa-envelope-open-text pc" /></span>
            <li><p className="pc mb-1">Email Address : </p><p className="text-white">kaffendev@gmail.com</p></li>
          </div>
          <div className="d-flex align-items-center">
            <span><i className="fa-solid fa-phone pc" /></span>
            <li><p className="pc mb-1">Phone Number : </p><p className="text-white">+012 (345) 678 99</p></li>
          </div>
        </ul>
      </div>
      
    </div>
    <div className="inf-c text-center position-relative">
      <p className="my-5"> All Rights Reserved by <a href="#">Hala Bsharat</a></p>
    </div>
  </div>
</footer>

      </>
    );
  }