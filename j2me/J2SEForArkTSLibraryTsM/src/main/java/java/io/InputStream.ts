import { Object } from '../../java/lang/Object.js';
import type { Closeable } from './Closeable.js';

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
