
/*actual*/ export class Runtime
  extends Object
{
  private static readonly runtime: Runtime = new Runtime();

  static getRuntime(): Runtime {
    return Runtime.runtime;
  }

  totalMemory(): number {
    throw new Error('Method not implemented.');
  }
  maxMemory(): number {
    throw new Error('Method not implemented.');
  }

}