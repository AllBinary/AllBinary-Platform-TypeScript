
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
        



import { ByteArrayInputStream } from "../../../../../../../../../java/io/ByteArrayInputStream.js";

    
import { AbFile } from "../../../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../../../../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { Directory } from "../../../../../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { FileItem } from "../../../../../../../../../org/apache/commons/fileupload/FileItem.js";

    

export class LogoImageFileUtil
            extends Object
         {
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        

    private readonly fileName: string

    private readonly imageFileAbPath: AbPath
public constructor (imageAbPath: AbPath, imageFile: string){

            super();
                //var imageAbPath = imageAbPath
    //var imageFile = imageFile
this.fileName= imageFile;
    
this.imageFileAbPath= imageAbPath;
    
}


                //@Throws(Error::class)
            
    public saveFiles(fileItem: FileItem){
    //var fileItem = fileItem

                        if(fileName == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Image File Name Was Null")

                                    }
                                

                        if(!this.directory.create(this.imageFileAbPath);

                        )
                        
                                    {
                                    


                            throw new Error("Unable to save file to non creatable directory")

                                    }
                                

    var originalImageFile: AbFile = new AbFile(this.imageFileAbPath!.toString() +fileName);
        
        
;
    
originalImageFile!.createNewFile();
    
FileUtil.getInstance()!.write(new ByteArrayInputStream(fileItem!.get()), originalImageFile);
    
}


}
                
            

