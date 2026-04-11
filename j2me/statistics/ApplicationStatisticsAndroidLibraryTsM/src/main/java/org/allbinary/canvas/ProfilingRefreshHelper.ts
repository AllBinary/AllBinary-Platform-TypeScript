
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
        



import { View } from "../../../android/view/View.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

export class ProfilingRefreshHelper extends AndroidGameStatistics {
        

    private static readonly instance: ProfilingRefreshHelper = new ProfilingRefreshHelper();
        
        

    public static getInstance(): AndroidGameStatistics{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private firstTime: boolean = true;
        
        

    private bestFrameProcessingTime: number= 0

    private worstFrameProcessingTime: number= 0

    private frameProcessingTimeElapsed: number= 0
private constructor (){

            super();
            }


    public init(view: View){
var view = view
super.init(view);
    
frameProcessingTimeElapsed= this.getTimeDelayHelper()!.getStartTime();
    
bestFrameProcessingTime= Integer.MAX_VALUE;
    
worstFrameProcessingTime= 0;
    
}


    public nextFrame(){
frameProcessingTimeElapsed= System.currentTimeMillis() -frameProcessingTimeElapsed;
    

                        if(firstTime != true)
                        
                                    {
                                    
                        if(frameProcessingTimeElapsed > worstFrameProcessingTime)
                        worstFrameProcessingTime= frameProcessingTimeElapsed.toInt()

                        if(frameProcessingTimeElapsed < bestFrameProcessingTime)
                        bestFrameProcessingTime= frameProcessingTimeElapsed.toInt()

                                    }
                                
                        else {
                            firstTime= false;
    

                        }
                            
super.nextFrame();
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(super.toString())!.append(" Worst: ")!.appendint(worstFrameProcessingTime)!.append(" Best: ")!.appendint(bestFrameProcessingTime)!.toString();

                        ;
    
}


}
                
            

