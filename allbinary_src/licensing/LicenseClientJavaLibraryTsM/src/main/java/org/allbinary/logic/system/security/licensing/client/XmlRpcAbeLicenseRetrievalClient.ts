
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { IOException } from '../../../../../../../java/io/IOException.js';
      //not GWT import const IOException = globalThis.java.io.IOException;

      
import { Hashtable } from '../../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Vector } from '../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
      //not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { XmlRpcAbeClient } from '../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
      //not GWT import const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;

      
//not plain js import { ExceptionUtil } from '../../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
      const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;

      
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { AbeClientLicense } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientLicense.js';
      //not GWT import const AbeClientLicense = globalThis.org.allbinary.logic.system.security.licensing.AbeClientLicense;

      
import { AbeLicenseInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js';
      //not GWT import const AbeLicenseInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterface;

      
//not plain js import { CommonLabels } from '../../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
import { XmlRpcClient } from '../../../../../../../org/apache/xmlrpc/XmlRpcClient.js';
      //not GWT import const XmlRpcClient = globalThis.org.apache.xmlrpc.XmlRpcClient;

      
import { XmlRpcException } from '../../../../../../../org/apache/xmlrpc/XmlRpcException.js';
      //not GWT import const XmlRpcException = globalThis.org.apache.xmlrpc.XmlRpcException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlRpcAbeLicenseRetrievalClient extends XmlRpcAbeClient {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (clientInfo: AbeClientInformationInterface){
            super(clientInfo, "LicServ.getLicense");
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public get(anyType: any = {}, cryptInterface: CryptInterface): any{

        try {
            
    var server: string = getClientInfo()!.getLicenseServer(this.getServer())!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(TRYING);
    
stringBuffer!.appendint(this.getServer());
    
stringBuffer!.append(SEP);
    
stringBuffer!.append(server);
    
this.logUtil!.putF(CommonLabels.getInstance()!.START_LABEL +stringBuffer!.toString(), this, this.commonStrings!.GET);
    

    var param: Vector = new Vector();;
    

    var xmlRpcClient: XmlRpcClient = new XmlRpcClient(server);;
    
this.setClient(xmlRpcClient);
    
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null);
    

    var hashtable: Hashtable<any, any> = this.getClientInfo()!.toHashtable()!;;
    
this.logUtil!.putF(CLIENT_INFO +hashtable.toString(), this, this.commonStrings!.GET);
    
param.add(hashtable);
    

    var result: any = xmlRpcClient!.execute(this.getRemoteMethod(), param, cryptInterface)!;;
    
this.logUtil!.putF(RESULT +result.toString(), this, this.commonStrings!.GET);
    

    var resultHashtable: Hashtable<any, any> = result as Hashtable<any, any>;;
    

                        if(!AbeClientLicense.hasRequiredKeys(resultHashtable))
                        
                                    {
                                    this.logUtil!.putF(INVALID, this, this.commonStrings!.GET);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

                                    }
                                

    var abeLicenseInterface: AbeLicenseInterface = new AbeClientLicense(resultHashtable);;
    
this.logUtil!.putF(this.commonStrings!.END +stringBuffer!.toString(), this, this.commonStrings!.GET);
    
isOnline= true;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abeLicenseInterface;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(EXCEPTION_IN_CLIENT, this, this.commonStrings!.GET, e);
    
this.logUtil!.putF(TRYING_OTHER_SERVERS +ExceptionUtil.getInstance()!.getStackTrace(e), this, this.commonStrings!.GET);
    

                        if(!e.getMessage()!.startsWith(HOST_NOT_RESOLVED))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

                                    }
                                
                        else {
                            isOnline= false;
    



                            throw new Exception(HOST_NOT_RESOLVED_MSG);
                    

                        }
                            
}

                //: 
/* catch(e) 
            {
this.logUtil!.put(SERVER_REPORTED_ERROR, this, this.commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    
}
*/
                //: 
/* catch(e) 
            {
this.logUtil!.put(UNKNOWN_ERROR, this, this.commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    
}
*/
}


}



