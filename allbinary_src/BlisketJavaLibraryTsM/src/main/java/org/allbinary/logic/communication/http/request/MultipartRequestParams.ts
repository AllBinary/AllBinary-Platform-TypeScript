
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
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { List } from '../../../../../../java/util/List.js';
      const List = globalThis.java.util.List;

      
//not game specific package import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { AbFileUploadFactory } from '../../../../../../org/allbinary/logic/communication/http/file/upload/AbFileUploadFactory.js';
      const AbFileUploadFactory = globalThis.org.allbinary.logic.communication.http.file.upload.AbFileUploadFactory;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { FileItem } from '../../../../../../org/apache/commons/fileupload/FileItem.js';
      const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
//not game specific package import { InvalidContentTypeException } from '../../../../../../org/apache/commons/fileupload/FileUploadBase/InvalidContentTypeException.js';
      const InvalidContentTypeException = globalThis.org.apache.commons.fileupload.FileUploadBase.InvalidContentTypeException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RequestParams } from './RequestParams.js';

export class MultipartRequestParams extends RequestParams {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private special: boolean = false;

public constructor (request: HttpServletRequest){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.processMultipartRequest(request);
    
}


public constructor (pageContext: PageContext){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.processMultipartRequest(pageContext!.getRequest() as HttpServletRequest);
    
}


    setSpecial(){
this.special= true;
    
}


    processMultipartRequest(request: HttpServletRequest){

        try {
            
    var specialRequest: HashMap<any, any> = new HashMap<any, any>();;
    

    var multipartRequestList: List = AbFileUploadFactory.getInstance()!.getFileItemStreamList(request)!;;
    

                        if(multipartRequestList != 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("FileItem List Size: " +multipartRequestList!.length, this, "processMultipartRequest()");
    

                                    }
                                

    var fileItemArray: any[] = multipartRequestList!.toArray()!;;
    

    var size: number = fileItemArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var fileItem: FileItem = fileItemArray[index]! as FileItem;;
    

    var name: string = fileItem!.getName()!;;
    

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
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("Using Normal RequestParams", this, "processMultipartRequest()");
    

                                    }
                                
super.setMap(request.getParameterMap());
    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUESTERROR))
                        
                                    {
                                    this.logUtil!.putF("Should Not Occur", this, "processMultipartRequest()");
    

                                    }
                                
super.setMap(request.getParameterMap());
    
}
*/
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



