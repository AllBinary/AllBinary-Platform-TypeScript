import ArkTsHashMap from '@ohos.util.HashMap';

/*actual*/ export class WeakHashMap<K, V>
  extends ArkTsHashMap<K, V>
{

  public put(key: any, value: any): any {
    return super.set(key, value);
  }

  public containsValue(value: any): boolean {
    return super.hasValue(value);
  }

}

