import { LabelFormGroup } from "./form-group";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <LabelFormGroup>
      <label htmlFor={htmlFor}>{children}</label>
    </LabelFormGroup>
  );
}

interface SubtextProps {
  children?: React.ReactNode;
}

export function Subtext({ children }: SubtextProps) {
  return <span className="text-[.97em] text-tw-subtext">{children}</span>;
}
