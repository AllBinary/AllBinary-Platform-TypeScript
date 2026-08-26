
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
        
//not game specific package import { DestroyEventCircularStaticPool } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js';
      const DestroyEventCircularStaticPool = globalThis.org.allbinary.game.combat.destroy.event.DestroyEventCircularStaticPool;

      
//not game specific package import { DestroyedEvent } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
      const DestroyedEvent = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEvent;

      
//not game specific package import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
      const DestroyedEventHandler = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventHandler;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
      const BasicLayerProcessor = globalThis.org.allbinary.layer.BasicLayerProcessor;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
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

    var list: BasicArrayList = this.getList()!;;
    

    var size: number = list.size()!;;
    

    var destroyedEventHandler: DestroyedEventHandler = DestroyedEventHandler.getInstance()!;;
    

    var destroyEventCircularStaticPool: DestroyEventCircularStaticPool = DestroyEventCircularStaticPool.getInstance()!;;
    

    var destroyedEvent: DestroyedEvent;;
    

    var layerInterface: AllBinaryLayer;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var layerInterfaceCanBeNull: any = list.objectArray[index];;
    

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
                            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        }
                            
}

list.clear();
    
}


}
                
            

