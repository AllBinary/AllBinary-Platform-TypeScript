
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoData } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
import { TransformInfoHttpInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfosData } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
//not GWT import const TransformInfosData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfosData;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeneratorStoreFrontContextView } from './GeneratorStoreFrontContextView.js';
//not GWT import - same folder const GeneratorStoreFrontContextView = globalThis.views.business.context.modules.storefront.generator.GeneratorStoreFrontContextView;

                
export class PreviewGeneratorStoreFrontContextView extends GeneratorStoreFrontContextView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            
    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    
httpTransformInfoInterface!.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.PARTIAL, CommonSeps.getInstance()!.SPACE +TransformInfosData.getInstance()!.PREVIEW);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.view(TransformInfosData.getInstance()!.PREVIEW);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



