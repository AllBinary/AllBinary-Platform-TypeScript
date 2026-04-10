
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { List } from "../../../../../../java/util/List.js";

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { AbFileUploadFactory } from "../../../../../../org/allbinary/logic/communication/http/file/upload/AbFileUploadFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { FileItem } from "../../../../../../org/apache/commons/fileupload/FileItem.js";

    
import { InvalidContentTypeException } from "../../../../../../org/apache/commons/fileupload/FileUploadBase/InvalidContentTypeException.js";

    

export class MultipartRequestParams extends RequestParams {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private special: boolean = false;
        
        
public constructor (request: HttpServletRequest)                        

                            : super(){

            super();
            var request = request


                            //For kotlin this is before the body of the constructor.
                    
this.processMultipartRequest(request)
}

public constructor (pageContext: PageContext)                        

                            : super(){

            super();
            var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
this.processMultipartRequest(pageContext!.getRequest() as HttpServletRequest)
}


    setSpecial(){
this.special= true
}


    processMultipartRequest(request: HttpServletRequest){
var request = request

        try {
            
    var specialRequest: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var multipartRequestList: List = AbFileUploadFactory.getInstance()!.getFileItemStreamList(request)!;
        
        


    
                        if(multipartRequestList != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("FileItem List Size: " +multipartRequestList!.size, this, "processMultipartRequest()")

                                    }
                                

    var fileItemArray: any = {}[] = multipartRequestList!.toArray()!;
        
        


    var size: number = fileItemArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var fileItem: FileItem = fileItemArray[index]! as FileItem;
        
        


    var name: string = fileItem!.getName()!;
        
        


    
                        if(StringValidationUtil.getInstance()!.isEmpty(name))
                        
                                    {
                                    put(fileItem!.getFieldName(), fileItem!.getString())

                                    }
                                
                        else {
                            put(fileItem!.getFieldName(), fileItem)

                        }
                            
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Special Request Data: " +specialRequest!.toString(), this, "processMultipartRequest()")

                                    }
                                
this.setSpecial()
this.setMap(specialRequest)

                                    }
                                
} catch(e: InvalidContentTypeException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Using Normal RequestParams", this, "processMultipartRequest()")

                                    }
                                
setMap(request.getParameterMap())
}
 catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUESTERROR))
                        
                                    {
                                    put("Should Not Occur", this, "processMultipartRequest()")

                                    }
                                
setMap(request.getParameterMap())
}

}


                @Throws(Exception::class)
            
    public toHashMap(): HashMap<Any, Any>{

    
                        if(this.special)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMap() as HashMap<Any, Any>;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.toHashMap();
    

                        }
                            
}


}
                
            

