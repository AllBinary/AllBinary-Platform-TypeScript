
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
        



import { AbKeys } from "../../../../../org/allbinary/logic/system/security/AbKeys.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class SecuredNativeLibraryHelperWrapper extends NativeLibraryHelperWrapper {
        

    private securedNativeLibraryInterface: SecuredNativeLibraryInterface
public constructor (securedNativeLibraryInterface: SecuredNativeLibraryInterface)                        

                            : super(securedNativeLibraryInterface!.getLibraryName()){

            super();
                //var securedNativeLibraryInterface = securedNativeLibraryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.securedNativeLibraryInterface= securedNativeLibraryInterface
}


                @Throws(LicensingException::class)
            
    public unlock(abeClientInformation: AbeClientInformationInterface): boolean{
    //var abeClientInformation = abeClientInformation



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return securedNativeLibraryInterface!.unlock(AbKeys.getInstance()!.getKey(abeClientInformation, securedNativeLibraryInterface!.getName()));
    
}


}
                
            

