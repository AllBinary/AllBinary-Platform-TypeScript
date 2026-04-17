
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
        



import { NullUtil } from "../../../../../../org/allbinary/logic/NullUtil.js";

    

import { GeographicMapCellHistory } from "./GeographicMapCellHistory.js";

export class GeographicMapCellHistoryProgress extends GeographicMapCellHistoryProgressBase {
        

    private totalVisitedArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;
        
        

    private geographicMapCellHistoryArray: GeographicMapCellHistory[] = GeographicMapCellHistory.NULL_GEOGRPAHIC_MAP_HISTORY_ARRAY;
        
        
public constructor (geographicMapCellHistoryArray: GeographicMapCellHistory[]){

            super();
                //var geographicMapCellHistoryArray = geographicMapCellHistoryArray
this.geographicMapCellHistoryArray= geographicMapCellHistoryArray;
    
this.init();
    
}


    public init(){
this.totalVisitedArray= new Array(this.geographicMapCellHistoryArray!.length);
    
}


    public isAnyProgress(): boolean{

    var isProgressing: boolean = false;
        
        
;
    

    var size: number = geographicMapCellHistoryArray!.length
                ;
        
        
;
    

    var currentTotalVisited: number= 0
;
    

    var totalVisited: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
totalVisited= geographicMapCellHistoryArray[index]!.getTotalVisited();
    
currentTotalVisited= this.totalVisitedArray[index]!;
    

                        if(currentTotalVisited < totalVisited)
                        
                                    {
                                    isProgressing= true;
    
this.totalVisitedArray[index]= totalVisited;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isProgressing;
    
}


}
                
            

