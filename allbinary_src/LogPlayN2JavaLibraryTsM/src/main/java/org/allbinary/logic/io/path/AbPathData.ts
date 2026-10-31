
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
        

//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
type FilePathData<T = any, U = any> = typeof FilePathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof FilePathData;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Used to correct user input for paths
export class AbPathData
            extends Object
         {
        

    private static readonly instance: AbPathData = new AbPathData();

    public static getInstance(): AbPathData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPathData.instance;
    
}


    public readonly EXTENSION_SEP: string = CommonSeps.getInstance()!.PERIOD;

    public readonly SEPARATORCHAR: string = '/';

    public readonly SEPARATOR: string = CommonSeps.getInstance()!.FORWARD_SLASH;

private constructor (){

            super();
        }


    public getExtensionIndex(filePath: string): number{

    let indexOfFileExtensionDelmiter: number = filePath!.lastIndexOf(this.EXTENSION_SEP)!;;
    

    let indexOfLatDelimiter: number = filePath!.lastIndexOf(this.SEPARATORCHAR)!;;
    

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


    public getExtensionWithDot(filePath: string): string{

    let indexOfFileExtensionDelmiter: number = this.getExtensionIndex(filePath)!;;
    

    let extension: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    extension= filePath!.substring(indexOfFileExtensionDelmiter);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return extension;
    
}


    public getExtension(filePath: string): string{

    let indexOfFileExtensionDelmiter: number = this.getExtensionIndex(filePath)!;;
    

    let extension: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    extension= filePath!.substring(indexOfFileExtensionDelmiter +1);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return extension;
    
}


    public getNameFromPath(path: string): string{

    let endIndex: number = path.lastIndexOf(this.SEPARATORCHAR)!;;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= path.lastIndexOf(FilePathData.getInstance()!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    

                                    }
                                

                        if(path.length == endIndex +1)
                        
                                    {
                                    
    let categoryName: string = path.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getNameFromPath(categoryName);;
    

                                    }
                                
                        else {
                            
    let categoryName: string = path.substring(endIndex +1)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryName;
    

                        }
                            
}


    public removeNameFromPath(path: string): string{

    let endIndex: number = path.lastIndexOf(this.SEPARATORCHAR)!;;
    

                        if(endIndex < 0)
                        
                                    {
                                    endIndex= path.lastIndexOf(FilePathData.getInstance()!.SEPARATORCHAR);
    

                                    }
                                

                        if(endIndex < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

                        if(path.length == endIndex +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.removeNameFromPath(path.substring(0, endIndex -1));;
    

                                    }
                                
                        else {
                            
    let pathWithoutName: string = path.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathWithoutName;
    

                        }
                            
}


}

