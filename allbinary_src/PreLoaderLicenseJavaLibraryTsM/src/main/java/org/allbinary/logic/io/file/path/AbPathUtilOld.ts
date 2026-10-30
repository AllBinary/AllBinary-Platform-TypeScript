
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
type FilePathData<T = any, U = any> = typeof FilePathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof FilePathData;

import { AbFilePath } from '../../../../../../org/allbinary/logic/io/path/AbFilePath.js';
//not GWT import const AbFilePath

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Used to correct user input for paths
export class AbPathUtilOld
            extends Object
         {
        

    private static readonly instance: AbPathUtilOld = new AbPathUtilOld();

    public static getInstance(): AbPathUtilOld{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPathUtilOld.instance;
    
}


    private static readonly MIN: number = 4;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abPathData: AbPathData = AbPathData.getInstance()!;

    private readonly filePathData: FilePathData = FilePathData.getInstance()!;

private constructor (){

            super();
        }

getExtension(...args: any[]): any {
   
    if (args.length === 1) return this.getExtension$overload1(args[0]);
   
    if (args.length === 1) return this.getExtension$overload2(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getExtension$overload3(args[0]);
   
   throw new TypeError('No matching overload: getExtension'); }
  
                //@Throws(Exception.constructor)
            
    public getExtension$overload1(abFilePath: AbFilePath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getExtension(abFilePath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getExtension$overload2(abPath: AbPath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getExtension(abPath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getExtension$overload3(filePath: string): string{

                        if(filePath!.length < AbPathUtilOld.MIN)
                        
                                    {
                                    


                            throw new Exception("Could not be a file path since its less that 4 characters");
                    

                                    }
                                

    let beginIndex: number = filePath!.length -AbPathUtilOld.MIN;;
    

    let extension: string = filePath!.substring(beginIndex +1)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("FileExtension: " +extension, this, "getExtension()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return extension;
    
}

getWithoutExtension(...args: any[]): any {
   
    if (args.length === 1) return this.getWithoutExtension$overload1(args[0]);
   
    if (args.length === 1) return this.getWithoutExtension$overload2(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getWithoutExtension$overload3(args[0]);
   
   throw new TypeError('No matching overload: getWithoutExtension'); }
  
                //@Throws(Exception.constructor)
            
    public getWithoutExtension$overload1(abFilePath: AbFilePath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWithoutExtension(abFilePath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getWithoutExtension$overload2(abPath: AbPath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWithoutExtension(abPath!.toString());;
    
}


                //@Throws(Exception.constructor)
            
    public getWithoutExtension$overload3(filePath: string): string{

                        if(filePath!.length < AbPathUtilOld.MIN)
                        
                                    {
                                    


                            throw new Exception("Could not be a file path since its less that 4 characters");
                    

                                    }
                                

    let endIndex: number = filePath!.length -AbPathUtilOld.MIN;;
    

    let pathWithoutExtension: string = filePath!.substring(0, endIndex)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("FileWithoutExtension: " +pathWithoutExtension, this, "getWithoutExtension()");
    

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

                        if(path[0] == this.abPathData!.SEPARATORCHAR)
                        
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

                        if(StringValidationUtil.getInstance()!.isEmpty(path))
                        
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

                        if(StringValidationUtil.getInstance()!.isEmpty(path))
                        
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

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getNameFromPath(categoryPath: string): string{

    let endIndex: number = categoryPath!.lastIndexOf(this.abPathData!.SEPARATOR)!;;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= categoryPath!.lastIndexOf(this.filePathData!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryPath;
    

                        if(categoryPath!.length == endIndex +1)
                        
                                    {
                                    
    let categoryName: string = categoryPath!.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getNameFromPath(categoryName);;
    

                                    }
                                
                        else {
                            
    let categoryName: string = categoryPath!.substring(endIndex +1)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryName;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeNameFromPath(categoryPath: string): AbPath{

    let endIndex: number = categoryPath!.lastIndexOf(this.abPathData!.SEPARATOR)!;;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= categoryPath!.lastIndexOf(this.filePathData!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath.createAbPath();;
    

                                    }
                                

                        if(categoryPath!.length == endIndex +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removeNameFromPath(categoryPath!.substring(0, endIndex -1));;
    

                                    }
                                
                        else {
                            
    let categoryName: string = categoryPath!.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(categoryName, StringUtil.getInstance()!.EMPTY_STRING);
    

                        }
                            
}


}

