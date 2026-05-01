import { Closeable } from "./Closeable";

/*actual*/ export class OutputStream
            extends Object implements Closeable
{

  write(buffer: number[], arg1: number, len: number) {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }

}
