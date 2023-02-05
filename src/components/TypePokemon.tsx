import React from "react";
// import styles from "../../styles/Type.module.scss";

interface Props {
  props: PropsItems;
}

interface PropsItems {
  index: number;
  type: string;
}

const TypePokemon: React.FC<Props> = ({ props }) => {
  const { index, type } = props;

  return (
    <div
      key={index}
      className={`
        ${type}
        px-3 text-base text-white rounded-md mr-2 capitalize`}
    >
      {type}
    </div>
  );
};

export default TypePokemon;
