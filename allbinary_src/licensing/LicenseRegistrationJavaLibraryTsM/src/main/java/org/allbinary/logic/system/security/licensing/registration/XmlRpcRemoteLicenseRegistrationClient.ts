
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

      
import { XmlRpcClient } from '../../../../../../../org/apache/xmlrpc/XmlRpcClient.js';
      //not GWT import const XmlRpcClient = globalThis.org.apache.xmlrpc.XmlRpcClient;

      
import { XmlRpcException } from '../../../../../../../org/apache/xmlrpc/XmlRpcException.js';
      //not GWT import const XmlRpcException = globalThis.org.apache.xmlrpc.XmlRpcException;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
      //not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

      
//not plain js import { CommonLabels } from '../../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { XmlRpcAbeClient } from '../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
      //not GWT import const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;

      
//not plain js import { ExceptionUtil } from '../../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
      const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;

      
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { ABHashtable } from '../../../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlRpcRemoteLicenseRegistrationClient extends XmlRpcAbeClient {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly PAGE: string = "licenseregistrationserverssl.php";

public constructor (clientInfo: AbeClientInformationInterface){
            super(clientInfo, "LicenseRegistrationServer.process");
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setServer(0);
    
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
    

    var param: BasicArrayList = new BasicArrayListD();;
    

    var serverUrl: string = getClientInfo()!.getLicenseServer(this.getServer())!;;
    

    var index: number = serverUrl!.lastIndexOf("/")!;;
    
serverUrl= serverUrl!.substring(0, index +1) +this.PAGE;
    

    var xmlRpcClient: XmlRpcClient = new XmlRpcClient(serverUrl);;
    
this.setClient(xmlRpcClient);
    
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null);
    

    var hashtable: ABHashtable = anyType as ABHashtable;;
    
this.logUtil!.putF(CLIENT_INFO +hashtable.toString(), this, this.commonStrings!.GET);
    
param.add(hashtable);
    

    var result: any = xmlRpcClient!.execute(this.getRemoteMethod(), param, cryptInterface)!;;
    
this.logUtil!.putF(RESULT +result.toString(), this, this.commonStrings!.GET);
    
isOnline= true;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(TRYING_OTHER_SERVERS +ExceptionUtil.getInstance()!.getStackTrace(e), this, this.commonStrings!.GET);
    

                        if(!e.getMessage()!.startsWith(HOST_NOT_RESOLVED))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

                                    }
                                
                        else {
                            


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



