import ArtTsVector from '@ohos.util.Vector';

/*actual*/ export class Vector<T>
            extends ArtTsVector<T>
         {

           public contains(object: any): boolean {
             return super.has(object);
           }

}

