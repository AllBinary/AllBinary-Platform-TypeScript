import type { Closeable } from './Closeable.js';
import { InputStream } from './InputStream.js';

/*actual*/ export class DataInputStream 
   extends InputStream implements Closeable
{

  public constructor (out: InputStream){
     super();
     throw new Error("Method not implemented.");
  }

  available(): number {
    throw new Error('Method not implemented.');
  }

  readInt(): number {
    throw new Error('Method not implemented.');
  }
  readLong(): number {
    throw new Error('Method not implemented.');
  }
  readUTF(): string {
    throw new Error('Method not implemented.');
  }
  
  close(): void {
    throw new Error("Method not implemented.");
  }

}

