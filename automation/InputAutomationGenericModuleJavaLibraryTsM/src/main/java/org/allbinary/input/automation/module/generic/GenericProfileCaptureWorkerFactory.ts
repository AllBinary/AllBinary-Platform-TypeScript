
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
        
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { GenericProfile } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js';
      const GenericProfile = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfile;

      
//not game specific package import { GenericProfileDataWorkerType } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfileDataWorkerType.js';
      const GenericProfileDataWorkerType = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfileDataWorkerType;

      
//not game specific package import { SavedCaptureGenericProfileDataWorkerType } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/SavedCaptureGenericProfileDataWorkerType.js';
      const SavedCaptureGenericProfileDataWorkerType = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.SavedCaptureGenericProfileDataWorkerType;

      
//not game specific package import { CaptureWorkerInterface } from '../../../../../../org/allbinary/input/media/image/capture/CaptureWorkerInterface.js';
      const CaptureWorkerInterface = globalThis.org.allbinary.input.media.image.capture.CaptureWorkerInterface;

      
//not game specific package import { ScreenCaptureImagesWorker } from '../../../../../../org/allbinary/input/media/image/capture/ScreenCaptureImagesWorker.js';
      const ScreenCaptureImagesWorker = globalThis.org.allbinary.input.media.image.capture.ScreenCaptureImagesWorker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SavedCaptureImagesWorker } from './SavedCaptureImagesWorker.js';

export class GenericProfileCaptureWorkerFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(genericProfile: GenericProfile): CaptureWorkerInterface{

    var vector: Vector = genericProfile!.getGenericProfileDataWorkerTypeVector()!;;
    

    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = vector.get(index) as GenericProfileDataWorkerType;;
    

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




                            throw new Exception("No CaptureWorkerInterface specified in GenericProfile");
                    
}


private constructor (){

            super();
        }


}



