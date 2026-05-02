import type { Closeable } from "./Closeable.js";
import { InputStream } from "./InputStream.js";

/*actual*/ export class DataInputStream 
   extends InputStream implements Closeable
{

  public constructor (out: InputStream){
     throw new Error("Method not implemented.");
  }
  
  close(): void {
    throw new Error("Method not implemented.");
  }

}

