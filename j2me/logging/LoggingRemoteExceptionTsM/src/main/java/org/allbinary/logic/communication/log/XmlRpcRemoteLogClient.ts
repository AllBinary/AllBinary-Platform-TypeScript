
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
//not game specific package import { IOException } from '../../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { XmlRpcClient } from '../../../../../org/apache/xmlrpc/XmlRpcClient.js';
      const XmlRpcClient = globalThis.org.apache.xmlrpc.XmlRpcClient;

      
//not game specific package import { XmlRpcException } from '../../../../../org/apache/xmlrpc/XmlRpcException.js';
      const XmlRpcException = globalThis.org.apache.xmlrpc.XmlRpcException;

      
//not game specific package import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
      const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;

      
//not game specific package import { NoCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js';
      const NoCrypt = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.NoCrypt;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlRpcRemoteLogClient extends XmlRpcAbeClient {
        

    private readonly noCrypt: NoCrypt = new NoCrypt();

public constructor (clientInfo: AbeClientInformationInterface){
            super(clientInfo, "SSLLogServ.logUtil");
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public get(anyType: any = {}): any{

        try {
            
    var param: Vector = new Vector();;
    

    var serverUrl: string = getClientInfo()!.getLicenseServer(this.getServer())!;;
    

    var index: number = serverUrl!.lastIndexOf("/")!;;
    
serverUrl= serverUrl!.substring(0, index +1) +"logservssl.php";
    

    var xmlRpcClient: XmlRpcClient = new XmlRpcClient(serverUrl);;
    
this.setClient(xmlRpcClient);
    
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null);
    

    var hashtable: Hashtable<any, any> = anyType as Hashtable<any, any>;;
    
param.add(hashtable);
    

    var result: any = xmlRpcClient!.execute(this.getRemoteMethod(), param, this.noCrypt)!;;
    
console.log(CommonLabels.getInstance()!.RESULT_ +CommonSeps.getInstance()!.NEW_LINE +result.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {
console.log("IOException Trying Other Servers");
    

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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    
}
*/
                //: 
/* catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    
}
*/
}


}
                
            

