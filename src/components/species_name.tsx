export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (e: string) => void;
}
const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => (
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
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      />
    </div>
  </>
);

export default SpeciesName;
