type ModsType = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: ModsType = {},
  additional: string[] = []
): string {
  const className = [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ];

  return className.join(" ");
}
