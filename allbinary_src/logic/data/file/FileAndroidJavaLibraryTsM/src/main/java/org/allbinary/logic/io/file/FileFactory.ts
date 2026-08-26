
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { FileNotFoundException } from '../../../../../java/io/FileNotFoundException.js';
      const FileNotFoundException = globalThis.java.io.FileNotFoundException;

      
//not game specific package import { Context } from '../../../../../android/content/Context.js';
      const Context = globalThis.android.content.Context;

      
//not game specific package import { ResourceUtil } from '../../../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';

export class FileFactory
            extends Object
         {
        

    private static readonly SINGLETON: FileFactory = new FileFactory(ResourceUtil.getInstance()!.getContext());

    public static getInstance(): FileFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileFactory.SINGLETON;
    
}


    private context: Context;

private constructor (context: Context){

            super();
        this.context= context;
    
}


                //@Throws(Exception.constructor)
            
    public isFile(path: string): boolean{

        try {
            this.context.openFileInput(path);
    



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
                        return this.context;
    
}


                //@Throws(Exception.constructor)
            
    public getFile(filePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile.createAbFileFromRawPath(filePath);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(file: AbFile, childFilePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile.createAbFileWithChild(file, childFilePath);;
    
}


}
                
            

