
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
        



import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicPlatormGeographicMapCellType
            extends Object
         {
        

    private readonly types: IntArray
public constructor (type: number){

            super();
                //var type = type
GeographicMapCellType(type)
this.types= IntArray(1)
this.types[0]= type
}

public constructor (types: IntArray){

            super();
                //var types = types

    var size: number = types.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
GeographicMapCellType(types[index]!)
}

this.types= types
}

public constructor (types: BasicArrayList){

            super();
                //var types = types

    var size: number = types.size()!;
        
        


    var typeArray: IntArray = IntArray(size);
        
        


    var typeAsInteger: Integer


    var type: number= 0





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
typeAsInteger= (types.get(index) as Integer)
type= typeAsInteger!.toInt()
GeographicMapCellType(type)
typeArray[index]= type
}

this.types= typeArray
}


    public isType(type: GeographicMapCellType): boolean{
    //var type = type



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isType(type.getType());
    
}


    public isType(type: number): boolean{
    //var type = type

    var size: number = types.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(types[index] == type)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

