
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { FeatureResourceAnimationInterfaceFactoryInterface } from '../../../org/allbinary/animation/resource/FeatureResourceAnimationInterfaceFactoryInterface.js';
//not GWT import const FeatureResourceAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.resource.FeatureResourceAnimationInterfaceFactoryInterface;

      
import { GameConfigurationCentral } from '../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
import { FeaturedResourceFactory } from '../../../org/allbinary/game/resource/FeaturedResourceFactory.js';
//not GWT import const FeaturedResourceFactory = globalThis.org.allbinary.game.resource.FeaturedResourceFactory;

      
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { RectangleFactory } from '../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import - same folder const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

                import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
//not GWT import - same folder const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

                import { BasicAnimationInterfaceFactoryInterface } from './BasicAnimationInterfaceFactoryInterface.js';
//not GWT import - same folder const BasicAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.BasicAnimationInterfaceFactoryInterface;

                import { NullAnimationFactory } from './NullAnimationFactory.js';
//not GWT import - same folder const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

                
export class FeaturedAnimationInterfaceFactoryInterfaceFactory extends FeaturedResourceFactory {
        

    private static INSTANCE: FeaturedAnimationInterfaceFactoryInterfaceFactory = new FeaturedAnimationInterfaceFactoryInterfaceFactory();

    public static getInstance(): FeaturedAnimationInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FeaturedAnimationInterfaceFactoryInterfaceFactory.INSTANCE;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getRectangle(resource: string): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRectangleXY(resource, 0, 0);;
    
}


                //@Throws(Exception.constructor)
            
    public getRectangleXY(resource: string, x: number, y: number): Rectangle{

    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    var list: BasicArrayList = this.getList()!;;
    

    var scale: number = GameConfigurationCentral.getInstance()!.SCALE.getValue()!.intValue()!;;
    

    var size: number = this.getList()!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var featureInterface: FeatureResourceAnimationInterfaceFactoryInterface = list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    
    var rectangle: Rectangle = featureInterface!.getRectangle(resource)!;;
    

                        if(rectangle != RectangleFactory.SINGLETON)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Rectangle(pointFactory!.createXY(x, y), ((rectangle.getWidth() *scale)>>1), ((rectangle.getHeight() *scale)>>1));
    

                                    }
                                

                                    }
                                
}




                            throw new Exception(new StringMaker().append("No rectangle available for current feature selection or Resource: ")!.append(resource)!.toString());
                    
}


                //@Throws(Exception.constructor)
            
    public getProcedural(resource: string): ProceduralAnimationInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBasicAnimationInterfaceFactoryInstance(resource) as ProceduralAnimationInterfaceFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public get(resource: string): AnimationInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBasicAnimationInterfaceFactoryInstance(resource) as AnimationInterfaceFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    getBasicAnimationInterfaceFactoryInstance(resource: string): BasicAnimationInterfaceFactoryInterface{

    var list: BasicArrayList = this.getList()!;;
    

    var resourceTypeAvailableList: BasicArrayList = new BasicArrayListD();;
    

    var size: number = this.getList()!.size()!;;
    

    var featureInterface: FeatureResourceAnimationInterfaceFactoryInterface;;
    

    var animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    resourceTypeAvailableList!.add(featureInterface);
    
animationInterfaceFactoryInterface= featureInterface!.getBasicAnimationInterfaceFactoryInstance(resource);
    

                        if(animationInterfaceFactoryInterface != NullAnimationFactory.NULL_NOT_FOR_USE_ANIMATION_FACTORY)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterfaceFactoryInterface;
    

                                    }
                                

                                    }
                                
}


                        if(resourceTypeAvailableList!.size() > 0)
                        
                                    {
                                    
    var NO_ANIMATION_AVAILABLE_FROM: string = "No animation available from: ";;
    

    var FOR_FACTORIES: string = " factories: ";;
    

    var FOR_RESOURCE: string = " for Resource: ";;
    

    var HAS_KEY: string = " has: ";;
    

    var RESOURCES_LABEL: string = " resources ";;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(NO_ANIMATION_AVAILABLE_FROM);
    
stringBuffer!.appendint(resourceTypeAvailableList!.size());
    
stringBuffer!.append(CommonSeps.getInstance()!.FORWARD_SLASH);
    
stringBuffer!.appendint(size);
    
stringBuffer!.append(FOR_FACTORIES);
    

    var size2: number = resourceTypeAvailableList!.size()!;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {
stringBuffer!.append(resourceTypeAvailableList!.get(index)!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.COMMA_SEP);
    
}

stringBuffer!.append(FOR_RESOURCE);
    
stringBuffer!.append(resource);
    




                        for (
    var index: number = 0;index < size; index++)
        {
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    stringBuffer!.append(StringUtil.getInstance()!.toString(featureInterface));
    
stringBuffer!.append(HAS_KEY);
    
stringBuffer!.appendint(featureInterface!.getHashtable()!.size());
    
stringBuffer!.append(RESOURCES_LABEL);
    

                                    }
                                
}




                            throw new Exception(stringBuffer!.toString());
                    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    var index: number = 0;index < size; index++)
        {
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
    
stringBuffer!.append(featureInterface!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
}


    var result: string = stringBuffer!.toString()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    



                            throw new Exception(stringBuffer!.append("No feature resource type available for Resource: ")!.append(resource)!.append(" Resource Factories Available: ")!.append(result)!.toString());
                    

                        }
                            
}


}



