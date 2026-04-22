
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
        



import { ByteArrayInputStream } from "../../../../../../java/io/ByteArrayInputStream.js";

    
import { InputStream } from "../../../../../../java/io/InputStream.js";

    
import { Globals } from "../../../../../../org/allbinary/globals/Globals.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { BasicTextJDialog } from "../../../../../../org/allbinary/gui/dialog/BasicTextJDialog.js";

    
import { ExitCloseListener } from "../../../../../../org/allbinary/gui/dialog/ExitCloseListener.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbCryptUtil } from "../../../../../../org/allbinary/logic/system/security/AbCryptUtil.js";

    
import { AbKeys } from "../../../../../../org/allbinary/logic/system/security/AbKeys.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { AbeLicenseInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js";

    
import { AbeLicenseInterfaceFactory } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterfaceFactory.js";

    
import { AbeNoLicense } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeNoLicense.js";

    
import { LicensingException } from "../../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Exception } from "./Exception.js";

export class CryptService
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly abCryptUtil: AbCryptUtil = AbCryptUtil.getInstance()!;
        
        
public constructor (){

            super();
        Globals.getInstance()!.init(this.constructor.name.java.classLoader, "./");
    
this.logUtil!.putF("Set Globals: " +URLGLOBALS.getWebappPath(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    public getDecryptedInputStream(abeClientInformation: AbeClientInformationInterface, name: string, inputStream: InputStream): InputStream{
    //var abeClientInformation = abeClientInformation
    //var name = name
    //var inputStream = inputStream

        try {
            
    var key: string = AbKeys.getInstance()!.getKey(abeClientInformation, name)!;
        
        
;
    

    var decrypted: number[] = this.abCryptUtil!.decrypt(inputStream, key)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ByteArrayInputStream(decrypted);
    

                //: 
} catch(e) 
            {
this.showLicenseDialog(abeClientInformation, e);
    
}

                //: 
 catch(e) 
            {
this.showLicenseDialog(abeClientInformation, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    showLicenseDialog(abeClientInformation: AbeClientInformationInterface, e: Error){
    //var abeClientInformation = abeClientInformation
    //var e = e

        try {
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    

    var basicTextJDialog: BasicTextJDialog = new BasicTextJDialog(e.message);
        
        
;
    

        try {
            
    var abeLicenseInterface: AbeLicenseInterface = AbeLicenseInterfaceFactory.getInstance()!.getLicenseInstance(abeClientInformation)!;
        
        
;
    

                        if(abeLicenseInterface != AbeNoLicense.getInstance())
                        
                                    {
                                    
                        if(abeLicenseInterface!.isValid())
                        
                                    {
                                    basicTextJDialog!.setText("Subscription Invalid");
    

                                    }
                                

                                    }
                                

                //: 
} catch(e2) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e2);
    
}

basicTextJDialog!.addCloseListener(new ExitCloseListener());
    
basicTextJDialog!.setVisible(true);
    

                //: 
} catch(e3) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e3);
    
}

}


}
                
            

