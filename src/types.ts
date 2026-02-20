export type YesNo = 'Yes' | 'No';

export interface AssessmentDetails {
  assessorId: string;
  facilityId: string;
  residentId: string;
  placeOfAssessment: 'RACF' | 'Hospital' | 'Home' | 'Other';
  dateOfAssessment: string;
  startTime: string;
  endTime: string;
}

export interface TechnicalNursingRequirements {
  bariatric: YesNo;
  oxygen: YesNo;
  enteralFeeding: YesNo;
  tracheostomy: YesNo;
  catheter: YesNo;
  stoma: YesNo;
  peritonealDialysis: YesNo;
  dailyInjections: YesNo;
  complexWoundManagement: YesNo;
}

export interface RugAdl {
  bedMobility: 1 | 3 | 4 | 5;
  toileting: 1 | 3 | 4 | 5;
  transfer: 1 | 3 | 4 | 5;
  eating: 1 | 2 | 3;
}

export type AKPSScore = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export interface PalliativeCare {
  enteredForPalliative: YesNo;
  prognosisLessThan3Months: YesNo;
  existingCarePlan: YesNo;
  akpsScore40OrLess: YesNo;
  palliativePhase: 'Stable' | 'Unstable' | 'Deteriorating' | 'Terminal' | null;
  hasMalignancy: YesNo;
}

export interface Frailty {
  fallenInLast12Months: 'No' | 'Yes, once' | 'Yes, more than once';
  fallenInLast4Weeks: YesNo;
  numberOfFallsInLast4Weeks: string;
  lostWeightMoreThan10Percent: YesNo;
  rockwoodScore: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export interface BradenScale {
  sensoryPerception: 1 | 2 | 3 | 4;
  moisture: 1 | 2 | 3 | 4;
  activity: 1 | 2 | 3 | 4;
  mobility: 1 | 2 | 3 | 4;
  nutrition: 1 | 2 | 3 | 4;
  frictionShear: 1 | 2 | 3;
}

export interface DemmiModified {
  bed: {
    bridge: 'unable' | 'able';
    rollOntoSide: 'unable' | 'able';
    lyingToSitting: 'unable' | 'min assist/supervision' | 'independent';
  };
  chair: {
    sitUnsupported: 'unable' | '10 sec';
    sitToStand: 'unable' | 'min assist/supervision' | 'independent';
    sitToStandNoArms: 'unable' | 'able';
  };
  balance: {
    standUnsupported: 'unable' | '10 sec';
    standFeetTogether: 'unable' | '10 sec';
    standOnToes: 'unable' | '10 sec';
    tandemStandEyesClosed: 'unable' | '10 sec';
  };
  walking: {
    distance: 'unable' | '5m' | '10m' | '20m' | '50m';
    independence: 'unable' | 'min assist/supervision' | 'independent with aid' | 'independent without aid';
  };
}

export interface Afm {
  selfCare: {
    eating: number;
    grooming: number;
    bathing: number;
    dressingUpper: number;
    dressingLower: number;
    toileting: number;
  };
  sphincterControl: {
    bladder: number;
    bowel: number;
  };
  transfers: {
    bedChairWheelchair: number;
    toilet: number;
    tubShower: number;
  };
  locomotion: {
    walkWheelchair: number;
  };
  communication: {
    comprehension: number;
    expression: number;
  };
  socialCognition: {
    socialInteraction: number;
    problemSolving: number;
    memory: number;
  };
}

export interface Brua {
  wandering: 1 | 2 | 3 | 4;
  verballyDisruptive: 1 | 2 | 3 | 4;
  physicallyAggressive: 1 | 2 | 3 | 4;
  emotionalDependence: 1 | 2 | 3 | 4;
  dangerToSelfOrOthers: 1 | 2 | 3 | 4;
}

export interface FullAssessment {
  details: AssessmentDetails;
  nursing: TechnicalNursingRequirements;
  rugAdl: RugAdl;
  akps: AKPSScore;
  palliative: PalliativeCare;
  frailty: Frailty;
  braden: BradenScale;
  demmi: DemmiModified;
  afm: Afm;
  brua: Brua;
}
