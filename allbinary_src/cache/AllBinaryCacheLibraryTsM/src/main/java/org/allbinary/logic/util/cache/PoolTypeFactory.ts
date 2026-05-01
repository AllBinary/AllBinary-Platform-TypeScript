
        /* Generated Code Do Not Modify */
        



            import { Object } from "../../../../../java/lang/Object.js";


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PoolType } from "./PoolType.js";
import { CacheTypeFactory } from "./CacheTypeFactory.js";

export class PoolTypeFactory
            extends Object
         {
        

    private static readonly instance: PoolTypeFactory = new PoolTypeFactory();

    public static getInstance(): PoolTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PoolTypeFactory.instance;
    
}


    public VECTOR_POOL: PoolType = new PoolType(CacheTypeFactory.getInstance()!.NO_CACHE);

}
                
            

