import { MathFormula } from "../../types";

export namespace Functions {
  export const toPlot: MathFormula[] = [
    {
      name: 'Wacky Wibble',
      shortName: 'WWF',
      formula: '\\sin(x) \\cdot \\cos(y) \\cdot \\sin(x \\cdot y)',
      mathJsFormula: 'sin(x) * cos(y) * sin(x * y)',
      id: 1
    },
    {
      name: 'Funky Frizzle',
      shortName: 'FFF',
      formula: '5 \\cdot \\sin(x) + 2 \\cdot \\cos(2x) + 3 \\cdot \\tan(0.5x) + \\sqrt{|x|} - \\frac{1}{x^2} + \\log_2(3x) - e^x',
      mathJsFormula: '5 * sin(x) + 2 * cos(2x) + 3 * tan(0.5x) + sqrt(abs(x)) - 1 / (x^2) + log(3x, 2) - e^x',
      id: 2
    },
  ];
}
