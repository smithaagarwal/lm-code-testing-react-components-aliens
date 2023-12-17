import ErrorMessage from "./error_message";
export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (e: string) => void;
  validate: (name: string) => string[];
}
const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  validate,
}) => {
  //const errorMessage:string[] = validate(speciesName);
  return (
    <>
      <div className="form__field">
        <label className="form__text form__label" htmlFor="speciesName">
          Species Name
        </label>
        <input
          className="form__input"
          id="speciesName"
          type="text"
          name="speciesName"
          value={speciesName}
          onChange={(e) => {
            onChangeSpeciesName(e.target.value);
          }}
        />
        <ErrorMessage messages={validate(speciesName)} />
      </div>
    </>
  );
};

export default SpeciesName;
