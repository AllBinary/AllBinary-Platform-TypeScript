
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IconLayer extends AllBinaryLayer {
        

    public static readonly NULL_ICON_LAYER: IconLayer = new IconLayer(NullAnimationFactory.getFactoryInstance()!.getInstance(0), 0, 0);
        
        

    private animationInterface: Animation
public constructor (animationInterface: Animation, width: number, height: number)                        

                            : super(new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, width, height), new ViewPosition()){

            super();
            var animationInterface = animationInterface
var width = width
var height = height


                            //For kotlin this is before the body of the constructor.
                    
this.animationInterface= animationInterface;
    
}


    public paint(graphics: Graphics){
var graphics = graphics
this.animationInterface!.paint(graphics, x, y);
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
this.animationInterface!.paintThreed(graphics, x, y, z);
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterface;
    
}


}
                
            

