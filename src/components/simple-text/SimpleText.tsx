import ConstantsString from "../../models/ConstantsString";

interface SimpleTextProps {
  text?: string;
}

export default function SimpleText({
  text = ConstantsString.EMPTY_TEXT,
}: SimpleTextProps): JSX.Element {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}
