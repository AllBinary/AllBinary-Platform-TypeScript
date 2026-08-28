
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
//not game specific package import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { CellPosition } from '../../../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { CellPositionFactory } from '../../../../../../../org/allbinary/graphics/CellPositionFactory.js';
      const CellPositionFactory = globalThis.org.allbinary.graphics.CellPositionFactory;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DropCellPositionHistory
            extends Object
         {
        

    private static readonly SINGLETON: DropCellPositionHistory = new DropCellPositionHistory();

    public static getInstance(): DropCellPositionHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DropCellPositionHistory.SINGLETON;
    
}


    private readonly cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;

    private positionList: BasicArrayList = new BasicArrayListD();

    private layerList: BasicArrayList = new BasicArrayListD();

    public add(cellPosition: CellPosition, layerInterface: AllBinaryLayer){
this.positionList!.add(cellPosition);
    
this.layerList!.add(layerInterface);
    
}


    public addAll(list: BasicArrayList, layerInterface: AllBinaryLayer){




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {
this.add(list.get(index) as CellPosition, layerInterface);
    
}

}


    public remove(cellPosition: CellPosition){

    var index: number = this.positionList!.indexOf(cellPosition)!;;
    

                        if(index >= 0)
                        
                                    {
                                    this.positionList!.removeAt(index);
    
this.layerList!.removeAt(index);
    

                                    }
                                
}


    public removeAll(layerInterface: AllBinaryLayer){

    var index: number = 0;;
    

        while(index !=  -1)
        {
index= this.layerList!.indexOf(layerInterface);
    

                        if(index >= 0)
                        
                                    {
                                    this.positionList!.removeAt(index);
    
this.layerList!.removeAt(index);
    

                                    }
                                
}

}


    public clear(){
this.positionList!.clear();
    
this.layerList!.clear();
    
}


    public isCellPositionWithDrop(cellPosition: CellPosition): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.positionList!.contains(cellPosition);;
    
}


    public anyCellPositionWithDrop(list: BasicArrayList): boolean{




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

                        if(this.isCellPositionWithDrop(list.get(index) as CellPosition))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getCellPositionWithDrop(list: BasicArrayList): CellPosition{

    var cellPosition: CellPosition;;
    




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {
cellPosition= list.get(index) as CellPosition;
    

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

    var index: number = this.positionList!.indexOf(cellPosition)!;;
    

                        if(index >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerList!.get(index) as AllBinaryLayer;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryLayer.NULL_ALLBINARY_LAYER;
    

                        }
                            
}


}



