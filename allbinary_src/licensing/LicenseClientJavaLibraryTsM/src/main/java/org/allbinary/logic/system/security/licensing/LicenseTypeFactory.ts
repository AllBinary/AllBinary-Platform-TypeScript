
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
        



import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LicenseType } from "./LicenseType.js";

export class LicenseTypeFactory
            extends Object
         {
        

    private static readonly instance: LicenseTypeFactory = new LicenseTypeFactory();
        
        

    public static getInstance(): LicenseTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly UNKNOWN: LicenseType = new LicenseType(CommonStrings.getInstance()!.UNKNOWN);
        
        

    public readonly DEMO: LicenseType = new LicenseType("Demo");
        
        

    public readonly NORMAL: LicenseType = new LicenseType("Normal");
        
        

    public getInstance(name: string): LicenseType{
var name = name

                        if(DEMO.getName()!.compareTo(name) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DEMO;
    

                                    }
                                
                             else 
                        if(NORMAL.getName()!.compareTo(name) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NORMAL;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UNKNOWN;
    
}


}
                
            

