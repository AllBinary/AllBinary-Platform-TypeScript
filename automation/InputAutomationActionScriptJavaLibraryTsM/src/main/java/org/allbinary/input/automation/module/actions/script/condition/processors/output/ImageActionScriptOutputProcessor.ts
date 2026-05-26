
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
        



            import { Object } from '../../../../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../../../java/lang/Long.js';
        
import { Vector } from '../../../../../../../../../../java/util/Vector.js';
      
import { InputImageIOInterfaceFactory } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageIOInterfaceFactory.js';
      
import { InputImageType } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
      
import { LogUtil } from '../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { ImageIOInterface } from '../../../../../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
      
import { CommonStrings } from '../../../../../../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageTypes } from './ImageTypes.js';
import { ImageActionScriptOutputInterface } from './ImageActionScriptOutputInterface.js';

export class ImageActionScriptOutputProcessor
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static process(imageActionScriptOutputInterface: ImageActionScriptOutputInterface, frame: Long){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF("Start - Processing at: " +imageActionScriptOutputInterface!.toString(), "ImageActionScriptOutputProcessor", commonStrings!.PROCESS);
    

    var imageTypes: ImageTypes = imageActionScriptOutputInterface!.getImageTypes()!;;
    

    var vector: Vector = imageTypes!.getVector()!;;
    

    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var imageType: InputImageType = vector.get(index) as InputImageType;;
    

    var imageIOInterface: ImageIOInterface = InputImageIOInterfaceFactory.getInstance(imageType)!;;
    
imageIOInterface!.save(frame);
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


}
                
            

