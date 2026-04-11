
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
        



import { Context } from "../../../../android/content/Context.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    

export class FileStreamFactory
            extends Object
         {
        

    private static readonly SINGLETON: FileStreamFactory = new FileStreamFactory(ResourceUtil.getInstance()!.getContext());
        
        

    public static getInstance(): FileStreamFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private context: any = {}
private constructor (context: Context){

            super();
                //var context = context
this.context= context;
    
}


                //@Throws(Error::class)
            
    public getFileInputStreamInstance(path: string, fileName: string): AbFileInputStream{
    //var path = path
    //var fileName = fileName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFileInputStream(this.getContext()!.openFileInput(fileName));
    
}


                //@Throws(Error::class)
            
    public getFileOutputStreamInstance(path: string, fileName: string): AbFileOutputStream{
    //var path = path
    //var fileName = fileName

    var context: Context = this.getContext()!;
        
        
;
    
context.deleteFile(fileName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFileOutputStream(context.openFileOutput(fileName, 0));
    
}


                //@Throws(Error::class)
            
    public delete(path: string, fileName: string){
    //var path = path
    //var fileName = fileName
this.getContext()!.deleteFile(fileName);
    
}


    getContext(): Context{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return context as Context;
    
}


}
                
            

