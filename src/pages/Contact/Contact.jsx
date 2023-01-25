import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Counter from "../../components/Counter/Counter";
import Line from '../../components/Line/Line';
import Title from "../../components/Title/Title";
import './contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Line />
      <Title value="Contact"/>
      <Counter value="03"/>
      <div className="contact-text">
        <h1>Email</h1>
        <h3>yassinehaimouch@proton.me</h3>
        <h1 className="specialOne">Other</h1>
        <ul className="contact-list">
          <li><a href="/">github</a></li>
          <li><a href="/">linkedin</a></li>
          <li><a href="/">instagram</a></li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
