
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

        


import { IOException } from '../../../../../../../java/io/IOException.js';
//not GWT import const IOException = globalThis.java.io.IOException;

      
import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { FileItemFactory } from '../../../../../../../org/apache/commons/fileupload/FileItemFactory.js';
//not GWT import const FileItemFactory = globalThis.org.apache.commons.fileupload.FileItemFactory;

      
import { FileItemIterator } from '../../../../../../../org/apache/commons/fileupload/FileItemIterator.js';
//not GWT import const FileItemIterator = globalThis.org.apache.commons.fileupload.FileItemIterator;

      
import { FileUpload } from '../../../../../../../org/apache/commons/fileupload/FileUpload.js';
//not GWT import const FileUpload = globalThis.org.apache.commons.fileupload.FileUpload;

      
import { FileUploadException } from '../../../../../../../org/apache/commons/fileupload/FileUploadException.js';
//not GWT import const FileUploadException = globalThis.org.apache.commons.fileupload.FileUploadException;

      
import { ServletRequestContext } from '../../../../../../../org/apache/commons/fileupload/servlet/ServletRequestContext.js';
//not GWT import const ServletRequestContext = globalThis.org.apache.commons.fileupload.servlet.ServletRequestContext;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileUpload extends FileUpload {
        

public constructor (fileItemFactory: FileItemFactory){
            super(fileItemFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(FileUploadException.constructor, IOException.constructor)
            
    public getItemIterator(request: HttpServletRequest): FileItemIterator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getItemIterator(new ServletRequestContext(request));;
    
}


}



