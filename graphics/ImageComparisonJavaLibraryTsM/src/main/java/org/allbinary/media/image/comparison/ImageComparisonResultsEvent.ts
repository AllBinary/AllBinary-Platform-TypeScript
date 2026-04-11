
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
        



import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class ImageComparisonResultsEvent extends AllBinaryEventObject {
        

    private imageComparisonResult: ImageComparisonResult
public constructor (anyType: any = {}, imageComparisonInfo: ImageComparisonResult)                        

                            : super(anyType){

            super();
            var anyType = anyType
var imageComparisonInfo = imageComparisonInfo


                            //For kotlin this is before the body of the constructor.
                    
this.setImageComparisonResult(imageComparisonInfo);
    
}


    public getImageComparisonResult(): ImageComparisonResult{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageComparisonResult;
    
}


    public setImageComparisonResult(imageComparisonResult: ImageComparisonResult){
var imageComparisonResult = imageComparisonResult
this.imageComparisonResult= imageComparisonResult;
    
}


}
                
            

