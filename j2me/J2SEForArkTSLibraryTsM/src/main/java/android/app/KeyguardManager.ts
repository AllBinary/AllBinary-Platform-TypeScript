import { KeyguardLock } from "./KeyguardManager/KeyguardLock";

/*actual*/ export class KeyguardManager
{
  inKeyguardRestrictedInputMode(): boolean {
    throw new Error('Method not implemented.');
  }
  newKeyguardLock(name: string): KeyguardLock {
    throw new Error('Method not implemented.');
  }
    
}