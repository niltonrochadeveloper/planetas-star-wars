"use client";

import {
  Cards,
  Content,
  Footer,
  Form,
  Image,
  Section,
} from "@/components/core";
import useHome from "@/hooks/useHome";

const Home = () => {
  const {
    methods,
    errors,
    setValueChange,
    planet,
    autoFilter,
    filterName,
    setAutoFilter,
    setFilterName,
    setPlanet,
    valueChange,
  } = useHome();

  return (
    <Section.SectionHome>
      {errors.name?.message && (
        <Form.ErrorsMessage>{errors.name.message}</Form.ErrorsMessage>
      )}
      <Content>
        <Image
          src={"/images/home/title.png"}
          width={260}
          height={180.41}
          alt="banner left home"
        />
        {!planet ? (
          <Cards.InputPlanet
            methods={methods}
            setPlanet={setPlanet}
            setValueChange={setValueChange}
            autoFilter={autoFilter}
            setAutoFilter={setAutoFilter}
            filterName={filterName}
            setFilterName={setFilterName}
          />
        ) : (
          <Cards.PlanetSelected planet={planet} setPlanet={setPlanet} />
        )}
      </Content>
      <Footer />
    </Section.SectionHome>
  );
};

export default Home;
