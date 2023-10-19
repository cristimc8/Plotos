import { createContext, useContext, useEffect, useState } from "react";

export interface MathFormula {
  name: string;
  shortName: string;
  formula: string;
  mathJsFormula: string;
  id: number;
}

const mathContext = createContext<{
  currentFunction: MathFormula | undefined;
  setCurrentFunction: (fn?: MathFormula) => void;
  allFunctions: MathFormula[];
  findById: (fnId: number) => MathFormula | undefined;
  plotButtonText: string;
}>(undefined!);

export const ProvideMath = ({children}: { children: React.ReactNode }) => {
  const math = useProvideMath();
  return <mathContext.Provider value={math}>{children}</mathContext.Provider>;
}

export const useMath = () => {
  return useContext(mathContext);
}

const useProvideMath = () => {
  const allFunctions: MathFormula[] = [
    {
      name: 'Wacky Wibble',
      shortName: 'WWF',
      formula: '\\frac{\\sin(\\sqrt{x^3})}{\\log_2(\\cos(3x + 1))} + \\frac{e^{x^2}}{x + 1} - \\frac{\\sqrt{x}}{1 + \\tan(2x)}',
      mathJsFormula: 'sin(sqrt(x^3)) / log2(cos(3x + 1)) + e^(x^2) / (x + 1) - sqrt(x) / (1 + tan(2x))',
      id: 1
    },
    {
      name: 'Funky Frizzle',
      shortName: 'FFF',
      formula: '\\frac{\\sin^2(4x^2)}{\\log(\\sqrt{x})} + \\frac{e^{\\frac{x^3}{2}}}{\\sqrt{1 + \\cos(5x)}} - \\frac{\\sqrt[3]{x^5}}{\\tan^2(3x)}',
      mathJsFormula: 'sin(4x^2)^2 / log(sqrt(x)) + e^(x^3 / 2) / sqrt(1 + cos(5x)) - (x^5)^(1/3) / tan(3x)^2',
      id: 2
    },
  ];

  const [currentFunction, setCurrentFunction] = useState<MathFormula | undefined>(allFunctions[0]);
  const [plotText, setPlotText] = useState('Plot function');

  useEffect(() => {
    setPlotText(`Plot ${currentFunction?.shortName || allFunctions[0].shortName}`);
  }, [currentFunction]);

  const findById = (fnId: number) => {
    return allFunctions.find((fn) => fn.id === fnId);
  }

  return {
    currentFunction,
    setCurrentFunction,
    allFunctions,
    findById,
    plotButtonText: plotText,
  };
}
