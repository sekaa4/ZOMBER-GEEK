import { FC } from "react";
import ConstantsString from "../../models/ConstantsString";

interface SimpleTextProps {
  text?: string;
}

const SimpleText: FC<SimpleTextProps> = ({
  text = ConstantsString.EMPTY_TEXT,
}) => {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}

export default SimpleText;
