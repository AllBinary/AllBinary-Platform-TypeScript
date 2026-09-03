
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { AbstractInputAutomationWorker } from '../../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationWorker.js';
      //not GWT import const AbstractInputAutomationWorker = globalThis.org.allbinary.input.automation.module.AbstractInputAutomationWorker;

      
import { InputAutomationActionInterface } from '../../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
      //not GWT import const InputAutomationActionInterface = globalThis.org.allbinary.input.automation.module.InputAutomationActionInterface;

      
import { GenericProfileAction } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js';
      //not GWT import const GenericProfileAction = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileAction;

      
import { GenericProfileActions } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js';
      //not GWT import const GenericProfileActions = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActions;

      
import { GenericProfileActionScript } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js';
      //not GWT import const GenericProfileActionScript = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GenericProfileActionScript;

      
import { CapturedBufferedImagesCacheSingleton } from '../../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js';
      //not GWT import const CapturedBufferedImagesCacheSingleton = globalThis.org.allbinary.input.media.image.capture.CapturedBufferedImagesCacheSingleton;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { J2SECacheInterface } from '../../../../../../../org/allbinary/logic/util/cache/J2SECacheInterface.js';
      //not GWT import const J2SECacheInterface = globalThis.org.allbinary.logic.util.cache.J2SECacheInterface;

      
import { ImageComparatorConstraintsInterface } from '../../../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
      //not GWT import const ImageComparatorConstraintsInterface = globalThis.org.allbinary.media.image.comparison.ImageComparatorConstraintsInterface;

      
import { MotionRectangleConstraintsInterface } from '../../../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js';
      //not GWT import const MotionRectangleConstraintsInterface = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangleConstraintsInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TestInputAutomationCaptureWorker extends AbstractInputAutomationWorker {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private genericProfileActions: GenericProfileActions;

    private readonly MESSAGE: string = "GenericInputAutomationCaptureWorker";

    private readonly PROCESS_DATA_WORKER_RESULTS: string = "processDataWorkerResults";

    private readonly IMAGE_AVAILABLE_SO_PROCESSING: string = "Image Available so processing";

    private readonly IMAGE_NOT_AVAILABLE: string = "Image Not Available";

public constructor (inputAutomationActionInterface: InputAutomationActionInterface, genericProfileActions: GenericProfileActions, imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface, motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface){
            super(inputAutomationActionInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.MESSAGE, this, this.commonStrings!.CONSTRUCTOR);
    
this.setGenericProfileActions(genericProfileActions);
    
}


                //@Throws(Exception.constructor)
            
    public processDataWorkerResults(){

    var cacheInterface: J2SECacheInterface = CapturedBufferedImagesCacheSingleton.getInstance() as J2SECacheInterface;;
    

                        if(cacheInterface!.keySet()!.size() > 0)
                        
                                    {
                                    this.logUtil!.putF(this.IMAGE_AVAILABLE_SO_PROCESSING, this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var anyType: any = cacheInterface!.keySet()!.()[0]!;;
    

    var hashMap: HashMap<any, any> = this.getGenericProfileActions()!.getHashMap()!;;
    

    var set: Set = hashMap!.keys()!;;
    

    var actionNameArray: any[] = set.toArray()!;;
    

    var size: number = actionNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var actionNameString: string = actionNameArray[index]! as string;;
    

    var genericProfileAction: GenericProfileAction = hashMap!.get(actionNameString) as GenericProfileAction;;
    

    var genericProfileActionScript: GenericProfileActionScript = genericProfileAction!.getGenericProfileActionScript()!;;
    

    var vector: BasicArrayList = genericProfileActionScript!.getProfileActionConditionInterfaceVector()!;;
    
}

cacheInterface!.get(anyType);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(this.IMAGE_NOT_AVAILABLE, this, this.PROCESS_DATA_WORKER_RESULTS);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public process(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.PROCESS);
    
this.startDataWorkers();
    
this.processDataWorkerResults();
    
}


    public getGenericProfileActions(): GenericProfileActions{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActions;
    
}


    public setGenericProfileActions(genericProfileActions: GenericProfileActions){
this.genericProfileActions= genericProfileActions;
    
}


}



