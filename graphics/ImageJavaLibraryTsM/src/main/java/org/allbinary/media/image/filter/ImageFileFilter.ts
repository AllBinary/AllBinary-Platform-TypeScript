
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
        



import { File } from "../../../../../java/io/File.js";

    
import { FileFilter } from "../../../../../javax/swing/filechooser/FileFilter.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageFileFilter extends FileFilter {
        

    public accept(f: File): boolean{
var f = f

                        if(f.isDirectory())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

    var s: string = f.getName()!;
        
        
;
    

    var i: number = s.lastIndexOf('.')!;
        
        
;
    

                        if(i > 0 && i < s.length -1)
                        
                                    {
                                    
    var ext: string = s.substring(i +1)!.lowercase()!;
        
        
;
    

                        if(ext.equals("jpg") || ext.equals("jpeg"))
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Accepts .jpg and .jpeg files";
    
}


}
                
            

