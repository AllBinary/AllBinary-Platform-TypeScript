
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
        



import { IOException } from "../../../../../../../java/io/IOException.js";

    
import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { FileItemFactory } from "../../../../../../../org/apache/commons/fileupload/FileItemFactory.js";

    
import { FileItemIterator } from "../../../../../../../org/apache/commons/fileupload/FileItemIterator.js";

    
import { FileUpload } from "../../../../../../../org/apache/commons/fileupload/FileUpload.js";

    
import { FileUploadException } from "../../../../../../../org/apache/commons/fileupload/FileUploadException.js";

    
import { ServletRequestContext } from "../../../../../../../org/apache/commons/fileupload/servlet/ServletRequestContext.js";

    

export class AbFileUpload extends FileUpload {
        
public constructor (fileItemFactory: FileItemFactory)                        

                            : super(fileItemFactory){

            super();
            var fileItemFactory = fileItemFactory


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(FileUploadException::class, IOException::class)
            
    public getItemIterator(request: HttpServletRequest): FileItemIterator{
var request = request



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getItemIterator(new ServletRequestContext(request));

                        ;
    
}


}
                
            

