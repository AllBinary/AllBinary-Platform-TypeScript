
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoData } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoHttpInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfosData } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

export class PreviewGeneratorStoreFrontContextView extends GeneratorStoreFrontContextView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface();

                         as TransformInfoHttpInterface;
        
        
;
    
httpTransformInfoInterface!.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.PARTIAL, CommonSeps.getInstance()!.SPACE +TransformInfosData.getInstance()!.PREVIEW);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.view(TransformInfosData.getInstance()!.PREVIEW);

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

