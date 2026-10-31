
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { List } from '../../../../../../java/util/List.js';
//not GWT import const List

import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbFileUploadFactory } from '../../../../../../org/allbinary/logic/communication/http/file/upload/AbFileUploadFactory.js';
//not GWT import const AbFileUploadFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { FileItem } from '../../../../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem

import { InvalidContentTypeException } from '../../../../../../org/apache/commons/fileupload/FileUploadBase/InvalidContentTypeException.js';
//not GWT import const InvalidContentTypeException

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RequestParams } from './RequestParams.js';
//sameFolderImports - not GWT import - same folder const RequestParams

export class MultipartRequestParams extends RequestParams {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private special: boolean = false;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && args[0] instanceof HttpServletRequest) {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(request: HttpServletRequest): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.processMultipartRequest(request);
    

    }
    
    private constructor$1(pageContext: PageContext): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.processMultipartRequest(pageContext!.getRequest() as HttpServletRequest);
    

    }
    
    setSpecial(){
this.special= true;
    
}


    processMultipartRequest(request: HttpServletRequest){

 try { 
    let specialRequest: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let multipartRequestList: List = AbFileUploadFactory.getInstance()!.getFileItemStreamList(request)!;;
    

                        if(multipartRequestList != 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("FileItem List Size: " +multipartRequestList!.length, this, "processMultipartRequest()");
    

                                    }
                                

    let fileItemArray: any[] = multipartRequestList!.toArray()!;;
    

    let size: number = fileItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let fileItem: FileItem = fileItemArray[index]! as FileItem;;
    

    let name: string = fileItem!.getName()!;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(name))
                        
                                    {
                                    specialRequest!.put(fileItem!.getFieldName(), fileItem!.getString());
    

                                    }
                                
                        else {
                            specialRequest!.put(fileItem!.getFieldName(), fileItem);
    

                        }
                            
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("Special Request Data: " +specialRequest!.toString(), this, "processMultipartRequest()");
    

                                    }
                                
this.setSpecial();
    
this.setMap(specialRequest);
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof InvalidContentTypeException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("Using Normal RequestParams", this, "processMultipartRequest()");
    

                                    }
                                
super.setMap(request.getParameterMap());
    

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUESTERROR))
                        
                                    {
                                    this.logUtil!.putF("Should Not Occur", this, "processMultipartRequest()");
    

                                    }
                                
super.setMap(request.getParameterMap());
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

                        if(this.special)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMap() as HashMap<any, any>;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.toHashMap();;
    

                        }
                            
}


}

