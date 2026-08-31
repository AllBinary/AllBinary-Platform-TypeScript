
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { LayerManagerEvent } from '../../../org/allbinary/layer/event/LayerManagerEvent.js';
      //not GWT import const LayerManagerEvent = globalThis.org.allbinary.layer.event.LayerManagerEvent;

      
import { LayerManagerEventHandler } from '../../../org/allbinary/layer/event/LayerManagerEventHandler.js';
      //not GWT import const LayerManagerEventHandler = globalThis.org.allbinary.layer.event.LayerManagerEventHandler;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerManager } from './LayerManager.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerManager;

                import { LayerProcessor } from './LayerProcessor.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerProcessor;

                import { LayerManagerNoDebug } from './LayerManagerNoDebug.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerManagerNoDebug;

                import { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import const  = globalThis.org.allbinary.layer.AllBinaryLayer;

                
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
                        return this.basicLayerProcessorArray;
    
}


    public setLayerProcessorArray(layerProcessorArray: LayerProcessor[]){
this.basicLayerProcessorArray= layerProcessorArray;
    
}


    public log(){

    var size: number = this.basicLayerProcessorArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var layerProcessorInterface: LayerProcessor = this.basicLayerProcessorArray[index]!;;
    
}

}


                //@Throws(Exception.constructor)
            
    public append(layerInterface: AllBinaryLayer){

                        if(!this.contains(layerInterface))
                        
                                    {
                                    this.appendProcessors(layerInterface);
    
super.append(layerInterface);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public appendAt(layerInterface: AllBinaryLayer, index: number){

                        if(!this.contains(layerInterface))
                        
                                    {
                                    this.appendProcessors(layerInterface);
    
super.appendAt(layerInterface, index);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    appendProcessors(layerInterface: AllBinaryLayer){
this.createLayerManagerEvent!.setLayerInterface(layerInterface);
    
this.layerManagerEventHandler!.fireEvent(this.createLayerManagerEvent);
    

    var layerProcessorInterface: LayerProcessor;;
    




                        for (
    var index: number = this.basicLayerProcessorArray!.length
                ;--index >= 0; )
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    

                        if(layerProcessorInterface!.isProcessorLayer(layerInterface))
                        
                                    {
                                    layerProcessorInterface!.getLayerManager()!.append(layerInterface);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public remove(layerInterface: AllBinaryLayer){
this.deleteLayerManagerEvent!.setLayerInterface(layerInterface);
    
this.layerManagerEventHandler!.fireDeleteEvent(this.deleteLayerManagerEvent);
    

    var layerProcessorInterface: LayerProcessor;;
    




                        for (
    var index: number = this.basicLayerProcessorArray!.length
                ;--index >= 0; )
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    
layerProcessorInterface!.getLayerManager()!.remove(layerInterface);
    
}

super.remove(layerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public process(){

    var layerProcessorInterface: LayerProcessor;;
    

    var size: number = this.basicLayerProcessorArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    
layerProcessorInterface!.process(this);
    
}

}


                //@Throws(Exception.constructor)
            
    public cleanup(){

    var layerProcessorInterface: LayerProcessor;;
    

    var size: number = this.basicLayerProcessorArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
layerProcessorInterface= this.basicLayerProcessorArray[index]!;
    
layerProcessorInterface!.getLayerManager()!.cleanup();
    
}

super.cleanup();
    
}


}



