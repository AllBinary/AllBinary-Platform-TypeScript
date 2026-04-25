
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
        



import { LayerManagerEvent } from "../../../org/allbinary/layer/event/LayerManagerEvent.js";

    
import { LayerManagerEventHandler } from "../../../org/allbinary/layer/event/LayerManagerEventHandler.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LayerManager } from "./LayerManager.js";

import { LayerManagerNoDebug } from "./LayerManagerNoDebug.js";

import { AllBinaryLayer } from "./AllBinaryLayer.js";

export class AllBinaryLayerManager extends LayerManager {
        

    private readonly layerManagerEventHandler: LayerManagerEventHandler = LayerManagerEventHandler.getInstance()!;
        
        

    private readonly createLayerManagerEvent: LayerManagerEvent = new LayerManagerEvent(this, this.layerManagerEventHandler!.CREATE);
        
        

    private readonly deleteLayerManagerEvent: LayerManagerEvent = new LayerManagerEvent(this, this.layerManagerEventHandler!.DELETE);
        
        

    private basicLayerProcessorArray: LayerProcessor[] = [];
        
        
protected constructor (){
            super(LayerManagerNoDebug.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    getLayerProcessorArray(): LayerProcessor[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicLayerProcessorArray;
    
}


    public setLayerProcessorArray(layerProcessorArray: LayerProcessor[]){
    //var layerProcessorArray = layerProcessorArray
this.basicLayerProcessorArray= layerProcessorArray;
    
}


    public log(){

    var size: number = this.basicLayerProcessorArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var layerProcessorInterface: LayerProcessor = this.basicLayerProcessorArray[index]!;
        
        
;
    
}

}


                //@Throws(Error::class)
            
    public append(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface

                        if(!this.contains(layerInterface);)
                        
                                    {
                                    this.appendProcessors(layerInterface);
    
super.append(layerInterface);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public append(layerInterface: AllBinaryLayer, index: number){
    //var layerInterface = layerInterface
    //var index = index

                        if(!this.contains(layerInterface);)
                        
                                    {
                                    this.appendProcessors(layerInterface);
    
super.append(layerInterface, index);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    appendProcessors(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface
this.createLayerManagerEvent!.setLayerInterface(layerInterface);
    
layerManagerEventHandler!.fireEvent(this.createLayerManagerEvent);
    

    var layerProcessorInterface: LayerProcessor
;
    




                        for (
    var index: number = this.basicLayerProcessorArray!.length
                ;
        
        
--index >= 0; )
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    

                        if(layerProcessorInterface!.isProcessorLayer(layerInterface))
                        
                                    {
                                    layerProcessorInterface!.getLayerManager()!.append(layerInterface);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public remove(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface
this.deleteLayerManagerEvent!.setLayerInterface(layerInterface);
    
layerManagerEventHandler!.fireDeleteEvent(this.deleteLayerManagerEvent);
    

    var layerProcessorInterface: LayerProcessor
;
    




                        for (
    var index: number = this.basicLayerProcessorArray!.length
                ;
        
        
--index >= 0; )
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    
layerProcessorInterface!.getLayerManager()!.remove(layerInterface);
    
}

super.remove(layerInterface);
    
}


                //@Throws(Error::class)
            
    public process(){

    var layerProcessorInterface: LayerProcessor
;
    

    var size: number = this.basicLayerProcessorArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    
layerProcessorInterface!.process(this);
    
}

}


                //@Throws(Error::class)
            
    public cleanup(){

    var layerProcessorInterface: LayerProcessor
;
    

    var size: number = this.basicLayerProcessorArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    
layerProcessorInterface!.getLayerManager()!.cleanup();
    
}

super.cleanup();
    
}


}
                
            

