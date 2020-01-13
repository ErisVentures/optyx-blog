import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const DARK_GRAY = '#333'

class PrivacyPage extends React.Component {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Privacy Policy" />
        <article className="privacy container" style={{paddingBottom: 100, paddingTop: 100}}>
          <div data-custom-class="body">
            <p style={{fontSize: 15}}>
              <strong>
                <span style={{fontSize: 26}}>
                  <span data-custom-class="title">
                    <strong>
                      <span style={{fontSize: 26}}>
                        <span data-custom-class="title">PRIVACY POLICY</span>
                      </span>
                    </strong>{' '}
                  </span>
                </span>
              </strong>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: 'rgb(127, 127, 127)'}}>
                <strong>
                  <span data-custom-class="subtitle">
                    Last updated <span>January 12, 2020</span>
                  </span>
                </strong>
              </span>
            </p>
            <p style={{fontSize: 15, lineHeight: '1.5'}}>
              <br />
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  Thank you for choosing to be part of our community at{' '}
                  <span>Eris Ventures LLC</span> (“
                  <strong>Company</strong>
                  ”, “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”). We
                  are committed to protecting your personal information and your right to privacy.
                  If you have any questions or concerns about our{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">policy</span>
                      </span>
                    </span>
                    &nbsp;
                  </span>
                  , or our practices with regards to your personal information, please contact us at{' '}
                  <span>privacy@optyx.app</span>.
                </span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  When you visit our website <span>https://optyx.app</span>, and use our services,
                  you trust us with your personal information. We take your privacy very seriously.
                  In this{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">privacy policy</span>
                      </span>
                    </span>
                  </span>
                  , we seek to explain to you in the clearest way possible what information we
                  collect, how we use it and what rights you have in relation to it. We hope you
                  take some time to read through it carefully, as it is important. If there are any
                  terms in this{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">privacy policy</span>
                      </span>
                    </span>
                    &nbsp;
                  </span>
                  that you do not agree with, please discontinue use of our Sites and our services.
                </span>
                &nbsp;
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  This{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">privacy policy</span>
                      </span>
                    </span>
                    &nbsp;
                  </span>
                  applies to all information collected through our{' '}
                  <span className="forloop-component" /> <span>website</span>
                  <span className="forloop-component" /> (such as <span>https://optyx.app</span>),
                  and/or any related services, sales, marketing or events (we refer to them
                  collectively in this{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">privacy policy</span>
                      </span>
                    </span>
                    &nbsp;
                  </span>
                  as the "<strong>Services</strong>").&nbsp;
                </span>
                &nbsp;
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    Please read this{' '}
                    <span style={{color: DARK_GRAY}}>
                      <span data-custom-class="body_text">
                        <span style={{color: DARK_GRAY}}>
                          <span data-custom-class="body_text">privacy policy</span>
                        </span>
                      </span>
                      &nbsp;
                    </span>
                    carefully as it will help you make informed decisions about sharing your
                    personal information with us.&nbsp;
                  </span>
                  &nbsp;
                </strong>
                &nbsp;
              </span>
            </p>
            <p style={{fontSize: 15, lineHeight: '1.5'}}>
              <span style={{color: DARK_GRAY}}>
                <br />
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: 'rgb(0, 0, 0)'}}>
                <strong>
                  <span style={{fontSize: 19}}>
                    <span data-custom-class="heading_1">TABLE OF CONTENTS</span>
                  </span>
                  &nbsp;
                </strong>
                &nbsp;
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#infocollect">
                <span style={{color: DARK_GRAY}}>1. WHAT INFORMATION DO WE COLLECT?</span>
              </a>{' '}
              <span style={{color: DARK_GRAY}}></span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#infouse">
                <span style={{color: DARK_GRAY}}>2. HOW DO WE USE YOUR INFORMATION?</span>
              </a>
              <span style={{color: DARK_GRAY}}>
                <span style={{color: DARK_GRAY}}></span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <a data-custom-class="link" href="#infoshare">
                  3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </a>{' '}
                <span className="block-component">
                  <span data-custom-class="body_text" />
                </span>
              </span>
              <span style={{fontSize: 15, color: DARK_GRAY}}>&nbsp; &nbsp;</span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#cookies">
                <span style={{fontSize: 15, color: DARK_GRAY}}>
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </span>
              </a>
              <span style={{fontSize: 15, color: DARK_GRAY}}>&nbsp;</span>
              <span style={{color: DARK_GRAY}}>
                <span style={{color: DARK_GRAY}}>&nbsp; &nbsp;</span>
              </span>{' '}
              &nbsp;
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#inforetain">
                <span style={{color: DARK_GRAY}}>
                  5. HOW LONG DO WE KEEP YOUR INFORMATION?&nbsp;
                </span>
              </a>
              <span style={{color: DARK_GRAY}}>
                <span style={{color: DARK_GRAY}}>&nbsp; &nbsp;</span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#infosafe">
                <span style={{color: DARK_GRAY}}>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</span>
              </a>
              <span style={{color: DARK_GRAY}}>
                &nbsp;
                <span style={{color: DARK_GRAY}}>
                  <span style={{color: DARK_GRAY}}></span>
                </span>{' '}
                &nbsp;
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#infominors">
                <span style={{color: DARK_GRAY}}>7. DO WE COLLECT INFORMATION FROM MINORS?</span>
              </a>{' '}
              &nbsp;
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#privacyrights">
                <span style={{color: DARK_GRAY}}>8. WHAT ARE YOUR PRIVACY RIGHTS?</span>
              </a>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#DNT">
                <span style={{color: DARK_GRAY}}>9. CONTROLS FOR DO-NOT-TRACK FEATURES</span>
              </a>
              <span style={{color: DARK_GRAY}}>&nbsp;</span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#caresidents">
                <span style={{color: DARK_GRAY}}>
                  10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </span>
              </a>
              <span style={{color: DARK_GRAY}}>&nbsp;</span>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#policyupdates">
                <span style={{color: DARK_GRAY}}>11. DO WE MAKE UPDATES TO THIS POLICY?</span>
              </a>
            </p>
            <p style={{fontSize: 15}}>
              <a data-custom-class="link" href="#contact">
                <span style={{color: DARK_GRAY}}>
                  12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                </span>
              </a>
            </p>
            <p style={{fontSize: 15, lineHeight: '1.5'}}>
              <span style={{color: DARK_GRAY}}>
                <br />
              </span>
            </p>
            <p id="infocollect" style={{fontSize: 15}}>
              <span style={{color: 'rgb(0, 0, 0)'}}>
                <strong>
                  <span style={{fontSize: 19}}>
                    <span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span>
                  </span>
                  &nbsp;
                </strong>
                &nbsp;
              </span>
            </p>
            <div style={{lineHeight: '1.1'}}>
              <br />
            </div>
            <div>
              <span style={{color: DARK_GRAY}}></span>
              <span style={{color: 'rgb(0, 0, 0)'}}>
                <strong>
                  <span data-custom-class="heading_2">Personal information you disclose to us</span>
                </strong>
                &nbsp;
              </span>
            </div>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <em>
                    <span data-custom-class="body_text">In Short:</span>
                  </em>
                  &nbsp;
                </strong>
                <span data-custom-class="body_text">
                  <em>
                    We collect personal information that you provide to us such as name, address,
                    contact information, passwords and security data, and payment information
                    <span style={{color: DARK_GRAY}}>
                      <em></em>
                    </span>
                    .
                  </em>
                </span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text" style={{fontSize: 15}}>
                  We collect personal information that you voluntarily provide to us when expressing
                  an interest in obtaining information about us or our products and services, when
                  participating in activities on the Services or otherwise contacting us
                </span>
                <span data-custom-class="body_text">.</span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  The personal information that we collect depends on the context of your
                  interactions with us and the Services , the choices you make and the products and
                  features you use. The personal information we collect can include the following:
                </span>
                <strong>
                  <span data-custom-class="body_text"></span>
                </strong>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    Publicly Available Personal Information.
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We collect <span className="forloop-component" />
                  <span>email addresses</span>; <span className="forloop-component" />
                  <span>business email</span>; <span className="forloop-component" />
                  and other similar data.
                  <span style={{color: DARK_GRAY}}>
                    <strong>
                      <span data-custom-class="body_text"></span>
                    </strong>
                  </span>
                </span>
                <strong>
                  <span data-custom-class="body_text"></span>
                </strong>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">Personal Information Provided by You.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We collect <span className="forloop-component" />
                  <span>app usage</span>; <span className="forloop-component" />
                  <span>data collected from surveys</span>; <span className="forloop-component" />
                  <span>purchase history</span>; <span className="forloop-component" />
                  and other similar data.
                  <span style={{color: DARK_GRAY}}>
                    <strong>
                      <span data-custom-class="body_text"></span>
                    </strong>
                  </span>
                </span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">Credentials.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We collect passwords, password hints, and similar security information used
                  for authentication and account access.
                </span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">Payment Data.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We collect data necessary to process your payment if you make purchases,
                  such as your payment instrument number (such as a credit card number), and the
                  security code associated with your payment instrument. All payment data is stored
                  by
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span className="forloop-component" /> <span>Gumroad</span>
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">
                          <span style={{color: DARK_GRAY}}>
                            <span data-custom-class="body_text">
                              <span className="forloop-component" />
                            </span>
                          </span>
                          . You may find their privacy policy link(s) here:
                          <span style={{color: DARK_GRAY}}>
                            <span className="forloop-component" />{' '}
                            <span>https://gumroad.com/privacy</span>
                            <span style={{color: DARK_GRAY}}>
                              <span data-custom-class="body_text">
                                <span style={{color: DARK_GRAY}}>
                                  <span className="forloop-component" />
                                </span>
                                .
                                <span style={{color: DARK_GRAY}}>
                                  <span data-custom-class="body_text"></span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  All personal information that you provide to us must be true, complete and
                  accurate, and you must notify us of any changes to such personal information.
                </span>
                <span style={{color: DARK_GRAY}}>
                  <span data-custom-class="body_text"></span>
                  <span className="block-component">
                    <span data-custom-class="body_text" />
                  </span>
                  &nbsp;
                </span>
                &nbsp;
              </span>
            </p>
            <div style={{lineHeight: '1.1'}}>
              <br />
            </div>
            <div>
              <span style={{color: 'rgb(0, 0, 0)'}}>
                <strong>
                  <span data-custom-class="heading_2">Information automatically collected</span>
                </strong>
                &nbsp;
              </span>
            </div>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <em>
                    <span data-custom-class="body_text">In Short:</span>
                  </em>
                  &nbsp;
                </strong>
                <em>
                  <span data-custom-class="body_text">
                    Some information – such as IP address and/or browser and device characteristics
                    – is collected automatically when you visit our Services .
                  </span>
                </em>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  We automatically collect certain information when you visit, use or navigate the{' '}
                  Services . This information does not reveal your specific identity (like your name
                  or contact information) but may include device and usage information, such as your
                  IP address, browser and device characteristics, operating system, language
                  preferences, referring URLs, device name, country, location, information about how
                  and when you use our Services and other technical information. This information is
                  primarily needed to maintain the security and operation of our Services , and for
                  our internal analytics and reporting purposes.
                </span>
              </span>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  Like many businesses, we also collect information through cookies and similar
                  technologies.
                  <span style={{color: DARK_GRAY}}></span>
                </span>
              </span>
              <strong>
                <span data-custom-class="body_text"></span>
              </strong>
            </p>
            <p style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">Online Identifiers.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We collect <span className="forloop-component" />
                  <span>devices</span>; <span className="forloop-component" />
                  <span>applications</span>; <span className="forloop-component" />
                  <span>tools and protocols, such as IP (Internet Protocol) addresses</span>
                  ; <span className="forloop-component" />
                  <span>
                    cookie identifiers, or others such as the ones used for analytics and marketing
                  </span>
                  ; <span className="forloop-component" />
                  and other similar data.
                  <span style={{color: DARK_GRAY}}>
                    <strong>
                      <span data-custom-class="body_text"></span>
                    </strong>
                  </span>
                </span>
                <span data-custom-class="body_text"></span>
              </span>

              <span
                style={{
                  textAlign: 'justify',
                  backgroundColor: 'initial',
                  color: DARK_GRAY,
                }}
              >
                <span data-custom-class="body_text"></span>
              </span>
            </p>
          </div>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <br />
          </p>
          <p id="infouse" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">2. HOW DO WE USE YOUR INFORMATION?</span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    We process your information for purposes based on legitimate business interests,
                    the fulfillment of our contract with you, compliance with our legal obligations,
                    and/or your consent.
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  We use personal information collected via our Services for a variety of business
                  purposes described below. We process your personal information for these purposes
                  in reliance on our legitimate business interests, in order to enter into or
                  perform a contract with you, with your consent, and/or for compliance with our
                  legal obligations. We indicate the specific processing grounds we rely on next to
                  each purpose listed below.
                </span>
              </span>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text"></span>
              </span>
              &nbsp;
            </span>
            &nbsp;
          </p>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  We use the information we collect or receive:
                </span>
              </span>
            </span>
            <br />
            <br />
          </p>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    To send you marketing and promotional communications.
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We and/or our third party marketing partners may use the personal
                  information you send to us for our marketing purposes, if this is in accordance
                  with your marketing preferences. You can opt-out of our marketing emails at any
                  time (see the "
                </span>
              </span>
            </span>
            <span data-custom-class="body_text">
              <a data-custom-class="link" href="#privacyrights">
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>WHAT ARE YOUR PRIVACY RIGHTS</span>
                </span>
              </a>
            </span>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">" below).</span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text"></span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    To send administrative information to you.&nbsp;
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  We may use your personal information to send you product, service and new feature
                  information and/or information about changes to our terms, conditions, and
                  policies.
                </span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span data-custom-class="body_text"></span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">Fulfill and manage your orders.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We may use your information to fulfill and manage your orders, payments,
                  returns, and exchanges made through the Services .
                </span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span data-custom-class="body_text"></span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    Administer prize draws and competitions.&nbsp;
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  We may use your information to administer prize draws and competitions when you
                  elect to participate in competitions.
                </span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span data-custom-class="body_text"></span>
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                      &nbsp;
                                    </span>
                                    &nbsp;
                                  </span>
                                  &nbsp;
                                </span>
                                &nbsp;
                              </span>
                              &nbsp;
                            </span>
                            &nbsp;
                          </span>
                          &nbsp;
                        </span>
                        &nbsp;
                      </span>
                      &nbsp;
                    </span>
                    &nbsp;
                  </span>
                  &nbsp;
                </span>
                &nbsp;
              </span>
              &nbsp;
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">Request Feedback.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We may use your information to request feedback and to contact you about
                  your use of our Services .
                </span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span data-custom-class="body_text">
                                              <span style={{fontSize: 15}}>
                                                <span style={{color: DARK_GRAY}}></span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">To protect our Services.</span>
                </strong>
                <span data-custom-class="body_text">
                  &nbsp;We may use your information as part of our efforts to keep our Services safe
                  and secure (for example, for fraud monitoring and prevention).
                </span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span style={{fontSize: 15}}>
                                              <span style={{color: DARK_GRAY}}>
                                                <span style={{fontSize: 15}}>
                                                  <span style={{color: DARK_GRAY}}>
                                                    <span data-custom-class="body_text"></span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    To enforce our terms, conditions and policies for Business Purposes, Legal
                    Reasons and Contractual.
                  </span>
                </strong>
              </span>
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <span data-custom-class="body_text">
                    To respond to legal requests and prevent harm.&nbsp;
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  If we receive a subpoena or other legal request, we may need to inspect the data
                  we hold to determine how to respond.
                </span>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span style={{fontSize: 15}}>
                                              <span style={{color: DARK_GRAY}}>
                                                <span style={{fontSize: 15}}>
                                                  <span style={{color: DARK_GRAY}}>
                                                    <span style={{fontSize: 15}}>
                                                      <span
                                                        style={{
                                                          color: DARK_GRAY,
                                                        }}
                                                      >
                                                        <span style={{fontSize: 15}}>
                                                          <span
                                                            style={{
                                                              color: DARK_GRAY,
                                                            }}
                                                          >
                                                            <span style={{fontSize: 15}}>
                                                              <span
                                                                style={{
                                                                  color: DARK_GRAY,
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text"></span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span style={{fontSize: 15}}>
                                              <span style={{color: DARK_GRAY}}>
                                                <span style={{fontSize: 15}}>
                                                  <span style={{color: DARK_GRAY}}>
                                                    <span style={{fontSize: 15}}>
                                                      <span
                                                        style={{
                                                          color: DARK_GRAY,
                                                        }}
                                                      >
                                                        <span style={{fontSize: 15}}>
                                                          <span
                                                            style={{
                                                              color: DARK_GRAY,
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <br />
                                                            </span>
                                                          </span>
                                                          &nbsp;
                                                        </span>
                                                        &nbsp;
                                                      </span>
                                                      &nbsp;
                                                    </span>
                                                    &nbsp;
                                                  </span>
                                                  &nbsp;
                                                </span>
                                                &nbsp;
                                              </span>
                                              &nbsp;
                                            </span>
                                            &nbsp;
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                      &nbsp;
                                    </span>
                                    &nbsp;
                                  </span>
                                  &nbsp;
                                </span>
                                &nbsp;
                              </span>
                              &nbsp;
                            </span>
                            &nbsp;
                          </span>
                          &nbsp;
                        </span>
                        &nbsp;
                      </span>
                      &nbsp;
                    </span>
                    &nbsp;
                  </span>
                  &nbsp;
                </span>
                &nbsp;
              </span>
              &nbsp;
            </span>
            &nbsp;&nbsp;
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span style={{fontSize: 15}}>
                                              <span style={{color: DARK_GRAY}}>
                                                <span style={{fontSize: 15}}>
                                                  <span style={{color: DARK_GRAY}}>
                                                    <span style={{fontSize: 15}}>
                                                      <span
                                                        style={{
                                                          color: DARK_GRAY,
                                                        }}
                                                      >
                                                        <span style={{fontSize: 15}}>
                                                          <span
                                                            style={{
                                                              color: DARK_GRAY,
                                                            }}
                                                          >
                                                            <span style={{fontSize: 15}}>
                                                              <span
                                                                style={{
                                                                  color: DARK_GRAY,
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <strong>
                                                                    To deliver services to the user.
                                                                  </strong>{' '}
                                                                  We may use your information to
                                                                  provide you with the requested
                                                                  service.{' '}
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        color: DARK_GRAY,
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15,
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color: DARK_GRAY,
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15,
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color: DARK_GRAY,
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15,
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color: DARK_GRAY,
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15,
                                                                                    }}
                                                                                  >
                                                                                    <span
                                                                                      style={{
                                                                                        color: DARK_GRAY,
                                                                                      }}
                                                                                    >
                                                                                      <span
                                                                                        style={{
                                                                                          fontSize: 15,
                                                                                        }}
                                                                                      >
                                                                                        <span
                                                                                          style={{
                                                                                            color: DARK_GRAY,
                                                                                          }}
                                                                                        >
                                                                                          <span
                                                                                            style={{
                                                                                              fontSize: 15,
                                                                                            }}
                                                                                          >
                                                                                            <span
                                                                                              style={{
                                                                                                color: DARK_GRAY,
                                                                                              }}
                                                                                            >
                                                                                              <span
                                                                                                style={{
                                                                                                  fontSize: 15,
                                                                                                }}
                                                                                              >
                                                                                                <span
                                                                                                  style={{
                                                                                                    color: DARK_GRAY,
                                                                                                  }}
                                                                                                >
                                                                                                  <span
                                                                                                    style={{
                                                                                                      fontSize: 15,
                                                                                                    }}
                                                                                                  >
                                                                                                    <span
                                                                                                      style={{
                                                                                                        color: DARK_GRAY,
                                                                                                      }}
                                                                                                    >
                                                                                                      <span
                                                                                                        style={{
                                                                                                          fontSize: 15,
                                                                                                        }}
                                                                                                      >
                                                                                                        <span
                                                                                                          style={{
                                                                                                            color: DARK_GRAY,
                                                                                                          }}
                                                                                                        >
                                                                                                          <span
                                                                                                            style={{
                                                                                                              fontSize: 15,
                                                                                                            }}
                                                                                                          >
                                                                                                            <span
                                                                                                              style={{
                                                                                                                color: DARK_GRAY,
                                                                                                              }}
                                                                                                            >
                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize: 15,
                                                                                                                }}
                                                                                                              >
                                                                                                                <span
                                                                                                                  style={{
                                                                                                                    color: DARK_GRAY,
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <span
                                                                                                                    style={{
                                                                                                                      fontSize: 15,
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <span
                                                                                                                      style={{
                                                                                                                        color: DARK_GRAY,
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                          style={{
                                                                                                                            fontSize: 15,
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <span
                                                                                                                            style={{
                                                                                                                              color: DARK_GRAY,
                                                                                                                            }}
                                                                                                                          >
                                                                                                                            <span
                                                                                                                              style={{
                                                                                                                                fontSize: 15,
                                                                                                                              }}
                                                                                                                            >
                                                                                                                              <span
                                                                                                                                style={{
                                                                                                                                  color: DARK_GRAY,
                                                                                                                                }}
                                                                                                                              >
                                                                                                                                <span
                                                                                                                                  style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <span
                                                                                                                                    style={{
                                                                                                                                      color: DARK_GRAY,
                                                                                                                                    }}
                                                                                                                                  >
                                                                                                                                    <span
                                                                                                                                      style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                      }}
                                                                                                                                    >
                                                                                                                                      <span
                                                                                                                                        style={{
                                                                                                                                          color: DARK_GRAY,
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <span
                                                                                                                                          style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                          }}
                                                                                                                                        >
                                                                                                                                          <span
                                                                                                                                            style={{
                                                                                                                                              color: DARK_GRAY,
                                                                                                                                            }}
                                                                                                                                          >
                                                                                                                                            <span
                                                                                                                                              style={{
                                                                                                                                                fontSize: 15,
                                                                                                                                              }}
                                                                                                                                            >
                                                                                                                                              <span
                                                                                                                                                style={{
                                                                                                                                                  color: DARK_GRAY,
                                                                                                                                                }}
                                                                                                                                              >
                                                                                                                                                <span
                                                                                                                                                  style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                  }}
                                                                                                                                                >
                                                                                                                                                  <span
                                                                                                                                                    style={{
                                                                                                                                                      color: DARK_GRAY,
                                                                                                                                                    }}
                                                                                                                                                  >
                                                                                                                                                    <span
                                                                                                                                                      style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                      }}
                                                                                                                                                    >
                                                                                                                                                      <span
                                                                                                                                                        style={{
                                                                                                                                                          color: DARK_GRAY,
                                                                                                                                                        }}
                                                                                                                                                      >
                                                                                                                                                        <span
                                                                                                                                                          style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                          }}
                                                                                                                                                        >
                                                                                                                                                          <span
                                                                                                                                                            style={{
                                                                                                                                                              color: DARK_GRAY,
                                                                                                                                                            }}
                                                                                                                                                          >
                                                                                                                                                            <span
                                                                                                                                                              style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                              }}
                                                                                                                                                            >
                                                                                                                                                              <span
                                                                                                                                                                style={{
                                                                                                                                                                  color: DARK_GRAY,
                                                                                                                                                                }}
                                                                                                                                                              >
                                                                                                                                                                <span
                                                                                                                                                                  style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                  }}
                                                                                                                                                                >
                                                                                                                                                                  <span
                                                                                                                                                                    style={{
                                                                                                                                                                      color: DARK_GRAY,
                                                                                                                                                                    }}
                                                                                                                                                                  >
                                                                                                                                                                    <span
                                                                                                                                                                      style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                      }}
                                                                                                                                                                    >
                                                                                                                                                                      <span
                                                                                                                                                                        style={{
                                                                                                                                                                          color: DARK_GRAY,
                                                                                                                                                                        }}
                                                                                                                                                                      >
                                                                                                                                                                        <span
                                                                                                                                                                          style={{
                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                          }}
                                                                                                                                                                        >
                                                                                                                                                                          <span
                                                                                                                                                                            style={{
                                                                                                                                                                              color: DARK_GRAY,
                                                                                                                                                                            }}
                                                                                                                                                                          >
                                                                                                                                                                            <span data-custom-class="body_text"></span>
                                                                                                                                                                          </span>
                                                                                                                                                                        </span>
                                                                                                                                                                      </span>
                                                                                                                                                                    </span>
                                                                                                                                                                  </span>
                                                                                                                                                                </span>
                                                                                                                                                              </span>
                                                                                                                                                            </span>
                                                                                                                                                          </span>
                                                                                                                                                        </span>
                                                                                                                                                      </span>
                                                                                                                                                    </span>
                                                                                                                                                  </span>
                                                                                                                                                </span>
                                                                                                                                              </span>
                                                                                                                                            </span>
                                                                                                                                          </span>
                                                                                                                                        </span>
                                                                                                                                      </span>
                                                                                                                                    </span>
                                                                                                                                  </span>
                                                                                                                                </span>
                                                                                                                              </span>
                                                                                                                            </span>
                                                                                                                          </span>
                                                                                                                        </span>
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                  </span>
                                                                                                                </span>
                                                                                                              </span>
                                                                                                            </span>
                                                                                                          </span>
                                                                                                        </span>
                                                                                                      </span>
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                              </span>
                                                                                            </span>
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>

            <br />
            <br />
          </li>
          <li>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span style={{fontSize: 15}}>
                                              <span style={{color: DARK_GRAY}}>
                                                <span style={{fontSize: 15}}>
                                                  <span style={{color: DARK_GRAY}}>
                                                    <span style={{fontSize: 15}}>
                                                      <span
                                                        style={{
                                                          color: DARK_GRAY,
                                                        }}
                                                      >
                                                        <span style={{fontSize: 15}}>
                                                          <span
                                                            style={{
                                                              color: DARK_GRAY,
                                                            }}
                                                          >
                                                            <span style={{fontSize: 15}}>
                                                              <span
                                                                style={{
                                                                  color: DARK_GRAY,
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <strong>
                                                                    To respond to user
                                                                    inquiries/offer support to
                                                                    users.
                                                                  </strong>
                                                                  &nbsp; We may use your information
                                                                  to respond to your inquiries and
                                                                  solve any potential issues you
                                                                  might have with the use of our
                                                                  Services.
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span style={{fontSize: 15}}>
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}>
                              <span style={{color: DARK_GRAY}}>
                                <span style={{fontSize: 15}}>
                                  <span style={{color: DARK_GRAY}}>
                                    <span style={{fontSize: 15}}>
                                      <span style={{color: DARK_GRAY}}>
                                        <span style={{fontSize: 15}}>
                                          <span style={{color: DARK_GRAY}}>
                                            <span style={{fontSize: 15}}>
                                              <span style={{color: DARK_GRAY}}>
                                                <span style={{fontSize: 15}}>
                                                  <span style={{color: DARK_GRAY}}>
                                                    <span style={{fontSize: 15}}>
                                                      <span
                                                        style={{
                                                          color: DARK_GRAY,
                                                        }}
                                                      >
                                                        <span style={{fontSize: 15}}>
                                                          <span
                                                            style={{
                                                              color: DARK_GRAY,
                                                            }}
                                                          >
                                                            <span style={{fontSize: 15}}>
                                                              <span
                                                                style={{
                                                                  color: DARK_GRAY,
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text"></span>
                                                              </span>
                                                              &nbsp;
                                                            </span>
                                                            &nbsp;
                                                          </span>
                                                          &nbsp;
                                                        </span>
                                                        &nbsp;
                                                      </span>
                                                      &nbsp;
                                                    </span>
                                                    &nbsp;
                                                  </span>
                                                  &nbsp;
                                                </span>
                                                &nbsp;
                                              </span>
                                              &nbsp;
                                            </span>
                                            &nbsp;
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                      &nbsp;
                                    </span>
                                    &nbsp;
                                  </span>
                                  &nbsp;
                                </span>
                                &nbsp;
                              </span>
                              &nbsp;
                            </span>
                            &nbsp;
                          </span>
                          &nbsp;
                        </span>
                        &nbsp;
                      </span>
                      &nbsp;
                    </span>
                    &nbsp;
                  </span>
                  &nbsp;
                </span>
                &nbsp;
              </span>
              &nbsp;
            </span>
            <br />
            <br />
          </li>
          <li>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <strong>
                <span data-custom-class="body_text">For other Business Purposes.</span>
              </strong>
              <span data-custom-class="body_text">
                &nbsp;We may use your information for other Business Purposes, such as data
                analysis, identifying usage trends, determining the effectiveness of our promotional
                campaigns and to evaluate and improve our Services , products, marketing and your
                experience.&nbsp;
              </span>
              <span style={{fontSize: 15}}>
                <span style={{color: DARK_GRAY}}>
                  <span style={{fontSize: 15}}>
                    <span style={{color: DARK_GRAY}}>
                      <span style={{fontSize: 15}}>
                        <span style={{color: DARK_GRAY}}>
                          <span style={{fontSize: 15}}>
                            <span style={{color: DARK_GRAY}}>
                              <span style={{fontSize: 15}}>
                                <span style={{color: DARK_GRAY}}>
                                  <span style={{fontSize: 15}}>
                                    <span style={{color: DARK_GRAY}}>
                                      <span style={{fontSize: 15}}>
                                        <span style={{color: DARK_GRAY}}>
                                          <span style={{fontSize: 15}}>
                                            <span style={{color: DARK_GRAY}}>
                                              <span style={{fontSize: 15}}>
                                                <span style={{color: DARK_GRAY}}>
                                                  <span style={{fontSize: 15}}>
                                                    <span
                                                      style={{
                                                        color: DARK_GRAY,
                                                      }}
                                                    >
                                                      <span style={{fontSize: 15}}>
                                                        <span
                                                          style={{
                                                            color: DARK_GRAY,
                                                          }}
                                                        >
                                                          <span style={{fontSize: 15}}>
                                                            <span
                                                              style={{
                                                                color: DARK_GRAY,
                                                              }}
                                                            >
                                                              <span style={{fontSize: 15}}>
                                                                <span
                                                                  style={{
                                                                    color: DARK_GRAY,
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We may use and store this
                                                                    information in aggregated and
                                                                    anonymized form so that it is
                                                                    not associated with individual
                                                                    end users and does not include
                                                                    personal information. We will
                                                                    not use identifiable personal
                                                                    information without your
                                                                    consent.
                                                                    <span
                                                                      style={{
                                                                        color: DARK_GRAY,
                                                                        fontSize: 15,
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15,
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color: DARK_GRAY,
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15,
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color: DARK_GRAY,
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15,
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color: DARK_GRAY,
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15,
                                                                                    }}
                                                                                  >
                                                                                    <span
                                                                                      style={{
                                                                                        color: DARK_GRAY,
                                                                                      }}
                                                                                    >
                                                                                      <span
                                                                                        style={{
                                                                                          fontSize: 15,
                                                                                        }}
                                                                                      >
                                                                                        <span
                                                                                          style={{
                                                                                            color: DARK_GRAY,
                                                                                          }}
                                                                                        >
                                                                                          <span
                                                                                            style={{
                                                                                              fontSize: 15,
                                                                                            }}
                                                                                          >
                                                                                            <span
                                                                                              style={{
                                                                                                color: DARK_GRAY,
                                                                                              }}
                                                                                            >
                                                                                              <span
                                                                                                style={{
                                                                                                  fontSize: 15,
                                                                                                }}
                                                                                              >
                                                                                                <span
                                                                                                  style={{
                                                                                                    color: DARK_GRAY,
                                                                                                  }}
                                                                                                >
                                                                                                  <span
                                                                                                    style={{
                                                                                                      fontSize: 15,
                                                                                                    }}
                                                                                                  >
                                                                                                    <span
                                                                                                      style={{
                                                                                                        color: DARK_GRAY,
                                                                                                      }}
                                                                                                    >
                                                                                                      <span
                                                                                                        style={{
                                                                                                          fontSize: 15,
                                                                                                        }}
                                                                                                      >
                                                                                                        <span
                                                                                                          style={{
                                                                                                            color: DARK_GRAY,
                                                                                                          }}
                                                                                                        >
                                                                                                          <span
                                                                                                            style={{
                                                                                                              fontSize: 15,
                                                                                                            }}
                                                                                                          >
                                                                                                            <span
                                                                                                              style={{
                                                                                                                color: DARK_GRAY,
                                                                                                              }}
                                                                                                            >
                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize: 15,
                                                                                                                }}
                                                                                                              >
                                                                                                                <span
                                                                                                                  style={{
                                                                                                                    color: DARK_GRAY,
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <span
                                                                                                                    style={{
                                                                                                                      fontSize: 15,
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <span
                                                                                                                      style={{
                                                                                                                        color: DARK_GRAY,
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <span
                                                                                                                        style={{
                                                                                                                          fontSize: 15,
                                                                                                                        }}
                                                                                                                      >
                                                                                                                        <span
                                                                                                                          style={{
                                                                                                                            color: DARK_GRAY,
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <span data-custom-class="body_text">
                                                                                                                            <span
                                                                                                                              style={{
                                                                                                                                color: DARK_GRAY,
                                                                                                                                fontSize: 15,
                                                                                                                              }}
                                                                                                                            >
                                                                                                                              <span
                                                                                                                                style={{
                                                                                                                                  fontSize: 15,
                                                                                                                                }}
                                                                                                                              >
                                                                                                                                <span
                                                                                                                                  style={{
                                                                                                                                    color: DARK_GRAY,
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <span
                                                                                                                                    style={{
                                                                                                                                      fontSize: 15,
                                                                                                                                    }}
                                                                                                                                  >
                                                                                                                                    <span
                                                                                                                                      style={{
                                                                                                                                        color: DARK_GRAY,
                                                                                                                                      }}
                                                                                                                                    >
                                                                                                                                      <span
                                                                                                                                        style={{
                                                                                                                                          fontSize: 15,
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <span
                                                                                                                                          style={{
                                                                                                                                            color: DARK_GRAY,
                                                                                                                                          }}
                                                                                                                                        >
                                                                                                                                          <span
                                                                                                                                            style={{
                                                                                                                                              fontSize: 15,
                                                                                                                                            }}
                                                                                                                                          >
                                                                                                                                            <span
                                                                                                                                              style={{
                                                                                                                                                color: DARK_GRAY,
                                                                                                                                              }}
                                                                                                                                            >
                                                                                                                                              <span
                                                                                                                                                style={{
                                                                                                                                                  fontSize: 15,
                                                                                                                                                }}
                                                                                                                                              >
                                                                                                                                                <span
                                                                                                                                                  style={{
                                                                                                                                                    color: DARK_GRAY,
                                                                                                                                                  }}
                                                                                                                                                >
                                                                                                                                                  <span
                                                                                                                                                    style={{
                                                                                                                                                      fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                  >
                                                                                                                                                    <span
                                                                                                                                                      style={{
                                                                                                                                                        color: DARK_GRAY,
                                                                                                                                                      }}
                                                                                                                                                    >
                                                                                                                                                      <span
                                                                                                                                                        style={{
                                                                                                                                                          fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                      >
                                                                                                                                                        <span
                                                                                                                                                          style={{
                                                                                                                                                            color: DARK_GRAY,
                                                                                                                                                          }}
                                                                                                                                                        >
                                                                                                                                                          <span
                                                                                                                                                            style={{
                                                                                                                                                              fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                          >
                                                                                                                                                            <span
                                                                                                                                                              style={{
                                                                                                                                                                color: DARK_GRAY,
                                                                                                                                                              }}
                                                                                                                                                            >
                                                                                                                                                              <span
                                                                                                                                                                style={{
                                                                                                                                                                  fontSize: 15,
                                                                                                                                                                }}
                                                                                                                                                              >
                                                                                                                                                                <span
                                                                                                                                                                  style={{
                                                                                                                                                                    color: DARK_GRAY,
                                                                                                                                                                  }}
                                                                                                                                                                >
                                                                                                                                                                  <span
                                                                                                                                                                    style={{
                                                                                                                                                                      fontSize: 15,
                                                                                                                                                                    }}
                                                                                                                                                                  >
                                                                                                                                                                    <span
                                                                                                                                                                      style={{
                                                                                                                                                                        color: DARK_GRAY,
                                                                                                                                                                      }}
                                                                                                                                                                    >
                                                                                                                                                                      <span
                                                                                                                                                                        style={{
                                                                                                                                                                          fontSize: 15,
                                                                                                                                                                        }}
                                                                                                                                                                      >
                                                                                                                                                                        <span
                                                                                                                                                                          style={{
                                                                                                                                                                            color: DARK_GRAY,
                                                                                                                                                                          }}
                                                                                                                                                                        >
                                                                                                                                                                          <span
                                                                                                                                                                            style={{
                                                                                                                                                                              fontSize: 15,
                                                                                                                                                                            }}
                                                                                                                                                                          >
                                                                                                                                                                            <span
                                                                                                                                                                              style={{
                                                                                                                                                                                color: DARK_GRAY,
                                                                                                                                                                              }}
                                                                                                                                                                            >
                                                                                                                                                                              <span
                                                                                                                                                                                style={{
                                                                                                                                                                                  fontSize: 15,
                                                                                                                                                                                }}
                                                                                                                                                                              >
                                                                                                                                                                                <span
                                                                                                                                                                                  style={{
                                                                                                                                                                                    color: DARK_GRAY,
                                                                                                                                                                                  }}
                                                                                                                                                                                >
                                                                                                                                                                                  <span
                                                                                                                                                                                    style={{
                                                                                                                                                                                      color: DARK_GRAY,
                                                                                                                                                                                      fontSize: 15,
                                                                                                                                                                                    }}
                                                                                                                                                                                  >
                                                                                                                                                                                    <span data-custom-class="body_text"></span>
                                                                                                                                                                                  </span>
                                                                                                                                                                                </span>
                                                                                                                                                                              </span>
                                                                                                                                                                            </span>
                                                                                                                                                                          </span>
                                                                                                                                                                        </span>
                                                                                                                                                                      </span>
                                                                                                                                                                    </span>
                                                                                                                                                                  </span>
                                                                                                                                                                </span>
                                                                                                                                                              </span>
                                                                                                                                                            </span>
                                                                                                                                                          </span>
                                                                                                                                                        </span>
                                                                                                                                                      </span>
                                                                                                                                                    </span>
                                                                                                                                                  </span>
                                                                                                                                                </span>
                                                                                                                                              </span>
                                                                                                                                            </span>
                                                                                                                                          </span>
                                                                                                                                        </span>
                                                                                                                                      </span>
                                                                                                                                    </span>
                                                                                                                                  </span>
                                                                                                                                </span>
                                                                                                                              </span>
                                                                                                                            </span>
                                                                                                                          </span>
                                                                                                                        </span>
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                  </span>
                                                                                                                </span>
                                                                                                              </span>
                                                                                                            </span>
                                                                                                          </span>
                                                                                                        </span>
                                                                                                      </span>
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                              </span>
                                                                                            </span>
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <span style={{fontSize: 15}}>
                                        <span style={{color: DARK_GRAY}}>
                                          <span style={{fontSize: 15}}>
                                            <span style={{color: DARK_GRAY}}>
                                              <span style={{fontSize: 15}}>
                                                <span style={{color: DARK_GRAY}}>
                                                  <span style={{fontSize: 15}}>
                                                    <span
                                                      style={{
                                                        color: DARK_GRAY,
                                                      }}
                                                    >
                                                      <span style={{fontSize: 15}}>
                                                        <span
                                                          style={{
                                                            color: DARK_GRAY,
                                                          }}
                                                        >
                                                          <span style={{fontSize: 15}}>
                                                            <span
                                                              style={{
                                                                color: DARK_GRAY,
                                                              }}
                                                            >
                                                              <span style={{fontSize: 15}}>
                                                                <span
                                                                  style={{
                                                                    color: DARK_GRAY,
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        color: DARK_GRAY,
                                                                        fontSize: 15,
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15,
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color: DARK_GRAY,
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15,
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color: DARK_GRAY,
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15,
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color: DARK_GRAY,
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15,
                                                                                    }}
                                                                                  >
                                                                                    <span
                                                                                      style={{
                                                                                        color: DARK_GRAY,
                                                                                      }}
                                                                                    >
                                                                                      <span
                                                                                        style={{
                                                                                          fontSize: 15,
                                                                                        }}
                                                                                      >
                                                                                        <span
                                                                                          style={{
                                                                                            color: DARK_GRAY,
                                                                                          }}
                                                                                        >
                                                                                          <span
                                                                                            style={{
                                                                                              fontSize: 15,
                                                                                            }}
                                                                                          >
                                                                                            <span
                                                                                              style={{
                                                                                                color: DARK_GRAY,
                                                                                              }}
                                                                                            >
                                                                                              <span
                                                                                                style={{
                                                                                                  fontSize: 15,
                                                                                                }}
                                                                                              >
                                                                                                <span
                                                                                                  style={{
                                                                                                    color: DARK_GRAY,
                                                                                                  }}
                                                                                                >
                                                                                                  <span
                                                                                                    style={{
                                                                                                      fontSize: 15,
                                                                                                    }}
                                                                                                  >
                                                                                                    <span
                                                                                                      style={{
                                                                                                        color: DARK_GRAY,
                                                                                                      }}
                                                                                                    >
                                                                                                      <span
                                                                                                        style={{
                                                                                                          fontSize: 15,
                                                                                                        }}
                                                                                                      >
                                                                                                        <span
                                                                                                          style={{
                                                                                                            color: DARK_GRAY,
                                                                                                          }}
                                                                                                        >
                                                                                                          <span
                                                                                                            style={{
                                                                                                              fontSize: 15,
                                                                                                            }}
                                                                                                          >
                                                                                                            <span
                                                                                                              style={{
                                                                                                                color: DARK_GRAY,
                                                                                                              }}
                                                                                                            >
                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize: 15,
                                                                                                                }}
                                                                                                              >
                                                                                                                <span
                                                                                                                  style={{
                                                                                                                    color: DARK_GRAY,
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <span
                                                                                                                    style={{
                                                                                                                      fontSize: 15,
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <span
                                                                                                                      style={{
                                                                                                                        color: DARK_GRAY,
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <span
                                                                                                                        style={{
                                                                                                                          fontSize: 15,
                                                                                                                        }}
                                                                                                                      >
                                                                                                                        <span
                                                                                                                          style={{
                                                                                                                            color: DARK_GRAY,
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <span
                                                                                                                            style={{
                                                                                                                              color: DARK_GRAY,
                                                                                                                              fontSize: 15,
                                                                                                                            }}
                                                                                                                          >
                                                                                                                            <span data-custom-class="body_text"></span>
                                                                                                                          </span>
                                                                                                                        </span>
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                  </span>
                                                                                                                </span>
                                                                                                              </span>
                                                                                                            </span>
                                                                                                          </span>
                                                                                                        </span>
                                                                                                      </span>
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                              </span>
                                                                                            </span>
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </li>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <br />
          </p>
          <p id="infoshare" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    We only share information with your consent, to comply with laws, to provide you
                    with services, to protect your rights, or to fulfill business obligations.&nbsp;
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <div>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                We may process or share data based on the following legal basis:
              </span>
            </span>
          </div>
          <ul>
            <li>
              <span data-custom-class="body_text">
                <span style={{color: DARK_GRAY, fontSize: 15}}>
                  <strong>Consent:</strong> We may process your data if you have given us specific
                  consent to use your personal information in a specific purpose.&nbsp;
                </span>
                <br />
                <br />
              </span>
            </li>
            <li>
              <span data-custom-class="body_text">
                <span style={{color: DARK_GRAY, fontSize: 15}}>
                  <strong>Legitimate Interests:</strong> We may process your data when it is
                  reasonably necessary to achieve our legitimate business interests.&nbsp;
                </span>
                <br />
                <br />
              </span>
            </li>
            <li>
              <span data-custom-class="body_text">
                <span style={{color: DARK_GRAY, fontSize: 15}}>
                  <strong>Performance of a Contract:&nbsp;</strong>Where we have entered into a
                  contract with you, we may process your personal information to fulfill the terms
                  of our contract.&nbsp;
                </span>
                <br />
                <br />
              </span>
            </li>
            <li>
              <span data-custom-class="body_text">
                <span style={{color: DARK_GRAY, fontSize: 15}}>
                  <strong>Legal Obligations:</strong> We may disclose your information where we are
                  legally required to do so in order to comply with applicable law, governmental
                  requests, a judicial proceeding, court order, or legal process, such as in
                  response to a court order or a subpoena (including in response to public
                  authorities to meet national security or law enforcement requirements).&nbsp;
                </span>
                <br />
                <br />
              </span>
            </li>
            <li>
              <span style={{color: DARK_GRAY, fontSize: 15}}>
                <span data-custom-class="body_text">
                  <strong>Vital Interests:</strong> We may disclose your information where we
                  believe it is necessary to investigate, prevent, or take action regarding
                  potential violations of our policies, suspected fraud, situations involving
                  potential threats to the safety of any person and illegal activities, or as
                  evidence in litigation in which we are involved.
                </span>
              </span>
            </li>
          </ul>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  More specifically, we may need to process your data or share your personal
                  information in the following situations:
                </span>
              </span>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text"></span>
              </span>
            </span>
          </p>
          <ul>
            <li>
              <span style={{fontSize: 15}}>
                <span style={{color: DARK_GRAY}}>
                  <strong>
                    <span data-custom-class="body_text">
                      Vendors, Consultants and Other Third-Party Service Providers.
                    </span>
                  </strong>
                  <span data-custom-class="body_text">
                    &nbsp;We may share your data with third party vendors, service providers,
                    contractors or agents who perform services for us or on our behalf and require
                    access to such information to do that work. Examples include: payment
                    processing, data analysis, email delivery, hosting services, customer service
                    and marketing efforts. We may allow selected third parties to use tracking
                    technology on the Services , which will enable them to collect data about how
                    you interact with the Services over time. This information may be used to, among
                    other things, analyze and track data, determine the popularity of certain
                    content and better understand online activity. Unless described in this Policy,
                    we do not share, sell, rent or trade any of your information with third parties
                    for their promotional purposes. &nbsp;
                  </span>
                </span>
              </span>
              <span style={{fontSize: 15}}>
                <span style={{color: DARK_GRAY}}>
                  <span data-custom-class="body_text"></span>
                </span>
                &nbsp;
              </span>
              &nbsp;&nbsp;
              <br />
              <br />
            </li>
            <li>
              <span style={{fontSize: 15}}>
                <span style={{color: DARK_GRAY}}>
                  <strong>
                    <span data-custom-class="body_text">Business Transfers.</span>
                  </strong>
                  <span data-custom-class="body_text">
                    &nbsp;We may share or transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets, financing, or acquisition
                    of all or a portion of our business to another company.
                  </span>
                </span>
              </span>
              <br />
              <br />
            </li>
            <li>
              <span style={{fontSize: 15}}>
                <span style={{color: DARK_GRAY}}>
                  <strong>
                    <span data-custom-class="body_text">Third-Party Advertisers.</span>
                  </strong>
                  <span data-custom-class="body_text">
                    &nbsp;We may use third-party advertising companies to serve ads when you visit
                    the Services . These companies may use information about your visits to our
                    Website(s) and other websites that are contained in web cookies and other
                    tracking technologies in order to provide advertisements about goods and
                    services of interest to you.{' '}
                  </span>
                </span>
              </span>

              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text"></span>
              </span>
            </li>
          </ul>
          <div>
            <span className="block-component">
              <span data-custom-class="body_text" />
            </span>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span style={{fontSize: 15}}>
                <span style={{color: DARK_GRAY}}>
                  <span style={{fontSize: 15}}>
                    <span style={{color: DARK_GRAY}}>
                      <span className="block-component">
                        <span data-custom-class="heading_1" />
                      </span>
                      &nbsp;
                    </span>
                    &nbsp;
                  </span>
                  &nbsp;
                </span>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span id="cookies" style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </div>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    We may use cookies and other tracking technologies to collect and store your
                    information.
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                We may use cookies and similar tracking technologies (like web beacons and pixels)
                to access or store information. Specific information about how we use such
                technologies and how you can refuse certain cookies is set out in our Cookie Policy
                .
              </span>
              <span style={{color: DARK_GRAY, fontSize: 15}}>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text"></span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span style={{color: DARK_GRAY, fontSize: 15}}>
                <span style={{fontSize: 15}}>
                  <span style={{color: DARK_GRAY}}>
                    <span style={{fontSize: 15}}>
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text"></span>
                        <span className="block-component">
                          <span data-custom-class="body_text" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <span style={{color: DARK_GRAY}}>
              <br />
            </span>
          </p>
          <p id="inforetain" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    5. HOW LONG DO WE KEEP YOUR INFORMATION?
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    We keep your information for as long as necessary to fulfill the purposes
                    outlined in this{' '}
                    <span style={{color: DARK_GRAY}}>
                      <span data-custom-class="body_text">
                        <span style={{color: DARK_GRAY}}>
                          <span data-custom-class="body_text">privacy policy</span>
                        </span>
                      </span>
                      &nbsp;
                    </span>
                    unless otherwise required by law.
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  We will only keep your personal information for as long as it is necessary for the
                  purposes set out in this{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">privacy policy</span>
                      </span>
                    </span>
                  </span>
                  , unless a longer retention period is required or permitted by law (such as tax,
                  accounting or other legal requirements). No purpose in this policy will require us
                  keeping your personal information for longer than <span>1 year</span>.
                </span>
              </span>
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                When we have no ongoing legitimate business need to process your personal
                information, we will either delete or anonymize it, or, if this is not possible (for
                example, because your personal information has been stored in backup archives), then
                we will securely store your personal information and isolate it from any further
                processing until deletion is possible.
              </span>
            </span>
            <span style={{color: DARK_GRAY}}>&nbsp;</span>
          </p>
          <div style={{lineHeight: '1.5'}}>
            <br />
          </div>
          <p id="infosafe" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    6. HOW DO WE KEEP YOUR INFORMATION SAFE?&nbsp;
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    We aim to protect your personal information through a system of organizational
                    and technical security measures.
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                We have implemented appropriate technical and organizational security measures
                designed to protect the security of any personal information we process. However,
                please also remember that we cannot guarantee that the internet itself is 100%
                secure. Although we will do our best to protect your personal information,
                transmission of personal information to and from our Services is at your own risk.
                You should only access the services within a secure environment.
              </span>
            </span>
            <span style={{color: DARK_GRAY}}></span>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">&nbsp;</span>
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <span style={{color: DARK_GRAY}}>
              <br />
            </span>
          </p>
          <p id="infominors" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    7. DO WE COLLECT INFORMATION FROM MINORS?
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    We do not knowingly collect data from or market to children under 18 years of
                    age.
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                We do not knowingly solicit data from or market to children under 18 years of age.
                By using the Services , you represent that you are at least 18 or that you are the
                parent or guardian of such a minor and consent to such minor dependent’s use of the
                Services . If we learn that personal information from users less than 18 years of
                age has been collected, we will deactivate the account and take reasonable measures
                to promptly delete such data from our records. If you become aware of any data we
                have collected from children under age 18, please contact us at
                <span>privacy@optyx.app</span>.
              </span>
              <span style={{color: DARK_GRAY, fontSize: 15}}>
                <span data-custom-class="body_text"></span>
              </span>
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <span style={{color: DARK_GRAY}}>
              <br />
            </span>
          </p>
          <p id="privacyrights" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">8. WHAT ARE YOUR PRIVACY RIGHTS?</span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <span data-custom-class="body_text">
                  <em>You may review, change, or terminate your account at any time.</em>
                </span>
                <span className="block-component">
                  <span data-custom-class="body_text" />
                </span>
              </span>
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  If you are resident in the European Economic Area and you believe we are
                  unlawfully processing your personal information, you also have the right to
                  complain to your local data protection supervisory authority. You can find their
                  contact details here:
                </span>
              </span>
              &nbsp;
            </span>
            <span data-custom-class="body_text">
              <span style={{color: 'rgb(48, 48, 241)'}}>
                <span style={{fontSize: 15}}>
                  <a
                    data-custom-class="link"
                    href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                    target="_blank"
                  >
                    http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                  </a>
                  .
                </span>
              </span>
            </span>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span className="block-component">
                  <span data-custom-class="body_text" />
                </span>
              </span>
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <strong>
                  <u>
                    <span data-custom-class="body_text">Cookies and similar technologies:</span>
                  </u>
                  &nbsp;
                </strong>
                <span data-custom-class="body_text">
                  Most Web browsers are set to accept cookies by default. If you prefer, you can
                  usually choose to set your browser to remove cookies and to reject cookies. If you
                  choose to remove cookies or reject cookies, this could affect certain features or
                  services of our Services . To opt-out of interest-based advertising by advertisers
                  on our Services
                </span>
              </span>{' '}
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">visit</span>
              </span>
              &nbsp;
            </span>
            <span style={{color: 'rgb(48, 48, 241)'}}>
              <span data-custom-class="body_text">
                <a
                  href="http://www.aboutads.info/choices/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span style={{fontSize: 15}}>http://www.aboutads.info/choices/</span>
                </a>
              </span>
            </span>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  .
                  <span style={{fontSize: 15}}>
                    <span style={{color: DARK_GRAY}}>
                      <span style={{fontSize: 15}}>
                        <span style={{color: DARK_GRAY}}>
                          <span style={{fontSize: 15}}>
                            <span style={{color: DARK_GRAY}}></span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span data-custom-class="body_text">
                  <span className="block-component"></span>
                </span>
              </span>
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <br />
          </p>
          <p id="DNT" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">9. CONTROLS FOR DO-NOT-TRACK FEATURES</span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <span style={{fontSize: 15}}>
                <span data-custom-class="body_text">
                  Most web browsers and some mobile operating systems and mobile applications
                  include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your
                  privacy preference not to have data about your online browsing activities
                  monitored and collected. No uniform technology standard for recognizing and
                  implementing DNT signals has been finalized. As such, we do not currently respond
                  to DNT browser signals or any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online tracking is adopted that
                  we must follow in the future, we will inform you about that practice in a revised
                  version of this{' '}
                  <span style={{color: DARK_GRAY}}>
                    <span data-custom-class="body_text">
                      <span style={{color: DARK_GRAY}}>
                        <span data-custom-class="body_text">privacy policy</span>
                      </span>
                    </span>
                  </span>
                  .
                </span>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <br />
          </p>
          <p id="caresidents" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    Yes, if you are a resident of California, you are granted specific rights
                    regarding access to your personal information.&nbsp;
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{fontSize: 15}}>
              <span style={{color: DARK_GRAY}}>
                <span data-custom-class="body_text">
                  California Civil Code Section 1798.83, also known as the “Shine The Light” law,
                  permits our users who are California residents to request and obtain from us, once
                  a year and free of charge, information about categories of personal information
                  (if any) we disclosed to third parties for direct marketing purposes and the names
                  and addresses of all third parties with which we shared personal information in
                  the immediately preceding calendar year. If you are a California resident and
                  would like to make such a request, please submit your request in writing to us
                  using the contact information provided below.
                </span>
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                If you are under 18 years of age, reside in California, and have a registered
                account with the Services , you have the right to request removal of unwanted data
                that you publicly post on the Services . To request removal of such data, please
                contact us using the contact information provided below, and include the email
                address associated with your account and a statement that you reside in California.
                We will make sure the data is not publicly displayed on the Services , but please be
                aware that the data may not be completely or comprehensively removed from our
                systems.
              </span>
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <span style={{color: DARK_GRAY}}>
              <br />
            </span>
          </p>
          <p id="policyupdates" style={{fontSize: 15, lineHeight: '1.5'}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">11. DO WE MAKE UPDATES TO THIS POLICY?</span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY}}>
              <strong>
                <em>
                  <span style={{fontSize: 15}}>
                    <span data-custom-class="body_text">In Short:</span>
                  </span>
                  &nbsp;
                </em>
                &nbsp;
              </strong>
              <span style={{fontSize: 15}}>
                <em>
                  <span data-custom-class="body_text">
                    Yes, we will update this policy as necessary to stay compliant with relevant
                    laws.
                  </span>
                </em>
                &nbsp;
              </span>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                We may update this{' '}
                <span style={{color: DARK_GRAY}}>
                  <span data-custom-class="body_text">
                    <span style={{color: DARK_GRAY}}>
                      <span data-custom-class="body_text">privacy policy</span>
                    </span>
                  </span>
                  &nbsp;
                </span>
                from time to time. The updated version will be indicated by an updated “Revised”
                date and the updated version will be effective as soon as it is accessible. If we
                make material changes to this{' '}
                <span style={{color: DARK_GRAY}}>
                  <span data-custom-class="body_text">
                    <span style={{color: DARK_GRAY}}>
                      <span data-custom-class="body_text">privacy policy</span>
                    </span>
                  </span>
                </span>
                , we may notify you either by prominently posting a notice of such changes or by
                directly sending you a notification. We encourage you to review this{' '}
                <span style={{color: DARK_GRAY}}>
                  <span data-custom-class="body_text">
                    <span style={{color: DARK_GRAY}}>
                      <span data-custom-class="body_text">privacy policy</span>
                    </span>
                  </span>
                  &nbsp;
                </span>
                frequently to be informed of how we are protecting your information.
              </span>
            </span>
          </p>
          <p style={{fontSize: 15, lineHeight: '1.5'}}>
            <span style={{color: DARK_GRAY}}>
              <br />
            </span>
          </p>
          <p id="contact" style={{fontSize: 15}}>
            <span style={{color: 'rgb(0, 0, 0)'}}>
              <strong>
                <span style={{fontSize: 19}}>
                  <span data-custom-class="heading_1">
                    12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                  </span>
                </span>
                &nbsp;
              </strong>
              &nbsp;
            </span>
          </p>
          <p style={{fontSize: 15}}>
            <span style={{color: DARK_GRAY, fontSize: 15}}>
              <span data-custom-class="body_text">
                If you have questions or comments about this policy, you may email us at{' '}
                <span>privacy@optyx.app</span> or by post to:
              </span>
            </span>
          </p>
          <div>
            <span style={{color: DARK_GRAY}}>
              <span>
                <span style={{fontSize: 15}}>
                  <span data-custom-class="body_text">Eris Ventures LLC</span>
                </span>
              </span>
              <span data-custom-class="body_text">
                <span style={{fontSize: 15}}>
                  <span data-custom-class="body_text"></span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <span data-custom-class="body_text">
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}>
                  <span>3839 McKinney Ave Suite 155-2098</span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <span data-custom-class="body_text">
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}>
                  <span>Dallas</span>, <span>TX</span>
                  <span>75204</span>{' '}
                </span>
              </span>
              &nbsp;
            </span>
            <span data-custom-class="body_text">
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}></span>
              </span>
            </span>
          </div>
          <div>
            <span data-custom-class="body_text">
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}>
                  <span>United States</span>
                  <span data-custom-class="body_text">
                    <span style={{color: DARK_GRAY}}>
                      <span style={{fontSize: 15}}>
                        <span data-custom-class="body_text">
                          <span style={{color: DARK_GRAY}}>
                            <span style={{fontSize: 15}}></span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span data-custom-class="body_text">
              <span style={{color: DARK_GRAY}}>
                <span style={{fontSize: 15}}></span>
              </span>
            </span>
            <span style={{color: DARK_GRAY}}>
              <span style={{fontSize: 15}}>
                <span data-custom-class="body_text"></span>
              </span>
            </span>
          </div>
        </article>
      </Layout>
    )
  }
}

export default PrivacyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
