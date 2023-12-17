import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import WhatIsTwoPlusTwo from "./what_is_two_plus_two";
import ReasonForSparing from "./reason_for_sparing";
import validateSpeciesName from "./validate/validate_species_name";
import validatePlanetName from "./validate/validate_planet_name";
import validateNumberOfBeings from "./validate/validate_number_of_beings";
import validateMathsQuestion from "./validate/validate_maths_question";
import validateReasonForSparing from "./validate/validateReasonForSparing";

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
          validate={validateSpeciesName}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
          validate={validatePlanetName}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
          validate={validateNumberOfBeings}
        />
        <WhatIsTwoPlusTwo
          whatIsTwoPlusTwo={whatIsTwoPlusTwo}
          onChangeWhatIsTwoPlusTwo={(value) => setWhatIsTwoPlusTwo(value)}
          validate={validateMathsQuestion}
        />
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(value) => setReasonForSparing(value)}
          validate={validateReasonForSparing}
        />
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default W12MForm;
