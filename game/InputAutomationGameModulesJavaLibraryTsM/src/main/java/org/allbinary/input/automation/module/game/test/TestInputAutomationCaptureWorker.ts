
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
//not GWT import const HashMap

import { Set } from '../../../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { AbstractInputAutomationWorker } from '../../../../../../../org/allbinary/input/automation/module/AbstractInputAutomationWorker.js';
//not GWT import const AbstractInputAutomationWorker

import { InputAutomationActionInterface } from '../../../../../../../org/allbinary/input/automation/module/InputAutomationActionInterface.js';
//not GWT import const InputAutomationActionInterface

import { GenericProfileAction } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js';
//not GWT import const GenericProfileAction

import { GenericProfileActions } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js';
//not GWT import const GenericProfileActions

import { GenericProfileActionScript } from '../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js';
//not GWT import const GenericProfileActionScript

import { CapturedBufferedImagesCacheSingleton } from '../../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js';
//not GWT import const CapturedBufferedImagesCacheSingleton

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { J2SECacheInterface } from '../../../../../../../org/allbinary/logic/util/cache/J2SECacheInterface.js';
//not GWT import const J2SECacheInterface

import { ImageComparatorConstraintsInterface } from '../../../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
//not GWT import const ImageComparatorConstraintsInterface

import { MotionRectangleConstraintsInterface } from '../../../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js';
//not GWT import const MotionRectangleConstraintsInterface

















                                        
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

    let cacheInterface: J2SECacheInterface = CapturedBufferedImagesCacheSingleton.getInstance() as J2SECacheInterface;;
    

                        if(cacheInterface!.keySet()!.size() > 0)
                        
                                    {
                                    this.logUtil!.putF(this.IMAGE_AVAILABLE_SO_PROCESSING, this, this.PROCESS_DATA_WORKER_RESULTS);
    

    let anyType: any = cacheInterface!.keySet()!.()[0]!;;
    

    let hashMap: HashMap<any, any> = this.getGenericProfileActions()!.getHashMap()!;;
    

    let set: Set = hashMap!.keys()!;;
    

    let actionNameArray: any[] = set.toArray()!;;
    

    let size: number = actionNameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let actionNameString: string = actionNameArray[index]! as string;;
    

    let genericProfileAction: GenericProfileAction = hashMap!.get(actionNameString) as GenericProfileAction;;
    

    let genericProfileActionScript: GenericProfileActionScript = genericProfileAction!.getGenericProfileActionScript()!;;
    

    let vector: BasicArrayList = genericProfileActionScript!.getProfileActionConditionInterfaceVector()!;;
    
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

