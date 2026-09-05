
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomTextAnimation } from './CustomTextAnimation.js';
//not GWT import - same folder const CustomTextAnimation = globalThis.org.allbinary.animation.text.CustomTextAnimation;

                import { AdjustCustomTextAnimation } from './AdjustCustomTextAnimation.js';
//not GWT import - same folder const AdjustCustomTextAnimation = globalThis.org.allbinary.animation.text.AdjustCustomTextAnimation;

                
export class CustomTextAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    public static createDXY(text: string, fontSize: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory): CustomTextAnimationFactory{

    var customTextAnimationFactory: CustomTextAnimationFactory = new CustomTextAnimationFactory(text, fontSize, animationBehaviorFactory);;
    
customTextAnimationFactory!.dx= dx;
    
customTextAnimationFactory!.dy= dy;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customTextAnimationFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly animationBehaviorFactory: AnimationBehaviorFactory;

    public basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;

    private text: string;

    private initScaleHeight: number;

    dx: number = 0;

    dy: number = 0;

    font: Font;

    public scaleProperties: ScaleProperties;

public constructor (text: string, fontSize: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.scaleProperties= new ScaleProperties();
    
this.text= text;
    
this.scaleProperties!.scaleHeight= Math.round(fontSize) -(fontSize /4);
    
this.initScaleHeight= this.scaleProperties!.scaleHeight;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
this.font= Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.initScaleHeight);
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var customTextAnimation: CustomTextAnimation;;
    

                        if(this.dx != 0 || this.dy != 0)
                        
                                    {
                                    customTextAnimation= new AdjustCustomTextAnimation(this.text, this.scaleProperties!.scaleHeight, this.dx, this.dy, this.animationBehaviorFactory!.getOrCreateInstance());
    

                                    }
                                
                        else {
                            customTextAnimation= new CustomTextAnimation(this.text, this.scaleProperties!.scaleHeight, this.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
customTextAnimation!.setBasicColorP(this.basicColor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customTextAnimation;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.font.stringWidth(this.text);;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.font.getHeight();;
    
}


}



