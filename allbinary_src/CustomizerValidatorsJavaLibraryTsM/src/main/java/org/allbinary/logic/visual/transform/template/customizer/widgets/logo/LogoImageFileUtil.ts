
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { ByteArrayInputStream } from '../../../../../../../../../java/io/ByteArrayInputStream.js';
      const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
//not game specific package import { AbFile } from '../../../../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileUtil } from '../../../../../../../../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { Directory } from '../../../../../../../../../org/allbinary/logic/io/file/directory/Directory.js';
      const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
//not game specific package import { AbPath } from '../../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { FileItem } from '../../../../../../../../../org/apache/commons/fileupload/FileItem.js';
      const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LogoImageFileUtil
            extends Object
         {
        

    private readonly directory: Directory = Directory.getInstance()!;

    private readonly fileName: string;

    private readonly imageFileAbPath: AbPath;

public constructor (imageAbPath: AbPath, imageFile: string){

            super();
        this.fileName= imageFile;
    
this.imageFileAbPath= imageAbPath;
    
}


                //@Throws(Exception.constructor)
            
    public saveFiles(fileItem: FileItem){

                        if(this.fileName == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Image File Name Was Null");
                    

                                    }
                                

                        if(!this.directory.create(this.imageFileAbPath))
                        
                                    {
                                    


                            throw new Exception("Unable to save file to non creatable directory");
                    

                                    }
                                

    var originalImageFile: AbFile = AbFile.createAbFile(this.imageFileAbPath!.toString() +this.fileName)!;;
    
originalImageFile!.createNewFile();
    
FileUtil.getInstance()!.write(new ByteArrayInputStream(fileItem!.get()), originalImageFile);
    
}


}



