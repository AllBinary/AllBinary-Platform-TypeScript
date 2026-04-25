
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { BasicAnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/BasicAnimationInterfaceFactoryInterface.js";

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { ResourceLoadingLevelFactory } from "../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { FeatureResourceAnimationInterfaceFactoryInterface } from "./FeatureResourceAnimationInterfaceFactoryInterface.js";

export class BaseResourceAnimationInterfaceFactoryInterfaceFactory
            extends Object
         implements FeatureResourceAnimationInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly hashtable: Hashtable<any, any>

    private readonly rectangleHashtable: Hashtable<any, any>

    private readonly rectangleArrayOfArraysHashtable: Hashtable<any, any>

    private readonly name: string

    private initialized: boolean= false
public constructor (name: string, hashtable: Hashtable<any, any>, rectangleHashtable: Hashtable<any, any>, rectangleArrayHashtable: Hashtable<any, any>){

            super();
            //var name = name
    //var hashtable = hashtable
    //var rectangleHashtable = rectangleHashtable
    //var rectangleArrayHashtable = rectangleArrayHashtable
this.hashtable= hashtable;
    
this.rectangleHashtable= rectangleHashtable;
    
this.rectangleArrayOfArraysHashtable= rectangleArrayHashtable;
    
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


                //@Throws(Error::class)
            
    public init(level: number){
    //var level = level

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append("Available List of Animations: ")!.append(this.hashtable.toString())!.toString(), this, commonStrings!.INIT);
    
this.setInitialized(true);
    
}


                //@Throws(Error::class)
            
    init(imageCache: ImageCache, level: number){
    //var imageCache = imageCache
    //var level = level
}


                //@Throws(Error::class)
            
    public add(resource: string, animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface){
    //var resource = resource
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface

                        if(this.hashtable.containsKey(resource as Object))
                        
                                    {
                                    


                            throw new Error(new StringMaker().
                            append("Resource Already Created: ")!.append(resource)!.toString())

                                    }
                                
this.hashtable.put(resource, animationInterfaceFactoryInterface);
    
}


                //@Throws(Error::class)
            
    public getBasicAnimationInterfaceFactoryInstance(resource: string): BasicAnimationInterfaceFactoryInterface{
    //var resource = resource

    var basicAnimationInterfaceFactoryInterfaceCanBeNull: any? = this.hashtable.get(resource as Object);
        
        
;
    

                        if(basicAnimationInterfaceFactoryInterfaceCanBeNull == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.NULL_NOT_FOR_USE_ANIMATION_FACTORY;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicAnimationInterfaceFactoryInterfaceCanBeNull as BasicAnimationInterfaceFactoryInterface;
    
}


                //@Throws(Error::class)
            
    public getRectangle(resource: string): Rectangle{
    //var resource = resource

    var rectangleCanBeNull: any? = this.rectangleHashtable!.get(resource as Object);
        
        
;
    

                        if(rectangleCanBeNull == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RectangleFactory.SINGLETON;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleCanBeNull as Rectangle;
    
}


                //@Throws(Error::class)
            
    public addRectangle(resource: string, rectangle: Rectangle){
    //var resource = resource
    //var rectangle = rectangle
this.rectangleHashtable!.put(resource, rectangle);
    
}


                //@Throws(Error::class)
            
    public getRectangleArrayOfArrays(resource: string): Rectangle[][]{
    //var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangleArrayOfArraysHashtable!.get(resource as Object);as Array<Rectangle[]?>;
    
}


                //@Throws(Error::class)
            
    public addRectangleArrayOfArrays(resource: string, rectangleArrayOfArrays: Rectangle[][]){
    //var resource = resource
    //var rectangleArrayOfArrays = rectangleArrayOfArrays
this.rectangleArrayOfArraysHashtable!.put(resource, rectangleArrayOfArrays);
    
}


    public isFeature(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLoadingLevel(level: number): boolean{
    //var level = level

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        
;
    

                        if(level == resourceLoadingLevelFactory!.LOAD_ALL.getLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(this.constructor.name.toString()!)!.append(CommonSeps.getInstance()!.SEMICOLON)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.name)!.toString();;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public getRectangleHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleHashtable;
    
}


    public getRectangleArrayOfArraysHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangleArrayOfArraysHashtable;
    
}


    setInitialized(initialized: boolean){
var initialized = initialized
this.initialized= initialized;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


}
                
            

