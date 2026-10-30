
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
//not GWT import const ByteArrayInputStream

import { InputStream } from '../../../../../../java/io/InputStream.js';
//not GWT import const InputStream

import { Globals } from '../../../../../../org/allbinary/globals/Globals.js';
//not GWT import const Globals

import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { BasicTextJDialog } from '../../../../../../org/allbinary/gui/dialog/BasicTextJDialog.js';
//not GWT import const BasicTextJDialog

import { ExitCloseListener } from '../../../../../../org/allbinary/gui/dialog/ExitCloseListener.js';
//not GWT import const ExitCloseListener

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbCryptUtil } from '../../../../../../org/allbinary/logic/system/security/AbCryptUtil.js';
//not GWT import const AbCryptUtil

import { AbKeys } from '../../../../../../org/allbinary/logic/system/security/AbKeys.js';
//not GWT import const AbKeys

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { AbeLicenseInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js';
//not GWT import const AbeLicenseInterface

import { AbeLicenseInterfaceFactory } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterfaceFactory.js';
//not GWT import const AbeLicenseInterfaceFactory

import { AbeNoLicense } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeNoLicense.js';
//not GWT import const AbeNoLicense

import { LicensingException } from '../../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
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
    let key: string = AbKeys.getInstance()!.getKey(abeClientInformation, name)!;;
    

    let decrypted: number[] = this.abCryptUtil!.decrypt(inputStream, key)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ByteArrayInputStream(decrypted);
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e = caught;
  
this.showLicenseDialog(abeClientInformation, e);
    

 }
  else {
  const e = caught;
  
this.showLicenseDialog(abeClientInformation, e);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    showLicenseDialog(abeClientInformation: AbeClientInformationInterface, e: Exception){

 try { this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    

    let basicTextJDialog: BasicTextJDialog = new BasicTextJDialog(e.message);;
    

 try { 
    let abeLicenseInterface: AbeLicenseInterface = AbeLicenseInterfaceFactory.getInstance()!.getLicenseInstance(abeClientInformation)!;;
    

                        if(abeLicenseInterface != AbeNoLicense.getInstance())
                        
                                    {
                                    
                        if(abeLicenseInterface!.isValid())
                        
                                    {
                                    basicTextJDialog!.setText("Subscription Invalid");
    

                                    }
                                

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
  const e2 = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e2);
    

 }
  else { throw caught; } }
 
basicTextJDialog!.addCloseListener(new ExitCloseListener());
    
basicTextJDialog!.setVisible(true);
    
 }
 catch (caught: any) {
 {
  const e3 = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e3);
    

 }
   }
 
}


}

