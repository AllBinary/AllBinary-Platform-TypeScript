
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

    

export class FeaturedAnimationInterfaceFactoryInterfaceFactory extends FeaturedResourceFactory {
        

    private INSTANCE: FeaturedAnimationInterfaceFactoryInterfaceFactory = new FeaturedAnimationInterfaceFactoryInterfaceFactory();
        
        

    public static getInstance(): FeaturedAnimationInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INSTANCE;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getRectangle(resource: string): Rectangle{
var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getRectangle(resource, 0, 0);
    
}


                @Throws(Exception::class)
            
    public getRectangle(resource: string, x: number, y: number): Rectangle{
    //var resource = resource
    //var x = x
    //var y = y

    var list: BasicArrayList = this.getList()!;
        
        


    var scale: number = GameConfigurationCentral.getInstance()!.SCALE.getValue()!.toInt()!;
        
        


    var size: number = getList()!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var featureInterface: FeatureResourceAnimationInterfaceFactoryInterface = list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface;
        
        


    
                        if(featureInterface!.isFeature())
                        
                                    {
                                    
    var rectangle: Rectangle = featureInterface!.getRectangle(resource)!;
        
        


    
                        if(rectangle != RectangleFactory.SINGLETON)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Rectangle(PointFactory.getInstance()!.getInstance(x, y), ((rectangle.getWidth() *scale) shr 1), ((rectangle.getHeight() *scale) shr 1));
    

                                    }
                                

                                    }
                                
}




                            throw Exception(StringMaker().
                            append("No rectangle available for current feature selection or Resource: ")!.append(resource)!.toString())
}


                @Throws(Exception::class)
            
    public getProcedural(resource: string): ProceduralAnimationInterfaceFactoryInterface{
var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getBasicAnimationInterfaceFactoryInstance(resource) as ProceduralAnimationInterfaceFactoryInterface;
    
}


                @Throws(Exception::class)
            
    public get(resource: string): AnimationInterfaceFactoryInterface{
var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getBasicAnimationInterfaceFactoryInstance(resource) as AnimationInterfaceFactoryInterface;
    
}


                @Throws(Exception::class)
            
    getBasicAnimationInterfaceFactoryInstance(resource: string): BasicAnimationInterfaceFactoryInterface{
    //var resource = resource

    var list: BasicArrayList = this.getList()!;
        
        


    var resourceTypeAvailableList: BasicArrayList = new BasicArrayList();
        
        


    var size: number = getList()!.size()!;
        
        


    var featureInterface: FeatureResourceAnimationInterfaceFactoryInterface


    var animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface

    
                        if(featureInterface!.isFeature())
                        
                                    {
                                    add(featureInterface)
animationInterfaceFactoryInterface= featureInterface!.getBasicAnimationInterfaceFactoryInstance(resource)

    
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
        
        


    var FOR_FACTORIES: string = " factories: ";
        
        


    var FOR_RESOURCE: string = " for Resource: ";
        
        


    var HAS_KEY: string = " has: ";
        
        


    var RESOURCES_LABEL: string = " resources ";
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(NO_ANIMATION_AVAILABLE_FROM)
appendint(resourceTypeAvailableList!.size())
append(CommonSeps.getInstance()!.FORWARD_SLASH)
appendint(size)
append(FOR_FACTORIES)

    var size2: number = resourceTypeAvailableList!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
append(resourceTypeAvailableList!.get(index)!.toString())
append(CommonSeps.getInstance()!.COMMA_SEP)
}

append(FOR_RESOURCE)
append(resource)




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
append(CommonSeps.getInstance()!.NEW_LINE)
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface

    
                        if(featureInterface!.isFeature())
                        
                                    {
                                    append(StringUtil.getInstance()!.toString(featureInterface))
append(HAS_KEY)
appendint(featureInterface!.getHashtable()!.size)
append(RESOURCES_LABEL)

                                    }
                                
}




                            throw Exception(stringBuffer!.toString())

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
featureInterface= list.objectArray[index]! as FeatureResourceAnimationInterfaceFactoryInterface
append(featureInterface!.toString())
append(CommonSeps.getInstance()!.SPACE)
}


    var result: string = stringBuffer!.toString()!;
        
        

delete(0, stringBuffer!.length())



                            throw Exception(stringBuffer!.append("No feature resource type available for Resource: ")!.append(resource)!.append(" Resource Factories Available: ")!.append(result)!.toString())

                        }
                            
}


}
                
            

