import { Object } from '../../java/lang/Object.js';
import type { Closeable } from './Closeable.js';

/*actual*/ export class DataOutputStream
            extends Object implements Closeable
{
  write(data: number[]) {
    throw new Error('Method not implemented.');
  }

  writeLong(lastModified: number) {
    throw new Error('Method not implemented.');
  }
  writeInt(version: number) {
    throw new Error('Method not implemented.');
  }
  writeUTF(recordStoreName: string) {
    throw new Error('Method not implemented.');
  }

  close(): void {
    throw new Error("Method not implemented.");
  }

}
