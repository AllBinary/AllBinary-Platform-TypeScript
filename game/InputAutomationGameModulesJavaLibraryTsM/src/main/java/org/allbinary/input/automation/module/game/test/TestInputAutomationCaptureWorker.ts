
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { AbstractInputAutomationWorker } from "../../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationWorker.js";

    
import { InputAutomationActionInterface } from "../../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js";

    
import { GenericProfileAction } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js";

    
import { GenericProfileActions } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js";

    
import { GenericProfileActionScript } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js";

    
import { CapturedBufferedImagesCacheSingleton } from "../../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { J2SECacheInterface } from "../../../../../../../org/allbinary/logic/util/cache/J2SECacheInterface.js";

    
import { ImageComparatorConstraintsInterface } from "../../../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js";

    
import { MotionRectangleConstraintsInterface } from "../../../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TestInputAutomationCaptureWorker extends AbstractInputAutomationWorker {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private genericProfileActions: GenericProfileActions

    private readonly MESSAGE: string = "GenericInputAutomationCaptureWorker";
        
        

    private readonly PROCESS_DATA_WORKER_RESULTS: string = "processDataWorkerResults";
        
        

    private readonly IMAGE_AVAILABLE_SO_PROCESSING: string = "Image Available so processing";
        
        

    private readonly IMAGE_NOT_AVAILABLE: string = "Image Not Available";
        
        
public constructor (inputAutomationActionInterface: InputAutomationActionInterface, genericProfileActions: GenericProfileActions, imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface, motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface){
            super(inputAutomationActionInterface);
                    var inputAutomationActionInterface = inputAutomationActionInterface
var genericProfileActions = genericProfileActions
var imageComparatorConstraintsInterface = imageComparatorConstraintsInterface
var motionRectangleConstraintsInterface = motionRectangleConstraintsInterface


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.MESSAGE, this, commonStrings!.CONSTRUCTOR);
    
this.setGenericProfileActions(genericProfileActions);
    
}


                //@Throws(Error::class)
            
    public processDataWorkerResults(){

    var cacheInterface: J2SECacheInterface = CapturedBufferedImagesCacheSingleton.getInstance(); as J2SECacheInterface;
        
        
;
    

                        if(cacheInterface!.keySet()!.size() > 0)
                        
                                    {
                                    this.logUtil!.putF(this.IMAGE_AVAILABLE_SO_PROCESSING, this, PROCESS_DATA_WORKER_RESULTS);
    

    var anyType: any = cacheInterface!.keySet()!.toTypedArray()[0]!;
        
        
;
    

    var hashMap: HashMap<any, any> = this.getGenericProfileActions()!.getHashMap()!;
        
        
;
    

    var set: Set = hashMap!.keys!;
        
        
;
    

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
    

    var genericProfileAction: GenericProfileAction = hashMap!.get(actionNameString as Object); as GenericProfileAction;
        
        
;
    

    var genericProfileActionScript: GenericProfileActionScript = genericProfileAction!.getGenericProfileActionScript()!;
        
        
;
    

    var vector: Vector = genericProfileActionScript!.getProfileActionConditionInterfaceVector()!;
        
        
;
    
}

cacheInterface!.get(anyType);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(this.IMAGE_NOT_AVAILABLE, this, PROCESS_DATA_WORKER_RESULTS);
    

                        }
                            
}


                //@Throws(Error::class)
            
    public process(){
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.PROCESS);
    
this.startDataWorkers();
    
this.processDataWorkerResults();
    
}


    public getGenericProfileActions(): GenericProfileActions{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActions;
    
}


    public setGenericProfileActions(genericProfileActions: GenericProfileActions){
var genericProfileActions = genericProfileActions
this.genericProfileActions= genericProfileActions;
    
}


}
                
            

