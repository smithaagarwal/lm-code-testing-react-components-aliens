import ErrorMessage from "./error_message";
export interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: string) => void;
  validate: (name: string) => string[];
}
const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
  validate,
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
      <ErrorMessage messages={validate(reasonForSparing)} />
    </div>
  </>
);

export default ReasonForSparing;
