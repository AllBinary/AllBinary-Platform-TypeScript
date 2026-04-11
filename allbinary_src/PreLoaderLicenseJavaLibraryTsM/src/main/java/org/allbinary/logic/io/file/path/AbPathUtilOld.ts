
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FilePathData } from "../../../../../../org/allbinary/logic/io/file/FilePathData.js";

    
import { AbFilePath } from "../../../../../../org/allbinary/logic/io/path/AbFilePath.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class AbPathUtilOld
            extends Object
         {
        

    private static readonly instance: AbPathUtilOld = new AbPathUtilOld();
        
        

    public static getInstance(): AbPathUtilOld{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly MIN: number = 4;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abPathData: AbPathData = AbPathData.getInstance()!;
        
        

    private readonly filePathData: FilePathData = FilePathData.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getExtension(abFilePath: AbFilePath): string{
var abFilePath = abFilePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getExtension(abFilePath!.toString());

                        ;
    
}


                //@Throws(Error::class)
            
    public getExtension(abPath: AbPath): string{
var abPath = abPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getExtension(abPath!.toString());

                        ;
    
}


                //@Throws(Error::class)
            
    public getExtension(filePath: string): string{
var filePath = filePath

                        if(filePath!.length < MIN)
                        
                                    {
                                    


                            throw new Error("Could not be a file path since its less that 4 characters")

                                    }
                                

    var beginIndex: number = filePath!.length -MIN;
        
        
;
    

    var extension: string = filePath!.substring(beginIndex +1)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("FileExtension: " +extension, this, "getExtension()");
    

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

                        if(filePath!.length < MIN)
                        
                                    {
                                    


                            throw new Error("Could not be a file path since its less that 4 characters")

                                    }
                                

    var endIndex: number = filePath!.length -MIN;
        
        
;
    

    var pathWithoutExtension: string = filePath!.substring(0, endIndex)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("FileWithoutExtension: " +pathWithoutExtension, this, "getWithoutExtension()");
    

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

                        if(path[0] == abPathData!.SEPARATORCHAR)
                        
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

                        if(StringValidationUtil.getInstance()!.isEmpty(path))
                        
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

                        if(StringValidationUtil.getInstance()!.isEmpty(path))
                        
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

    public removeNameFromPath(categoryPath: string): AbPath{
var categoryPath = categoryPath

    var endIndex: number = categoryPath!.lastIndexOf(abPathData!.SEPARATOR)!;
        
        
;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= categoryPath!.lastIndexOf(filePathData!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath();
    

                                    }
                                

                        if(categoryPath!.length == endIndex +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removeNameFromPath(categoryPath!.substring(0, endIndex -1));

                        ;
    

                                    }
                                
                        else {
                            
    var categoryName: string = categoryPath!.substring(0, endIndex)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(categoryName);
    

                        }
                            
}


}
                
            

