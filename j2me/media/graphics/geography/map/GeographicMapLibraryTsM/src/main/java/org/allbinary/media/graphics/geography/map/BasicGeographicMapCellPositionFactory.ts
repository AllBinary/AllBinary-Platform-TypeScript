
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

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
                //var geographicMapInterface = geographicMapInterface
this.geographicMapInterface= geographicMapInterface
this.geographicMapCellPositionFactoryInterface= this.geographicMapInterface!.getGeographicMapCellPositionFactoryInterface()
this.tiledLayer= this.geographicMapInterface!.getAllBinaryTiledLayer()
this.columns= this.tiledLayer!.getColumns()
this.rows= this.tiledLayer!.getRows()
this.geographicMapCellPositionArray= Array(rows) { arrayOfNulls<GeographicMapCellPosition?>(columns) }
                                                            
this.init()
}


                //@Throws(Error::class)
            
    init(){

    var tiledLayer: AllBinaryTiledLayer = this.tiledLayer;
        
        


    var columns: number = this.getColumns()!;
        
        


    var rows: number = this.getRows()!;
        
        


    var width: number = tiledLayer!.getCellWidth()!;
        
        


    var height: number = tiledLayer!.getCellHeight()!;
        
        





                        for (
    var column: number = 0;
        
        
column < columns; column++)
        {




                        for (
    var row: number = 0;
        
        
row < rows; row++)
        {
this.createInstance(column, row, width, height)
}

}

}


                //@Throws(Error::class)
            
    public visit(geographicMapCelPositionFactoryInitVisitorInterface: GeographicMapCellPositionFactoryInitVisitorInterface){
    //var geographicMapCelPositionFactoryInitVisitorInterface = geographicMapCelPositionFactoryInitVisitorInterface

    var tiledLayer: AllBinaryTiledLayer = this.tiledLayer;
        
        


    var columns: number = this.getColumns()!;
        
        


    var rows: number = this.getRows()!;
        
        


        try {
            
    var cellPosition: GeographicMapCellPosition





                        for (
    var column: number = 0;
        
        
column < columns; column++)
        {




                        for (
    var row: number = 0;
        
        
row < rows; row++)
        {
cellPosition= this.getInstance(column, row)
geographicMapCelPositionFactoryInitVisitorInterface!.visit(tiledLayer, cellPosition)
}

}

} catch(e: Exception)
            {

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

logUtil!.put(StringMaker().
                            append(commonSeps!.BRACKET_OPEN)!.appendint(rows)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(columns)!.append(commonSeps!.BRACKET_CLOSE)!.toString(), this, "visit", e)



                            throw e
}

}


                //@Throws(Error::class)
            
    public getInstance(i_column: number, i_row: number): GeographicMapCellPosition{
    //var i_column = i_column
    //var i_row = i_row



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionArray[i_row]![i_column]!;
    
}


                //@Throws(Error::class)
            
    public getInstance(anotherMapGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{
    //var anotherMapGeographicMapCellPosition = anotherMapGeographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(anotherMapGeographicMapCellPosition!.getColumn(), anotherMapGeographicMapCellPosition!.getRow());
    
}


                //@Throws(Error::class)
            
    public createInstance(i_column: number, i_row: number, width: number, height: number): GeographicMapCellPosition{
    //var i_column = i_column
    //var i_row = i_row
    //var width = width
    //var height = height

    var cellPositionCanBeNull: any = {}? = geographicMapCellPositionArray[i_row]![i_column];
        
        


                        if(cellPositionCanBeNull == 
                                    null
                                )
                        
                                    {
                                    cellPositionCanBeNull= this.geographicMapCellPositionFactoryInterface!.getInstance(this.geographicMapInterface, i_column, i_row, columns, rows, width, height)
geographicMapCellPositionArray[i_row]![i_column]= cellPositionCanBeNull as GeographicMapCellPosition

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionCanBeNull as GeographicMapCellPosition;
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return columns;
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
}


}
                
            

