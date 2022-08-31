import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/General-components/Header";
import GetStarted from "../components/General-components/GetStarted";
import FAQ from "../components/Home-Components/FAQ";
import AdsBox from "../components/General-components/AdsBox";
import Footer from "../components/General-components/Footer";

const useStyles = makeStyles((theme) => ({
  mainBody: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 30px",
    },
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 34,
    color: theme.palette.primary.white,
    marginTop: 64,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      textAlign: "left",
    },
  },
  text_body: {
    // padding: "0px 120px",
    maxWidth: 1200,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  body_text: {
    color: theme.palette.secondary.main,
  },
  text_body_title: {
    color: theme.palette.primary.main,
    fontSize: 20,
    marginTop: 24,
  },
  text_list: {
    marginTop: 10,
  },
}));

const TermsAndConditions = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainBody}>
      <Header />
      <div className={classes.body}>
        <p className={classes.title}>Terms and conditions</p>
        <div className={classes.text_body}>
          <p className={classes.body_text} style={{ marginTop: 64 }}>
            By signing up for an account on this website https://myqpay.app, any
            of our websites and/or services, you agree to these Terms of Service
            (the “Agreement”).
            <br />
            <br /> QPay’s services are provided by, and you’re contracting with,
            Aza Technology Limited . a company duly incorporated under the laws
            of the Federal Republic of Nigeria. The Agreement contained herein
            on this webpage is a Legal Agreement between you, as a prospective
            Customer/Merchant of QPay’s services and QPay(”QPay”, “we”, “our” or
            “us”) and shall govern your access to and use of QPay’s services
            which include all pages within the QPay website, mobile applications
            and other products and services (collectively referred to as the
            “services”).
            <br />
            <br /> These terms apply in full force and effect to your use of the
            services and by using any of the services, you expressly accept all
            Terms and Conditions contained herein in full and without limitation
            or qualification, including our Privacy Policy. you must not use any
            of the services if you have any objection to any of these terms.
          </p>

          <div>
            <p className={classes.text_body_title}>
              PURPOSE AND SCOPE OF AGREEMENT
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              This Terms of Service is an Agreement between you and QPay. It
              sets forth the terms and conditions that shall govern the use of
              the Platform and the services. It details QPay’s obligations to
              you. It also highlights certain risks on using the services and
              you must consider such risks carefully as you will be bound by the
              provision of this Agreement through your use of this website or
              any of our services.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              REGISTRATION
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                To use QPay, you have to create a QPay account by registering.
                To register, you will provide us with certain information such
                as your email, first name, last name, business name and phone
                number and we may seek to verify your information, (by ourselves
                or through third parties), after which we will approve your
                account unless deemed risky. You permit us to do all these.
              </li>

              <li className={classes.text_list}>
                In the event that you change any information provided to us at
                registration including your business name, address, financial
                institution, mode of payments or the products and services that
                you offer, or where a corporate restructuring occurs, You agree
                to notify us within 14 days of such change. We may be unable to
                respond to you if you contact us from an address, telephone
                number or email account that is not registered with us.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title}>GETTING TO KNOW YOU</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              We are required by law to carry out all necessary security and
              customer due diligence checks on you (including any parties
              involved in your transaction eg, your recipient) in order to
              provide any services to you. You agree to comply with any request
              from us for further information and provide such information in a
              format acceptable to us. In addition, you agree that we may make,
              directly or through any third party, any inquiries we consider
              necessary to validate the information you provided to us,
              including checking commercial databases or credit reports. You
              authorize us to obtain one or more of your credit reports, from
              time to time, to establish, update or renew your QPay account with
              us or in the event of a dispute relating to this agreement and
              activity under your QPay account
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>ACCOUNT SECURITY</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              You agree not to allow anyone else to have or use your password
              details and comply with all reasonable instructions regarding
              account access and security. In the event you share your password
              details, QPay will not be liable to you for losses or damages. You
              will also take all reasonable steps to protect the security of the
              personal electronic device through which you access QPay’s
              services (including, without limitation, using PIN and/or password
              protected personally configured device functionality to access
              QPay’s services and not sharing your device with other people).
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>AGE RESTRICTION</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              Our website and services are directed to people from the ages of
              18 and above. You are only permitted to use the Services if you
              are aged 18 or older. We do not knowingly engage people younger
              than the age of 18.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>SOFTWARE LICENSE</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              For businesses, we hereby grant you a revocable, non-exclusive,
              non-transferable license to use QPay’s APIs, developer’s toolkit,
              and other software applications (the “Software”) in accordance
              with the documentation accompanying the Software. This license
              grant includes all updates, upgrades, new versions and replacement
              software for your use in connection with QPay’s services. If you
              do not comply with the documentation and any other requirements
              provided by QPay, then you will be liable for all resulting
              damages suffered by you, QPay and third parties. Unless otherwise
              provided by applicable law, you agree not to alter, reproduce,
              adapt, distribute, display, publish, reverse engineer, translate,
              disassemble, decompile or otherwise attempt to create any source
              code that is derived from the Software. Upon expiration or
              termination of this Agreement, you will immediately cease all use
              of any Software.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              WARRANTIES AND REPRESENTATIONS
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              You represent and warrant to QPay that:
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                You represent and warrant to QPay that: You have the full power,
                authority, regulatory approval and corporate authorisation to
                enter into, execute, deliver and perform this Agreement.
              </li>

              <li className={classes.text_list}>
                You are duly organised, authorised and in good standing under
                the laws of the Federal Republic of Nigeria or any state, region
                or country of your organisation and are duly authorised to do
                business in all other states, regions or countries in which your
                business operates.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              CHARGES AND FEES
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                You agree to pay us for the services we render. Our Fees will be
                calculated as demonstrated on the Pricing page on the website
              </li>

              <li className={classes.text_list}>
                Subject to the terms of this Agreement, QPay will send to your
                designated bank or card settlement account (“Bank Account”) all
                amounts settled and due to you from your transactions, minus our
                fees as stated in the Fee Schedule, any Reversals, Invalidated
                Payments, Chargebacks, Refunds or other amounts that you owe to
                QPay under this Agreement (“Payout”).
              </li>

              <li className={classes.text_list}>
                Should either Party in good faith have cause to dispute any
                amount appearing on an invoice submitted by the other Party
                pursuant to this Agreement (“Affected Invoice”), the affected
                Party shall, within Forty-Eight (48) hours of receipt of the
                Affected Invoice, notify the other Party in writing, of such
                dispute, specifying the Affected Invoice, the specific amount in
                dispute and alleged reasons or grounds for dispute, failing
                which it will be deemed that the invoice is true and correct.
              </li>

              <li className={classes.text_list}>
                We reserve the right to revise our fees. In the event that we
                revise our fees, we will notify you within twenty-four (24)
                hours of such change.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title}>INTELLECTUAL PROPERTY</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              Unless otherwise stated, QPay and/or its licensors own the
              intellectual property rights and materials on the website subject
              to the license below. All text, formatting (including without
              limitation the arrangement of materials on the QPay website and
              the graphics, animation, tools, commercials, music, video,
              articles, sound, copy, trade names, logos and other materials and
              information on the website are subject to the intellectual
              property rights of QPay and its affiliates and their licensors and
              licensees (collectively the “Content”). We do not grant you any
              right, license, title or interest to any of our intellectual
              Property rights which you may or may not have access to. These
              Content may not be copied, reverse engineered, decompiled,
              disassembles, modified or reposted to other websites. Nothing on
              the QPay site should be construed as granting by implication or
              otherwise, any license or right to use any Trademark displayed on
              the QPay website without the written permission of QPay or such
              third party that may own the Trademark. You agree to take such
              actions including any legal or official document or other
              documents that may be needed to further affirm our intellectual
              property rights.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              CONFIDENTIAL INFORMATION
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                The parties acknowledge that in the performance of their duties
                under this Agreement, either party may communicate to the other
                (or its designees) certain confidential and proprietary
                information, including without limitation information concerning
                each party’s services, know-how, technology, techniques, or
                business or marketing plans (collectively, the “Confidential
                Information”) all of which are confidential and proprietary to,
                and trade secrets of, the disclosing party. Confidential
                Information does not include information that: (i) is public
                knowledge at the time of disclosure by the disclosing party;
                (ii) becomes public knowledge or known to the receiving party
                after disclosure by the disclosing party other than by breach of
                the receiving party’s obligations under this section or by
                breach of a third party’s confidentiality obligations; (iii) was
                known by the receiving party prior to disclosure by the
                disclosing party other than by breach of a third party’s
                confidentiality obligations, or (iv) is independently developed
                by the receiving party.
              </li>

              <li className={classes.text_list}>
                As a condition to the receipt of the Confidential Information
                from the disclosing party, the receiving party shall: (i) not
                disclose in any manner, directly or indirectly, to any third
                party any portion of the disclosing party’s Confidential
                Information; (ii) not use the disclosing party’s Confidential
                Information in any fashion except to perform its duties under
                this Agreement or with the disclosing party’s express prior
                written consent; (iii) disclose the disclosing party’s
                Confidential Information, in whole or in part, only to employees
                and agents who need to have access thereto for the receiving
                party’s internal business purposes; (iv) take all necessary
                steps to ensure that its employees and agents are informed of
                and comply with the confidentiality restrictions contained in
                this Agreement; and (v) take all necessary precautions to
                protect the confidentiality of the Confidential Information
                received hereunder and exercise at least the same degree of care
                in safeguarding the Confidential Information as it would with
                its own confidential information, and in no event shall apply
                less than a reasonable standard of care to prevent disclosure.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title}>DISCLAIMERS</p>
            <p
              className={classes.body_text}
              style={{ marginTop: 12, textTransform: "lowercase" }}
            >
              qPay WILL ALWAYS ENSURE THAT THE WEBSITE IS AVAILABLE AT ALL TIMES
              AND BUG-FREE. HOWEVER, IT IS USED AT YOUR OWN RISK.
              <br />
              <br /> OUR WEBSITE AND SERVICES ARE PROVIDED “AS IS” WITHOUT ANY
              EXPRESS, IMPLIED AND/OR STATUTORY WARRANTIES (INCLUDING, BUT NOT
              LIMITED TO, ANY IMPLIED OR STATUTORY WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, TITLE,
              AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS). WITHOUT
              LIMITING THE GENERALITY OF THE FOREGOING, QPay MAKES NO WARRANTY
              THAT OUR WEBSITE AND SERVICES WILL MEET YOUR REQUIREMENTS OR THAT
              OUR WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU
              THROUGH OUR WEBSITE OR FROM QPay, ITS PARENTS, SUBSIDIARIES, OR
              OTHER AFFILIATED COMPANIES, OR ITS OR THEIR SUPPLIERS (OR THE
              RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS OF ANY SUCH
              ENTITIES) (COLLECTIVELY, "QPay PARTIES") SHALL CREATE ANY
              WARRANTY. ###
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>LIMITATION OF LIABILITY</p>
            <p
              className={classes.body_text}
              style={{ marginTop: 12, textTransform: "lowercase" }}
            >
              YOUR USE OF QPay’S SITE AND SERVICES IS AT YOUR OWN RISK. YOU
              AGREE TO THE LIMITATION LIABILITY CLAUSE TO THE MAXIMUM EXTENT
              PERMITTED BY APPLICABLE LAW: QPay WILL IN NO WAY BE LIABLE FOR ANY
              DIRECT, INDIRECT, INCIDENTAL PUNITIVE, CONSEQUENTIAL, SPECIAL OR
              EXEMPLARY DAMAGES OR ANY DAMAGES INCLUDING DAMAGES RESULTING FROM
              REVENUE LOSS, PROFIT LOSS, USE, DATA, GOODWILL, BUSINESS
              INTERRUPTION OR ANY OTHER INTANGIBLE LOSSES (WHETHER QPay HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR NOT) ARISING OUT OF
              AZA TECHNOLOGY’S WEBSITE OR SERVICES (INCLUDING, WITHOUT
              LIMITATION TO INABILITY TO USE OR ARISING FROM THE RESULT OF USE
              OF QPay’S WEBSITE OR SERVICES) WHETHER SUCH DAMAGES ARE BASED ON
              WARRANTY, TORT, CONTRACT, STATUTE OR ANY OTHER LEGAL THEORY.
              <br />
              <br /> SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF CERTAIN
              WARRANTIES OR LIMITATIONS ON THE SCOPE AND DURATION OF SUCH
              WARRANTIES, SO THE ABOVE DISCLAIMERS MAY NOT APPLY TO YOU IN THEIR
              ENTIRETIES, BUT WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY
              APPLICABLE LAW.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>KNOW YOUR CUSTOMER</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              For businesses, you agree that you are solely responsible for
              verifying your customers' identities, ensuring that they are
              authorised to carry out the transactions on your platform, and
              determining their eligibility to purchase your products and
              services.
              <br />
              <br /> You are also required to maintain information and proof of
              service or product delivery to your customer. Where a dispute
              occurs needing resolution, you may be required to provide QPay
              with these.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              TERMINATION
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                You may terminate this Agreement by closing your QPay Account.
              </li>

              <li className={classes.text_list}>
                We may suspend your QPay Account and your access to QPay’s
                services and any funds, or terminate this Agreement, If;
              </li>

              <li className={classes.text_list}>
                You do not comply with or breach any of the provisions of this
                Agreement;
              </li>

              <li className={classes.text_list}>
                We are required to do so by law
              </li>

              <li className={classes.text_list}>
                We are directed by a Card Network or issuing financial
                institution; or
              </li>

              <li className={classes.text_list}>
                Where a suspicious or fraudulent transaction occurs
              </li>

              <li className={classes.text_list}>
                QPay may take further actions it deems appropriate to deal with
                the breach, which may include, suspending your access to the
                website, prohibiting you from accessing the website, blocking
                computers using your IP address from accessing the website,
                contacting your internet service provider to request that they
                block your access to the website and/or bringing court
                proceedings against you.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              TERMINATION
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              You may close your QPay account at any time by;
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                Login to your account on the mobile app
              </li>

              <li className={classes.text_list}>Navigate to More</li>

              <li className={classes.text_list}>
                Select 'Delete your account'
              </li>

              <li className={classes.text_list}>
                Agree to the terms of service
              </li>

              <li className={classes.text_list}>
                Tap the 'Continue with account deletion' button
              </li>

              <li className={classes.text_list}>
                Enter reason for deleting account & account password
              </li>

              <li className={classes.text_list}>
                Tap the 'Delete account' button
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title}>PENDING PAYMENTS</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              If there are any pending transactions relating to your QPay
              Account when you initiate account deletion, your QPay Account will
              be closed promptly after such transactions are completed.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              REMAINING BALANCES
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              Before closing your account, you should empty your currency
              balances. Unused balances in your QPay account may be lost, so
              ensure to use or remove all the funds in your account. QPay will
              not be liable for any losses that may occur due to failure to
              remove all funds in your account. To empty your balances, you
              should;
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                Login to your account on the mobile app
              </li>

              <li className={classes.text_list}>
                {" "}
                On the homepage, select the currency you wish to withdraw funds
                from
              </li>

              <li className={classes.text_list}>Tap the 'Withdraw' button</li>

              <li className={classes.text_list}>
                Select 'Withdraw to a saved recipient' or 'Withdraw to another
                account'
              </li>

              <li className={classes.text_list}>
                Fill required fields on the withdrawal form
              </li>

              <li className={classes.text_list}>Tap the 'Continue' button</li>

              <li className={classes.text_list}>
                Review your transaction and tap the 'Finish' button
              </li>
            </ul>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              {" "}
              You’ll need to do this for each currency you have money in. Then
              you can close the account. As a regulated financial institution,
              QPay is obligated to retain some of your data for purposes such as
              security, fraud, accounting, reconciliation, anti-money laundering
              and reporting purposes.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              DISPUTE RESOLUTION
            </p>
            <ul className={classes.body_text}>
              <li className={classes.text_list}>
                If a dispute of any kind whatsoever arises between the Parties
                in connection with or arising out of the execution of this
                Agreement, including but not limited to any dispute as to
                opinion, instruction, determination, assessment, estimate,
                valuation, certification or invoice submitted by a Party, or in
                connection with this Agreement construction, validity,
                interpretation, enforceability of this Agreement shall be
                finally settled pursuant to the dispute resolution process
                described in this clause.
              </li>

              <li className={classes.text_list}>
                The Parties shall use their best endeavours to settle any
                dispute or difference of opinion between them, arising from or
                in connection with this Agreement amicably through mutual
                discussion and negotiation pursuant to this clause.
              </li>

              <li className={classes.text_list}>
                {" "}
                If the Parties are unable to settle the dispute as indicated
                above within 15 (fifteen) Business Days, the dispute shall be
                referred to Mediation by the legal representative of either of
                the Parties. The parties will choose a mutually acceptable
                mediator.
              </li>

              <li className={classes.text_list}>
                The findings of the Mediator and subsequent award/Agreement
                shall be binding on both parties. Each Party shall bear its
                respective costs in connection with the Mediation.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title}>SEVERABLITY</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              The invalidity, illegality or unenforceability of any of the
              provisions of this Agreement shall not affect the validity,
              legality and enforceability of the remaining provisions of this
              Agreement.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>ASSIGNMENT</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              You hereby agree that we may assign, transfer, sub-contract or
              otherwise deal with our rights and/or obligations under these
              terms and conditions.
              <br />
              <br /> Without our prior written consent, you may not assign,
              transfer, sub-contract, or otherwise deal with any of your rights
              and/or obligations under these terms and conditions.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>
              UPDATES, MODIFICATION & ADJUSTMENTS
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              QPay reserves the right to change, revise or modify these Terms
              from time to time by updating this page. The changes will not be
              retroactive, and the most current version of the Terms will always
              be on this page and will continue to govern our relationship with
              you. We will also try to notify you of any material changes which
              could be done via the email associated with your account or
              service notification. By continuing to use our services after the
              changes become effective, you agree to be bound by the revised
              Terms.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>DATA PROTECTION</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              With respect to all the Personal Information belonging to, and/or
              processed in connection with QPay or this website, such Personal
              Information at all times comply with all Data Protection Laws in
              the territory, in all respect and in particular the General Data
              Protection Regulation and all applicable data protection
              regulation in force. QPay maintains a Privacy Policy which
              provides an overview of the Personal Information we collect about
              you or that you provide to us and how we store and use the
              information provided by you in line with applicable Data
              protection legislations. By using QPay’s Services, you consent to
              such processing and you commit to providing accurate information.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>GOVERNING LAW</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              The formation, existence, construction, performance, validity and
              all aspects whatsoever of this Terms of Service or of any term of
              this Agreement will be governed by the Laws of the Federal
              Republic of Nigeria.
            </p>
          </div>
        </div>
        <GetStarted />
        <FAQ />
        <AdsBox />
        <Footer />
      </div>
    </div>
  );
};

export default TermsAndConditions;
