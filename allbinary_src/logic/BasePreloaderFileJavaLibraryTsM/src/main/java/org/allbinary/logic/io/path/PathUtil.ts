
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
        
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

                import { AbFilePath } from './AbFilePath.js';
//not GWT import - same folder const AbFilePath = globalThis.org.allbinary.logic.io.path.AbFilePath;

                import { AbPath } from './AbPath.js';
//not GWT import - same folder const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

                //Used to correct user input for paths
export class PathUtil
            extends Object
         {
        

    private static readonly instance: PathUtil = new PathUtil();

    public static getInstance(): PathUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathUtil.instance;
    
}


    private readonly abPathData: AbPathData = AbPathData.getInstance()!;

    private readonly filePathData: FilePathData = FilePathData.getInstance()!;

private constructor (){

            super();
        }


    public getExtensionWithAbFilePath(abFilePath: AbFilePath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abPathData!.getExtension(abFilePath!.toString());;
    
}


    public getExtensionWithAbPath(abPath: AbPath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abPathData!.getExtension(abPath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getWithoutExtensionWithAbFilePath(abFilePath: AbFilePath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWithoutExtension(abFilePath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getWithoutExtensionWithAbPath(abPath: AbPath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWithoutExtension(abPath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getWithoutExtension(filePath: string): string{

    var indexOfFileExtensionDelmiter: number = this.abPathData!.getExtensionIndex(filePath)!;;
    

    var pathWithoutExtension: string = filePath;;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    pathWithoutExtension= filePath!.substring(0, indexOfFileExtensionDelmiter);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathWithoutExtension;
    
}


    public isValid(path: string): boolean{

                        if(this.isValidStart(path))
                        
                                    {
                                    
                        if(this.isValidEnd(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    isValidStart(path: string): boolean{

                        if(path[0] == this.abPathData!.SEPARATORCHAR || path[0] == '.')
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    isValidEnd(path: string): boolean{

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isEmpty(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(path[path.length -1] == this.abPathData!.SEPARATORCHAR)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public adjustStart(path: string): string{

                        if(!this.isValidStart(path))
                        
                                    {
                                    path= this.abPathData!.SEPARATOR +path;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    public adjustEnd(path: string): string{

                        if(!this.isValidEnd(path))
                        
                                    {
                                    path= path +this.abPathData!.SEPARATOR;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    public adjust(path: string): string{

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isEmpty(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abPathData!.SEPARATOR;
    

                                    }
                                

                        if(path.indexOf("\\") >= 0)
                        
                                    {
                                    path= path.replace('\\', this.abPathData!.SEPARATORCHAR);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


                //@Throws(Exception.constructor)
            
    public removeNameFromPath(path: string): AbPath{

    var endIndex: number = path.lastIndexOf(this.abPathData!.SEPARATOR)!;;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= path.lastIndexOf(this.filePathData!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath.createAbPath();;
    

                                    }
                                

                        if(path.length == endIndex +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removeNameFromPath(path.substring(0, endIndex -1));;
    

                                    }
                                
                        else {
                            
    var pathWithoutName: string = path.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(pathWithoutName, StringUtil.getInstance()!.EMPTY_STRING);
    

                        }
                            
}


}



