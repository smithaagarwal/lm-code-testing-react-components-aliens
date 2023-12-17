import ErrorMessage from "./error_message";
export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: string) => void;
  validate: (name: string) => string[];
}
const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => (
  <>
    <div className="form__field ">
      <label
        className="form__text form__label"
        htmlFor="  planetName,
"
      >
        Planet Name
      </label>
      <input
        className="form__input"
        id="  planetName,
      "
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
      <ErrorMessage messages={validate(planetName)} />
    </div>
  </>
);

export default PlanetName;
