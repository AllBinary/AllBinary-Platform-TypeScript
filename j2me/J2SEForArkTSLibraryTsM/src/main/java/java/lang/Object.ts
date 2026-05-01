export class Object {
    public getClass(): Function {
        throw new Error("Native method not implemented.");
    }

    public hashCode(): number {
        throw new Error("Native method not implemented.");
    }

    public equals(obj: Object): boolean {
        return this === obj;
    }

    protected clone(): Object {
        throw new Error("Native method not implemented.");
    }
    
    public notify(): void {
        throw new Error("Native method not implemented.");
    }

    public notifyAll(): void {
        throw new Error("Native method not implemented.");
    }

    public waitFor(timeout: number): void {
        throw new Error("Native method not implemented.");
    }

    public waitForNanos(timeout: number, nanos: number): void {
        if (timeout < 0) {
            throw new Error("timeout value is negative");
        }
        if (nanos < 0 || nanos > 999999) {
            throw new Error("nanosecond timeout value out of range");
        }
        if (nanos >= 500000 || (nanos !== 0 && timeout === 0)) {
            timeout++;
        }
        this.waitFor(timeout);
    }

    public wait(): void {
        this.waitFor(0);
    }

    public toString(): string {
        return `${this.getClass().name}@${this.hashCode().toString(16)}`;
    }
    
    protected finalize(): void {}
}