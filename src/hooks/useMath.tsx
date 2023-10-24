import { createContext, useContext, useEffect, useState } from "react";
import { MathFormula } from "../types";
import { Functions } from "../assets/functions";
import { all, create } from 'mathjs';

const mathContext = createContext<{
  currentFunction: MathFormula | undefined;
  setCurrentFunction: (fn?: MathFormula) => void;
  findById: (fnId: number) => MathFormula | undefined;
  plotButtonText: string;
  compute: (fnId: number) => { xValues: number[], yValues: any[] }
}>(undefined!);

export const ProvideMath = ({children}: { children: React.ReactNode }) => {
  const math = useProvideMath();
  return <mathContext.Provider value={math}>{children}</mathContext.Provider>;
}

export const useMath = () => {
  return useContext(mathContext);
}

const useProvideMath = () => {
  const math = create(all);

  const [currentFunction, setCurrentFunction] = useState<MathFormula | undefined>(Functions.toPlot[0]);
  const [plotText, setPlotText] = useState('Plot function');

  useEffect(() => {
    setPlotText(`Plot ${currentFunction?.shortName || Functions.toPlot[0].shortName}`);
  }, [currentFunction]);

  const findById = (fnId: number) => {
    return Functions.toPlot.find((fn) => fn.id === fnId);
  }


  // COMPUTE REGION
  const INTERVAL_START = -10;
  const INTERVAL_END = 10;
  const INTERVAL_STEP = 0.1;

  let filteredX: number[] = [];
  let filteredY: any[] = [];


  const compute = (fnId: number) => {
    if (filteredX.length > 0) {
      filteredX = [];
      filteredY = [];
    }

    for (let x = INTERVAL_START; x <= INTERVAL_END; x += INTERVAL_STEP) {
      const result = math.evaluate(findById(fnId)!.mathJsFormula, {x, y: 0 - x});

      if (result === Infinity || result === -Infinity || isNaN(result)) {
        filteredX.pop();
        filteredY.pop();
        continue;
      }
      filteredX.push(x);
      filteredY.push(result);
    }

    return {
      xValues: filteredX,
      yValues: filteredY,
    }
  }
  // END REGION

  return {
    currentFunction,
    setCurrentFunction,
    findById,
    plotButtonText: plotText,
    compute,
  };
}
