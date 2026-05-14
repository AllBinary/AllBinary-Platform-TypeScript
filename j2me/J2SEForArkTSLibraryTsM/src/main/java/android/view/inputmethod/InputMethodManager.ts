import { IBinder } from "../../os/IBinder";

/*actual*/ export class InputMethodManager
{
  static SHOW_FORCED: number;
  
  hideSoftInputFromWindow(token: IBinder, arg1: number);
  hideSoftInputFromWindow(token: IBinder, arg1: number, arg2: number)
  hideSoftInputFromWindow(token: IBinder, arg1: number, arg2?: number) {
    throw new Error('Method not implemented.');
  }

}

