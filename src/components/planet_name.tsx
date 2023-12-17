export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: string) => void;
}
const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
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
    </div>
  </>
);

export default PlanetName;
