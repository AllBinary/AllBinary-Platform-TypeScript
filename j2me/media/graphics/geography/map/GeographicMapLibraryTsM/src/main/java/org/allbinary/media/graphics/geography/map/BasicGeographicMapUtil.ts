
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Layer } from '../../../../../../org/allbinary/layer/Layer.js';
      //not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

                import { BasicGeographicMap } from './BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

                
export class BasicGeographicMapUtil
            extends Object
         {
        

    private static readonly instance: BasicGeographicMapUtil = new BasicGeographicMapUtil();

    public static getInstance(): BasicGeographicMapUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicGeographicMapUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getBorderingRow(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): number{

    var LOCATION_CHANGE: number = 1;;
    



        switch (direction) {
            case 0: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow();;
    
}
case 1: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow();;
    
}
case 2: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow() +LOCATION_CHANGE;
    
}
case 3: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getRow() -LOCATION_CHANGE;
    
}
default: {


                            throw new Exception("Only Four Directions");
                    
}

        }       
        
    
}


                //@Throws(Exception.constructor)
            
    public getBorderingColumn(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): number{

    var LOCATION_CHANGE: number = 1;;
    



        switch (direction) {
            case 0: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn() -LOCATION_CHANGE;
    
}
case 1: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn() +LOCATION_CHANGE;
    
}
case 2: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn();;
    
}
case 3: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldGeographicMapCellPosition!.getColumn();;
    
}
default: {


                            throw new Exception("Only Four Directions");
                    
}

        }       
        
    
}


                //@Throws(Exception.constructor)
            
    public isSameCellPosition(fromGeographicMapCellPosition: GeographicMapCellPosition, toGeographicMapCellPosition: GeographicMapCellPosition): boolean{

    var fromColumn: number = fromGeographicMapCellPosition!.getColumn()!;;
    

    var fromRow: number = fromGeographicMapCellPosition!.getRow()!;;
    

    var goColumn: number = toGeographicMapCellPosition!.getColumn()!;;
    

    var goRow: number = toGeographicMapCellPosition!.getRow()!;;
    

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

    var tiledLayerArray: Layer[] = new Array(geographicMapInterfaceArray!.length);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAllBinaryTiledLayerArray(geographicMapInterfaceArray, tiledLayerArray, 0);;
    
}


    public getAllBinaryTiledLayerArray(geographicMapInterfaceArray: BasicGeographicMap[], tiledLayerArray: Layer[], startIndex: number): Layer[]{

    var geographicMapInterface: BasicGeographicMap;;
    

    var size: number = geographicMapInterfaceArray!.length
                ;;
    

    var count: number = 0;;
    




                        for (
    var index: number = size +startIndex;--index >= startIndex; )
        {
geographicMapInterface= geographicMapInterfaceArray[index]!;
    
tiledLayerArray[count++]= geographicMapInterface!.getAllBinaryTiledLayer();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tiledLayerArray;
    
}


    public move(geographicMapInterfaceArray: BasicGeographicMap[], dx: number, dy: number){

    var geographicMapInterface: BasicGeographicMap;;
    

    var size: number = geographicMapInterfaceArray!.length
                ;;
    




                        for (
    var index: number = size;--index >= 0; )
        {
geographicMapInterface= geographicMapInterfaceArray[index]!;
    
geographicMapInterface!.getAllBinaryTiledLayer()!.moveDXY(dx, dy);
    
}

}


    public setPosition(geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){

    var geographicMapInterface: BasicGeographicMap;;
    

    var size: number = geographicMapInterfaceArray!.length
                ;;
    




                        for (
    var index: number = size;--index >= 0; )
        {
geographicMapInterface= geographicMapInterfaceArray[index]!;
    
geographicMapInterface!.getAllBinaryTiledLayer()!.setPosition(x, y, geographicMapInterface!.getAllBinaryTiledLayer()!.getZP());
    
}

}


}



