
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { GenericProfile } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js";

    
import { GenericProfileDataWorkerType } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfileDataWorkerType.js";

    
import { SavedCaptureGenericProfileDataWorkerType } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/SavedCaptureGenericProfileDataWorkerType.js";

    
import { CaptureWorkerInterface } from "../../../../../../org/allbinary/input/media/image/capture/CaptureWorkerInterface.js";

    
import { ScreenCaptureImagesWorker } from "../../../../../../org/allbinary/input/media/image/capture/ScreenCaptureImagesWorker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericProfileCaptureWorkerFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(genericProfile: GenericProfile): CaptureWorkerInterface{
var genericProfile = genericProfile

    var vector: Vector = genericProfile!.getGenericProfileDataWorkerTypeVector()!;
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = vector.get(index); as GenericProfileDataWorkerType;
        
        
;
    

                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.SCREEN_CAPTURE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ScreenCaptureImagesWorker();
    

                                    }
                                
                             else 
                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.SAVED_CAPTURE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SavedCaptureImagesWorker(genericProfileDataWorkerType as SavedCaptureGenericProfileDataWorkerType);
    

                                    }
                                
}




                            throw new Error("No CaptureWorkerInterface specified in GenericProfile")
}

private constructor (){

            super();
        }


}
                
            

