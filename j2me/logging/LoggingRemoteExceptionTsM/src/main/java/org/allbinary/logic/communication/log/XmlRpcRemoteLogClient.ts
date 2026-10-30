
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
        
import { IOException } from '../../../../../java/io/IOException.js';
//not GWT import const IOException

import { XmlRpcClient } from '../../../../../org/apache/xmlrpc/XmlRpcClient.js';
//not GWT import const XmlRpcClient

import { XmlRpcException } from '../../../../../org/apache/xmlrpc/XmlRpcException.js';
//not GWT import const XmlRpcException

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
//not GWT import const XmlRpcAbeClient

import { NoCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js';
//not GWT import const NoCrypt

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlRpcRemoteLogClient extends XmlRpcAbeClient {
        

    private readonly noCrypt: NoCrypt = new NoCrypt();

public constructor (clientInfo: AbeClientInformationInterface){
            super(clientInfo, "SSLLogServ.logUtil");
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public get(anyType: any): any{

 try { 
    let param: BasicArrayList = new BasicArrayListD();;
    

    let serverUrl: string = getClientInfo()!.getLicenseServer(this.getServer())!;;
    

    let index: number = serverUrl!.lastIndexOf("/")!;;
    
serverUrl= serverUrl!.substring(0, index +1) +"logservssl.php";
    

    let xmlRpcClient: XmlRpcClient = new XmlRpcClient(serverUrl);;
    
this.setClient(xmlRpcClient);
    
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null);
    

    let hashtable: ABHashtable<any, any> = anyType as ABHashtable<any, any>;;
    
param.add(hashtable);
    

    let result: any = xmlRpcClient!.execute(this.getRemoteMethod(), param, this.noCrypt)!;;
    
console.log(CommonLabels.getInstance()!.RESULT_ +CommonSeps.getInstance()!.NEW_LINE +result.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 if (caught instanceof IOException) {
  const e = caught;
  
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
  else if (caught instanceof XmlRpcException) {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

 }
  else {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

 }
   }
 
}


}

