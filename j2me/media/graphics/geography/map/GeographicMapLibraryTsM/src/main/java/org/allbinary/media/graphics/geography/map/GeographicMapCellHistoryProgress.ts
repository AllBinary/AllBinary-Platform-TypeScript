
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

        


//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellHistoryProgressBase } from './GeographicMapCellHistoryProgressBase.js';
//not GWT import - same folder const GeographicMapCellHistoryProgressBase
import { GeographicMapCellHistory } from './GeographicMapCellHistory.js';
//not GWT import - same folder const GeographicMapCellHistory

export class GeographicMapCellHistoryProgress extends GeographicMapCellHistoryProgressBase {
        

    private totalVisitedArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    private geographicMapCellHistoryArray: GeographicMapCellHistory[] = GeographicMapCellHistory.NULL_GEOGRPAHIC_MAP_HISTORY_ARRAY;

public constructor (geographicMapCellHistoryArray: GeographicMapCellHistory[]){

            super();
        this.geographicMapCellHistoryArray= geographicMapCellHistoryArray;
    
this.init();
    
}


    public init(){
this.totalVisitedArray= new Array(this.geographicMapCellHistoryArray!.length);
    
}


    public isAnyProgress(): boolean{

    let isProgressing: boolean = false;;
    

    let size: number = this.geographicMapCellHistoryArray!.length
                ;;
    

    let currentTotalVisited: number= 0;;
    

    let totalVisited: number= 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
totalVisited= this.geographicMapCellHistoryArray[index]!.getTotalVisited();
    
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

