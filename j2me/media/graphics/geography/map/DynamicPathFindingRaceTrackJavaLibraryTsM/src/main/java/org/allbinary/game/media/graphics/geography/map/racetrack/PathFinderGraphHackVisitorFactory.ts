
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
        



import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { PathFinderGraphVisitorFactoryBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorFactoryBase.js";

    
import { PathFinderGraphVisitorBase } from "../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js";

    

export class PathFinderGraphHackVisitorFactory extends PathFinderGraphVisitorFactoryBase {
        

    private readonly edgeMinimum: number

    private readonly minPathWeight: number

    private readonly maxPathWeight: number
public constructor ()                        

                            : this(10, 8, 100000){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (edgeMinimum: number, minPathWeight: number, maxPathWeight: number){

            super();
            var edgeMinimum = edgeMinimum
var minPathWeight = minPathWeight
var maxPathWeight = maxPathWeight
this.edgeMinimum= edgeMinimum;
    
this.minPathWeight= minPathWeight;
    
this.maxPathWeight= maxPathWeight;
    
}


    public getInstance(geographicMapInterface: BasicGeographicMap): PathFinderGraphVisitorBase{
    //var geographicMapInterface = geographicMapInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathFinderGraphHackVisitor(geographicMapInterface, this.edgeMinimum, this.minPathWeight, this.maxPathWeight);
    
}


}
                
            

