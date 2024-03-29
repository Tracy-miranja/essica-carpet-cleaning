import "../About/about.css";
import CarpetCleaningReview from "../rate";

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <div className="about">
          <div className="about-content">
            <h1>ABOUT</h1>
          </div>
        </div>
      </div>
      <div className="about-sectioA">
        <div className="about-contentA">
          <h2 style={{ color: "#F0520B" }}>About us</h2>
          <p>
            Welcome to Essica Carpet Cleaning Company, where excellence meets
            cleanliness. With a passion for pristine spaces and a commitment to
            customer satisfaction, our mission at Essica is to redefine the
            standards of professional carpet cleaning. We aim to provide
            unparalleled services by combining cutting-edge techniques,
            eco-friendly practices, and a personalized touch to every project.
            Our vision is to be the preferred choice for those seeking not only
            spotless carpets but also a healthier and greener living
            environment. At Essica, we believe in transforming spaces with
            integrity, expertise, and a dedication to customer well-being.
            Choose Essica for a cleaning experience that aligns with our mission
            and embodies our vision, ensuring a lasting impact on your home or
            business
          </p>
          <h3 style={{ color: "blue" }}>Exceptional Cleaning Services</h3>
          <p>
            At Essica Carpet Cleaning Company, we are dedicated to upholding the
            industry highest standards by delivering quality services to each
            valued customer. Our advanced cleaning products are meticulously
            applied, and our services are executed by trustworthy and friendly
            professionals. We approach our work with personal respect for every
            customer, deeply valuing your satisfaction as we strive to transform
            your carpets into pristine and refreshed spaces.
          </p>
        </div>
        <div className="about-contentB"></div>
      </div>
      <div className="testimonials">
        <div className="testimonialsClients">
          <h1>CARPET CLEANING PROCESS</h1>

          <div className="cllientfeed-section">
            <div className="cllientfeed">
              <h3>Assessment:</h3>
              <p>
                Our thorough assessment process is the cornerstone of our
                service. We meticulously examine the condition of your carpets,
                paying close attention to any stains, signs of wear, or specific
                cleaning requirements unique to your space. This detailed
                analysis allows us to tailor our cleaning approach, ensuring a
                precise and effective treatment that addresses your carpets
                individual needs.
              </p>
            </div>
            <div className="cllientfeed">
              <h3>Pre-Treatment</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
            <div className="cllientfeed">
              <h3>Cleaning</h3>
              <p>
                We use state-of-the-art equipment to deep clean your carpets,
                removing dirt, allergens, and odors. Drying: Our quick-drying
                methods ensure your carpets are ready for use as soon as
                possible. Final Inspection: We conduct a final inspection to
                ensure your satisfaction with our service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Review">
        <CarpetCleaningReview />
      </div>
    </div>
  );
};

export default About;
