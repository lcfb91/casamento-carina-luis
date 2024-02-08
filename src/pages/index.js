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
          title="Há 24 anos que nos encontrámos, há 8 decidimos caminhar juntos. Agora queremos continuar a fazê-lo, juntos, lado a lado, e para sempre. Queremos celebrar o nosso amor e decidimos que vamos casar!"
          paragraph=""
        />
        <PhotoDetailSection
          id="cerimonia"
          imageSrc={saoCaeatano}
          sectionName="Cerimónia"
          title="Santuário São Caetano"
          paragraphText="O Santuário dista cerca de 13km da cidade de Chaves e foram múltiplas as vezes que fizemos o percurso a pé, desde Chaves, partilhando o caminho um com o outro e com múltiplos caminheiros com quem nos cruzamos. A sua origem remonta à época visigótica e é dedicado a São Caetano. Este é um local aprazível, com árvores frondosas e de grande porte, onde gostamos de ir com frequência, apreciar a beleza da natureza e aproveitar a paz e o silêncio que nele se fazem sentir. São imensas as memórias que dele partilhamos, dos convívios de família, dos almoços que se prolongavam até ao jantar e até dos jogos de futebol lá assistidos. Hoje, convidamos todos a participar na celebração do nosso casamento, neste mesmo espaço, com um significado tão grande para nós e para as nossas famílias."
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
          paragraphText="Situado num local privilegiado com um enquadramento de grande beleza natural sobre uma pequena colina, foi construído a partir da recuperação de um Solar de estilo barroco do século XVIII.  Escolhemos este sitio, por tratar-se de um espaço rural moderno, com envolvência da natureza, e nele esperamos festejar, trocar abraços e muitos sorrisos, brindar e sermos felizes, junto de quem mais gostamos."
          buttonText="Como chegar?"
          buttonUrl="https://maps.app.goo.gl/nCka5uuN7tv9gov9A"
        />

        <ContactsSection id="contactos" />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Carina & Luis</title>;
