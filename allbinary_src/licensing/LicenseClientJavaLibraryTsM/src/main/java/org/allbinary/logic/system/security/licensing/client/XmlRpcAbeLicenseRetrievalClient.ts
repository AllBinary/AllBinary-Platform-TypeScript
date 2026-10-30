
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
//not GWT import const IOException

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
//not GWT import const CryptInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { XmlRpcAbeClient } from '../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
//not GWT import const XmlRpcAbeClient

//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
type ExceptionUtil<T = any, U = any> = typeof ExceptionUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ExceptionUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { AbeClientLicense } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientLicense.js';
//not GWT import const AbeClientLicense

import { AbeLicenseInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js';
//not GWT import const AbeLicenseInterface

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

import { XmlRpcClient } from '../../../../../../../org/apache/xmlrpc/XmlRpcClient.js';
//not GWT import const XmlRpcClient

import { XmlRpcException } from '../../../../../../../org/apache/xmlrpc/XmlRpcException.js';
//not GWT import const XmlRpcException

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlRpcAbeLicenseRetrievalClient extends XmlRpcAbeClient {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (clientInfo: AbeClientInformationInterface){
            super(clientInfo, "LicServ.getLicense");
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public get(anyType: any, cryptInterface: CryptInterface): any{

 try { 
    let server: string = getClientInfo()!.getLicenseServer(this.getServer())!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(TRYING);
    
stringBuffer!.appendint(this.getServer());
    
stringBuffer!.append(SEP);
    
stringBuffer!.append(server);
    
this.logUtil!.putF(CommonLabels.getInstance()!.START_LABEL +stringBuffer!.toString(), this, this.commonStrings!.GET);
    

    let param: BasicArrayList = new BasicArrayListD();;
    

    let xmlRpcClient: XmlRpcClient = new XmlRpcClient(server);;
    
this.setClient(xmlRpcClient);
    
xmlRpcClient!.setBasicAuthentication(
                            null, 
                            null);
    

    let hashtable: ABHashtable<any, any> = this.getClientInfo()!.toHashtable()!;;
    
this.logUtil!.putF(CLIENT_INFO +hashtable.toString(), this, this.commonStrings!.GET);
    
param.add(hashtable);
    

    let result: any = xmlRpcClient!.execute(this.getRemoteMethod(), param, cryptInterface)!;;
    
this.logUtil!.putF(RESULT +result.toString(), this, this.commonStrings!.GET);
    

    let resultHashtable: ABHashtable<any, any> = result as ABHashtable<any, any>;;
    

                        if(!AbeClientLicense.hasRequiredKeys(resultHashtable))
                        
                                    {
                                    this.logUtil!.putF(INVALID, this, this.commonStrings!.GET);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

                                    }
                                

    let abeLicenseInterface: AbeLicenseInterface = new AbeClientLicense(resultHashtable);;
    
this.logUtil!.putF(this.commonStrings!.END +stringBuffer!.toString(), this, this.commonStrings!.GET);
    
isOnline= true;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abeLicenseInterface;
    
 }
 catch (caught: any) {
 if (caught instanceof IOException) {
  const e = caught;
  
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
  else if (caught instanceof XmlRpcException) {
  const e = caught;
  
this.logUtil!.put(SERVER_REPORTED_ERROR, this, this.commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

 }
  else {
  const e = caught;
  
this.logUtil!.put(UNKNOWN_ERROR, this, this.commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tryAnother(anyType);;
    

 }
   }
 
}


}

