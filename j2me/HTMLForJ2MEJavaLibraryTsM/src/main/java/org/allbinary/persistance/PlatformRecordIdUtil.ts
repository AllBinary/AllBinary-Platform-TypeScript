
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PlatformRecordIdUtil
            extends Object
         {
        

    private static readonly instance: PlatformRecordIdUtil = new PlatformRecordIdUtil();
        
        

    public static getInstance(): PlatformRecordIdUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly PLATFORM_SHORT_NAME: string = "HTML";
        
        

    public getRecordId(abeClientInformation: AbeClientInformationInterface, baseRecordId: string): string{
    //var abeClientInformation = abeClientInformation
    //var baseRecordId = baseRecordId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(abeClientInformation!.toShortString())!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(PLATFORM_SHORT_NAME)!.append(baseRecordId)!.toString();

                        ;
    
}


}
                
            

