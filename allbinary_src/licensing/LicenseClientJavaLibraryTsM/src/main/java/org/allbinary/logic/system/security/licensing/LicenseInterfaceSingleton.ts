
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
        




import { AbeNoLicense } from "./AbeNoLicense.js";

export class LicenseInterfaceSingleton
            extends Object
         {
        

    private licenseInterface: AbeLicenseInterface = AbeNoLicense.getInstance()!;
        
        

    public static getInstance(): AbeLicenseInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseInterface;
    
}


    public static init(licenseInterface: AbeLicenseInterface){
var licenseInterface = licenseInterface

                        if(licenseInterface != 
                                    null
                                )
                        
                                    {
                                    LicenseInterfaceSingleton.licenseInterface= licenseInterface;
    

                                    }
                                
}


}
                
            

