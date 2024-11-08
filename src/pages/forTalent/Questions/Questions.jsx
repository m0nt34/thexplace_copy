import React from "react";
import style from "../../../assets/styles/pages/forTalent/forTalent.module.scss";
import Answear from "./Answear";
import GlowEffect from "../../../components/GlowEffect";
const Questions = () => {
  return (
    <GlowEffect className={style.questions} maxGlow={195}>
      <h1>Frequently Asked Questions</h1>
      <div className={style.right}>
        <Answear
          question="Why is TheXPlace portfolio better?"
          answear="TheXPlace portfolio is the ultimate tool for showcasing your talents in the video games industry. Our intuitive taxonomy makes it easy to tag your work with relevant skills, tools, and genres so that you can stand out and get hired. We also go beyond the written word by prompting you with a series of questions to create videos that make your communication skills and personality shine."
        />
        <Answear
          question="What type of jobs can I find on TheXPlace? "
          answear="From AAA developers to budding indie game studios, TheXPlace features a wide range of job opportunities to fit your career goals. Full-time, part-time, project-based, fractional, internships, you name it – our search filters can find remote, hybrid and in-office opportunities tailored to your needs."
        />
        <Answear
          question="I’m just here to network, how can I join the events?"
          answear="Events on TheXPlace are a new way to bring our community together safely. We believe that everyone should have access to opportunities to learn, connect, and grow in their career. Events are open to all members of our community regardless of age, gender, race, or experience level. All you need to do is complete your basic profile on TheXPlace, and breeze through ID verification. And because all attendees are already verified, this is a safe space for all participants."
        />
        <Answear
          question="Why does TheXPlace vet members (talent and studios)?"
          answear={
            <>
              Creating a safe space for all to learn, connect, and grow is
              paramount at TheXPlace. We understand that many existing talent
              recruitment systems are rife with fake identities, false
              accomplishments, misrepresented opportunities, plagiarism, and
              scams -- that’s because there is no validation and oversight.
              <br />
              These deceptions waste considerable time and money for both talent
              and studios. That’s why we vet every professional and every
              company – so you don’t have to!
              <br />
              Our vetting process not only validates members’ identities but
              also uses supporting data to validate the authenticity of our
              members, their experience, and credentials.
              <br />
              Ready to join our trusted community?
            </>
          }
        />
        <Answear
          question="How do I get paid?"
          answear={
            <>
              Our goal is to ensure a smooth experience for payments and
              transfers for all our professionals across the globe.
              Professionals are compensated in U.S. dollars through an
              intermediary platform which provides extremely fast and smooth
              payouts.
              <br />
              This platform also allows you to withdraw your payments through
              many supported payment options including bank transfer to your
              local bank, TransferWise/Wise, Payoneer, etc. <br />
              Got more questions? support@thexplace.ai
            </>
          }
        />
      </div>
    </GlowEffect>
  );
};

export default Questions;
