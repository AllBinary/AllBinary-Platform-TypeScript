import util from '@ohos.util';

import { OutputStream } from "./OutputStream";

/*actual*/ export class ByteArrayOutputStream
  extends OutputStream {
  protected buf: Uint8Array;
  protected count: number;

  constructor(size: number = 32) {
    super();
    if (size < 0) {
      throw new Error(`Negative initial size: ${size}`);
    }
    this.buf = new Uint8Array(size);
    this.count = 0;
  }

  private ensureCapacity(minCapacity: number): void {
    const oldCapacity = this.buf.length;
    const minGrowth = minCapacity - oldCapacity;
    if (minGrowth > 0) {
      const newCapacity = oldCapacity + Math.max(minGrowth, oldCapacity);
      const newBuf = new Uint8Array(newCapacity);
      newBuf.set(this.buf);
      this.buf = newBuf;
    }
  }

  write(b: number): void {
    this.ensureCapacity(this.count + 1);
    this.buf[this.count] = b;
    this.count += 1;
  }

  writeBytes(b: Uint8Array, off: number = 0, len: number = b.length): void {
    if (off < 0 || len < 0 || off + len > b.length) {
      throw new RangeError('Index out of bounds');
    }
    this.ensureCapacity(this.count + len);
    this.buf.set(b.subarray(off, off + len), this.count);
    this.count += len;
  }

  writeTo(out: { write: (buf: Uint8Array, off: number, len: number) => void }): void {
    out.write(this.buf, 0, this.count);
  }

  reset(): void {
    this.count = 0;
  }

  //Uint8Array
  toByteArray(): number[] {
    return Array.from(this.buf.slice(0, this.count));
  }

  size(): number {
    return this.count;
  }

  toString(encoding: string = 'utf-8'): string {
    let decoder = util.TextDecoder.create(encoding);
    //return decoder.decode(this.buf.subarray(0, this.count));
    return decoder.decodeToString(this.buf.subarray(0, this.count));
  }

  close(): void {}
}