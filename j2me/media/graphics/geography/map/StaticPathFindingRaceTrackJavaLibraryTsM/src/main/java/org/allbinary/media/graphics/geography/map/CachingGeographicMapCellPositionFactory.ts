
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
      //not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

                import { BasicGeographicMap } from './BasicGeographicMap.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

                import { GeographicMapCellPositionFactory } from './GeographicMapCellPositionFactory.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactory;

                import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

                
export class CachingGeographicMapCellPositionFactory extends BasicGeographicMapCellPositionFactory {
        

protected constructor (geographicMapInterface: BasicGeographicMap){
            super(geographicMapInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public createInstance(i_column: number, i_row: number, width: number, height: number): GeographicMapCellPosition{

    var hashtable: Hashtable<any, any> = GeographicMapCellPositionFactory.getHashtable()!;;
    

    var cellPositionKey: string = CellPosition.toStringColRow(i_column, i_row)!;;
    

    var cellPositionCanBeNull: any = hashtable.get(cellPositionKey);;
    

                        if(cellPositionCanBeNull == 
                                    null
                                )
                        
                                    {
                                    cellPositionCanBeNull= this.geographicMapCellPositionFactoryInterface!.getInstance(this.geographicMapInterface, i_column, i_row, this.getColumns(), this.getRows(), width, height);
    
this.geographicMapCellPositionArray[i_row]![i_column]= cellPositionCanBeNull as GeographicMapCellPosition;
    
hashtable.put(cellPositionKey, cellPositionCanBeNull);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionCanBeNull as GeographicMapCellPosition;
    
}


}



