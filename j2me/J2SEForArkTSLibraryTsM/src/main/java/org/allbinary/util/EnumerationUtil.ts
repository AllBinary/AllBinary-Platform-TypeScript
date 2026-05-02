import { Enumeration } from "../../../java/util/Enumeration.js";

export class EnumerationUtil {

  private static readonly instance: EnumerationUtil = new EnumerationUtil();

  /*actual*/ public static getInstance(): EnumerationUtil{

    return EnumerationUtil.instance;

  }

  result: IteratorResult<any, any>;

  public hasMoreElements(enumeration: Enumeration<any>): boolean {
    this.result = enumeration.next();
      return !this.result.done;
  }
  
  public nextElement(enumeration: Enumeration<any>): any {
      return this.result;
  }

}
