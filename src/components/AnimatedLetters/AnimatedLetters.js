import "./AnimatedLetters.scss";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {
      strArray.map((character, i) => (
          <span key={character + i} className={`${letterClass} _${i + index}`}>
            {character}
          </span>
      ))
      }
    </span>
  );
};

export default AnimatedLetters;
