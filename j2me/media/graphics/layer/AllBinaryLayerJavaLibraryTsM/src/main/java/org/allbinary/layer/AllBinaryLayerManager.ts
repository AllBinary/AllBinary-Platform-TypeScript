
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

    

export class AllBinaryLayerManager extends LayerManager {
        

    private readonly layerManagerEventHandler: LayerManagerEventHandler = LayerManagerEventHandler.getInstance()!;
        
        

    private readonly createLayerManagerEvent: LayerManagerEvent = new LayerManagerEvent(this, this.layerManagerEventHandler!.CREATE);
        
        

    private readonly deleteLayerManagerEvent: LayerManagerEvent = new LayerManagerEvent(this, this.layerManagerEventHandler!.DELETE);
        
        

    private basicLayerProcessorArray: LayerProcessor[] = new Array(0);
        
        
protected constructor (){

            super();
            }


    getLayerProcessorArray(): LayerProcessor[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicLayerProcessorArray;
    
}


    public setLayerProcessorArray(layerProcessorArray: LayerProcessor[]){
    //var layerProcessorArray = layerProcessorArray
this.basicLayerProcessorArray= layerProcessorArray
}


    public log(){

    var size: number = this.basicLayerProcessorArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var layerProcessorInterface: LayerProcessor = basicLayerProcessorArray[index]!;
        
        

}

}


                @Throws(Exception::class)
            
    public append(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface

    
                        if(!this.contains(layerInterface))
                        
                                    {
                                    this.appendProcessors(layerInterface)
append(layerInterface)

                                    }
                                
}


                @Throws(Exception::class)
            
    public append(layerInterface: AllBinaryLayer, index: number){
    //var layerInterface = layerInterface
    //var index = index

    
                        if(!this.contains(layerInterface))
                        
                                    {
                                    this.appendProcessors(layerInterface)
append(layerInterface, index)

                                    }
                                
}


                @Throws(Exception::class)
            
    appendProcessors(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface
setLayerInterface(layerInterface)
fireEvent(this.createLayerManagerEvent)

    var layerProcessorInterface: LayerProcessor





                        for (
    var index: number = this.basicLayerProcessorArray!.length
                ;
        
        
--index >= 0; )
        {
layerProcessorInterface= basicLayerProcessorArray[index]!

    
                        if(layerProcessorInterface!.isProcessorLayer(layerInterface))
                        
                                    {
                                    append(layerInterface)

                                    }
                                
}

}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public remove(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface
setLayerInterface(layerInterface)
fireDeleteEvent(this.deleteLayerManagerEvent)

    var layerProcessorInterface: LayerProcessor





                        for (
    var index: number = this.basicLayerProcessorArray!.length
                ;
        
        
--index >= 0; )
        {
layerProcessorInterface= basicLayerProcessorArray[index]!
remove(layerInterface)
}

remove(layerInterface)
}


                @Throws(Exception::class)
            
    public process(){

    var layerProcessorInterface: LayerProcessor


    var size: number = this.basicLayerProcessorArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerProcessorInterface= basicLayerProcessorArray[index]!
process(this)
}

}


                @Throws(Exception::class)
            
    public cleanup(){

    var layerProcessorInterface: LayerProcessor


    var size: number = this.basicLayerProcessorArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerProcessorInterface= basicLayerProcessorArray[index]!
cleanup()
}

cleanup()
}


}
                
            

