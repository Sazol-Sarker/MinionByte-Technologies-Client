import React from "react";
import { FaTelegramPlane } from "react-icons/fa";


const ContactForm = () => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      {/* <legend className="fieldset-legend">Contact Us</legend> */}

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Your Message</legend>
        <textarea className="textarea h-24" placeholder="Write here..."></textarea>
        {/* <div className="label">Optional</div> */}
      </fieldset>
      <button className="btn btn-neutral mt-4">Send Message
        <FaTelegramPlane />

      </button>
    </fieldset>
  );
};

export default ContactForm;
