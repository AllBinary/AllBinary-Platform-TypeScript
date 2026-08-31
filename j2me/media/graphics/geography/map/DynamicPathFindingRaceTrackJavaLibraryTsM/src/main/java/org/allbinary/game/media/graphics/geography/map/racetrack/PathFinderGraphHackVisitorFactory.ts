
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

        


import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { PathFinderGraphVisitorFactoryBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorFactoryBase.js';
      //not GWT import const PathFinderGraphVisitorFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinderGraphVisitorFactoryBase;

      
import { PathFinderGraphVisitorBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js';
      //not GWT import const PathFinderGraphVisitorBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFinderGraphVisitorBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFinderGraphHackVisitor } from './PathFinderGraphHackVisitor.js';
//not GWT import const  = globalThis.org.allbinary.game.media.graphics.geography.map.racetrack.PathFinderGraphHackVisitor;

                
export class PathFinderGraphHackVisitorFactory extends PathFinderGraphVisitorFactoryBase {
        

    private readonly edgeMinimum: number;

    private readonly minPathWeight: number;

    private readonly maxPathWeight: number;

public constructor (edgeMinimum: number, minPathWeight: number, maxPathWeight: number){

            super();
        this.edgeMinimum= edgeMinimum;
    
this.minPathWeight= minPathWeight;
    
this.maxPathWeight= maxPathWeight;
    
}


    public getInstance(geographicMapInterface: BasicGeographicMap): PathFinderGraphVisitorBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PathFinderGraphHackVisitor(geographicMapInterface, this.edgeMinimum, this.minPathWeight, this.maxPathWeight);
    
}


}



