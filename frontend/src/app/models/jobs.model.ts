export interface Job {
    _id: string;
    position: string;
    jobType: string;
    company: string;
    jobLocation: string;
    status: string;
    jobLink:string;
    jobDescription:string;
    isReferral:boolean;
    isRecruiterCall:boolean;
    reminderDate:string;
    createdAt:Date;
    updatedAt:Date;
  }
  