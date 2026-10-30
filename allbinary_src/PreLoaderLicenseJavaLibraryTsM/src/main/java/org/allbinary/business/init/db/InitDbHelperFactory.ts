
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Class } from '../../../../../java/lang/Class.js';
        
import { AbeFactory } from '../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DatabaseConnectionInfoInterface } from './DatabaseConnectionInfoInterface.js';
//sameFolderImports - not GWT import - same folder const DatabaseConnectionInfoInterface

export class InitDbHelperFactory
            extends Object
         {
        

    private static readonly CLASSNAME: string = "org.allbinary.business.installer.InitDbCrypted";
static getInstance(...args: any[]): any {
   
    if (args.length === 2) return this.getInstance$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(LicensingException.constructor)
            
    public static getInstance$overload1(abeClientInformation: AbeClientInformationInterface, databaseConnectionInfoInterface: DatabaseConnectionInfoInterface): any{

    let params: any[] = new Array(1);;
    

    let classes: Function[] = new Array(1);;
    
classes[0]= 
                                    //Otherwise - expression - AssignExpr - value - ClassExpr
;
    
params[0]= databaseConnectionInfoInterface;
    

    let anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, CLASSNAME, classes, params)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
}


                //@Throws(LicensingException.constructor)
            
    public static getInstance$overload2(abeClientInformation: AbeClientInformationInterface): any{

    let anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, CLASSNAME, 
                            null, 
                            null)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
}


private constructor (){

            super();
        }


}

