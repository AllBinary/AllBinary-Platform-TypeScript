
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { ArrayList } from '../../../../../../../java/util/ArrayList.js';
//not GWT import const ArrayList = globalThis.java.util.ArrayList;

      
import { List } from '../../../../../../../java/util/List.js';
//not GWT import const List = globalThis.java.util.List;

      
import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { AbFileItemFactory } from '../../../../../../../org/allbinary/logic/communication/http/AbFileItemFactory.js';
//not GWT import const AbFileItemFactory = globalThis.org.allbinary.logic.communication.http.AbFileItemFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { FileItemIterator } from '../../../../../../../org/apache/commons/fileupload/FileItemIterator.js';
//not GWT import const FileItemIterator = globalThis.org.apache.commons.fileupload.FileItemIterator;

      
import { FileItemStream } from '../../../../../../../org/apache/commons/fileupload/FileItemStream.js';
//not GWT import const FileItemStream = globalThis.org.apache.commons.fileupload.FileItemStream;

      
import { FileItemUtil } from '../../../../../../../org/apache/commons/fileupload/FileItemUtil.js';
//not GWT import const FileItemUtil = globalThis.org.apache.commons.fileupload.FileItemUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFileUpload } from './AbFileUpload.js';
//not GWT import - same folder const AbFileUpload = globalThis.org.allbinary.logic.communication.http.file.upload.AbFileUpload;

                import { HttpFileUploadUtil } from './HttpFileUploadUtil.js';
//not GWT import - same folder const HttpFileUploadUtil = globalThis.org.allbinary.logic.communication.http.file.upload.HttpFileUploadUtil;

                import { AbFileItem } from './AbFileItem.js';
//not GWT import - same folder const AbFileItem = globalThis.org.allbinary.logic.communication.http.file.upload.AbFileItem;

                
export class AbFileUploadFactory
            extends Object
         {
        

    private static readonly instance: AbFileUploadFactory = new AbFileUploadFactory();

    public static getInstance(): AbFileUploadFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFileUploadFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getFileItemStreamList(httpServletRequest: HttpServletRequest): List{

        try {
            
    var fileUpload: AbFileUpload = new AbFileUpload(new AbFileItemFactory());;
    

    var iterator: FileItemIterator = fileUpload!.getItemIterator(httpServletRequest)!;;
    

    var items: List = new ArrayList();;
    

        while(iterator.hasNext())
        {

    var fileItemStream: FileItemStream = iterator.next()!;;
    
HttpFileUploadUtil.log(fileItemStream);
    

    var fileItem: AbFileItem = new AbFileItem(fileItemStream!.getName(), fileItemStream!.getFieldName(), FileItemUtil.getInstance()!.getBytes(fileItemStream));;
    
items.add(fileItem);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return items;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "get()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getFileItemList(httpServletRequest: HttpServletRequest): List{

        try {
            
    var abFileUpload: AbFileUpload = new AbFileUpload(new AbFileItemFactory());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abFileUpload!.parseRequest(httpServletRequest);;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "get()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



