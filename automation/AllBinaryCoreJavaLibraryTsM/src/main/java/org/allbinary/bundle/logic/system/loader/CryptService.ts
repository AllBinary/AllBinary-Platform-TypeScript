
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ByteArrayInputStream } from '../../../../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { InputStream } from '../../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { Globals } from '../../../../../../org/allbinary/globals/Globals.js';
      //not GWT import const Globals = globalThis.org.allbinary.globals.Globals;

      
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { BasicTextJDialog } from '../../../../../../org/allbinary/gui/dialog/BasicTextJDialog.js';
      //not GWT import const BasicTextJDialog = globalThis.org.allbinary.gui.dialog.BasicTextJDialog;

      
import { ExitCloseListener } from '../../../../../../org/allbinary/gui/dialog/ExitCloseListener.js';
      //not GWT import const ExitCloseListener = globalThis.org.allbinary.gui.dialog.ExitCloseListener;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbCryptUtil } from '../../../../../../org/allbinary/logic/system/security/AbCryptUtil.js';
      //not GWT import const AbCryptUtil = globalThis.org.allbinary.logic.system.security.AbCryptUtil;

      
import { AbKeys } from '../../../../../../org/allbinary/logic/system/security/AbKeys.js';
      //not GWT import const AbKeys = globalThis.org.allbinary.logic.system.security.AbKeys;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { AbeLicenseInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js';
      //not GWT import const AbeLicenseInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterface;

      
import { AbeLicenseInterfaceFactory } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterfaceFactory.js';
      //not GWT import const AbeLicenseInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterfaceFactory;

      
import { AbeNoLicense } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeNoLicense.js';
      //not GWT import const AbeNoLicense = globalThis.org.allbinary.logic.system.security.licensing.AbeNoLicense;

      
import { LicensingException } from '../../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CryptService
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly abCryptUtil: AbCryptUtil = AbCryptUtil.getInstance()!;

public constructor (){

            super();
        Globals.getInstance()!.init(this.constructor.namegetClassLoader(), "./");
    
this.logUtil!.putF("Set Globals: " +URLGLOBALS.getWebappPath(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    public getDecryptedInputStream(abeClientInformation: AbeClientInformationInterface, name: string, inputStream: InputStream): InputStream{

        try {
            
    var key: string = AbKeys.getInstance()!.getKey(abeClientInformation, name)!;;
    

    var decrypted: number[] = this.abCryptUtil!.decrypt(inputStream, key)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ByteArrayInputStream(decrypted);
    

                //: 
} catch(e) 
            {
this.showLicenseDialog(abeClientInformation, e);
    
}

                //: 
/* catch(e) 
            {
this.showLicenseDialog(abeClientInformation, e);
    
}
*/



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    showLicenseDialog(abeClientInformation: AbeClientInformationInterface, e: Exception){

        try {
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    

    var basicTextJDialog: BasicTextJDialog = new BasicTextJDialog(e.message);;
    

        try {
            
    var abeLicenseInterface: AbeLicenseInterface = AbeLicenseInterfaceFactory.getInstance()!.getLicenseInstance(abeClientInformation)!;;
    

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



