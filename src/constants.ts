import { AKPSScore } from "./types";

export const AKPS_LABELS: Record<AKPSScore, string> = {
  100: "Normal; no complaints; no evidence of disease",
  90: "Able to carry on normal activity; minor sign of symptoms of disease",
  80: "Normal activity with effort; some signs or symptoms of disease",
  70: "Cares for self; unable to carry on normal activity or to do active work",
  60: "Able to care for most needs; but requires occasional assistance",
  50: "Considerable assistance and frequent medical care required",
  40: "In bed more than 50% of the time",
  30: "Almost completely bedfast",
  20: "Totally bedfast and requiring extensive nursing care by professionals and/or family",
  10: "Comatose or barely rousable",
};

export const ROCKWOOD_LABELS: Record<number, { title: string; description: string }> = {
  1: { title: "Very fit", description: "Robust, active, energetic and motivated. Among the fittest for their age." },
  2: { title: "Well", description: "No active disease symptoms but are less fit than category 1. Often seasonally active." },
  3: { title: "Managing well", description: "Medical problems are well controlled, but not regularly active beyond routine walking." },
  4: { title: "Living with very mild frailty", description: "Early transition from complete independence. Often symptoms limit activities." },
  5: { title: "Living with mild frailty", description: "Evident slowing, needs help with high order instrumental ADLs (finances, transport)." },
  6: { title: "Living with moderate frailty", description: "Needs help with all outside activities and keeping house. Inside, problems with stairs." },
  7: { title: "Living with severe frailty", description: "Completely dependent for personal care. Could not recover even from a minor illness." },
  8: { title: "Living with very severe frailty", description: "Completely dependent, approaching the end of life." },
  9: { title: "Terminally ill", description: "Approaching the end of life with life expectancy < 6 months." },
};

export const BRUA_LABELS: Record<number, string> = {
  1: "Extensively (Requires monitoring for recurrence and supervision)",
  2: "Intermittently (Requires monitoring for recurrence and then supervision on less than a daily basis)",
  3: "Occasionally (Requires monitoring but not regular supervision)",
  4: "Not applicable (Does not require monitoring)",
};

export const AFM_LEVELS = [
  { value: 7, label: "7 - Complete independence (timely, safely)", helper: "No Helper" },
  { value: 6, label: "6 - Modified independence (device)", helper: "No Helper" },
  { value: 5, label: "5 - Supervision (subject = 100%+)", helper: "Helper" },
  { value: 4, label: "4 - Minimal assistance (subject = 75%+)", helper: "Helper" },
  { value: 3, label: "3 - Moderate assistance (subject = 50%+)", helper: "Helper" },
  { value: 2, label: "2 - Maximal assistance (subject = 25%+)", helper: "Helper" },
  { value: 1, label: "1 - Total assistance (subject = < 25%)", helper: "Helper" },
];

export const AN_ACC_CLASSES: Record<number, { title: string; rate: number; nwau: number }> = {
  1: { title: "Admit for palliative care", rate: 215.82, nwau: 0.73 },
  2: { title: "Independent without compounding factors", rate: 62.08, nwau: 0.21 },
  3: { title: "Independent with compounding factors", rate: 118.26, nwau: 0.40 },
  4: { title: "Assisted mobility, high cognition, without compounding factors", rate: 85.74, nwau: 0.29 },
  5: { title: "Assisted mobility, high cognition, with compounding factors", rate: 127.13, nwau: 0.43 },
  6: { title: "Assisted mobility, medium cognition, without compounding factors", rate: 115.30, nwau: 0.39 },
  7: { title: "Assisted mobility, medium cognition, with compounding factors", rate: 159.65, nwau: 0.54 },
  8: { title: "Assisted mobility, low cognition", rate: 177.38, nwau: 0.60 },
  9: { title: "Not mobile, higher function, without compounding factors", rate: 156.69, nwau: 0.53 },
  10: { title: "Not mobile, higher function, with compounding factors", rate: 174.43, nwau: 0.59 },
  11: { title: "Not mobile, lower function, lower pressure sore risk", rate: 201.04, nwau: 0.68 },
  12: { title: "Not mobile, lower function, higher pressure sore risk, without compounding factors", rate: 195.12, nwau: 0.66 },
  13: { title: "Not mobile, lower function, higher pressure sore risk, with compounding factors", rate: 215.82, nwau: 0.73 },
};

export const RESPITE_CLASSES: Record<number, { title: string; rate: number; nwau: number }> = {
  101: { title: "Independent mobility", rate: 119.73, nwau: 0.405 },
  102: { title: "Assisted mobility", rate: 169.70, nwau: 0.574 },
  103: { title: "Not mobile", rate: 211.09, nwau: 0.714 },
};
