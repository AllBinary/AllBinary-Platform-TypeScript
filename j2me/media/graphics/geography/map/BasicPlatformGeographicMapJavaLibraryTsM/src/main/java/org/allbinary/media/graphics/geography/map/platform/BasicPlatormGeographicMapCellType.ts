
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { SmallIntegerSingletonFactory } from '../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicPlatormGeographicMapCellType
            extends Object
         {
        

    public static createType(type: number): BasicPlatormGeographicMapCellType{

    let types: BasicArrayList = new BasicArrayListS(1);;
    
types.add(SmallIntegerSingletonFactory.getInstance()!.getAt(type));
    

    let basicPlatormGeographicMapCellType: BasicPlatormGeographicMapCellType = new BasicPlatormGeographicMapCellType(types);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicPlatormGeographicMapCellType;
    
}


    private readonly types: number[];

public constructor (types: BasicArrayList){

            super();
        
    let size: number = types.size()!;;
    

    let typeArray: number[] = new Array(size);;
    

    let typeAsInteger: Integer;;
    

    let type: number= 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
typeAsInteger= (types.get(index) as Integer);
    
type= typeAsInteger!.intValue();
    
new GeographicMapCellType(type, 0);
    
typeArray[index]= type;
    
}

this.types= typeArray;
    
}


    public isType(type: GeographicMapCellType): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hasType(type.getType());;
    
}


    public hasType(type: number): boolean{

    let size: number = this.types.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

                        if(this.types[index] == type)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

