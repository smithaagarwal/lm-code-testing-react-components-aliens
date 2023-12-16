import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import WhatIsTwoPlusTwo from "./what_is_two_plus_two";
import ReasonForSparing from "./reason_for_sparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState<number>();
  const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState("");
  const [reasonForSparing, setReasonForSparing] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      speciesName,
      planetName,
      numberOfBeings,
      whatIsTwoPlusTwo,
      reasonForSparing
    );
  };
  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
      <form className="form__container" onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
        />
        <WhatIsTwoPlusTwo
          whatIsTwoPlusTwo={whatIsTwoPlusTwo}
          onChangeWhatIsTwoPlusTwo={(value) => setWhatIsTwoPlusTwo(value)}
        />
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(value) => setReasonForSparing(value)}
        />
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default W12MForm;
