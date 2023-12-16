interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: string) => void;
}
const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => (
  <>
    <div className="form__field ">
      <label className="form__text form__label" htmlFor="reasonForSparing">
        Reason for sparing
      </label>
      <textarea
        className=""
        id="reasonForSparing"
        name="reasonForSparing"
        value={reasonForSparing}
        rows={5}
        cols={50}
        onChange={(e) => onChangeReasonForSparing(e.target.value)}
      />
    </div>
  </>
);

export default ReasonForSparing;
