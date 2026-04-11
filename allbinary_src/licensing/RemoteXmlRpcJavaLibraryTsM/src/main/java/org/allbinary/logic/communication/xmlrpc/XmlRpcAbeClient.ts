
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
        



import { MyRandomFactory } from "../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { NullXmlRpcHandler } from "../../../../../org/apache/xmlrpc/NullXmlRpcHandler.js";

    
import { XmlRpcClient } from "../../../../../org/apache/xmlrpc/XmlRpcClient.js";

    
import { XmlRpcHandler } from "../../../../../org/apache/xmlrpc/XmlRpcHandler.js";

    

export class XmlRpcAbeClient
            extends Object
         {
        

    public isOnline: boolean = true;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly remoteMethod: string

    private readonly clientInfo: AbeClientInformationInterface

    private client: XmlRpcHandler = NullXmlRpcHandler.NULL_XML_RPC_HANDLER;
        
        

    private server: number

    private start: number= 0

    private maxServers: number= 0

    private isDone: boolean

    private readonly START_SERVER: string = "Start With Server #";
        
        

    readonly TRYING: string = "Trying Server #";
        
        

    readonly SEP: string = CommonLabels.getInstance()!.COLON_SEP;
        
        

    readonly CLIENT_INFO: string = "Client Info: \n";
        
        

    readonly RESULT: string = "Result: \n";
        
        

    readonly INVALID: string = "License data is Invalid Trying Other Servers";
        
        

    readonly EXCEPTION_IN_CLIENT: string = "Exception in client";
        
        

    readonly SERVER_REPORTED_ERROR: string = "Server reported error";
        
        

    readonly UNKNOWN_ERROR: string = "Unknown License Retrieval Failure";
        
        

    readonly TRYING_OTHER_SERVERS: string = "IOException Trying Other Servers";
        
        

    readonly HOST_NOT_RESOLVED_MSG: string = "Not Trying Again Since Host Unresolved";
        
        

    readonly HOST_NOT_RESOLVED: string = "Host is unresolved";
        
        

    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        
public constructor (clientInfo: AbeClientInformationInterface, remoteMethod: string){

            super();
            var clientInfo = clientInfo
var remoteMethod = remoteMethod
this.remoteMethod= remoteMethod;
    
this.clientInfo= clientInfo;
    

                        if(clientInfo!.getNumberOfLicenseServers() > 1)
                        
                                    {
                                    this.maxServers= clientInfo!.getNumberOfLicenseServers() -2;
    
this.start= myRandomFactory!.getAbsoluteNextInt(maxServers) +1;
    

                                    }
                                
                             else 
                        if(clientInfo!.getNumberOfLicenseServers() == 1)
                        
                                    {
                                    this.maxServers= 0;
    
this.start= 0;
    

                                    }
                                
isDone= false;
    
this.server= this.start;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(START_SERVER);
    
stringBuffer!.appendint(this.getServer());
    
stringBuffer!.append(SEP);
    
stringBuffer!.append(clientInfo!.getLicenseServer(this.getServer()));
    
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.CONSTRUCTOR);
    
}


                //@Throws(Error::class)
            
    public get(anyType: any = {}): any = {}{
var anyType = anyType
ForcedLogUtil.log(commonStrings!.NOT_IMPLEMENTED, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


                //@Throws(Error::class)
            
    tryAnother(anyType: any = {}): any = {}{
var anyType = anyType

                        if(getServer() < getMaxServers())
                        
                                    {
                                    setServer(getServer() +1);
    

                                    }
                                
                        else {
                            setServer(0);
    

                        }
                            

                        if(getServer() != getStart() && !isIsDone();

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.get(anyType);

                        ;
    

                                    }
                                
                        else {
                            setIsDone(true);
    

                        }
                            



                            throw Error("Tried All Servers But Still Failed")
}


    getClientInfo(): AbeClientInformationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return clientInfo;
    
}


    getClient(): XmlRpcHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return client;
    
}


    setClient(client: XmlRpcClient){
var client = client
this.client= client;
    
}


    getServer(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return server;
    
}


    setServer(server: number){
var server = server
this.server= server;
    
}


    getStart(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return start;
    
}


    setStart(start: number){
var start = start
this.start= start;
    
}


    getMaxServers(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxServers;
    
}


    setMaxServers(maxServers: number){
var maxServers = maxServers
this.maxServers= maxServers;
    
}


    isIsDone(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isDone;
    
}


    setIsDone(isDone: boolean){
var isDone = isDone
this.isDone= isDone;
    
}


    getRemoteMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return remoteMethod;
    
}


}
                
            

