import { Object } from "../../java/lang/Object.js";
import type { Closeable } from "./Closeable.js";

/*actual*/ export class DataOutputStream
            extends Object implements Closeable
{

  close(): void {
    throw new Error("Method not implemented.");
  }

}
