
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
//not GWT import const Enumeration

import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { LayerInterfaceFactory } from '../../../../org/allbinary/layer/LayerInterfaceFactory.js';
//not GWT import const LayerInterfaceFactory

import { LayerInterfaceVisitor } from '../../../../org/allbinary/layer/LayerInterfaceVisitor.js';
//not GWT import const LayerInterfaceVisitor

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
type EnumerationUtil<T = any, U = any> = typeof EnumerationUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof EnumerationUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerPlacementInterface } from './LayerPlacementInterface.js';
//sameFolderImports - not GWT import - same folder const LayerPlacementInterface
import { LayerPlacementType } from './LayerPlacementType.js';
//sameFolderImports - not GWT import - same folder const LayerPlacementType
import { LayerPlacementTypeFactory } from './LayerPlacementTypeFactory.js';
//sameFolderImports - not GWT import - same folder const LayerPlacementTypeFactory

export class LayerPlacer
            extends Object
         {
        

    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    readonly layerInterfaceVisitor: LayerInterfaceVisitor;

    private readonly dimension: GPoint;

public constructor (layerInterfaceVisitor: LayerInterfaceVisitor, dimension: GPoint){

            super();
        this.layerInterfaceVisitor= layerInterfaceVisitor;
    
this.dimension= dimension;
    
}


                //@Throws(Exception.constructor)
            
    public processList(list: BasicArrayList){

    let size: number = list.size()!;;
    

    let layerPlacementInterface: LayerPlacementInterface;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
layerPlacementInterface= list.objectArray[index]! as LayerPlacementInterface;
    
this.process(layerPlacementInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public process(layerPlacementInterface: LayerPlacementInterface){

    let relativePoint: GPoint = this.getPoint(layerPlacementInterface)!;;
    

    let layerInterfaceFactory: LayerInterfaceFactory = LayerInterfaceFactory.getInstance()!;;
    

    let hashtable: ABHashtable<any, any> = layerPlacementInterface!.getInstance()!;;
    

    let enumeration: Enumeration<any> = hashtable.keys()!;;
    

    let point: GPoint;;
    

    let layerHashtable: ABHashtable<any, any>;;
    

    let x: number= 0;;
    

    let y: number= 0;;
    

    let z: number= 0;;
    

    let layerInterface: AllBinaryLayer;;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
point= this.enumerationUtil!.nextElement(enumeration)! as GPoint;
    
layerHashtable= hashtable.get(point) as ABHashtable<any, any>;
    
x= point.getX() +relativePoint!.getX();
    
y= point.getY() +relativePoint!.getY();
    
z= point.getZ() +relativePoint!.getZ();
    
layerInterface= layerInterfaceFactory!.getNexInstance(layerHashtable, x, y, z);
    
this.layerInterfaceVisitor!.visit(layerInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public getPoint(layerPlacementInterface: LayerPlacementInterface): GPoint{

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let layerPlacementType: LayerPlacementType = layerPlacementInterface!.getLayerType()!;;
    

                        if(layerPlacementType == LayerPlacementTypeFactory.getInstance()!.MAP)
                        
                                    {
                                    
    let width: number = layerPlacementInterface!.getWidth()!;;
    

    let height: number = layerPlacementInterface!.getHeight()!;;
    

    let x: number = ((this.dimension.getX() -width) /2);;
    

    let y: number = ((this.dimension.getY() -height) /2);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointFactory!.createXY(x, y);;
    

                                    }
                                
                             else 
                        if(layerPlacementType == LayerPlacementTypeFactory.getInstance()!.UP)
                        
                                    {
                                    
    let width: number = layerPlacementInterface!.getWidth()!;;
    

    let height: number = layerPlacementInterface!.getHeight()!;;
    

    let x: number = ((this.dimension.getX() -width) /2);;
    

    let y: number =  -height;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointFactory!.createXY(x, y);;
    

                                    }
                                
                        else {
                            


                            throw new Exception("PlacementType Not Recognized");
                    

                        }
                            
}


}

