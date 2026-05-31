
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Context } from '../../../../android/content/Context.js';
      
import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFileInputStream } from './AbFileInputStream.js';
import { AbFileOutputStream } from './AbFileOutputStream.js';

export class FileStreamFactory
            extends Object
         {
        

    private static SINGLETON: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): FileStreamFactory{

                        if(FileStreamFactory.SINGLETON == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    FileStreamFactory.SINGLETON= new FileStreamFactory(ResourceUtil.getInstance()!.getContext());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileStreamFactory.SINGLETON as FileStreamFactory;
    
}


    private context: any;

private constructor (context: Context){

            super();
        this.context= context;
    
}


                //@Throws(Exception.constructor)
            
    public getFileInputStreamInstance(path: string, fileName: string): AbFileInputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileInputStream(this.getContext()!.openFileInput(fileName));
    
}


                //@Throws(Exception.constructor)
            
    public getFileOutputStreamInstance(path: string, fileName: string): AbFileOutputStream{

    var context: Context = this.getContext()!;;
    
context.deleteFile(fileName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFileOutputStream(context.openFileOutput(fileName, 0));
    
}


                //@Throws(Exception.constructor)
            
    public delete(path: string, fileName: string){
this.getContext()!.deleteFile(fileName);
    
}


    getContext(): Context{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.context as Context;
    
}


}
                
            

