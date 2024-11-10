import React from "react";
import style from "../../assets/styles/pages/forHiring/ForHiring.module.scss";
import ImgCarousel from "../../components/ImgCarousel";
import { Header } from "./Headers";
import Brands from "../../components/Brands";
import SmallCard from "../../components/SmallCard";
import Card from "../../components/Card";
import VideoBox from "./VideoBox";
const ForHiring = () => {
  return (
    <div className={style.forHiring_cont}>
      <div className={style.inside_cont}>
        <ImgCarousel
          imgs={[
            "https://thexplace.ai/wp-content/uploads/2021/12/ftsa1.jpg",
            "https://thexplace.ai/wp-content/uploads/2021/12/ftsa2.jpg",
            "https://thexplace.ai/wp-content/uploads/2021/12/ftsa3.jpg",
            "https://thexplace.ai/wp-content/uploads/2021/12/ftsa4.jpg",
            "https://thexplace.ai/wp-content/uploads/2021/12/ftsa5.jpg",
            "https://thexplace.ai/wp-content/uploads/2021/12/ftsa6.jpg",
          ]}
          shadows={{
            active: false,
          }}
          showBottom={false}
          h1="Hire the top"
          h2="video games professionals"
          p1="From full-time and fractional to project-based and more,"
          p2="we give you the details that matter, to find the best fit"
          p3="for your needs and budget"
        />
        <div>
          <Header
            className={style.header1}
            title="Honored to work with the industry’s best companies"
          />
          <Brands />
        </div>
        <div>
          <Header
            className={style.header2}
            title="TheXPlace Difference"
            desc="Staffing redefined to elevate your game"
          />
          <div className={style.small_cards}>
            <div className={style.top}>
              <SmallCard
                img="https://thexplace.ai/wp-content/uploads/2024/09/Feature-icon.png"
                title="Find the perfect fit"
                text="Search for the perfect mix in 20+ gaming-specific disciplines and skill tags, and experience how meaningful portfolio details allow you to hire with confidence"
              />
              <SmallCard
                img="https://thexplace.ai/wp-content/uploads/2024/09/Feature-icon-5.png"
                title="Stretch your budget"
                text="Skip hefty markups and put the money back in your game. Pick the contracting option to fit your dynamic staffing needs."
              />
              <SmallCard
                img="https://thexplace.ai/wp-content/uploads/2024/09/Feature-icon-4.png"
                title="Hire faster"
                text="Scale and streamline your game dev team quickly with our elastic talent mode"
              />
            </div>
            <div className={style.bottom}>
              <SmallCard
                img="https://thexplace.ai/wp-content/uploads/2024/09/Feature-icon-1.png"
                title="Credibility at your fingertips"
                text="Access our vetted global talent pool with confidence, knowing identity and work history are verified and trusted."
              />
              <SmallCard
                img="https://thexplace.ai/wp-content/uploads/2024/09/Feature-icon-3.png"
                title="Reduce hiring bias"
                text="Bias-reduction tools level the playing field to ensure the best talent doesn’t get overlooke"
              />
              <SmallCard
                img="https://thexplace.ai/wp-content/uploads/2024/09/Feature-icon-2.png"
                title="Source and hire globally"
                text="Hire the most qualified candidates, regardless of location."
              />
            </div>
          </div>
        </div>
        <div>
          <Header className={style.header3} title="Get started (it’s easy!)" />
          <div className={style.cards}>
            <Card
              title="1. Post a job"
              text="Utilize our intuitive gaming-specific tagging system to run a specialized search in our global talent pool or craft detailed job descriptions. Highlight your company’s brand, culture, and success to attract top talent worldwide."
              buttonText="Let's do it!"
              img="https://thexplace.ai/wp-content/uploads/2024/03/01-Post-a-job.png"
              reverse={false}
            />
            <Card
              title="2. Find the perfect fit"
              text="Review applications from our network of global top talent. Explore verified portfolio samples, vetted credits, and gain insights into the talent's personality and communication style through their personal videos featuring their body of work discussions."
              buttonText="Let's start!"
              img="https://thexplace.ai/wp-content/uploads/2024/03/02-Find-the-perfect-fit-1.png"
              reverse={true}
            />
            <Card
              title="3. Get to work"
              text="Our contracting, payments and escrow solutions allow you to streamline your back office so you can focus on managing your global workforce and addressing changing production needs"
              buttonText="I'm ready to start!"
              img="https://thexplace.ai/wp-content/uploads/2024/03/03-Get-to-work.png"
              reverse={false}
            />
          </div>
        </div>
        <div>
          <Header
            className={style.header4}
            title="How do you find the perfect fit?"
            desc="The intersection of meaningful details point you to the perfect fit"
          />
          <VideoBox/>
        </div>
      </div>
    </div>
  );
};

export default ForHiring;
