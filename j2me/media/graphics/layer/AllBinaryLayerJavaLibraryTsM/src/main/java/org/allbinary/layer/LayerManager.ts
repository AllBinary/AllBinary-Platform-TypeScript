
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { SynchObject } from '../../../org/allbinary/thread/SynchObject.js';
      //not GWT import const SynchObject = globalThis.org.allbinary.thread.SynchObject;

      
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
//not plain js import { ABSystemWrapper } from '../../../org/allbinary/logic/ABSystemWrapper.js';
      const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerManagerLoggingBase } from './LayerManagerLoggingBase.js';
//not GWT import const LayerManagerLoggingBase = globalThis.org.allbinary.layer.LayerManagerLoggingBase;

                import { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

                import { Layer } from './Layer.js';
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

                
export class LayerManager
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly systemWrapper: ABSystemWrapper = ABSystemWrapper.getInstance()!;

    private readonly layerManagerLogging: LayerManagerLoggingBase;

    private readonly list: BasicArrayList = new BasicArrayListD();

    private readonly anyType: SynchObject = new SynchObject();

public constructor (layerManagerLogging: LayerManagerLoggingBase){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.layerManagerLogging= layerManagerLogging;
    
}


    public contains(layerInterface: AllBinaryLayer): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(layerInterface);;
    
}


                //@Throws(Exception.constructor)
            
    public update(layerInterface: AllBinaryLayer){

    var had: boolean = this.list.remove(layerInterface)!;;
    

                        if(had)
                        
                                    {
                                    
    var nextLayerInterface: AllBinaryLayer;;
    

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
nextLayerInterface= this.list.get(index) as AllBinaryLayer;
    

                        if(layerInterface!.getZP() > nextLayerInterface!.getZP())
                        
                                    {
                                    this.list.addAt(index, layerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

this.list.add(layerInterface);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public insert(layerInterface: AllBinaryLayer){

    var nextLayerInterface: AllBinaryLayer;;
    

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
nextLayerInterface= this.list.get(index) as AllBinaryLayer;
    

                        if(layerInterface!.getZP() > nextLayerInterface!.getZP())
                        
                                    {
                                    this.appendAt(layerInterface, index);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

this.append(layerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public append(layerInterface: AllBinaryLayer){
this.layerManagerLogging!.append(layerInterface);
    
this.list.add(layerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public appendAt(layerInterface: AllBinaryLayer, index: number){
this.layerManagerLogging!.appendAt(layerInterface, index);
    
this.list.addAt(index, layerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public remove(layerInterface: AllBinaryLayer){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 

        //mutex.withLock
        
this.layerManagerLogging!.remove(layerInterface);
    

    var result: boolean = this.list.remove(layerInterface)!;;
    
this.layerManagerLogging!.removeResult(this, layerInterface, result);
    


}


    public getLayerAt(index: number): Layer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.objectArray[index]! as Layer;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.size();;
    
}


                //@Throws(Exception.constructor)
            
    public cleanup(){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 

        //mutex.withLock
        
this.list.clear();
    
this.layerManagerLogging!.clear();
    
this.systemWrapper!.gc();
    
this.systemWrapper!.gc();
    


}


    public paint(g: Graphics, x: number, y: number){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 

        //mutex.withLock
        

    var comp: Layer;;
    




                        for (
    var index: number = this.list.size()!;--index >= 0; )
        {
comp= this.list.objectArray[index]! as Layer;
    

                        if(comp != 
                                    null
                                 && comp.isVisible())
                        
                                    {
                                    comp.paint(g);
    

                                    }
                                
}



}


}



