import {
  themeFromImage,
  Hct,
  TonalPalette,
  hexFromArgb,
} from "@material/material-color-utilities";
import { PaletteColor, TypeBackground, alpha } from "@mui/material";

export const DynamicColor = async (src: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = src;
  const dynamicPalette = await themeFromImage(imageElement);

  const extractHctInstance = (color: TonalPalette) => {
    const { hue, chroma, tone } = color.keyColor;
    return hexFromArgb(Hct.from(hue, chroma, tone).toInt());
  };

  const { primary, secondary } = dynamicPalette!.palettes;
  const { dark, light } = dynamicPalette!.schemes;
  const primaryMain = extractHctInstance(primary);
  const secondaryMain = extractHctInstance(secondary);
  const primaryLight = hexFromArgb(dark.primary);
  const primaryDark = hexFromArgb(light.primary);
  const secondaryLight = hexFromArgb(dark.secondary);
  const secondaryDark = hexFromArgb(light.secondary);

  const primaryColor: PaletteColor = {
    light: primaryLight,
    main: primaryMain,
    dark: primaryDark,
    contrastText: "#ffffff",
  };

  const secondaryColor: PaletteColor = {
    light: secondaryLight,
    main: secondaryMain,
    dark: secondaryDark,
    contrastText: "#ffffff",
  };

  const backgroundColor: TypeBackground = {
    default: alpha(primaryMain, 0.1),
    paper: "#fff",
  };

  return { primaryColor, secondaryColor, backgroundColor };
};

