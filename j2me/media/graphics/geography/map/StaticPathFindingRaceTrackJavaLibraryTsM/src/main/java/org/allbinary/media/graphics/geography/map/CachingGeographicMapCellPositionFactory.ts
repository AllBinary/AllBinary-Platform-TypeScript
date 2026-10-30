
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
        
import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const CellPosition

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const BasicGeographicMapCellPositionFactory
import { BasicGeographicMap } from './BasicGeographicMap.js';
//sameFolderImports - not GWT import - same folder const BasicGeographicMap
import { GeographicMapCellPositionFactory } from './GeographicMapCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellPositionFactory
import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellPosition

export class CachingGeographicMapCellPositionFactory extends BasicGeographicMapCellPositionFactory {
        

protected constructor (geographicMapInterface: BasicGeographicMap){
            super(geographicMapInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public createInstance(i_column: number, i_row: number, width: number, height: number): GeographicMapCellPosition{

    let hashtable: ABHashtable<any, any> = GeographicMapCellPositionFactory.getHashtable()!;;
    

    let cellPositionKey: string = CellPosition.toStringColRow(i_column, i_row)!;;
    

    let cellPositionCanBeNull: any = hashtable.get(cellPositionKey);;
    

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

