import type { Theme } from "@/types";

export function createThemeCSS(theme?: Theme) {
  if (!theme) return null;

  return `
    :root {
      --theme: url("${theme.backgroundImage.url}");
      --tile: ${theme.backgroundImage.tile ? "repeat" : "no-repeat"};

      --background: ${theme.designColors.background};
      --text: ${theme.designColors.text};
      --links: ${theme.designColors.links};
      --sidebar: ${theme.designColors.sidebar};
      --sidebar-border: ${theme.designColors.sidebarBorder};
    }
  `;
}
