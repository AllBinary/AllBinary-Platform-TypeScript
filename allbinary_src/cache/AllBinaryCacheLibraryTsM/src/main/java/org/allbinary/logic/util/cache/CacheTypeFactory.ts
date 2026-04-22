
        /* Generated Code Do Not Modify */
        



import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CacheTypeFactory
            extends Object
         {
        

    private static readonly instance: CacheTypeFactory = new CacheTypeFactory();
        
        

    public static getInstance(): CacheTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public NO_CACHE: CacheType = new CacheType(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING);
        
        

    public CACHE: CacheType = new CacheType(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING);
        
        

    public SET: CacheType = new CacheType(StringUtil.getInstance()!.EMPTY_STRING, "Set");
        
        

    public CACHE_VECTOR: CacheType = new CacheType(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING);
        
        

}
                
            

