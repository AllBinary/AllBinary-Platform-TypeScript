
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
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//sameFolderImports - not GWT import - same folder const AbFile

export class FileFactory
            extends Object
         {
        

    private static readonly instance: FileFactory = new FileFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getInstance$overload2(args[0]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.getInstance$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): FileFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileFactory.instance;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(filePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile.createAbFileFromRawPath(filePath);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(file: AbFile, childFilePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile.createAbFileWithChild(file, childFilePath);;
    
}


                //@Throws(Exception.constructor)
            
    public isFile(path: string): boolean{

    let file: AbFile = AbFile.createAbFile(path)!;;
    

                        if(file.exists())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}

