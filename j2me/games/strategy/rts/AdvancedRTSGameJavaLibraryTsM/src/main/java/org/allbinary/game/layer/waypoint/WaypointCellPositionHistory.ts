
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CellPosition } from '../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const CellPosition

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WaypointCellPositionHistory
            extends Object
         {
        

    private static readonly SINGLETON: WaypointCellPositionHistory = new WaypointCellPositionHistory();

    public static getInstance(): WaypointCellPositionHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WaypointCellPositionHistory.SINGLETON;
    
}


    private positionList: BasicArrayList = new BasicArrayListD();

    private layerList: BasicArrayList = new BasicArrayListD();

    public add(cellPosition: CellPosition, layerInterface: AllBinaryLayer){
this.positionList!.add(cellPosition);
    
this.layerList!.add(layerInterface);
    
}


    public addList(list: BasicArrayList, layerInterface: AllBinaryLayer){




                        for (
    let index: number = list.size() -1;index >= 0; index--)
        {
this.add(list.get(index) as CellPosition, layerInterface);
    
}

}


    public remove(cellPosition: CellPosition){

    let index: number = this.positionList!.indexOf(cellPosition)!;;
    

                        if(index >= 0)
                        
                                    {
                                    this.positionList!.removeAt(index);
    
this.layerList!.removeAt(index);
    

                                    }
                                
}


    public removeLayer(layerInterface: AllBinaryLayer){

    let index: number = 0;;
    

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
    let index: number = list.size() -1;index >= 0; index--)
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


    public getLayerInterface(cellPosition: CellPosition): AllBinaryLayer{

    let index: number = this.positionList!.indexOf(cellPosition)!;;
    

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

