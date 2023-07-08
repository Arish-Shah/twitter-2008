interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children }: TypographyProps) {
  return <h1 className="text-[2em] font-bold m-[3px_0_4px]">{children}</h1>;
}

export function H2({ children }: TypographyProps) {
  return <h2 className="text-[1.5em] font-bold m-[3px_0_4px]">{children}</h2>;
}

export function H3({ children }: TypographyProps) {
  return <h3 className="text-[1.17em] font-bold m-[3px_0_4px]">{children}</h3>;
}

export function P({ children, className = "" }: TypographyProps) {
  return <p className={`leading-[1.2] m-[5px_0] ${className}`}>{children}</p>;
}
