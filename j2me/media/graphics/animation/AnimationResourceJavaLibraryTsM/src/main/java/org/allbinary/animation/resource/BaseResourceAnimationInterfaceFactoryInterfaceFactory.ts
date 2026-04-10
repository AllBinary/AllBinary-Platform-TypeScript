
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

    

export class BaseResourceAnimationInterfaceFactoryInterfaceFactory
            extends Object
        
                , FeatureResourceAnimationInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly hashtable: Hashtable<Any, Any>

    private readonly rectangleHashtable: Hashtable<Any, Any>

    private readonly rectangleArrayOfArraysHashtable: Hashtable<Any, Any>

    private readonly name: string

    private initialized: boolean= false
public constructor (name: string){

            super();
                //var name = name
this.hashtable= Hashtable<Any, Any>()
this.rectangleHashtable= Hashtable<Any, Any>()
this.rectangleArrayOfArraysHashtable= Hashtable<Any, Any>()
this.name= name
}

public constructor (name: string, hashtable: Hashtable<Any, Any>, rectangleHashtable: Hashtable<Any, Any>, rectangleArrayHashtable: Hashtable<Any, Any>){

            super();
                //var name = name
    //var hashtable = hashtable
    //var rectangleHashtable = rectangleHashtable
    //var rectangleArrayHashtable = rectangleArrayHashtable
this.hashtable= hashtable
this.rectangleHashtable= rectangleHashtable
this.rectangleArrayOfArraysHashtable= rectangleArrayHashtable
this.name= name
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


                @Throws(Exception::class)
            
    public init(level: number){
    //var level = level

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(StringMaker().
                            append("Available List of Animations: ")!.append(hashtable.toString())!.toString(), this, commonStrings!.INIT)
this.setInitialized(true)
}


                @Throws(Exception::class)
            
    init(imageCache: ImageCache, level: number){
    //var imageCache = imageCache
    //var level = level
}


                @Throws(Exception::class)
            
    public add(resource: string, animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface){
    //var resource = resource
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface

    
                        if(hashtable.containsKey(resource as Object))
                        
                                    {
                                    


                            throw Exception(StringMaker().
                            append("Resource Already Created: ")!.append(resource)!.toString())

                                    }
                                
put(resource, animationInterfaceFactoryInterface)
}


                @Throws(Exception::class)
            
    public getBasicAnimationInterfaceFactoryInstance(resource: string): BasicAnimationInterfaceFactoryInterface{
    //var resource = resource

    var basicAnimationInterfaceFactoryInterfaceCanBeNull: any = {}? = hashtable.get(resource as Object);
        
        


    
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


                @Throws(Exception::class)
            
    public getRectangle(resource: string): Rectangle{
    //var resource = resource

    var rectangleCanBeNull: any = {}? = rectangleHashtable!.get(resource as Object);
        
        


    
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


                @Throws(Exception::class)
            
    public addRectangle(resource: string, rectangle: Rectangle){
    //var resource = resource
    //var rectangle = rectangle
put(resource, rectangle)
}


                @Throws(Exception::class)
            
    public getRectangleArrayOfArrays(resource: string): Rectangle[][]{
    //var resource = resource



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleArrayOfArraysHashtable!.get(resource as Object)as Array<Rectangle[]?>;
    
}


                @Throws(Exception::class)
            
    public addRectangleArrayOfArrays(resource: string, rectangleArrayOfArrays: Rectangle[][]){
    //var resource = resource
    //var rectangleArrayOfArrays = rectangleArrayOfArrays
put(resource, rectangleArrayOfArrays)
}


    public isFeature(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLoadingLevel(level: number): boolean{
    //var level = level

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        


    
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
                        return StringMaker().
                            append(this::class.toString()!)!.append(CommonSeps.getInstance()!.SEMICOLON)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.name)!.toString();
    
}


    public getHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public getRectangleHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleHashtable;
    
}


    public getRectangleArrayOfArraysHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangleArrayOfArraysHashtable;
    
}


    setInitialized(initialized: boolean){
var initialized = initialized
this.initialized= initialized
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


}
                
            

