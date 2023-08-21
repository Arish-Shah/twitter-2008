interface SwitchProps {
  condition: boolean;
  children: React.ReactNode;
}

export function Switch({ condition, children }: SwitchProps) {
  if (!condition) return null;
  return children;
}
