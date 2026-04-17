
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomTextAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly animationBehaviorFactory: AnimationBehaviorFactory

    public basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;
        
        

    private text: string

    private initScaleHeight: number

    private dx: number = 0;
        
        

    private dy: number = 0;
        
        

    font: Font

    public scaleProperties: ScaleProperties
public constructor (text: string, fontSize: number, dx: number, dy: number)                        

                            : this(text, fontSize, AnimationBehaviorFactory.getInstance()){

            super();
                //var text = text
    //var fontSize = fontSize
    //var dx = dx
    //var dy = dy


                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}

public constructor (text: string, fontSize: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(text, fontSize, animationBehaviorFactory){

            super();
                //var text = text
    //var fontSize = fontSize
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}

public constructor (text: string, fontSize: number)                        

                            : this(text, fontSize, AnimationBehaviorFactory.getInstance()){

            super();
                //var text = text
    //var fontSize = fontSize


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (text: string, fontSize: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var text = text
    //var fontSize = fontSize
    //var animationBehaviorFactory = animationBehaviorFactory
this.scaleProperties= new ScaleProperties();
    
this.text= text;
    
this.scaleProperties!.scaleHeight= fontSize.toInt() -(fontSize /4);
    
this.initScaleHeight= this.scaleProperties!.scaleHeight;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
this.font= Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.initScaleHeight);
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId

    var customTextAnimation: CustomTextAnimation
;
    

                        if(dx != 0 || dy != 0)
                        
                                    {
                                    customTextAnimation= new AdjustCustomTextAnimation(text, this.scaleProperties!.scaleHeight, dx, dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            customTextAnimation= new CustomTextAnimation(text, this.scaleProperties!.scaleHeight, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
customTextAnimation!.setBasicColorP(basicColor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customTextAnimation;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return font.stringWidth(this.text);

                        ;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return font.getHeight();

                        ;
    
}


}
                
            

