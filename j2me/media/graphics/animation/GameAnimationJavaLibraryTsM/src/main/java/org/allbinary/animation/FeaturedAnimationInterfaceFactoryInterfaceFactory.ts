
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
        



import { FeatureResourceAnimationInterfaceFactoryInterface } from "../../../org/allbinary/animation/resource/FeatureResourceAnimationInterfaceFactoryInterface.js";

    
import { GameConfigurationCentral } from "../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { FeaturedResourceFactory } from "../../../org/allbinary/game/resource/FeaturedResourceFactory.js";

    
import { PointFactory } from "../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../org/allbinary/graphics/RectangleFactory.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProceduralAnimationInterfaceFactoryInterface } from "./ProceduralAnimationInterfaceFactoryInterface.js";

import { AnimationInterfaceFactoryInterface } from "./AnimationInterfaceFactoryInterface.js";

import { NullAnimationFactory } from "./NullAnimationFactory.js";

import { BasicAnimationInterfaceFactoryInterface } from "./BasicAnimationInterfaceFactoryInterface.js";

export class FeaturedAnimationInterfaceFactoryInterfaceFactory extends FeaturedResourceFactory {
        

    private INSTANCE: FeaturedAnimationInterfaceFactoryInterfaceFactory = new FeaturedAnimationInterfaceFactoryInterfaceFactory();
        
        

    public static getInstance(): FeaturedAnimationInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INSTANCE;
    
}

private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getRectangle(resource: string): Rectangle{
var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getRectangle(resource, 0, 0);

                        ;
    
}


                //@Throws(Error::class)
            
    public getRectangle(resource: string, x: number, y: number): Rectangle{
    //var resource = resource
    //var x = x
    //var y = y

    var list: BasicArrayList = this.getList()!;
        
        
;
    

    var scale: number = GameConfigurationCentral.getInstance()!.SCALE.getValue()!.toInt()!;
        
        
;
    

    var size: number = getList()!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var featureInterface: FeatureResourceAnimationInterfaceFactoryInterface = list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
        
        
;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    
    var rectangle: Rectangle = featureInterface!.getRectangle(resource)!;
        
        
;
    

                        if(rectangle != RectangleFactory.SINGLETON)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Rectangle(PointFactory.getInstance()!.getInstance(x, y), ((rectangle.getWidth() *scale)>>1), ((rectangle.getHeight() *scale)>>1));
    

                                    }
                                

                                    }
                                
}




                            throw new Error(new StringMaker().
                            append("No rectangle available for current feature selection or Resource: ")!.append(resource)!.toString())
}


                //@Throws(Error::class)
            
    public getProcedural(resource: string): ProceduralAnimationInterfaceFactoryInterface{
var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getBasicAnimationInterfaceFactoryInstance(resource);

                         as ProceduralAnimationInterfaceFactoryInterface;
    
}


                //@Throws(Error::class)
            
    public get(resource: string): AnimationInterfaceFactoryInterface{
var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getBasicAnimationInterfaceFactoryInstance(resource);

                         as AnimationInterfaceFactoryInterface;
    
}


                //@Throws(Error::class)
            
    getBasicAnimationInterfaceFactoryInstance(resource: string): BasicAnimationInterfaceFactoryInterface{
    //var resource = resource

    var list: BasicArrayList = this.getList()!;
        
        
;
    

    var resourceTypeAvailableList: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = getList()!.size()!;
        
        
;
    

    var featureInterface: FeatureResourceAnimationInterfaceFactoryInterface
;
    

    var animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
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
                                    
    var NO_ANIMATION_AVAILABLE_FROM: string = "No animation available from: ";
        
        
;
    

    var FOR_FACTORIES: string = " factories: ";
        
        
;
    

    var FOR_RESOURCE: string = " for Resource: ";
        
        
;
    

    var HAS_KEY: string = " has: ";
        
        
;
    

    var RESOURCES_LABEL: string = " resources ";
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(NO_ANIMATION_AVAILABLE_FROM);
    
stringBuffer!.appendint(resourceTypeAvailableList!.size());
    
stringBuffer!.append(CommonSeps.getInstance()!.FORWARD_SLASH);
    
stringBuffer!.appendint(size);
    
stringBuffer!.append(FOR_FACTORIES);
    

    var size2: number = resourceTypeAvailableList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
stringBuffer!.append(resourceTypeAvailableList!.get(index)!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.COMMA_SEP);
    
}

stringBuffer!.append(FOR_RESOURCE);
    
stringBuffer!.append(resource);
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    stringBuffer!.append(StringUtil.getInstance()!.toString(featureInterface));
    
stringBuffer!.append(HAS_KEY);
    
stringBuffer!.appendint(featureInterface!.getHashtable()!.size);
    
stringBuffer!.append(RESOURCES_LABEL);
    

                                    }
                                
}




                            throw new Error(stringBuffer!.toString())

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
    
stringBuffer!.append(featureInterface!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
}


    var result: string = stringBuffer!.toString()!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    



                            throw new Error(stringBuffer!.append("No feature resource type available for Resource: ")!.append(resource)!.append(" Resource Factories Available: ")!.append(result)!.toString())

                        }
                            
}


}
                
            

