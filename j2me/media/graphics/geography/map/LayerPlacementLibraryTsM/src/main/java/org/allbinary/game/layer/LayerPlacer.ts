
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Enumeration } from '../../../../java/util/Enumeration.js';
      
import { Hashtable } from '../../../../java/util/Hashtable.js';
      
import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
      
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { LayerInterfaceFactory } from '../../../../org/allbinary/layer/LayerInterfaceFactory.js';
      
import { LayerInterfaceVisitor } from '../../../../org/allbinary/layer/LayerInterfaceVisitor.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { EnumerationUtil } from '../../../../org/allbinary/util/EnumerationUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerPlacementInterface } from './LayerPlacementInterface.js';
import { LayerPlacementType } from './LayerPlacementType.js';
import { LayerPlacementTypeFactory } from './LayerPlacementTypeFactory.js';

export class LayerPlacer
            extends Object
         {
        

    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    readonly layerInterfaceVisitor: LayerInterfaceVisitor

    private readonly dimension: GPoint
public constructor (layerInterfaceVisitor: LayerInterfaceVisitor, dimension: GPoint){

            super();
            //var layerInterfaceVisitor = layerInterfaceVisitor
    //var dimension = dimension
this.layerInterfaceVisitor= layerInterfaceVisitor;
    
this.dimension= dimension;
    
}


                //@Throws(Exception.constructor)
            
    public processList(list: BasicArrayList){
    //var list = list

    var size: number = list.size()!;
;
    

    var layerPlacementInterface: LayerPlacementInterface
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
layerPlacementInterface= list.objectArray[index]! as LayerPlacementInterface;
    
this.process(layerPlacementInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public process(layerPlacementInterface: LayerPlacementInterface){
    //var layerPlacementInterface = layerPlacementInterface

    var relativePoint: GPoint = this.getPoint(layerPlacementInterface)!;
;
    

    var layerInterfaceFactory: LayerInterfaceFactory = LayerInterfaceFactory.getInstance()!;
;
    

    var hashtable: Hashtable<any, any> = layerPlacementInterface!.getInstance()!;
;
    

    var enumeration: Enumeration<any> = hashtable.keys()!;
;
    

    var point: GPoint
;
    

    var layerHashtable: Hashtable<any, any>
;
    

    var x: number= 0
;
    

    var y: number= 0
;
    

    var z: number= 0
;
    

    var layerInterface: AllBinaryLayer
;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
point= this.enumerationUtil!.nextElement(enumeration)! as GPoint;
    
layerHashtable= hashtable.get(point) as Hashtable<any, any>;
    
x= point.getX() +relativePoint!.getX();
    
y= point.getY() +relativePoint!.getY();
    
z= point.getZ() +relativePoint!.getZ();
    
layerInterface= layerInterfaceFactory!.getNexInstance(layerHashtable, x, y, z);
    
this.layerInterfaceVisitor!.visit(layerInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public getPoint(layerPlacementInterface: LayerPlacementInterface): GPoint{
    //var layerPlacementInterface = layerPlacementInterface

    var pointFactory: PointFactory = PointFactory.getInstance()!;
;
    

    var layerPlacementType: LayerPlacementType = layerPlacementInterface!.getLayerType()!;
;
    

                        if(layerPlacementType == LayerPlacementTypeFactory.getInstance()!.MAP)
                        
                                    {
                                    
    var width: number = layerPlacementInterface!.getWidth()!;
;
    

    var height: number = layerPlacementInterface!.getHeight()!;
;
    

    var x: number = ((this.dimension.getX() -width) /2);
;
    

    var y: number = ((this.dimension.getY() -height) /2);
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointFactory!.createXY(x, y);;
    

                                    }
                                
                             else 
                        if(layerPlacementType == LayerPlacementTypeFactory.getInstance()!.UP)
                        
                                    {
                                    
    var width: number = layerPlacementInterface!.getWidth()!;
;
    

    var height: number = layerPlacementInterface!.getHeight()!;
;
    

    var x: number = ((this.dimension.getX() -width) /2);
;
    

    var y: number =  -height;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointFactory!.createXY(x, y);;
    

                                    }
                                
                        else {
                            


                            throw new Exception("PlacementType Not Recognized");
                    

                        }
                            
}


}
                
            

