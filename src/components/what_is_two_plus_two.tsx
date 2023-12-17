import ErrorMessage from "./error_message";
export interface WhatIsTwoPlusTwoProps {
  whatIsTwoPlusTwo: string;
  onChangeWhatIsTwoPlusTwo: (e: string) => void;
  validate: (name: string) => string[];
}
const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({
  whatIsTwoPlusTwo,
  onChangeWhatIsTwoPlusTwo,
  validate,
}) => (
  <>
    <div className="form__field">
      <label className="form__text form__label" htmlFor="whatIsTwoPlusTwo">
        What is 2 + 2
      </label>
      <select
        id="whatIsTwoPlusTwo"
        name="whatIsTwoPlusTwo"
        value={whatIsTwoPlusTwo}
        onChange={(e) => onChangeWhatIsTwoPlusTwo(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="Not4"> Not 4 </option>
        <option value="4"> 4 </option>
      </select>
      <ErrorMessage messages={validate(whatIsTwoPlusTwo)} />
    </div>
  </>
);

export default WhatIsTwoPlusTwo;
