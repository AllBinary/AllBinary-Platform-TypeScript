import ArkTsHashtable from '@ohos.util.HashMap';

/*actual*/ export class Hashtable<K, V>
            extends ArkTsHashtable<K, V>
{
    
    public put(key: any, value: any): any {
      return super.set(key, value);
    }

    size(): number {
        return super.length;
    }

}

