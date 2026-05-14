
/*actual*/ export class Intent
{
  static FLAG_ACTIVITY_MULTIPLE_TASK: undefined;
  static FLAG_ACTIVITY_NEW_TASK: undefined;
  static ACTION_SEND: any;
  static EXTRA_EMAIL: string;
  static EXTRA_TEXT: string;
  static EXTRA_CC: string;
  static EXTRA_SUBJECT: string;

  setFlags(FLAG_ACTIVITY_NEW_TASK: undefined) {
    throw new Error('Method not implemented.');
  }

  setType(APPLICATION_OCTET_STREAM: string) {
    throw new Error('Method not implemented.');
  }
  
  putExtra(NAME: string, name: string) {
    throw new Error('Method not implemented.');
  }

  getExtras(): import("../os/Bundle").Bundle {
    throw new Error('Method not implemented.');
  }
    
}