
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
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellTypeFactory } from './GeographicMapCellTypeFactory.js';
import { GeographicMapCellType } from './GeographicMapCellType.js';
import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';

export class SimpleGeographicMap
            extends Object
         {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly id: Integer;

    private readonly name: string;

    readonly cellTypeIdToGeographicMapCellType: number[];

    private readonly tiledLayer: AllBinaryTiledLayer;

    private foregroundBasicColor: BasicColor = BasicColorFactory.getInstance()!.NULL_COLOR;

    private backgroundBasicColor: BasicColor = BasicColorFactory.getInstance()!.NULL_COLOR;

public constructor (id: Integer, name: string, cellTypeIdToGeographicMapCellType: number[], tiledLayer: AllBinaryTiledLayer, foregroundBasicColor: BasicColor, backgroundBasicColor: BasicColor){

            super();
        this.id= id;
    
this.name= name;
    
this.cellTypeIdToGeographicMapCellType= cellTypeIdToGeographicMapCellType;
    
this.tiledLayer= tiledLayer;
    
this.setBackgroundBasicColor(backgroundBasicColor);
    
this.setForegroundBasicColor(foregroundBasicColor);
    
}


    public getId(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public reset(){
}


    public getAllBinaryTiledLayer(): AllBinaryTiledLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer;
    
}


    private readonly geographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getCellTypeAt(cellPosition: GeographicMapCellPosition): GeographicMapCellType{

    var i_column: number = cellPosition!.getColumn()!;;
    

    var i_row: number = cellPosition!.getRow()!;;
    

    var cellTypeId: number = this.tiledLayer!.getCell(i_column, i_row)!;;
    

                        if(cellTypeId < 0)
                        
                                    {
                                    cellTypeId= this.tiledLayer!.getAnimatedTile(cellTypeId);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellTypeFactory!.get(this.cellTypeIdToGeographicMapCellType[cellTypeId]!);;
    
}


    public getCellTypeFromMapCellTypeInt(cellTypeId: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellTypeIdToGeographicMapCellType[cellTypeId]!;
    
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.foregroundBasicColor;
    
}


    setForegroundBasicColor(foregroundBasicColor: BasicColor){
this.foregroundBasicColor= foregroundBasicColor;
    
}


    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.backgroundBasicColor;
    
}


    setBackgroundBasicColor(backgroundBasicColor: BasicColor){
this.backgroundBasicColor= backgroundBasicColor;
    
}


}
                
            

