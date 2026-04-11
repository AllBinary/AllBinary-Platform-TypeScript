
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
        



            import Vector from "@ohos.util.Vector";
        
            import Hashtable from "@ohos.util.HashMap";
        
import { IOException } from "../../../../../../../java/io/IOException.js";

    

//import { Hashtable } from "../../../../../../../java/util/Hashtable.js";

    

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { CryptInterface } from "../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { XmlRpcAbeClient } from "../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js";

    
import { ExceptionUtil } from "../../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { AbeClientLicense } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientLicense.js";

    
import { AbeLicenseInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js";

    
import { CommonLabels } from "../../../../../../../org/allbinary/string/CommonLabels.js";

    
import { XmlRpcClient } from "../../../../../../../org/apache/xmlrpc/XmlRpcClient.js";

    
import { XmlRpcException } from "../../../../../../../org/apache/xmlrpc/XmlRpcException.js";

    

export class XmlRpcAbeLicenseRetrievalClient extends XmlRpcAbeClient {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (clientInfo: AbeClientInformationInterface)                        

                            : super(clientInfo, "LicServ.getLicense"){

            super();
            var clientInfo = clientInfo


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public get(anyType: any = {}, cryptInterface: CryptInterface): any{
    //var anyType = anyType
    //var cryptInterface = cryptInterface

        try {
            
    var server: string = getClientInfo()!.getLicenseServer(this.getServer())!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(TRYING);
    
stringBuffer!.appendint(this.getServer());
    
stringBuffer!.append(SEP);
    
stringBuffer!.append(server);
    
logUtil!.put(CommonLabels.getInstance()!.START_LABEL +stringBuffer!.toString(), this, commonStrings!.GET);
    

    var param: Vector = new Vector();
        
        
;
    

    var xmlRpcClient: XmlRpcClient = new XmlRpcClient(server);
        
        
;
    
this.setClient(xmlRpcClient);
    
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null);
    

    var hashtable: Hashtable<any, any> = this.getClientInfo()!.toHashtable()!;
        
        
;
    
logUtil!.put(CLIENT_INFO +hashtable.toString(), this, commonStrings!.GET);
    
param.add(hashtable);
    

    var result: any = xmlRpcClient!.execute(this.getRemoteMethod(), param, cryptInterface)!;
        
        
;
    
logUtil!.put(RESULT +result.toString(), this, commonStrings!.GET);
    

    var resultHashtable: Hashtable<any, any> = result as Hashtable<any, any>;
        
        
;
    

                        if(!AbeClientLicense.hasRequiredKeys(resultHashtable);

                        )
                        
                                    {
                                    logUtil!.put(INVALID, this, commonStrings!.GET);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);

                        ;
    

                                    }
                                

    var abeLicenseInterface: AbeLicenseInterface = new AbeClientLicense(resultHashtable);
        
        
;
    
logUtil!.put(commonStrings!.END +stringBuffer!.toString(), this, commonStrings!.GET);
    
isOnline= true;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abeLicenseInterface;
    

                //: 
} catch(e) 
            {
logUtil!.put(EXCEPTION_IN_CLIENT, this, commonStrings!.GET, e);
    
logUtil!.put(TRYING_OTHER_SERVERS +ExceptionUtil.getInstance()!.getStackTrace(e), this, commonStrings!.GET);
    

                        if(!e.getMessage()!.startsWith(HOST_NOT_RESOLVED);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);

                        ;
    

                                    }
                                
                        else {
                            isOnline= false;
    



                            throw Error(HOST_NOT_RESOLVED_MSG)

                        }
                            
}

                //: 
 catch(e) 
            {
logUtil!.put(SERVER_REPORTED_ERROR, this, commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);

                        ;
    
}

                //: 
 catch(e) 
            {
logUtil!.put(UNKNOWN_ERROR, this, commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);

                        ;
    
}

}


}
                
            

