import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact_Section small_pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title-default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                İletişime Geçin
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div
              className="bg_light_Dark contact_box_s2 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.1s"
            >
              <div className="contact_title">
                <h5
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Bizimle İletişime Geçin
                </h5>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Mesajınızı bize gönderin!
                </p>
              </div>
              <ul className="list_none contact_info mt-margin">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Adres</span>
                    <p>Burası bir adres</p>
                  </div>
                  <form action="#" method="post" className="field_form" name="enq">
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Adınızı girin"
                        id="name"
                        className="form-control"
                        name="name"
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <input
                        type="text"
                        required
                        id="email"
                        placeholder="E-postanızı girin"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <input
                        type="text"
                        required
                        id="subject"
                        placeholder="Konuyu girin"
                        className="form-control"
                        name="subject"
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <textarea
                        type="text"
                        required
                        id="description"
                        placeholder="Mesajınızı yazın"
                        className="form-control"
                        name="description"
                        rows="2"
                      />
                    </div>
                    <div
                      className="col-md-12 text-center animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <button
                        type="submit"
                        title="Mesajınızı Gönderin"
                        className="btn btn-default btn-radius btn-block"
                        id="submitButton"
                        name="submit"
                        value={"Gönder"}
                      >
                        Gönder <BsArrowRight />
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div id="alert-smg" className="alert-msg text-center"></div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
