
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
        



//not game specific package import { CellPosition } from '../../../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { CellPositionFactory } from '../../../../../../../org/allbinary/graphics/CellPositionFactory.js';
      const CellPositionFactory = globalThis.org.allbinary.graphics.CellPositionFactory;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GeographicMapCellPositionEvent extends AllBinaryEventObject {
        

    private geographicMapCellPosition: CellPosition = CellPositionFactory.getInstance()!.NONE;

public constructor (anyType: any = {}, geographicMapCellPosition: CellPosition){
            super(anyType);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.geographicMapCellPosition= geographicMapCellPosition;
    
}


    public init(anyType: any = {}){
this.setSource(anyType);
    
}


    public setGeographicMapCellPosition(geographicMapCellPosition: GeographicMapCellPosition){
this.geographicMapCellPosition= geographicMapCellPosition;
    
}


    public getGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPosition as GeographicMapCellPosition;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("CellPositionEvent: ");
    
stringBuffer!.append("\nGeographicMapCellPosition: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getGeographicMapCellPosition()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

