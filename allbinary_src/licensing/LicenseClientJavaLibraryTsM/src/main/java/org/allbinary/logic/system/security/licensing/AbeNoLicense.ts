
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
        



import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

import { LicenseTypeFactory } from "./LicenseTypeFactory.js";

export class AbeNoLicense
            extends Object
        
                , AbeLicenseInterface {
        

    private abeNoLicense: AbeNoLicense = new AbeNoLicense();
        
        

    public static getInstance(): AbeNoLicense{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abeNoLicense;
    
}


    public serverVector: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            }


    public hasKey(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getKey(keyName: string): string{
var keyName = keyName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public getLicenseId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public getSpecial(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public getServers(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return serverVector;
    
}


    public isValid(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getLicenseType(): LicenseType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LicenseTypeFactory.getInstance()!.UNKNOWN;
    
}


}
                
            

