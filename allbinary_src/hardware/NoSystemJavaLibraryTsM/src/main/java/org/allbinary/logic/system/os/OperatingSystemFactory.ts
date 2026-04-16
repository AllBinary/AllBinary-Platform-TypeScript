
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { NoOperatingSystem } from "./NoOperatingSystem.js";

import { System } from "./System.js";

export class OperatingSystemFactory
            extends Object
         {
        

    private static readonly instance: OperatingSystemFactory = new OperatingSystemFactory();
        
        

    public static getInstance(): OperatingSystemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private genericOperatingSystem: GenericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
        
        
private constructor (){

            super();
            }

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getOperatingSystemInstance(): GenericOperatingSystem{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var osString: string = new StringMaker().
                            append("OperatingSystem Info: ")!.append(genericOperatingSystem!.toString())!.toString()!;
        
        
;
    
console.log(osString);
    
this.logUtil!.putF(osString, this, commonStrings!.GET_INSTANCE);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericOperatingSystem;
    
}


}
                
            

