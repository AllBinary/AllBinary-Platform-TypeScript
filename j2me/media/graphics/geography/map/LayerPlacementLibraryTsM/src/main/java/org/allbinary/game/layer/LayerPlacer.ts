
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
        



import { Enumeration } from "../../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LayerInterfaceFactory } from "../../../../org/allbinary/layer/LayerInterfaceFactory.js";

    
import { LayerInterfaceVisitor } from "../../../../org/allbinary/layer/LayerInterfaceVisitor.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class LayerPlacer
            extends Object
         {
        

    readonly layerInterfaceVisitor: LayerInterfaceVisitor

    private readonly dimension: GPoint
public constructor (layerInterfaceVisitor: LayerInterfaceVisitor, dimension: GPoint){

            super();
                //var layerInterfaceVisitor = layerInterfaceVisitor
    //var dimension = dimension
this.layerInterfaceVisitor= layerInterfaceVisitor
this.dimension= dimension
}


                @Throws(Exception::class)
            
    public process(list: BasicArrayList){
    //var list = list

    var size: number = list.size()!;
        
        


    var layerPlacementInterface: LayerPlacementInterface





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerPlacementInterface= list.objectArray[index]! as LayerPlacementInterface
this.process(layerPlacementInterface)
}

}


                @Throws(Exception::class)
            
    public process(layerPlacementInterface: LayerPlacementInterface){
    //var layerPlacementInterface = layerPlacementInterface

    var relativePoint: GPoint = this.getPoint(layerPlacementInterface)!;
        
        


    var layerInterfaceFactory: LayerInterfaceFactory = LayerInterfaceFactory.getInstance()!;
        
        


    var hashtable: Hashtable<Any, Any> = layerPlacementInterface!.getInstance()!;
        
        


    var enumeration: Enumeration<Any?> = hashtable.keys()!;
        
        


    var point: GPoint


    var layerHashtable: Hashtable<Any, Any>


    var x: number= 0


    var y: number= 0


    var z: number= 0


    var layerInterface: AllBinaryLayer


        while(enumeration.hasMoreElements())
        {
point= enumeration.nextElement()! as GPoint
layerHashtable= hashtable.get(point as Object) as Hashtable<Any, Any>
x= point.getX() +relativePoint!.getX()
y= point.getY() +relativePoint!.getY()
z= point.getZ() +relativePoint!.getZ()
layerInterface= layerInterfaceFactory!.getInstance(layerHashtable, x, y, z)
visit(layerInterface)
}

}


                @Throws(Exception::class)
            
    public getPoint(layerPlacementInterface: LayerPlacementInterface): GPoint{
    //var layerPlacementInterface = layerPlacementInterface

    var layerPlacementType: LayerPlacementType = layerPlacementInterface!.getLayerType()!;
        
        


    
                        if(layerPlacementType == LayerPlacementTypeFactory.getInstance()!.MAP)
                        
                                    {
                                    
    var width: number = layerPlacementInterface!.getWidth()!;
        
        


    var height: number = layerPlacementInterface!.getHeight()!;
        
        


    var x: number = ((dimension.getX() -width) /2);
        
        


    var y: number = ((dimension.getY() -height) /2);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.getInstance(x, y);
    

                                    }
                                
                             else 
    
                        if(layerPlacementType == LayerPlacementTypeFactory.getInstance()!.UP)
                        
                                    {
                                    
    var width: number = layerPlacementInterface!.getWidth()!;
        
        


    var height: number = layerPlacementInterface!.getHeight()!;
        
        


    var x: number = ((dimension.getX() -width) /2);
        
        


    var y: number =  -height;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.getInstance(x, y);
    

                                    }
                                
                        else {
                            


                            throw Exception("PlacementType Not Recognized")

                        }
                            
}


}
                
            

