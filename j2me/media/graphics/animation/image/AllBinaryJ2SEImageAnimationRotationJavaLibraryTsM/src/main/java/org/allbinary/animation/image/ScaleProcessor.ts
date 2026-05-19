
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScaleBaseProcessor } from './ScaleBaseProcessor.js';

export class ScaleProcessor extends ScaleBaseProcessor {
        

    private static readonly instance: ScaleProcessor = new ScaleProcessor();

    public static getInstance(): ScaleBaseProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScaleProcessor.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageScaleUtil: ImageScaleUtil = ImageScaleUtil.getInstance()!;

    public update(originalImage: Image, originalImageArray: Image[], ximageToShowArray: Image[], unused: number, scaleX: number, scaleY: number, maxScaleX: number, maxScaleY: number){

        try {
            this.imageScaleUtil!.scale2(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    
}

}


}
                
            

