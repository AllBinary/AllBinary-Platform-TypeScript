/*actual*/ export class System
            extends Object
{

    public static arraycopy(src: any, srcPos: number, dest: any, destPos: number, length: number) {

        for (let i = 0; i < length; i++) {
            dest[destPos + i] = src[srcPos + i]!;
        }

    }

  static gc() {
    throw new Error('Method not implemented.');
  }

}

            

