interface TypographyProps {
  children: React.ReactNode;
}

export function H2({ children }: TypographyProps) {
  return <h2 className="text-[1.5em] font-bold m-[3px_0_4px]">{children}</h2>;
}

export function H3({ children }: TypographyProps) {
  return <h3 className="text-[1.17em] font-bold m-[3px_0_4px]">{children}</h3>;
}

export function P({ children }: TypographyProps) {
  return <p className="leading-[1.2] m-[5px_0]">{children}</p>;
}
