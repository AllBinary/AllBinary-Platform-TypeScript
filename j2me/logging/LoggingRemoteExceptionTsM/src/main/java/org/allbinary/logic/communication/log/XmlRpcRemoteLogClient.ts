
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
        



import { IOException } from "../../../../../java/io/IOException.js";

    
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { XmlRpcClient } from "../../../../../org/apache/xmlrpc/XmlRpcClient.js";

    
import { XmlRpcException } from "../../../../../org/apache/xmlrpc/XmlRpcException.js";

    
import { XmlRpcAbeClient } from "../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js";

    
import { NoCrypt } from "../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

export class XmlRpcRemoteLogClient extends XmlRpcAbeClient {
        

    private readonly noCrypt: NoCrypt = new NoCrypt();
        
        
public constructor (clientInfo: AbeClientInformationInterface)                        

                            : super(clientInfo, "SSLLogServ.logUtil"){

            super();
                //var clientInfo = clientInfo


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public get(anyType: any = {}): any = {}{
    //var anyType = anyType

        try {
            
    var param: Vector = new Vector();
        
        


    var serverUrl: string = getClientInfo()!.getLicenseServer(this.getServer())!;
        
        


    var index: number = serverUrl!.lastIndexOf("/")!;
        
        

serverUrl= serverUrl!.substring(0, index +1) +"logservssl.php"

    var xmlRpcClient: XmlRpcClient = new XmlRpcClient(serverUrl);
        
        

this.this.setClient(xmlRpcClient)
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null)

    var hashtable: Hashtable<Any, Any> = anyType as Hashtable<Any, Any>;
        
        

param.add(hashtable)

    var result: any = {} = xmlRpcClient!.execute(this.getRemoteMethod(), param, noCrypt)!;
        
        

System.out.println("Result: \n" +result.toString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: IOException)
            {
System.out.println("IOException Trying Other Servers")

                        if(!e.getMessage()!.startsWith(HOST_NOT_RESOLVED))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);
    

                                    }
                                
                        else {
                            


                            throw Error(HOST_NOT_RESOLVED_MSG)

                        }
                            
}
 catch(e: XmlRpcException)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);
    
}
 catch(e: Exception)
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);
    
}

}


}
                
            

