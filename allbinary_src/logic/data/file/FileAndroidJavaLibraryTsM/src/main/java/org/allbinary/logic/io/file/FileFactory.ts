
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
        



import { File } from "../../../../../java/io/File.js";

    
import { FileNotFoundException } from "../../../../../java/io/FileNotFoundException.js";

    
import { Context } from "../../../../../android/content/Context.js";

    
import { ResourceUtil } from "../../../../../org/allbinary/data/resource/ResourceUtil.js";

    

export class FileFactory
            extends Object
         {
        

    private static readonly SINGLETON: FileFactory = new FileFactory(ResourceUtil.getInstance()!.getContext());
        
        

    public static getInstance(): FileFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private context: Context
private constructor (context: Context){

            super();
            var context = context
this.context= context;
    
}


                //@Throws(Error::class)
            
    public isFile(path: string): boolean{
var path = path

        try {
            context.openFileInput(path);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public getContext(): Context{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return context;
    
}


                //@Throws(Error::class)
            
    public getFile(filePath: string): AbFile{
var filePath = filePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(filePath, false);
    
}


                //@Throws(Error::class)
            
    public getInstance(file: AbFile, childFilePath: string): AbFile{
var file = file
var childFilePath = childFilePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(file, childFilePath);
    
}


}
                
            

