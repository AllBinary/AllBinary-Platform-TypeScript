
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GeographicMapCellTypeFactory } from "./GeographicMapCellTypeFactory.js";

export class GeographicMapCellType
            extends Object
         {
        

    public static readonly NULL_GEOGRAPHIC_MAP_CELL_TYPE_ARRAY: GeographicMapCellType[] = [];
        
        

    public static readonly NULL_GEOGRAPHIC_MAP_CELL_TYPE: GeographicMapCellType = new GeographicMapCellType(Integer.MIN_VALUE);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly type: number
public constructor (type: number)                        

                            : this(type, 0){

            super();
                //var type = type


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (type: number, reset: number){

            super();
                //var type = type
    //var reset = reset
this.type= type;
    

                        if(type != Integer.MIN_VALUE)
                        
                                    {
                                    
    var geographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;
        
        
;
    

    var geographicMapCellTypeArray: GeographicMapCellType[] = geographicMapCellTypeFactory!.getGeographicMapCellTypeArray()!;
        
        
;
    

                        if(geographicMapCellTypeArray[type] == 
                                    null
                                 || reset == 1)
                        
                                    {
                                    geographicMapCellTypeArray[type]= this;
    

                                    }
                                
                        else {
                            
                        if(reset !=  -1)
                        
                                    {
                                    


                            throw new RuntimeException()

                                    }
                                

                        }
                            

                                    }
                                
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SmallIntegerSingletonFactory.getInstance()!.getInstance(this.type)!.toString();

                        ;
    
}


}
                
            

