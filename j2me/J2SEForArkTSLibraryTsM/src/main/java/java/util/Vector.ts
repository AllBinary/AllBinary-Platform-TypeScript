import ArtTsVector from '@ohos.util.Vector';

/*actual*/ export class Vector<T>
            extends ArtTsVector<T>
         {

           public contains(object: any): boolean {
             return super.has(object);
           }

           public setElementAt(object: any, index: number): void {
               super.set(index, object);
           }

           public elementAt(index: number): any {
             return super.get(index);
           }

           public insertElementAt(object: any, index: number): void {
             super.insert(object, index);
           }

           public addElement(object: any): boolean {
             return super.add(object);
           }

           public removeElement(object: any): boolean {
             return super.remove(object);
           }

           public removeAllElements(): void {
             super.clear();
           }
}

