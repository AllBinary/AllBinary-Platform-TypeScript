
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
        
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      
import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListS } from '../../../../../../../org/allbinary/util/BasicArrayListS.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicPlatormGeographicMapCellType
            extends Object
         {
        

    public static createType(type: number): BasicPlatormGeographicMapCellType{

    var types: BasicArrayList = new BasicArrayListS(1);
;
    
types.add(type.toString());
    

    var basicPlatormGeographicMapCellType: BasicPlatormGeographicMapCellType = new BasicPlatormGeographicMapCellType(types);
;
    
new GeographicMapCellType(type, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicPlatormGeographicMapCellType;
    
}


    private readonly types: number[]
public constructor (types: BasicArrayList){

            super();
        
    var size: number = types.size()!;
;
    

    var typeArray: number[] = new Array(size);
;
    

    var typeAsInteger: Integer
;
    

    var type: number= 0
;
    




                        for (
    var index: number = 0;
index < size; index++)
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

    var size: number = types.length
                ;
;
    




                        for (
    var index: number = 0;
index < size; index++)
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
                
            

