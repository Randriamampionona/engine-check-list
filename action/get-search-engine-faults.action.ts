"use server";

import { ENGINE_FAULTS_LIST } from "@/app/data/engine-faults";

export async function searchEngineFaults(
  searchTerm: string,
  lang: Lang
): Promise<
  (EngineFault & {
    description: string;
    management: string[];
  })[]
> {
  const blinkValue = Number(searchTerm);

  if (Number.isNaN(blinkValue)) {
    return [];
  }

  return ENGINE_FAULTS_LIST.filter((fault) => fault.Blinks === blinkValue).map(
    (fault) => ({
      ...fault,
      description: fault.FaultDescription[lang],
      management: fault.FaultManagement[lang],
    })
  );
}
