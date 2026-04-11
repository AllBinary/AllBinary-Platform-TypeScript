
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
        
import { Enumeration } from "../../../../../../java/util/Enumeration.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

export class AbeHttpRequestInfo
            extends Object
         {
        

    private readonly NAME: string = "AbeHttpRequestInfo";
        
        

    private readonly abeHttpRequestInfoData: AbeHttpRequestInfoData = AbeHttpRequestInfoData.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private httpUserAgent: string

    private remoteAddress: string

    private remoteHost: string

    private remoteHostByAddr: string

    private remotePort: string

    private requestedFilePath: string
public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.httpUserAgent= stringUtil!.getInstance(hashMap!.get(abeHttpRequestInfoData!.HTTP_USER_AGENT);

                         as String);
    
this.remoteAddress= stringUtil!.getInstance(hashMap!.get(abeHttpRequestInfoData!.REMOTE_ADDRESS);

                         as String);
    
this.remoteHost= stringUtil!.getInstance(hashMap!.get(abeHttpRequestInfoData!.REMOTE_HOST);

                         as String);
    
this.remoteHostByAddr= stringUtil!.getInstance(hashMap!.get(abeHttpRequestInfoData!.REMOTE_HOST_BY_ADDRESS);

                         as String);
    
this.remotePort= stringUtil!.getInstance(hashMap!.get(abeHttpRequestInfoData!.REMOTE_PORT);

                         as String);
    
this.requestedFilePath= stringUtil!.getInstance(hashMap!.get(abeHttpRequestInfoData!.REQUEST_FILE_PATH);

                         as String);
    
}

public constructor (httpServletRequest: HttpServletRequest){

            super();
            var httpServletRequest = httpServletRequest

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.httpUserAgent= stringUtil!.EMPTY_STRING;
    

    var enumuration: Enumeration<any?> = httpServletRequest!.getHeaderNames()!;
        
        
;
    

        while(enumuration.hasMoreElements())
        {

    var key: string = enumuration.nextElement()!;

                         as String;
        
        
;
    

    var value: string = httpServletRequest!.getHeader(key)!;
        
        
;
    

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

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(abeHttpRequestInfoData!.HTTP_USER_AGENT, this.httpUserAgent);
    
hashMap!.put(abeHttpRequestInfoData!.REMOTE_ADDRESS, this.remoteAddress);
    
hashMap!.put(abeHttpRequestInfoData!.REMOTE_HOST, this.remoteHost);
    
hashMap!.put(abeHttpRequestInfoData!.REMOTE_HOST_BY_ADDRESS, this.remoteHostByAddr);
    
hashMap!.put(abeHttpRequestInfoData!.REMOTE_PORT, this.remotePort);
    
hashMap!.put(abeHttpRequestInfoData!.REQUEST_FILE_PATH, this.requestedFilePath);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        
;
    
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
                        return new StringBuilder().
                            append(this.NAME)!.append(this.commonSeps!.COLON_SEP)!.append(abeHttpRequestInfoData!.HTTP_USER_AGENT)!.append(this.commonSeps!.COLON_SEP)!.append(this.httpUserAgent)!.append(this.commonSeps!.SPACE)!.append(abeHttpRequestInfoData!.REMOTE_ADDRESS)!.append(this.commonSeps!.COLON_SEP)!.append(this.remoteAddress)!.append(this.commonSeps!.SPACE)!.append(abeHttpRequestInfoData!.REMOTE_HOST)!.append(this.commonSeps!.COLON_SEP)!.append(this.remoteHost)!.append(this.commonSeps!.SPACE)!.append(abeHttpRequestInfoData!.REMOTE_HOST_BY_ADDRESS)!.append(this.commonSeps!.COLON_SEP)!.append(this.remoteHostByAddr)!.append(this.commonSeps!.SPACE)!.append(abeHttpRequestInfoData!.REMOTE_PORT)!.append(this.commonSeps!.COLON_SEP)!.append(this.remotePort)!.append(this.commonSeps!.SPACE)!.append(abeHttpRequestInfoData!.REQUEST_FILE_PATH)!.append(this.commonSeps!.COLON_SEP)!.append(this.requestedFilePath)!.toString();

                        ;
    
}


}
                
            

