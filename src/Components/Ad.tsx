import "./Ad.css";

interface Props {
  flavor: string;
  size: number;
  darkMode: boolean;
}

const Ad = ({ flavor, size, darkMode }: Props) => {
  return (
    <div className={`Ad${darkMode ? " dark" : ""}`}>
      <p>Vote For</p>
      <p className="fancy" style={{ fontSize: size + "px" }}>
        {flavor}
      </p>
    </div>
  );
};

export default Ad;
