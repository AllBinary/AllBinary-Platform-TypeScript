
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
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Set } from '../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { AbstractInputAutomationWorker } from '../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationWorker.js';
      const AbstractInputAutomationWorker = globalThis.org.allbinary.input.automation.module.AbstractInputAutomationWorker;

      
//not game specific package import { InputAutomationActionInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
      const InputAutomationActionInterface = globalThis.org.allbinary.input.automation.module.InputAutomationActionInterface;

      
//not game specific package import { GenericProfile } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js';
      const GenericProfile = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfile;

      
//not game specific package import { GenericProfileDataWorkerType } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfileDataWorkerType.js';
      const GenericProfileDataWorkerType = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfileDataWorkerType;

      
//not game specific package import { GenericProfileAction } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js';
      const GenericProfileAction = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileAction;

      
//not game specific package import { GenericProfileActionScript } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js';
      const GenericProfileActionScript = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GenericProfileActionScript;

      
//not game specific package import { CapturedBufferedImagesCacheSingleton } from '../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js';
      const CapturedBufferedImagesCacheSingleton = globalThis.org.allbinary.input.media.image.capture.CapturedBufferedImagesCacheSingleton;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { J2SECacheInterface } from '../../../../../../org/allbinary/logic/util/cache/J2SECacheInterface.js';
      const J2SECacheInterface = globalThis.org.allbinary.logic.util.cache.J2SECacheInterface;

      
//not game specific package import { ImageComparatorConstraintsInterface } from '../../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
      const ImageComparatorConstraintsInterface = globalThis.org.allbinary.media.image.comparison.ImageComparatorConstraintsInterface;

      
//not game specific package import { ImageComparisonWorker } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonWorker.js';
      const ImageComparisonWorker = globalThis.org.allbinary.media.image.comparison.ImageComparisonWorker;

      
//not game specific package import { MotionRectangleConstraintsInterface } from '../../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js';
      const MotionRectangleConstraintsInterface = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangleConstraintsInterface;

      
//not game specific package import { MotionRectanglesWorker } from '../../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesWorker.js';
      const MotionRectanglesWorker = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesWorker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileCaptureWorkerFactory } from './GenericProfileCaptureWorkerFactory.js';
import { CaptureWorkerUtil } from './CaptureWorkerUtil.js';

export class GenericInputAutomationWorker extends AbstractInputAutomationWorker {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly PROCESS_DATA_WORKER_RESULTS: string = "processDataWorkerResults";

    private lastFrame: Long = new Long( -1);

    private frame: Long;

    private genericProfile: GenericProfile;

public constructor (inputAutomationActionInterface: InputAutomationActionInterface, genericProfile: GenericProfile, motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface, imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface){
            super(inputAutomationActionInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.setCaptureWorker(GenericProfileCaptureWorkerFactory.getInstance(genericProfile));
    
this.setInputAutomationActionInterface(inputAutomationActionInterface);
    
this.setImageComparisonWorker(new ImageComparisonWorker(imageComparatorConstraintsInterface));
    
this.setMotionRectanglesWorker(new MotionRectanglesWorker(motionRectangleConstraintsInterface));
    
this.setGenericProfile(genericProfile);
    

    var vector: Vector = this.getGenericProfile()!.getGenericProfileDataWorkerTypeVector()!;;
    

    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = vector.get(index) as GenericProfileDataWorkerType;;
    
this.logUtil!.putF("Adding Listener: " +genericProfileDataWorkerType, this, this.commonStrings!.CONSTRUCTOR);
    

                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.COMPARISON)
                        
                                    {
                                    this.getCaptureWorker()!.addListenerInterface(this.getImageComparisonWorker());
    

                                    }
                                
                             else 
                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.MOTION)
                        
                                    {
                                    this.getImageComparisonWorker()!.addListenerInterface(this.getMotionRectanglesWorker());
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public processDataWorkerResults(){
this.logUtil!.putF(this.commonStrings!.START, this, this.PROCESS_DATA_WORKER_RESULTS);
    
this.waitForDataWorkers();
    

    var cacheInterface: J2SECacheInterface = CapturedBufferedImagesCacheSingleton.getInstance() as J2SECacheInterface;;
    

    var keyArray: any[] = cacheInterface!.keySet()!.()!;;
    

                        if(keyArray!.length > 0)
                        
                                    {
                                    this.logUtil!.putF("Image Available", this, this.PROCESS_DATA_WORKER_RESULTS);
    
this.setFrame(keyArray[keyArray!.length -1]! as Long);
    

                        if(getFrame() > this.lastFrame)
                        
                                    {
                                    this.logUtil!.putF("Processing new frame: " +getFrame(), this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var hashMap: HashMap<any, any> = this.getGenericProfile()!.getGenericProfileActions()!.getHashMap()!;;
    

    var set: Set = hashMap!.keys()!;;
    
this.logUtil!.putF("Processing " +set.size() +"Actions", this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var actionNameArray: any[] = set.toArray()!;;
    

    var size: number = actionNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var actionNameString: string = actionNameArray[index]! as string;;
    
this.logUtil!.putF("Processing Action: " +actionNameString, this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var genericProfileAction: GenericProfileAction = hashMap!.get(actionNameString) as GenericProfileAction;;
    

    var genericProfileActionScript: GenericProfileActionScript = genericProfileAction!.getGenericProfileActionScript()!;;
    

    var vector: Vector = genericProfileActionScript!.getProfileActionConditionInterfaceVector()!;;
    
CaptureWorkerUtil.processProfileActionConditions(vector, getFrame());
    
}

this.lastFrame= this.getFrame();
    

                                    }
                                

                                    }
                                
                        else {
                            this.logUtil!.putF("Image Not Available", this, this.PROCESS_DATA_WORKER_RESULTS);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public process(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.PROCESS);
    
this.startDataWorkers();
    
this.processDataWorkerResults();
    
}


    public getGenericProfile(): GenericProfile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfile;
    
}


    public setGenericProfile(genericProfile: GenericProfile){
this.genericProfile= genericProfile;
    
}


    getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


    setFrame(frame: Long){
this.frame= frame;
    
}


}



