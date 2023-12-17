import ErrorMessage from "./error_message";
export interface NumberOfBeingsProps {
  numberOfBeings: number | undefined;
  onChangeNumberOfBeings: (e: number | undefined) => void;
  validate: (name: number | undefined) => string[];
}
const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
  validate,
}) => (
  <>
    <div className="form__field">
      <label className="form__text form__label" htmlFor="numberOfBeings">
        Number Of Beings
      </label>
      <input
        className="form__input"
        id="numberOfBeings"
        type="text"
        value={numberOfBeings || ""}
        onChange={(e) => onChangeNumberOfBeings(parseInt(e.target.value, 10))}
      />
      <ErrorMessage messages={validate(numberOfBeings)} />
    </div>
  </>
);

export default NumberOfBeings;
