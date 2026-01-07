type Lang = "en" | "fr";

type EngineFault = {
  Blinks: number;
  FailureCode: string;
  Priority: number;
  FaultDescription: Record<Lang, string>;
  FaultManagement: Record<Lang, string[]>;
};
