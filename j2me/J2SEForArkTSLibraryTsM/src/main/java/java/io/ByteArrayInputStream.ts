
import type { Closeable } from './Closeable.js';
import { InputStream } from './InputStream.js';

/*actual*/ export class ByteArrayInputStream
  extends InputStream implements Closeable
{

  protected buf: number[];
  protected pos: number;
  protected mark: number = 0;
  protected count: number;

  constructor(buf: number[]);
  constructor(buf: number[], offset: number, length: number);
  constructor(buf: number[], offset?: number, length?: number) {
    super();
    this.buf = buf;
    if (offset === undefined || length === undefined) {
      this.pos = 0;
      this.count = buf.length;
    } else {
      this.pos = offset;
      this.count = Math.min(offset + length, buf.length);
      this.mark = offset;
    }
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }

}

