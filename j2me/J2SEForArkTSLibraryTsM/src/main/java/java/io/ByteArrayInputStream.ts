
import type { Closeable } from './Closeable.js';
import { InputStream } from './InputStream.js';

/*actual*/ export class ByteArrayInputStream 
   extends InputStream implements Closeable
{

//  public constructor (out: InputStream){
//     super();
//     throw new Error("Method not implemented.");
//  }

  
  close(): void {
    throw new Error("Method not implemented.");
  }

}

