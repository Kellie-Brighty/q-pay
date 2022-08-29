import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/General-components/Header";
import GetStarted from "../components/General-components/GetStarted";
import FAQ from "../components/Home-Components/FAQ";
import AdsBox from "../components/General-components/AdsBox";
import Footer from "../components/General-components/Footer";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 34,
    color: theme.palette.primary.white,
    marginTop: 64,
  },
  text_body: {
    // padding: "0px 120px",
    marginTop: 64,
    maxWidth: 1200,
    margin: "auto",
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

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <p className={classes.title}>Privacy policy</p>

        <div className={classes.text_body}>
          <p className={classes.body_text}>
            QPay’s services are provided by, and you’re contracting with: Aza
            Technology Limited. organized under the laws of the Federal Republic
            of Nigeria, and operating under the laws of the Federal Republic of
            Nigeria with its registered address at 6, Wonderful Hostel,
            Modakeke, Osun State Nigeria.
            <br />
            <br /> This privacy policy (this "Privacy Policy") explains how
            personal information is collected, used, stored, and disclosed by
            QPay. This Privacy Policy applies to our website and all related
            sites, applications, services and tools regardless of how you access
            or use them. This Privacy Policy is part of our Terms of Use.
            <br />
            <br /> By accessing or using our Services, website, software,
            services, applications, products and content offered via QPay
            (collectively, the “Services”), you agree to this Privacy Policy and
            our Terms of Use. This Privacy Policy applies to your use of
            (regardless of means of access) our Services. You may access or use
            our Services through a desktop, laptop, mobile phone, tablet, or
            other consumers electronic device (each, a "Device").
            <br />
            <br />
            This Privacy Policy does not apply to services that are not owned or
            controlled by QPay, including third-party websites and the services
            of other QPay merchants. These other sites may place their own
            cookies, plug-ins or other files on your computer, collect data or
            solicit personal information from you. QPay does not control these
            third-party websites and we are not responsible for their privacy
            statements. Please consult such third parties’ privacy statements.
          </p>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              INFORMATION WE COLLECT
            </p>
            <ul className={classes.body_text}>
              <p className={classes.text_body} style={{ marginTop: 12 }}>
                a. Information You Provide Us
                <br />
                <br /> Information You Provide Us To gain full access to our
                website and services, you must register for a QPay account. When
                you register for an account, we collect Personal Information
                which you voluntarily provide to us. Personal Information refers
                to information relating to an identified person or information
                that can be used to identify you, (e.g. email address, bank
                details, name, telephone number). It may also include anonymous
                information that may be linked to you specifically, (e.g. IP
                address).
                <br />
                <br /> The Personal Information we have about you is directly
                made available to us when you:
              </p>

              <li className={classes.text_list}>Sign up for a QPay Account;</li>
              <li className={classes.text_list}>Use any of our services;</li>
              <li className={classes.text_list}>
                Contact us or our customer support team;
              </li>
              <li className={classes.text_list}>Fill our online forms;</li>

              <p className={classes.text_body} style={{ marginTop: 12 }}>
                {" "}
                b. Personal Information We May Collect About You
                <br />
                <br /> We may collect, use, process, store, or transfer personal
                information such as:
                <br />
                <br /> - Identity Data & Identification Documents: Information
                such as, your full name(s), your government-issued identity
                number, bank verification number (BVN) or NIN and your date of
                birth. Identification documents may include passport or any
                Government-issued identity card, a photograph (if applicable)
                and any other registration information you may provide to prove
                you are eligible to use our services. This data is to enable us
                to verify your identity in order to offer our services to you;
                <br />
                <br />
              </p>

              <li className={classes.text_list}>
                Contact Data: This is data that is needed to reach out to you,
                such as your contact address, email address, telephone number,
                details of the device you use and billing details;
              </li>
              <li className={classes.text_list}>
                Log/Technical information: When you access QPay’s services, our
                servers automatically record information that your browser sends
                whenever you visit a website, links you have clicked on, length
                of visit on certain pages, unique device identifier, log-in
                information, location and other device details.
              </li>
              <li className={classes.text_list}>
                Financial Data: Information, such as personal account number,
                the merchant’s name and location, the date and the total amount
                of transaction, and other information provided by financial
                institutions or merchants when we act on their behalf;
              </li>
              <li className={classes.text_list}>
                Transactional Data: These are information relating to payments
                when you as a merchant (using one or more of our payment
                processing services) or as a customer, are using our products or
                services;
              </li>
              <li className={classes.text_list}>
                Marketing and Communications Data: This includes both a record
                of your decision to subscribe or to withdraw from receiving
                marketing materials from us or from our third parties.
              </li>
              <li className={classes.text_list}>
                Records of your discussions with us, if we contact you and if
                you contact us.
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              HOW WE MAY USE YOUR PERSONAL INFORMATION
            </p>
            <ul className={classes.body_text}>
              <p className={classes.text_body} style={{ marginTop: 12 }}>
                We may use the Personal Information we collect to:
              </p>

              <li className={classes.text_list}>
                {" "}
                Create and manage any accounts you may have with us, verify your
                identity, provide our services, and respond to your inquiries;
              </li>
              <li className={classes.text_list}>
                To administer QPay(i.e. to provide our Services to you) and for
                internal operations, including troubleshooting, data analysis,
                testing, research, statistical and survey purposes (i.e. to
                guarantee QPay’s stability and security) and to solicit your
                feedback
              </li>
              <li className={classes.text_list}>
                Process your payment transactions (including authorization,
                clearing, chargebacks and other related dispute resolution
                activities);
              </li>
              <li className={classes.text_list}>
                {" "}
                Protect against and prevent fraud, unauthorized transactions,
                claims and other liabilities;
              </li>
              <li className={classes.text_list}>
                Provide, administer and communicate with you about products,
                services, offers, programs and promotions of QPay, financial
                institutions, merchants and partners;
              </li>
              <li className={classes.text_list}>
                Evaluate and improve our business, including developing new
                products and services;
              </li>
              <li className={classes.text_list}>
                As necessary to establish, exercise and defend legal rights; As
                may be required by applicable laws and regulations, including
                for compliance with Know Your Customers and risk assessment,
                Anti-Money Laundering, anti-corruption and sanctions screening
                requirements, or as requested by any judicial process, law
                enforcement or governmental agency having or claiming
                jurisdiction over Aza Technology Limited or it’s affiliates;
              </li>
              <li className={classes.text_list}>
                To use data analytics to improve our Website, products or
                services, and user experiences.
              </li>
              <li className={classes.text_list}>
                For other purposes for which we provide specific notice at the
                time of collection.
              </li>
              <li className={classes.text_list}>
                satisfy any applicable law, regulation, legal process or
                enforceable governmental request,
              </li>
              <li className={classes.text_list}>
                enforce applicable Terms of Service, including investigation of
                potential violations thereof
              </li>
              <li className={classes.text_list}>
                detect, prevent, or otherwise address fraud, security or
                technical issues, or
              </li>
              <li className={classes.text_list}>
                protect against imminent harm to the rights, property or safety
                of QPay, its users or the public as required or permitted by
                law.
              </li>
              <li className={classes.text_list}>
                If QPay becomes involved in a merger, acquisition, or any form
                of sale of some or all of its assets, we will provide notice
                before personal information is transferred and become subject to
                a different privacy policy
              </li>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title} style={{ marginTop: 24 }}>
              OTHER RIGHTS TO YOUR PERSONAL INFORMATION WITH US
            </p>
            <ul className={classes.body_text}>
              <p className={classes.text_body} style={{ marginTop: 12 }}>
                Below are the rights you have as a user in relation to your
                Personal Information;
              </p>

              <li className={classes.text_list}>
                Right to request access or copies to your Personal Information
                by contacting us
              </li>
              <li className={classes.text_list}>
                Right to information on their personal information collected and
                stored;
              </li>
              <li className={classes.text_list}>
                Right to objection or request for restriction; this means
                refrain us from doing certain things with your data or restrict
                the extent of our collection or processing of your data.
              </li>
              <li className={classes.text_list}>
                Right to correct or rectify any Personal Information that you
                provide which may be incorrect, out of date or inaccurate.
              </li>
              <li className={classes.text_list}>
                Right to object to the processing of your Personal Information
                for marketing purposes. You have a right to ask us not to
                contact you for marketing purposes by adjusting your
                notification preference on the settings page or by opting out
                via the unsubscribe link in marketing emails we send you.
              </li>
              <li className={classes.text_list}>
                Right to request that QPay erase your Personal Information. You
                have the right to ask us to erase your Personal Information.
                Please note that this is a limited right which applies where the
                data is no longer required, or the processing has no legal
                justification. The exceptions to this right is where the
                applicable law requires us to retain a historical archive or
                where we retain a core set of your personal data to ensure we do
                not inadvertently contact you in future where you object to your
                data being used for marketing purposes.
              </li>
              <li className={classes.text_list}>
                Right to object to decisions being taken by automated means
                which produce legal effects concerning you or similarly
                significantly affect you.
              </li>
              <li className={classes.text_list}>
                Right to request the movement of data from QPay to a third
                party; this is the right to the portability of data;
              </li>
              <p className={classes.text_body} style={{ marginTop: 12 }}>
                {" "}
                The basis of we processing your Personal Information is your
                consent. You also have the choice at any time to withdraw
                consent which you have provided.
                <br />
                <br /> You may decline to provide your personal Information when
                it is requested by QPay, however, certain services or all the
                services may be unavailable to you. You may review your account
                settings and update your Personal Information directly or by
                contacting us.
                <br />
                <br /> If you wish to exercise any of the rights set above,
                please contact us using the contact information provided in the
                Contact Us segment below.
              </p>
            </ul>
          </div>

          <div>
            <p className={classes.text_body_title}>
              SECURITY AND STORAGE OF YOUR PERSONAL INFORMATION
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              We have suitable security measures in place to prevent your
              Personal Information from being accidentally lost or used or
              accessed in an unauthorised way by a third party. When your bank
              account information is transmitted via our Services, it will be
              protected by encryption technology. In addition, we limit access
              to your personal data to those employees, agents, contractors and
              other third parties who have a business need to know. They will
              only process your Personal Information on our instructions. We
              have put in place procedures to deal with any suspected personal
              data breach and will notify you and any applicable regulator of a
              breach where we are legally required to do so.
              <br />
              <br /> Unfortunately, no method of electronic transmission or
              storage via the Internet is 100% secure. Therefore, we cannot
              guarantee absolute security of your Personal Information. You also
              play a role in protecting your Personal Information. Please
              safeguard your password for your QPay account and do not share
              them with others. If we receive instructions using your QPay
              account login information, we will consider that you have
              authorized the instructions. You agree to notify us immediately of
              any unauthorized use of your QPay account or any other breach of
              security. We reserve the right, in our sole discretion, to refuse
              to provide our Services, terminate QPay accounts, and to remove or
              edit content.
              <br />
              <br /> Subject to applicable law, which might, from time to time,
              oblige us to store your Personal Information for a certain period
              of time, we will retain your Personal Information for as long as
              necessary to fulfil the purposes we collected it for, including
              the purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>COOKIES</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              Like many other websites, we use cookies to distinguish you from
              other users and to customize and improve our services. Cookies
              allow our servers to remember IP addresses, date and time of
              visits, monitor web traffic and prevent fraudulent activities.
              <br />
              <br /> Our cookies never store personal or sensitive information;
              they simply hold a unique random reference to you so that once you
              visit the site we can recognize who you are and provide certain
              content to you.
              <br />
              <br /> If your browser or browser add-on permits, you have the
              choice to disable cookies on our website, however this may impact
              your experience using our website. Unless you opt out of Cookies,
              we will assume you consent to the use of Cookies.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>AGE RESTRICTION</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              Our Services are not directed, or intended to be attractive, to
              children under the age of 18. We do not knowingly collect Personal
              Information from children under the age of 18. If you are under
              the Age Limit, please do not use the Services, and do not provide
              any personal data to us.
              <br />
              <br /> If as a parent or guardian, you become aware that your
              child or ward child has provided us with any information without
              your consent, please contact us through the details provided in
              this Privacy Policy.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>OPT-OUT RIGHTS</p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              If you do not wish to receive offers or other notices from us in
              the future, you can "opt out" by contacting us as indicated at the
              end of this Privacy Policy or by following the "unsubscribe"
              instructions in any communication you receive from us. Please be
              aware that if you are a User, you are not able to opt out of
              receiving communications about your QPay account or related
              transactions with us.
            </p>
          </div>

          <div>
            <p className={classes.text_body_title}>
              CHANGE TO OUR PRIVACY POLICY
            </p>
            <p className={classes.body_text} style={{ marginTop: 12 }}>
              Subject to applicable law, we may change, amend or review this
              Privacy Policy at any time to reflect new services or changes in
              our Policy. All changes made will be posted on this page and where
              changes will materially affect you, we will notify you of this
              change by placing a notice online or via mail. If you keep using
              our Services, you consent to all amendments of this Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>

      <GetStarted />
      <FAQ />
      <AdsBox />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
