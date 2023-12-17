export interface NumberOfBeingsProps {
  numberOfBeings: number | undefined;
  onChangeNumberOfBeings: (e: number | undefined) => void;
}
const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
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
    </div>
  </>
);

export default NumberOfBeings;
