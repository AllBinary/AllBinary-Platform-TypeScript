
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
        



import { FilePathData } from '../../../../../org/allbinary/logic/io/file/FilePathData.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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

    var indexOfFileExtensionDelmiter: number = filePath!.lastIndexOf(this.EXTENSION_SEP)!;;
    

    var indexOfLatDelimiter: number = filePath!.lastIndexOf(this.SEPARATORCHAR)!;;
    

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

    var indexOfFileExtensionDelmiter: number = this.getExtensionIndex(filePath)!;;
    

    var extension: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    extension= filePath!.substring(indexOfFileExtensionDelmiter);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return extension;
    
}


    public getExtension(filePath: string): string{

    var indexOfFileExtensionDelmiter: number = this.getExtensionIndex(filePath)!;;
    

    var extension: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(indexOfFileExtensionDelmiter >= 0)
                        
                                    {
                                    extension= filePath!.substring(indexOfFileExtensionDelmiter +1);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return extension;
    
}


    public getNameFromPath(path: string): string{

    var endIndex: number = path.lastIndexOf(this.SEPARATORCHAR)!;;
    

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
                                    
    var categoryName: string = path.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getNameFromPath(categoryName);;
    

                                    }
                                
                        else {
                            
    var categoryName: string = path.substring(endIndex +1)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryName;
    

                        }
                            
}


    public removeNameFromPath(path: string): string{

    var endIndex: number = path.lastIndexOf(this.SEPARATORCHAR)!;;
    

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
                            
    var pathWithoutName: string = path.substring(0, endIndex)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathWithoutName;
    

                        }
                            
}


}
                
            

