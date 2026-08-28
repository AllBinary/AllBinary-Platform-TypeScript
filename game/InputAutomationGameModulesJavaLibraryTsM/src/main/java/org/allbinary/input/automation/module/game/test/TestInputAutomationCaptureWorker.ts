
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Set } from '../../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { AbstractInputAutomationWorker } from '../../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationWorker.js';
      const AbstractInputAutomationWorker = globalThis.org.allbinary.input.automation.module.AbstractInputAutomationWorker;

      
//not game specific package import { InputAutomationActionInterface } from '../../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
      const InputAutomationActionInterface = globalThis.org.allbinary.input.automation.module.InputAutomationActionInterface;

      
//not game specific package import { GenericProfileAction } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js';
      const GenericProfileAction = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileAction;

      
//not game specific package import { GenericProfileActions } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js';
      const GenericProfileActions = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActions;

      
//not game specific package import { GenericProfileActionScript } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js';
      const GenericProfileActionScript = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GenericProfileActionScript;

      
//not game specific package import { CapturedBufferedImagesCacheSingleton } from '../../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js';
      const CapturedBufferedImagesCacheSingleton = globalThis.org.allbinary.input.media.image.capture.CapturedBufferedImagesCacheSingleton;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { J2SECacheInterface } from '../../../../../../../org/allbinary/logic/util/cache/J2SECacheInterface.js';
      const J2SECacheInterface = globalThis.org.allbinary.logic.util.cache.J2SECacheInterface;

      
//not game specific package import { ImageComparatorConstraintsInterface } from '../../../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
      const ImageComparatorConstraintsInterface = globalThis.org.allbinary.media.image.comparison.ImageComparatorConstraintsInterface;

      
//not game specific package import { MotionRectangleConstraintsInterface } from '../../../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js';
      const MotionRectangleConstraintsInterface = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangleConstraintsInterface;

      
















                                        
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
    

    var vector: Vector = genericProfileActionScript!.getProfileActionConditionInterfaceVector()!;;
    
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



