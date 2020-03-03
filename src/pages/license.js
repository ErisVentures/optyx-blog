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
        <SEO title="End-User License Agreement" />
        <article className="privacy container" style={{paddingBottom: 100, paddingTop: 100}}>
          <p>End-User License Agreement ("Agreement")</p>
          <p>Last updated: (2020-02-21)</p>
          <p>
            Please read this End-User License Agreement ("Agreement") carefully before clicking the
            "I Agree" button, downloading or using the apps (Optyx) ("SOFTWARE") made available by
            Eris Ventures LLC ("Us", "We", "Author").
          </p>
          <p>
            By clicking the "I Agree" button, downloading or using the SOFTWARE, you are agreeing to
            be bound by the terms and conditions of this Agreement.
          </p>
          <p>
            If you do not agree to the terms of this Agreement, do not click on the "I Agree" button
            and do not download or use the SOFTWARE.
          </p>
          <h2 id="1-license">1. License</h2>
          <h3 id="1-1-license-">1.1 License.</h3>
          <p>
            Subject to your compliance with the Agreement and the law, you may access and use the
            SOFTWARE. All users of the SOFTWARE are subject to the conditions of the Free license
            unless informed in writing by the Author (via purchase of Optyx Pro or Optyx
            Enterprise).
          </p>
          <h4 id="1-1-1-free-license-optyx-free-forever-">
            1.1.1 Free license (Optyx Free Forever)
          </h4>
          <p>
            The free license grants limited and restricted use of Optyx subject to the conditions
            that you are:
          </p>
          <ul>
            <li>using SOFTWARE on no more than 100 photos per shooting event</li>
          </ul>
          <p>
            Violation of any Agreement Restrictions, including but not limited to attempts to
            circumvent the above, can result in permanent revocation of your Free license.
          </p>
          <h4 id="1-1-2-individual-license-optyx-pro-">1.1.2 Individual license (Optyx Pro)</h4>
          <p>
            The individual license grants unlimited and unrestricted human operation of Optyx
            subject to the conditions that you are:
          </p>
          <ul>
            <li>using SOFTWARE for your private individual and non-commercial interests.</li>
            <li>
              using SOFTWARE at your place of business AND you have an ownership stake of at least
              30% in said business AND purchased SOFTWARE is not shared with any other individual.
            </li>
            <li>
              using SOFTWARE for other non-commercial or government purposes AND purchased SOFTWARE
              is not used by more than one individual.
            </li>
          </ul>
          <p>
            e.g. you are a solo professional photographer who uses the software on a device only you
            use.
          </p>
          <h4 id="1-1-3-commercial-license-optyx-enterprise-">
            1.1.3 Commercial license (Optyx Enterprise)
          </h4>
          <p>
            The commercial license grants unlimited and unrestricted usage of Optyx for all other
            commercial and non-commercial purposes, both automated and human.
          </p>
          <p>
            e.g. you work at a photography studio where many individuals will use the SOFTWARE. e.g.
            you participate in a business where photos are categorized and tagged for customers and
            will use the SOFTWARE to facilitate this process.
          </p>
          <h3 id="1-2-intellectual-property-">1.2 Intellectual Property.</h3>
          <p>
            We (and our licensors) remain the sole owner of all right, title, and interest in the
            SOFTWARE. Except as stated in the Agreement, we do not grant you any rights to patents,
            copyrights, trade secrets, trademarks, or any other rights in respect to the items in
            the SOFTWARE. We reserve all rights not granted under the Agreement.
          </p>
          <h2 id="2-modifications-to-software">2. Modifications to SOFTWARE</h2>
          <p>
            Eris Ventures LLC reserves the right to modify, suspend or discontinue, temporarily or
            permanently, the SOFTWARE or any service to which it connects, with or without notice
            and without liability to you.
          </p>
          <h2 id="3-disclaimer-of-warranty-indemnification">
            3. Disclaimer of warranty &amp; Indemnification
          </h2>
          <p>
            The SOFTWARE is provided “AS-IS.” To the maximum extent permitted by law, we disclaim
            all warranties, express or implied, including the implied warranties of
            non-infringement, merchantability, and fitness for a particular purpose. We further
            disclaim any warranty that (a) the SOFTWARE will meet your requirements or will be
            constantly available, uninterrupted, timely, secure, or error-free; (b) the results
            obtained from the use of the SOFTWARE will be effective, accurate, or reliable; (c) the
            quality of the SOFTWARE will meet your expectations; or (d) any errors or defects in the
            SOFTWARE will be corrected.
          </p>
          <p>
            We specifically disclaim all liability for any actions resulting from your use of any
            SOFTWARE. You may use and access the SOFTWARE at your own discretion and risk, and you
            are solely responsible for any damage to your computer system or loss of data that
            results from the use of and access to the SOFTWARE.
          </p>
          <p>
            You will indemnify us, our subsidiaries, affiliates, officers, agents, employees,
            partners, and licensors from any claim, demand, loss, or damage, including reasonable
            attorneys’ fees, arising out of or related to your use of the SOFTWARE, or your
            violation of the Agreement.
          </p>
          <h2 id="4-technical-support">4. Technical support</h2>
          <p>
            Technical support may be provided via chat, e-mail, and/or community forums. While every
            effort is made to provide timely technical support, no guarantees are made, express or
            implied, that technical support will be provided or that technical support, when
            provided, will be accurate.
          </p>
          <p>
            For technical support agreements with guaranteed response times, seek an Enterprise
            license.
          </p>
          <h2 id="5-restrictions">5. Restrictions</h2>
          <p>You may not misuse the SOFTWARE. For example, you must not:</p>
          <ul>
            <li>enable or allow others to use the SOFTWARE using your account information.</li>
            <li>
              reverse engineer, decompile, disassemble the SOFTWARE except to the extent you may be
              expressly permitted by copyright holders.
            </li>
            <li>
              copy, modify, host, stream, sublicense, distribute, rent, or resell the SOFTWARE,
              except as expressly permitted in this License without prior written consent from
              Author.
            </li>
            <li>
              access or attempt to access the SOFTWARE by any means other than the interface we
              provide or authorize
            </li>
            <li>
              circumvent any access or use restrictions put into place to prevent certain uses of
              the SOFTWARE including but not limited to the free license restriction controls
            </li>
            <li>attempt to disable, impair, or destroy the SOFTWARE</li>
            <li>
              attempt to automate, script, or otherwise programmatically engage with the SOFTWARE
              unless expressly permitted in writing from the Author in a Commercial License
              Agreement.
            </li>
            <li>violate applicable law (including, but not limited to, where applicable, COPPA)</li>
          </ul>
          <h2 id="6-termination-">6. Termination.</h2>
          <h3 id="6-1-termination-by-you-">6.1 Termination by You.</h3>
          <p>
            You may stop using the SOFTWARE at any time. Termination of your account does not
            relieve you of any obligation to pay any fees that may be outstanding.
          </p>
          <h3 id="6-2-termination-by-us-">6.2 Termination by Us.</h3>
          <p>
            If we terminate the Agreement, or your use of the Service(s) for reasons other than for
            cause, we will make reasonable efforts to notify you at least 30 days prior to
            termination via the email address you provide to us with instructions on how to retrieve
            your Content. We may, at any time, terminate your right to use and access the SOFTWARE
            if:
          </p>
          <p>
            (a) you breach any provision of the Agreement (or act in a manner that clearly shows you
            do not intend to, or are unable to, comply with the Agreement);
          </p>
          <p>(b) you fail to make the timely payment of fees for the SOFTWARE, if any</p>
          <p>
            (c) you materially breach any provision of the Agreement, and (i) the breach cannot be
            corrected; or (ii) we notify you of the breach and you fail to correct it within 14 days
            of the notice;
          </p>
          <p>
            (d) you physically, verbally, or through other means abuse, threaten, bully, or harass
            us or our personnel (in such circumstances, we may alternatively suspend or restrict
            your access to the SOFTWARE);
          </p>
          <p>
            (e) you have repeatedly made complaints in bad faith or without a reasonable basis, and
            continue to do so after we have asked you to stop (in such circumstances, we may
            alternatively suspend or restrict your access to the SOFTWARE);
          </p>
          <p>
            (f) we are required to do so by law (for example, where the provision of the SOFTWARE to
            you is, or becomes, unlawful);
          </p>
          <p>
            (g) we elect to discontinue the SOFTWARE, in whole or in part (such as if it becomes
            impractical for us to continue offering Services in your region due to change of law);
          </p>
          <h2 id="7-amendments-to-this-agreement">7. Amendments to this Agreement</h2>
          <p>
            Eris Ventures LLC reserves the right, at its sole discretion, to modify or replace this
            Agreement at any time.
          </p>
          <p>Copyright (C) 2018-2020 Eris Ventures LLC. All rights reserved.</p>
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
