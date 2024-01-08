import * as React from "react";
import Layout from "../components/layout";
import ImageSection from "../components/image-section";
import LocationSection from "../components/location-section";
import TextSection from "../components/text-section";
import PhotoDetailSection from "../components/photo-detail-section";
import saoCaeatano from "../images/sao-caetano-2.jpg";
import casasNovas from "../images/hotel-casas-novas.jpg";
import ContactsSection from "../components/contacts-section";

const IndexPage = () => {
  return (
    <Layout>
      <ImageSection />
      <TextSection
        id="data"
        title="YOUR WEDDING SHOULD BE UTTERLY UNFORGETTABLE, DEEPLY ROMANTIC, EXQUISITELY BEAUTIFUL AND ENTIRELY YOU...."
        paragraph="Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi non morbi id aliquam. Urna adipiscing odio."
      />
      <PhotoDetailSection
        id="cerimonia"
        imageSrc={saoCaeatano}
        sectionName="Cerimónia"
        title="Santuário São Caetano"
        paragraphText="Cras urna sed purus magna morbi morbi congue suspendisse. Est faucibus hendrerit donec nisi, feugiat suscipit eu, sit. Orci euismod nibh."
        buttonText="Como chegar?"
        buttonUrl="https://maps.app.goo.gl/GtWJ8akYubVRRco8A"
      />

      <TextSection
        title="YOUR WEDDING SHOULD BE UTTERLY UNFORGETTABLE, DEEPLY ROMANTIC, EXQUISITELY BEAUTIFUL AND ENTIRELY YOU...."
        paragraph="Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi non morbi id aliquam. Urna adipiscing odio."
      />

      <PhotoDetailSection
        id="convivio"
        imageSrc={casasNovas}
        sectionName="Convívio"
        title="Casas Novas, Countryside Hotel"
        paragraphText="Cras urna sed purus magna morbi morbi congue suspendisse. Est faucibus hendrerit donec nisi, feugiat suscipit eu, sit. Orci euismod nibh."
        buttonText="Como chegar?"
        buttonUrl="https://maps.app.goo.gl/nCka5uuN7tv9gov9A"
      />

      <ContactsSection id="contactos" />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
