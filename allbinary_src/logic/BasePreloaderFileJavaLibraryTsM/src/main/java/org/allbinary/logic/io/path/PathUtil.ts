
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
        



import { FilePathData } from "../../../../../org/allbinary/logic/io/file/FilePathData.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class PathUtil
            extends Object
         {
        

    private static readonly instance: PathUtil = new PathUtil();
        
        

    public static getInstance(): PathUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly abPathData: AbPathData = AbPathData.getInstance()!;
        
        

    private readonly filePathData: FilePathData = FilePathData.getInstance()!;
        
        
private constructor (){

            super();
            }


    getExtensionIndex(filePath: string): number{
var filePath = filePath

    var indexOfFileExtensionDelmiter: number = filePath!.lastIndexOf(abPathData!.EXTENSION_SEP)!;
        
        
;
    

    var indexOfLatDelimiter: number = filePath!.lastIndexOf(abPathData!.SEPARATORCHAR)!;
        
        
;
    

                        if(indexOfFileExtensionDelmiter < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                                    }
                                

                        if(indexOfFileExtensionDelmiter < indexOfLatDelimiter)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexOfFileExtensionDelmiter;
    
}


    public getExtension(abFilePath: AbFilePath): string{
var abFilePath = abFilePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getExtension(abFilePath!.toString());

                        ;
    
}


    public getExtension(abPath: AbPath): string{
var abPath = abPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getExtension(abPath!.toString());

                        ;
    
}


    public getExtension(filePath: string): string{
var filePath = filePath

    var indexOfFileExtensionDelmiter: number = this.getExtensionIndex(filePath)!;
        
        
;
    

    var extension: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    extension= filePath!.substring(indexOfFileExtensionDelmiter +1);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return extension;
    
}


                //@Throws(Error::class)
            
    public getWithoutExtension(abFilePath: AbFilePath): string{
var abFilePath = abFilePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWithoutExtension(abFilePath!.toString());

                        ;
    
}


                //@Throws(Error::class)
            
    public getWithoutExtension(abPath: AbPath): string{
var abPath = abPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWithoutExtension(abPath!.toString());

                        ;
    
}


                //@Throws(Error::class)
            
    public getWithoutExtension(filePath: string): string{
var filePath = filePath

    var indexOfFileExtensionDelmiter: number = this.getExtensionIndex(filePath)!;
        
        
;
    

    var pathWithoutExtension: string = filePath;
        
        
;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    pathWithoutExtension= filePath!.substring(0, indexOfFileExtensionDelmiter);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathWithoutExtension;
    
}


    public isValid(path: string): boolean{
var path = path

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
var path = path

                        if(path[0] == abPathData!.SEPARATORCHAR || path[0] == '.')
                        
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
var path = path

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(path[path.length -1] == abPathData!.SEPARATORCHAR)
                        
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
var path = path

                        if(!this.isValidStart(path);

                        )
                        
                                    {
                                    path= abPathData!.SEPARATOR +path;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    public adjustEnd(path: string): string{
var path = path

                        if(!this.isValidEnd(path);

                        )
                        
                                    {
                                    path= path +abPathData!.SEPARATOR;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    public adjust(path: string): string{
var path = path

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abPathData!.SEPARATOR;
    

                                    }
                                

                        if(path.indexOf("\\") >= 0)
                        
                                    {
                                    path= path.replace('\\', abPathData!.SEPARATORCHAR);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getNameFromPath(categoryPath: string): string{
var categoryPath = categoryPath

    var endIndex: number = categoryPath!.lastIndexOf(abPathData!.SEPARATOR)!;
        
        
;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= categoryPath!.lastIndexOf(filePathData!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryPath;
    

                        if(categoryPath!.length == endIndex +1)
                        
                                    {
                                    
    var categoryName: string = categoryPath!.substring(0, endIndex)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getNameFromPath(categoryName);

                        ;
    

                                    }
                                
                        else {
                            
    var categoryName: string = categoryPath!.substring(endIndex +1)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryName;
    

                        }
                            
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeNameFromPath(path: string): AbPath{
var path = path

    var endIndex: number = path.lastIndexOf(abPathData!.SEPARATOR)!;
        
        
;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= path.lastIndexOf(filePathData!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath();
    

                                    }
                                

                        if(path.length == endIndex +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removeNameFromPath(path.substring(0, endIndex -1));

                        ;
    

                                    }
                                
                        else {
                            
    var categoryName: string = path.substring(0, endIndex)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(categoryName);
    

                        }
                            
}


}
                
            

