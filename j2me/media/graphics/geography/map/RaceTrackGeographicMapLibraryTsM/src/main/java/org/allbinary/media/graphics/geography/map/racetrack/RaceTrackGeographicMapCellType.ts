
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
        



import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackGeographicMapCellType extends GeographicMapCellType {
        

    public readonly name: string

    private readonly travelCost: number
public constructor (type: number, travelCost: number){
            super(type);
                        //var type = type
    //var travelCost = travelCost


                            //For kotlin this is before the body of the constructor.
                    
this.travelCost= travelCost;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.name= commonStrings!.UNKNOWN;
    
}

public constructor (name: string, type: number, travelCost: number){
            super(type);
                        //var name = name
    //var type = type
    //var travelCost = travelCost


                            //For kotlin this is before the body of the constructor.
                    
this.name= name;
    
this.travelCost= travelCost;
    
}

public constructor (name: string, type: number, travelCost: number, reset: number){
            super(type, reset);
                        //var name = name
    //var type = type
    //var travelCost = travelCost
    //var reset = reset


                            //For kotlin this is before the body of the constructor.
                    
this.name= name;
    
this.travelCost= travelCost;
    
}


    public getTravelCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return travelCost;
    
}


}
                
            

