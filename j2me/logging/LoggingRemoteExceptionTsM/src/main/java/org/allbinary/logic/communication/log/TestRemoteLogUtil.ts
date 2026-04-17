
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { Globals } from "../../../../../org/allbinary/globals/Globals.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LogUtil } from "./LogUtil.js";

export class TestRemoteLogUtil
            extends Object
         {
        

    public static readonly PATH: string = "G:\\mnt\\bc\\mydev\\work\\allbinary_src\\licensing\\data\\";
        
        

                //@Throws(Error::class)
            
    public static main(args: string[]){
var args = args
new TestRemoteLogUtil();
    
}

public constructor (){

            super();
            Globals.getInstance()!.init(this.constructor.name.java.classLoader, PATH);
    

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, "Test", "TestClass", new Error("Pretend Exception"));
    
}


}
                
            

