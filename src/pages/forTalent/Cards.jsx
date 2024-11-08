import React from "react";
import Card from "../../components/Card";

const Cards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "100%",
      }}
    >
      <Card />
      <Card
        title="Superpower your portfolio"
        text="Gaming is a truly unique and visual industry. TheXPlace gives you a simple yet powerful tool to superpower your portfolio, highlight your work, and show a little of that personality. Your accomplishments, game credits, skills, services, media coverage — it’s all there — and, it’ll get you hired."
        buttonText="Create portfolio"
        img="https://thexplace.ai/wp-content/uploads/2024/02/02-Portfolio-1.png"
        reverse={true}
      />
      <Card
        title="Find your squad"
        text="Whether you’re reconnecting with old friends, or networking to find new ones, TheXPlace is a trusted community where videogame professionals can hang and create together. And with our global events, you’re sure to continue expanding your network (and your knowledge!)"
        buttonText="Join the community"
        img="https://thexplace.ai/wp-content/uploads/2024/02/03-Trusted-network-1.png"
        reverse={false}
      />
      <Card
        title="Earn more"
        text="Game got cancelled? Laid off? Ready to upskill? We’ve all been there. Secure a longer working horizon and the reward of variety, with one click. Line up your jobs pipeline and tap into a variety of income sources. Earn like a boss (on your terms!), eliminate payment stress, and focus on your career knowing you’ll get paid (on time!) with features like Payment Assurance."
        buttonText="I'm up for it!"
        img="https://thexplace.ai/wp-content/uploads/2024/02/04-Earn-More-3.png"
        reverse={true}
      />
      <Card
        title={
          <>
            Love your work <br />
            (we’ll handle the admin)
          </>
        }
        text="Discover the freedom of keeping 100% of what you earn, without the “back office” headache. TheXPlace ensures administrative tasks — like Contracting & Payments — align with industry best practices so you can dedicate your energy to doing what you love: creating exceptional games."
        img="https://thexplace.ai/wp-content/uploads/2024/02/05-Payments-1.png"
        reverse={false}
      />
    </div>
  );
};

export default Cards;
