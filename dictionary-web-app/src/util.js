export const convertFont = (font) => {
  const fonts = {
    Inter: "Sans Serif",
    Lora: "Serif",
    Inconsolata: "Mono",
  };

  // for Lora | Inter | Inconsolata parameter
  if (fonts[font]) {
    return fonts[font];
  }

  // for Sans Serif | Serif | Mono parameter
  return Object.keys(fonts).find((fontName) => {
    return fonts[fontName] === font;
  });
};