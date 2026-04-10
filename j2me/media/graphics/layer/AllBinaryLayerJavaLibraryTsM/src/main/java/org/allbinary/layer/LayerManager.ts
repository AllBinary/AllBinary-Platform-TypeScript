
        /* Generated Code Do Not Modify */
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { SynchObject } from "../../../org/allbinary/thread/SynchObject.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class LayerManager
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly layerManagerLogging: LayerManagerLoggingBase

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    private readonly anyType: SynchObject = new SynchObject();
        
        
public constructor (layerManagerLogging: LayerManagerLogging){

            super();
                //var layerManagerLogging = layerManagerLogging
put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)
this.layerManagerLogging= layerManagerLogging
}

public constructor (){

            super();
            this.layerManagerLogging= LayerManagerNoDebug.getInstance()
}


    public contains(layerInterface: AllBinaryLayer): boolean{
    //var layerInterface = layerInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(layerInterface);
    
}


                @Throws(Exception::class)
            
    public insert(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface

    var nextLayerInterface: AllBinaryLayer


    var size: number = this.list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
nextLayerInterface= this.list.get(index) as AllBinaryLayer

    
                        if(layerInterface!.getZP() > nextLayerInterface!.getZP())
                        
                                    {
                                    this.append(layerInterface, index)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

this.append(layerInterface)
}


                @Throws(Exception::class)
            
    public append(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface
append(layerInterface)
add(layerInterface)
}


                @Throws(Exception::class)
            
    public append(layerInterface: AllBinaryLayer, index: number){
    //var layerInterface = layerInterface
    //var index = index
append(layerInterface, index)
add(index, layerInterface)
}


                @Throws(Exception::class)
            
    public remove(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(anyType) 

        //mutex.withLock
        {
remove(layerInterface)

    var result: boolean = this.list.remove(layerInterface)!;
        
        

remove(this, layerInterface, result)
}

}


    public getLayerAt(index: number): Layer{
    //var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.objectArray[index]! as Layer;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.size();
    
}


                @Throws(Exception::class)
            
    public cleanup(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(anyType) 

        //mutex.withLock
        {
clear()
clear()
gc()
gc()
}

}


    public paint(g: Graphics, x: number, y: number){
var g = g
var x = x
var y = y

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(anyType) 

        //mutex.withLock
        {

    var comp: Layer





                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {
comp= list.objectArray[index]! as Layer

    
                        if(comp != 
                                    null
                                 && comp.isVisible())
                        
                                    {
                                    paint(g)

                                    }
                                
}

}

}


}
                
            

