
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
        



import { Layer } from "../../../../../../org/allbinary/layer/Layer.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class BasicGeographicMapUtil
            extends Object
         {
        

    private static readonly instance: BasicGeographicMapUtil = new BasicGeographicMapUtil();
        
        

    public static getInstance(): BasicGeographicMapUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                @Throws(Exception::class)
            
    public getBorderingRow(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): number{
    //var direction = direction
    //var oldGeographicMapCellPosition = oldGeographicMapCellPosition

    var LOCATION_CHANGE: number = 1;
        
        



        when (direction) {
            0 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow();
    
}
1 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow();
    
}
2 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow() +LOCATION_CHANGE;
    
}
3 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow() -LOCATION_CHANGE;
    
}
else -> {


                            throw Exception("Only Four Directions")
}

        }       
        
    
}


                @Throws(Exception::class)
            
    public getBorderingColumn(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): number{
    //var direction = direction
    //var oldGeographicMapCellPosition = oldGeographicMapCellPosition

    var LOCATION_CHANGE: number = 1;
        
        



        when (direction) {
            0 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn() -LOCATION_CHANGE;
    
}
1 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn() +LOCATION_CHANGE;
    
}
2 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn();
    
}
3 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn();
    
}
else -> {


                            throw Exception("Only Four Directions")
}

        }       
        
    
}


                @Throws(Exception::class)
            
    public isSameCellPosition(fromGeographicMapCellPosition: GeographicMapCellPosition, toGeographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var fromGeographicMapCellPosition = fromGeographicMapCellPosition
    //var toGeographicMapCellPosition = toGeographicMapCellPosition

    var fromColumn: number = fromGeographicMapCellPosition!.getColumn()!;
        
        


    var fromRow: number = fromGeographicMapCellPosition!.getRow()!;
        
        


    var goColumn: number = toGeographicMapCellPosition!.getColumn()!;
        
        


    var goRow: number = toGeographicMapCellPosition!.getRow()!;
        
        


    
                        if(fromColumn == goColumn && fromRow == goRow)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public createAllBinaryTiledLayerArray(geographicMapInterfaceArray: BasicGeographicMap[]): Layer[]{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray

    var tiledLayerArray: Layer[] = new Array(geographicMapInterfaceArray!.length);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createAllBinaryTiledLayerArray(geographicMapInterfaceArray, tiledLayerArray, 0);
    
}


    public createAllBinaryTiledLayerArray(geographicMapInterfaceArray: BasicGeographicMap[], tiledLayerArray: Layer[], startIndex: number): Layer[]{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var tiledLayerArray = tiledLayerArray
    //var startIndex = startIndex

    var geographicMapInterface: BasicGeographicMap


    var size: number = geographicMapInterfaceArray!.length
                ;
        
        


    var count: number = 0;
        
        





                        for (
    var index: number = size +startIndex;
        
        
--index >= startIndex; )
        {
geographicMapInterface= geographicMapInterfaceArray[index]!
tiledLayerArray[count++]= geographicMapInterface!.getAllBinaryTiledLayer()
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tiledLayerArray;
    
}


    public move(geographicMapInterfaceArray: BasicGeographicMap[], dx: number, dy: number){
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var dx = dx
    //var dy = dy

    var geographicMapInterface: BasicGeographicMap


    var size: number = geographicMapInterfaceArray!.length
                ;
        
        





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
geographicMapInterface= geographicMapInterfaceArray[index]!
move(dx, dy)
}

}


    public setPosition(geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var x = x
    //var y = y

    var geographicMapInterface: BasicGeographicMap


    var size: number = geographicMapInterfaceArray!.length
                ;
        
        





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
geographicMapInterface= geographicMapInterfaceArray[index]!
setPosition(x, y, geographicMapInterface!.getAllBinaryTiledLayer()!.getZP())
}

}


}
                
            

