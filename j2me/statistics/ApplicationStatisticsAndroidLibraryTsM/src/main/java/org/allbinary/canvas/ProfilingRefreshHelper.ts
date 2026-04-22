
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { View } from "../../../android/view/View.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AndroidGameStatistics } from "./AndroidGameStatistics.js";

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
    
this.frameProcessingTimeElapsed= this.getTimeDelayHelper()!.getStartTime();
    
this.bestFrameProcessingTime= Integer.MAX_VALUE;
    
this.worstFrameProcessingTime= 0;
    
}


    public nextFrame(){
this.frameProcessingTimeElapsed= System.currentTimeMillis() -this.frameProcessingTimeElapsed;
    

                        if(this.firstTime != true)
                        
                                    {
                                    
                        if(this.frameProcessingTimeElapsed > this.worstFrameProcessingTime)
                        this.worstFrameProcessingTime= this.frameProcessingTimeElapsed

                        if(this.frameProcessingTimeElapsed < this.bestFrameProcessingTime)
                        this.bestFrameProcessingTime= this.frameProcessingTimeElapsed

                                    }
                                
                        else {
                            this.firstTime= false;
    

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
                
            

