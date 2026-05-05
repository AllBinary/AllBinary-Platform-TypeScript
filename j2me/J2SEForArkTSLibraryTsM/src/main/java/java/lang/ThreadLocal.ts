import { Object } from '../../java/lang/Object.js';

export class ThreadLocal<T> extends Object {

  private object: any;

  public set(object: any): void {
    this.object = object;
  }

  public get(): any {
    return this.object;
  }
  
}
