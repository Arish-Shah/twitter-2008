interface FormGroupProps {
  children?: React.ReactNode;
  className?: string;
}

export function InputFormGroup({ children, className = "" }: FormGroupProps) {
  return (
    <div className={`table-cell p-[7px_3px] ${className}`}>{children}</div>
  );
}

export function LabelFormGroup({ children, className = "" }: FormGroupProps) {
  return (
    <div className={`table-cell p-[7px_3px] text-right w-[140px] ${className}`}>
      {children}
    </div>
  );
}
