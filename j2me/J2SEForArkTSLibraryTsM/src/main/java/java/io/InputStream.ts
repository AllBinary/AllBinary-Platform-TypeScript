import { Closeable } from "./Closeable";

/*actual*/ export class InputStream
            extends Object implements Closeable
{

  read(buffer: number[], arg1: number, length: number): number {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }

}
