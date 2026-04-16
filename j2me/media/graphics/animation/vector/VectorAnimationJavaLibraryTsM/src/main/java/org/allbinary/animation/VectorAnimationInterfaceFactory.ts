
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

    
import { BasicColorFactory } from "../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ScaleProperties } from "../../../org/allbinary/media/ScaleProperties.js";

    

import { AnimationBehaviorFactory } from "./AnimationBehaviorFactory.js";

export class VectorAnimationInterfaceFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface {
        

    private currentPoints: number[][][]

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    readonly animationBehaviorFactory: AnimationBehaviorFactory
public constructor (currentPoints: number[][][], basicColor: BasicColor)                        

                            : this(currentPoints, basicColor, AnimationBehaviorFactory.getInstance()){

            super();
                //var currentPoints = currentPoints
    //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehaviorFactory = animationBehaviorFactory
this.currentPoints= currentPoints;
    
this.setBasicColorP(basicColor);
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorAnimation(this.currentPoints, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

