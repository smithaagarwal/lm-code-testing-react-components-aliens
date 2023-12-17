export interface WhatIsTwoPlusTwoProps {
  whatIsTwoPlusTwo: string;
  onChangeWhatIsTwoPlusTwo: (e: string) => void;
}
const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({
  whatIsTwoPlusTwo,
  onChangeWhatIsTwoPlusTwo,
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
        <option value="Not4"> Not 4 </option>
        <option value="4"> 4 </option>
      </select>
    </div>
  </>
);

export default WhatIsTwoPlusTwo;
