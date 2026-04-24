
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { AbstractInputAutomationWorker } from "../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationWorker.js";

    
import { InputAutomationActionInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js";

    
import { GenericProfile } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js";

    
import { GenericProfileDataWorkerType } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfileDataWorkerType.js";

    
import { GenericProfileAction } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js";

    
import { GenericProfileActionScript } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js";

    
import { CapturedBufferedImagesCacheSingleton } from "../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { J2SECacheInterface } from "../../../../../../org/allbinary/logic/util/cache/J2SECacheInterface.js";

    
import { ImageComparatorConstraintsInterface } from "../../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js";

    
import { ImageComparisonWorker } from "../../../../../../org/allbinary/media/image/comparison/ImageComparisonWorker.js";

    
import { MotionRectangleConstraintsInterface } from "../../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js";

    
import { MotionRectanglesWorker } from "../../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesWorker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GenericProfileCaptureWorkerFactory } from "./GenericProfileCaptureWorkerFactory.js";

import { CaptureWorkerUtil } from "./CaptureWorkerUtil.js";

export class GenericInputAutomationWorker extends AbstractInputAutomationWorker {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly PROCESS_DATA_WORKER_RESULTS: string = "processDataWorkerResults";
        
        

    private lastFrame: Long =  -1 as Long;
        
        

    private frame: Long

    private genericProfile: GenericProfile
public constructor (inputAutomationActionInterface: InputAutomationActionInterface, genericProfile: GenericProfile, motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface, imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface){
            super(inputAutomationActionInterface);
                        //var inputAutomationActionInterface = inputAutomationActionInterface
    //var genericProfile = genericProfile
    //var motionRectangleConstraintsInterface = motionRectangleConstraintsInterface
    //var imageComparatorConstraintsInterface = imageComparatorConstraintsInterface


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.setCaptureWorker(GenericProfileCaptureWorkerFactory.getInstance(genericProfile));
    
this.setInputAutomationActionInterface(inputAutomationActionInterface);
    
this.setImageComparisonWorker(new ImageComparisonWorker(imageComparatorConstraintsInterface));
    
this.setMotionRectanglesWorker(new MotionRectanglesWorker(motionRectangleConstraintsInterface));
    
this.setGenericProfile(genericProfile);
    

    var vector: Vector = this.getGenericProfile()!.getGenericProfileDataWorkerTypeVector()!;
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = vector.get(index); as GenericProfileDataWorkerType;
        
        
;
    
this.logUtil!.putF("Adding Listener: " +genericProfileDataWorkerType, this, this.commonStrings!.CONSTRUCTOR);
    

                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.COMPARISON)
                        
                                    {
                                    this.getCaptureWorker()!.addListener(this.getImageComparisonWorker());
    

                                    }
                                
                             else 
                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.MOTION)
                        
                                    {
                                    this.getImageComparisonWorker()!.addListener(this.getMotionRectanglesWorker());
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public processDataWorkerResults(){
this.logUtil!.putF(this.commonStrings!.START, this, this.PROCESS_DATA_WORKER_RESULTS);
    
this.waitForDataWorkers();
    

    var cacheInterface: J2SECacheInterface = CapturedBufferedImagesCacheSingleton.getInstance(); as J2SECacheInterface;
        
        
;
    

    var keyArray: any[] = cacheInterface!.keySet()!.toTypedArray()!;
        
        
;
    

                        if(keyArray!.length > 0)
                        
                                    {
                                    this.logUtil!.putF("Image Available", this, this.PROCESS_DATA_WORKER_RESULTS);
    
setFrame(keyArray[keyArray!.length -1]! as Long);
    

                        if(getFrame() > this.lastFrame)
                        
                                    {
                                    this.logUtil!.putF("Processing new frame: " +getFrame(), this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var hashMap: HashMap<any, any> = this.getGenericProfile()!.getGenericProfileActions()!.getHashMap()!;
        
        
;
    

    var set: Set = hashMap!.keys!;
        
        
;
    
this.logUtil!.putF("Processing " +set.size() +"Actions", this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var actionNameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = actionNameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var actionNameString: string = actionNameArray[index]! as String;
        
        
;
    
this.logUtil!.putF("Processing Action: " +actionNameString, this, this.PROCESS_DATA_WORKER_RESULTS);
    

    var genericProfileAction: GenericProfileAction = hashMap!.get(actionNameString as Object); as GenericProfileAction;
        
        
;
    

    var genericProfileActionScript: GenericProfileActionScript = genericProfileAction!.getGenericProfileActionScript()!;
        
        
;
    

    var vector: Vector = genericProfileActionScript!.getProfileActionConditionInterfaceVector()!;
        
        
;
    
CaptureWorkerUtil.processProfileActionConditions(vector, getFrame());
    
}

this.lastFrame= getFrame();
    

                                    }
                                

                                    }
                                
                        else {
                            this.logUtil!.putF("Image Not Available", this, this.PROCESS_DATA_WORKER_RESULTS);
    

                        }
                            
}


                //@Throws(Error::class)
            
    public process(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.PROCESS);
    
this.startDataWorkers();
    
this.processDataWorkerResults();
    
}


    public getGenericProfile(): GenericProfile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfile;
    
}


    public setGenericProfile(genericProfile: GenericProfile){
    //var genericProfile = genericProfile
this.genericProfile= genericProfile;
    
}


    getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frame;
    
}


    setFrame(frame: Long){
    //var frame = frame
this.frame= frame;
    
}


}
                
            

