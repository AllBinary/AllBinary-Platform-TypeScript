
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CacheableInterface } from "../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageComparisonResult } from "./ImageComparisonResult.js";

export class ImageComparisonResultFrameCacheable
            extends Object
         implements CacheableInterface {
        

    private frame: Long

    private imageComparisonResult: ImageComparisonResult
public constructor (imageComparisonResult: ImageComparisonResult, frame: Long){

            super();
            var imageComparisonResult = imageComparisonResult
var frame = frame
this.setImageComparisonResult(imageComparisonResult);
    
this.frame= frame;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frame;
    
}


    public setFrame(frame: Long){
var frame = frame
this.frame= frame;
    
}


    public getImageComparisonResult(): ImageComparisonResult{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageComparisonResult;
    
}


    public setImageComparisonResult(imageComparisonResult: ImageComparisonResult){
var imageComparisonResult = imageComparisonResult
this.imageComparisonResult= imageComparisonResult;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(" Frame: ");
    
stringBuffer!.appendlong(this.getFrame());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

