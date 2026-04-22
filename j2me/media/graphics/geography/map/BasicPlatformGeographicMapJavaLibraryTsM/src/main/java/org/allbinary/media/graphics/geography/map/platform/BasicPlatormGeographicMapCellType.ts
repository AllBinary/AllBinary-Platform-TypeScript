
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicPlatormGeographicMapCellType
            extends Object
         {
        

    private readonly types: number[]
public constructor (type: number){

            super();
            //var type = type
new GeographicMapCellType(type);
    
this.types= new Array(1);
    
this.types[0]= type;
    
}

public constructor (types: number[]){

            super();
            //var types = types

    var size: number = types.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
new GeographicMapCellType(types[index]!);
    
}

this.types= types;
    
}

public constructor (types: BasicArrayList){

            super();
            //var types = types

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
typeAsInteger= (types.get(index);

                         as Integer);
    
type= typeAsInteger!.toInt();
    
new GeographicMapCellType(type);
    
typeArray[index]= type;
    
}

this.types= typeArray;
    
}


    public isType(type: GeographicMapCellType): boolean{
    //var type = type



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isType(type.getType());

                        ;
    
}


    public isType(type: number): boolean{
    //var type = type

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
                
            

