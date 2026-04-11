
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
        



import { AbeFactory } from "../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class InitDbHelperFactory
            extends Object
         {
        

    private static readonly CLASSNAME: string = "org.allbinary.business.installer.InitDbCrypted";
        
        

                //@Throws(LicensingException::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, databaseConnectionInfoInterface: DatabaseConnectionInfoInterface): any = {}{
    //var abeClientInformation = abeClientInformation
var databaseConnectionInfoInterface = databaseConnectionInfoInterface

    var params: any[] = new Array(1);
        
        
;
    

    var classes: Function[] = new Array(1);
        
        
;
    
classes[0]= 
                                    //Otherwise - expression - AssignExpr - value - ClassExpr
;
    
params[0]= databaseConnectionInfoInterface as Object;
    

    var anyType: any = {} = AbeFactory.getInstance()!.getInstance(abeClientInformation, CLASSNAME, classes, params)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
}


                //@Throws(LicensingException::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface): any = {}{
    //var abeClientInformation = abeClientInformation

    var anyType: any = {} = AbeFactory.getInstance()!.getInstance(abeClientInformation, CLASSNAME, 
                            null, 
                            null)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
}

private constructor (){

            super();
            }


}
                
            

