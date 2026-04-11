
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
        



import { BasicColor } from "../../../org/allbinary/graphics/color/BasicColor.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../org/allbinary/time/TimeDelayHelper.js";

    

export class TimedVectorAnimation extends VectorAnimation {
        

    private timeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(200);
        
        
public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior)                        

                            : super(currentPoints, basicColor, animationBehavior){

            super();
                //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (currentPoints: number[][], basicColor: BasicColor, animationBehavior: AnimationBehavior)                        

                            : super(currentPoints, basicColor, animationBehavior){

            super();
                //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}


    public nextFrame(){

                        if(this.timeElapsedHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    super.nextFrame();
    

                                    }
                                
}


}
                
            

