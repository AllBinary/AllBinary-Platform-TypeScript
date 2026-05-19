
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
        
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGeographicMap } from './BasicGeographicMap.js';
import { GeographicMapCellPositionFactoryInterface } from './GeographicMapCellPositionFactoryInterface.js';
import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
import { GeographicMapCellPositionFactoryInitVisitorInterface } from './GeographicMapCellPositionFactoryInitVisitorInterface.js';

export class BasicGeographicMapCellPositionFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly geographicMapCellPositionArray: GeographicMapCellPosition[][]

    readonly geographicMapInterface: BasicGeographicMap

    readonly geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface

    private readonly columns: number

    private readonly rows: number

    private readonly tiledLayer: AllBinaryTiledLayer
public constructor (geographicMapInterface: BasicGeographicMap){

            super();
        this.geographicMapInterface= geographicMapInterface;
    
this.geographicMapCellPositionFactoryInterface= this.geographicMapInterface!.getGeographicMapCellPositionFactoryInterface();
    
this.tiledLayer= this.geographicMapInterface!.getAllBinaryTiledLayer();
    
this.columns= this.tiledLayer!.getColumns();
    
this.rows= this.tiledLayer!.getRows();
    
this.geographicMapCellPositionArray= new Array(this.rows) [this.columns]
                                                            ;
    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    init(){

    var tiledLayer: AllBinaryTiledLayer = this.tiledLayer;
;
    

    var columns: number = this.getColumns()!;
;
    

    var rows: number = this.getRows()!;
;
    

    var width: number = tiledLayer!.getCellWidth()!;
;
    

    var height: number = tiledLayer!.getCellHeight()!;
;
    




                        for (
    var column: number = 0;
column < columns; column++)
        {




                        for (
    var row: number = 0;
row < rows; row++)
        {
this.createInstance(column, row, width, height);
    
}

}

}


                //@Throws(Exception.constructor)
            
    public visit(geographicMapCelPositionFactoryInitVisitorInterface: GeographicMapCellPositionFactoryInitVisitorInterface){

    var tiledLayer: AllBinaryTiledLayer = this.tiledLayer;
;
    

    var columns: number = this.getColumns()!;
;
    

    var rows: number = this.getRows()!;
;
    

        try {
            
    var cellPosition: GeographicMapCellPosition
;
    




                        for (
    var column: number = 0;
column < columns; column++)
        {




                        for (
    var row: number = 0;
row < rows; row++)
        {
cellPosition= this.getAt(column, row);
    
geographicMapCelPositionFactoryInitVisitorInterface!.visit(tiledLayer, cellPosition);
    
}

}


                //: 
} catch(e) 
            {

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
;
    
this.logUtil!.put(new StringMaker().
                            append(commonSeps!.BRACKET_OPEN)!.appendint(rows)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(columns)!.append(commonSeps!.BRACKET_CLOSE)!.toString(), this, "visit", e);
    



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getAt(i_column: number, i_row: number): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionArray[i_row]![i_column]!;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(anotherMapGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAt(anotherMapGeographicMapCellPosition!.getColumn(), anotherMapGeographicMapCellPosition!.getRow());;
    
}


                //@Throws(Exception.constructor)
            
    public createInstance(i_column: number, i_row: number, width: number, height: number): GeographicMapCellPosition{

    var cellPositionCanBeNull: any = this.geographicMapCellPositionArray[i_row]![i_column];
;
    

                        if(cellPositionCanBeNull == 
                                    null
                                )
                        
                                    {
                                    cellPositionCanBeNull= this.geographicMapCellPositionFactoryInterface!.getInstance(this.geographicMapInterface, i_column, i_row, this.columns, this.rows, width, height);
    
this.geographicMapCellPositionArray[i_row]![i_column]= cellPositionCanBeNull as GeographicMapCellPosition;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionCanBeNull as GeographicMapCellPosition;
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.columns;
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rows;
    
}


}
                
            

