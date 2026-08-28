
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
        



//not game specific package import { IOException } from '../../../../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { FileItemFactory } from '../../../../../../../org/apache/commons/fileupload/FileItemFactory.js';
      const FileItemFactory = globalThis.org.apache.commons.fileupload.FileItemFactory;

      
//not game specific package import { FileItemIterator } from '../../../../../../../org/apache/commons/fileupload/FileItemIterator.js';
      const FileItemIterator = globalThis.org.apache.commons.fileupload.FileItemIterator;

      
//not game specific package import { FileUpload } from '../../../../../../../org/apache/commons/fileupload/FileUpload.js';
      const FileUpload = globalThis.org.apache.commons.fileupload.FileUpload;

      
//not game specific package import { FileUploadException } from '../../../../../../../org/apache/commons/fileupload/FileUploadException.js';
      const FileUploadException = globalThis.org.apache.commons.fileupload.FileUploadException;

      
//not game specific package import { ServletRequestContext } from '../../../../../../../org/apache/commons/fileupload/servlet/ServletRequestContext.js';
      const ServletRequestContext = globalThis.org.apache.commons.fileupload.servlet.ServletRequestContext;

      
















                                        
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



