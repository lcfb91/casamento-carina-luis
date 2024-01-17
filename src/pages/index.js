import * as React from "react";
import Layout from "../components/layout";
import ImageSection from "../components/image-section";
import ImageSectionParalax from "../components/image-section-paralax";
import TextSection from "../components/text-section";
import PhotoDetailSection from "../components/photo-detail-section";
import saoCaeatano from "../images/sao-caetano-2.jpg";
import casasNovas from "../images/hotel-casas-novas.jpg";
import ContactsSection from "../components/contacts-section";

const IndexPage = () => {
  return (
    <>
      <ImageSectionParalax />
      <Layout>
        <TextSection
          id="data"
          title="Há 24 anos que nos encontrámos, há 8 decidimos caminhar juntos. "
          paragraph="Agora queremos continuar a fazê-lo, juntos, lado a lado, e para sempre. Queremos celebrar o nosso amor e decidimos que vamos casar!"
        />
        <PhotoDetailSection
          id="cerimonia"
          imageSrc={saoCaeatano}
          sectionName="Cerimónia"
          title="Santuário São Caetano"
          paragraphText="O Santuário dista cerca de 13km da cidade de Chaves. A sua origem remonta à época visigótica e é dedicado a São Caetano. Este é um local aprazível, com árvores frondosas e de grande porte, onde se realiza a grande romaria anual flaviense, festa que se realiza no domingo 7 de agosto ou, quando o 7 de agosto não coincide com o domingo, no primeiro domingo a seguir ao 7 de agosto, atraindo inúmeros peregrinos em romagem. A data da festa do São Caetano coincide com a morte deste Santo italiano, natural de Vicenza. O conjunto do Santuário é formado por igreja e capelas, cuja traça arquitetónica tem sofrido grandes alterações ao longo do tempo, com edificações que datam dos Sécs. XVI / XVIII / XIX.."
          buttonText="Como chegar?"
          buttonUrl="https://maps.app.goo.gl/GtWJ8akYubVRRco8A"
        />

        <TextSection
          title="Um sonho que se sonha só é apenas um sonho. Um sonho que se sonha em conjunto é uma realidade"
          paragraph=""
        />

        <PhotoDetailSection
          id="convivio"
          imageSrc={casasNovas}
          sectionName="Convívio"
          title="Casas Novas, Countryside Hotel"
          paragraphText="Situado num local privilegiado com um enquadramento de grande beleza natural sobre uma pequena colina, foi construído a partir da recuperação de um Solar de estilo barroco do século XVIII. Inaugurado em julho de 2008 em Casas Novas - Redondelo, local marcadamente rural de nobres tradições, o Casas Novas Countryside Hotel Spa & Events apresenta-se como um espaço rural moderno, combinando a arquitetura barroca com o estilo contemporâneo."
          buttonText="Como chegar?"
          buttonUrl="https://maps.app.goo.gl/nCka5uuN7tv9gov9A"
        />

        <ContactsSection id="contactos" />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
