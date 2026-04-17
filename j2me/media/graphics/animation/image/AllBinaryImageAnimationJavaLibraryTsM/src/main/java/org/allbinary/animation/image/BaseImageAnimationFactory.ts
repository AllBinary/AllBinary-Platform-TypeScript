
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehaviorFactory } from "../../../../org/allbinary/animation/AnimationBehaviorFactory.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { AnimationFactoryImageScaleUtil } from "../../../../org/allbinary/image/AnimationFactoryImageScaleUtil.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnimationFactoryInitializationVisitor } from "./AnimationFactoryInitializationVisitor.js";

export class BaseImageAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly animationFactoryImageScaleUtil: AnimationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance()!;
        
        

    private readonly image: Image

    public readonly animationBehaviorFactory: AnimationBehaviorFactory

    private readonly sequenceArray: number[]

    readonly animationFactoryInitializationVisitor: AnimationFactoryInitializationVisitor

    scaleProperties: ScaleProperties = ScaleProperties.instance;
        
        
public constructor (image: Image, width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, PrimitiveIntUtil.getArrayInstance(), width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}

public constructor (image: Image, sequenceArray: number[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, sequenceArray, width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var sequenceArray = sequenceArray
    //var width = width
    //var height = height
    //var dx = dx
    //var dy = dy
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}

public constructor (image: Image, width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory)                        

                            : this(image, PrimitiveIntUtil.getArrayInstance(), width, height, animationBehaviorFactory){

            super();
                //var image = image
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (image: Image, sequenceArray: number[], width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
                //var image = image
    //var sequenceArray = sequenceArray
    //var width = width
    //var height = height
    //var animationBehaviorFactory = animationBehaviorFactory
this.animationFactoryInitializationVisitor= new AnimationFactoryInitializationVisitor();
    
this.image= image;
    
this.animationFactoryInitializationVisitor!.width= width;
    
this.animationFactoryInitializationVisitor!.height= height;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
this.sequenceArray= sequenceArray;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(instanceId);

                        ;
    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getSequenceArray(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sequenceArray;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(image.getHeight());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(this.animationFactoryInitializationVisitor!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
this.scaleProperties= scaleProperties;
    

                        if(this.scaleProperties!.shouldScale)
                        
                                    {
                                    this.scaleProperties!.scaleWidth= (this.animationFactoryInitializationVisitor!.width *this.scaleProperties!.scaleX).toInt();
    
this.scaleProperties!.scaleHeight= (this.animationFactoryInitializationVisitor!.height *this.scaleProperties!.scaleY).toInt();
    

                                    }
                                
                        else {
                            
                        }
                            
}


    public getAnimationFactoryInitializationVisitorP(): AnimationFactoryInitializationVisitor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationFactoryInitializationVisitor;
    
}


    public getScalePropertiesP(): ScaleProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaleProperties;
    
}


}
                
            

