
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
        



import { CellPosition } from "../../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { CellPositionFactory } from "../../../../../../../org/allbinary/graphics/CellPositionFactory.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    

export class GeographicMapCellPositionEvent extends AllBinaryEventObject {
        

    private geographicMapCellPosition: CellPosition = CellPositionFactory.getInstance()!.NONE;
        
        
public constructor (anyType: any = {}, geographicMapCellPosition: CellPosition)                        

                            : super(anyType){

            super();
                //var anyType = anyType
    //var geographicMapCellPosition = geographicMapCellPosition


                            //For kotlin this is before the body of the constructor.
                    
this.geographicMapCellPosition= geographicMapCellPosition
}

public constructor (anyType: any = {}, key: number)                        

                            : super(anyType){

            super();
            var anyType = anyType
var key = key


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(anyType: any = {}){
var anyType = anyType
this.setSource(anyType)
}


    public setGeographicMapCellPosition(geographicMapCellPosition: GeographicMapCellPosition){
var geographicMapCellPosition = geographicMapCellPosition
this.geographicMapCellPosition= geographicMapCellPosition
}


    public getGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition as GeographicMapCellPosition;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("CellPositionEvent: ")
stringBuffer!.append("\nGeographicMapCellPosition: ")
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getGeographicMapCellPosition()))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

