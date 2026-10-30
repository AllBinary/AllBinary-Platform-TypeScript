
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { DestroyEventCircularStaticPool } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js';
//not GWT import const DestroyEventCircularStaticPool

import { DestroyedEvent } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
//not GWT import const DestroyedEvent

import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
//not GWT import const DestroyedEventHandler

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
//not GWT import const BasicLayerProcessor

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DestroyedLayerProcessor extends BasicLayerProcessor {
        

    private static DESTROYED_LAYER_PROCESSOR: BasicLayerProcessor = BasicLayerProcessor.NULL_LAYER_PROCESSOR;

    public static init(){
DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR= new DestroyedLayerProcessor();
    
}


    public static getInstance(): BasicLayerProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){

    let list: BasicArrayList = this.getList()!;;
    

    let size: number = list.size()!;;
    

    let destroyedEventHandler: DestroyedEventHandler = DestroyedEventHandler.getInstance()!;;
    

    let destroyEventCircularStaticPool: DestroyEventCircularStaticPool = DestroyEventCircularStaticPool.getInstance()!;;
    

    let destroyedEvent: DestroyedEvent;;
    

    let layerInterface: AllBinaryLayer;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let layerInterfaceCanBeNull: any = list.objectArray[index];;
    

                        if(layerInterfaceCanBeNull != 
                                    null
                                )
                        
                                    {
                                    layerInterface= layerInterfaceCanBeNull as AllBinaryLayer;
    
allBinaryLayerManager!.remove(layerInterface);
    
destroyedEvent= destroyEventCircularStaticPool!.getInstanceForLayer(layerInterface);
    
destroyedEventHandler!.fireEvent(destroyedEvent);
    

                                    }
                                
                        else {
                            
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        }
                            
}

list.clear();
    
}


}

