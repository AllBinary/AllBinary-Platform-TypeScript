
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
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { Enumeration } from '../../../../../../java/util/Enumeration.js';
//not GWT import const Enumeration

import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeHttpRequestInfoData } from './AbeHttpRequestInfoData.js';
//not GWT import - same folder const AbeHttpRequestInfoData

export class AbeHttpRequestInfo
            extends Object
         {
        

    private readonly NAME: string = "AbeHttpRequestInfo";

    private readonly abeHttpRequestInfoData: AbeHttpRequestInfoData = AbeHttpRequestInfoData.getInstance()!;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private httpUserAgent: string;

    private remoteAddress: string;

    private remoteHost: string;

    private remoteHostByAddr: string;

    private remotePort: string;

    private requestedFilePath: string;

public constructor (hashMap: HashMap<any, any>){

            super();
        
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.httpUserAgent= stringUtil!.getNonNull(hashMap!.get(this.abeHttpRequestInfoData!.HTTP_USER_AGENT) as string);
    
this.remoteAddress= stringUtil!.getNonNull(hashMap!.get(this.abeHttpRequestInfoData!.REMOTE_ADDRESS) as string);
    
this.remoteHost= stringUtil!.getNonNull(hashMap!.get(this.abeHttpRequestInfoData!.REMOTE_HOST) as string);
    
this.remoteHostByAddr= stringUtil!.getNonNull(hashMap!.get(this.abeHttpRequestInfoData!.REMOTE_HOST_BY_ADDRESS) as string);
    
this.remotePort= stringUtil!.getNonNull(hashMap!.get(this.abeHttpRequestInfoData!.REMOTE_PORT) as string);
    
this.requestedFilePath= stringUtil!.getNonNull(hashMap!.get(this.abeHttpRequestInfoData!.REQUEST_FILE_PATH) as string);
    
}


public constructor (httpServletRequest: HttpServletRequest){

            super();
        
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.httpUserAgent= stringUtil!.EMPTY_STRING;
    

    let enumuration: Enumeration<any> = httpServletRequest!.getHeaderNames()!;;
    

        while(enumuration.hasMoreElements())
        {

    let key: string = enumuration.nextElement()! as string;;
    

    let value: string = httpServletRequest!.getHeader(key)!;;
    

                        if(key.indexOf("user") >= 0)
                        this.httpUserAgent= "key: " +key +" value: " +value
}

this.remoteHostByAddr= stringUtil!.EMPTY_STRING;
    
this.remoteAddress= httpServletRequest!.getRemoteAddr();
    
this.remoteHost= httpServletRequest!.getRemoteHost();
    
this.requestedFilePath= httpServletRequest!.getServletPath();
    
this.remotePort= Integer.toString(httpServletRequest!.getRemotePort());
    
}


    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(this.abeHttpRequestInfoData!.HTTP_USER_AGENT, this.httpUserAgent);
    
hashMap!.put(this.abeHttpRequestInfoData!.REMOTE_ADDRESS, this.remoteAddress);
    
hashMap!.put(this.abeHttpRequestInfoData!.REMOTE_HOST, this.remoteHost);
    
hashMap!.put(this.abeHttpRequestInfoData!.REMOTE_HOST_BY_ADDRESS, this.remoteHostByAddr);
    
hashMap!.put(this.abeHttpRequestInfoData!.REMOTE_PORT, this.remotePort);
    
hashMap!.put(this.abeHttpRequestInfoData!.REQUEST_FILE_PATH, this.requestedFilePath);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): BasicArrayList{

    let vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.httpUserAgent);
    
vector.add(this.remoteAddress);
    
vector.add(this.remoteHost);
    
vector.add(this.remoteHostByAddr);
    
vector.add(this.remotePort);
    
vector.add(this.requestedFilePath);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(this.NAME)!.append(this.commonSeps!.COLON_SEP)!.append(this.abeHttpRequestInfoData!.HTTP_USER_AGENT)!.append(this.commonSeps!.COLON_SEP)!.append(this.httpUserAgent)!.append(this.commonSeps!.SPACE)!.append(this.abeHttpRequestInfoData!.REMOTE_ADDRESS)!.append(this.commonSeps!.COLON_SEP)!.append(this.remoteAddress)!.append(this.commonSeps!.SPACE)!.append(this.abeHttpRequestInfoData!.REMOTE_HOST)!.append(this.commonSeps!.COLON_SEP)!.append(this.remoteHost)!.append(this.commonSeps!.SPACE)!.append(this.abeHttpRequestInfoData!.REMOTE_HOST_BY_ADDRESS)!.append(this.commonSeps!.COLON_SEP)!.append(this.remoteHostByAddr)!.append(this.commonSeps!.SPACE)!.append(this.abeHttpRequestInfoData!.REMOTE_PORT)!.append(this.commonSeps!.COLON_SEP)!.append(this.remotePort)!.append(this.commonSeps!.SPACE)!.append(this.abeHttpRequestInfoData!.REQUEST_FILE_PATH)!.append(this.commonSeps!.COLON_SEP)!.append(this.requestedFilePath)!.toString();;
    
}


}

