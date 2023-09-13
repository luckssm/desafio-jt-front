export const reviewNoteToText = ({ reviewNote }) => {
  if (reviewNote >= 9) {
    return "Excelente";
  }
  if (reviewNote < 9 && reviewNote >= 8) {
    return "Muito bom";
  }
  if (reviewNote < 8 && reviewNote >= 7) {
    return "Bom";
  }
  if (reviewNote < 7 && reviewNote >= 6) {
    return "Ruim";
  }
  return "Péssimo";
};
