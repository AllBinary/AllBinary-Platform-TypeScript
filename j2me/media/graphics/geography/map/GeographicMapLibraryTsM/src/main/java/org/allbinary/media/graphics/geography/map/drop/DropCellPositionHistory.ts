
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
        



import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CellPosition } from "../../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { CellPositionFactory } from "../../../../../../../org/allbinary/graphics/CellPositionFactory.js";

    
import { AllBinaryLayer } from "../../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class DropCellPositionHistory
            extends Object
         {
        

    private static readonly SINGLETON: DropCellPositionHistory = new DropCellPositionHistory();
        
        

    public static getInstance(): DropCellPositionHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private readonly cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;
        
        

    private positionList: BasicArrayList = new BasicArrayList();
        
        

    private layerList: BasicArrayList = new BasicArrayList();
        
        

    public add(cellPosition: CellPosition, layerInterface: AllBinaryLayer){
var cellPosition = cellPosition
var layerInterface = layerInterface
this.positionList!.add(cellPosition);
    
this.layerList!.add(layerInterface);
    
}


    public add(list: BasicArrayList, layerInterface: AllBinaryLayer){
var list = list
var layerInterface = layerInterface




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
this.add(list.get(index);

                         as CellPosition, layerInterface);
    
}

}


    public remove(cellPosition: CellPosition){
var cellPosition = cellPosition

    var index: number = this.positionList!.indexOf(cellPosition)!;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    this.positionList!.remove(index);
    
this.layerList!.remove(index);
    

                                    }
                                
}


    public remove(layerInterface: AllBinaryLayer){
var layerInterface = layerInterface

    var index: number = 0;
        
        
;
    

        while(index !=  -1)
        {
index= this.layerList!.indexOf(layerInterface);
    

                        if(index >= 0)
                        
                                    {
                                    this.positionList!.remove(index);
    
this.layerList!.remove(index);
    

                                    }
                                
}

}


    public clear(){
this.positionList!.clear();
    
this.layerList!.clear();
    
}


    public isCellPositionWithDrop(cellPosition: CellPosition): boolean{
var cellPosition = cellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return positionList!.contains(cellPosition);

                        ;
    
}


    public anyCellPositionWithDrop(list: BasicArrayList): boolean{
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

                        if(this.isCellPositionWithDrop(list.get(index);

                         as CellPosition))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getCellPositionWithDrop(list: BasicArrayList): CellPosition{
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index);

                         as CellPosition;
        
        
;
    

                        if(this.isCellPositionWithDrop(cellPosition))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPosition;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellPositionFactory!.NONE;
    
}


    public getLayerInterface(cellPosition: CellPosition): AllBinaryLayer{
var cellPosition = cellPosition

    var index: number = this.positionList!.indexOf(cellPosition)!;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerList!.get(index);

                         as AllBinaryLayer;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryLayer.NULL_ALLBINARY_LAYER;
    

                        }
                            
}


}
                
            

