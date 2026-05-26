
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
        
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      
import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
import { SimpleGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      
import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PathFindingNode
            extends Object
         {
        

    public parent: any = NullUtil.getInstance()!.NULL_OBJECT;

    public geographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;

public constructor (parent: any = {}, geographicMapCellPosition: GeographicMapCellPosition){

            super();
        this.parent= parent;
    
this.setGeographicMapCellPositionP(geographicMapCellPosition);
    

                        if(this.geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    


                            throw new Exception("No GeographicMapCellPosition");
                    

                                    }
                                
}


    public getParentP(): PathFindingNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.parent as PathFindingNode;
    
}


    public setGeographicMapCellPositionP(geographicMapCellPosition: GeographicMapCellPosition){
this.geographicMapCellPosition= geographicMapCellPosition;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(CommonLabels.getInstance()!.COLON_SEP);
    
stringBuffer!.append(" Path: ");
    
stringBuffer!.append(this.geographicMapCellPosition!.toString());
    

    var pathFindingNode: PathFindingNode = this.getParentP()!;;
    

        while(pathFindingNode != 
                                    null
                                )
        {
stringBuffer!.append(pathFindingNode!.geographicMapCellPosition!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
pathFindingNode= pathFindingNode!.getParentP();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

