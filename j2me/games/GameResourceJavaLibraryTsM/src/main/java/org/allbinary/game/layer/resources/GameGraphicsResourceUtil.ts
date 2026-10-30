
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { GraphicsFeature } from '../../../../../org/allbinary/game/configuration/feature/GraphicsFeature.js';
//not GWT import const GraphicsFeature

import { GraphicsFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
//not GWT import const GraphicsFeatureFactory

import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings

import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameGraphicsResourceUtil
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameGraphicsResourceUtil{

                        if(GameGraphicsResourceUtil.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GameGraphicsResourceUtil.instance= new GameGraphicsResourceUtil();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameGraphicsResourceUtil.instance as GameGraphicsResourceUtil;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly SPRITE: string = "_sprite";

    public readonly QUARTER: string = "_quarter";

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (){

            super();
        
 try { this.name= this.getString();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    getString(): string{

    let graphicsFeatureFactory: GraphicsFeatureFactory = GraphicsFeatureFactory.getInstance()!;;
    

    let graphicsFeature: GraphicsFeature = graphicsFeatureFactory!.NONE;;
    

    let features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS;
    

                                    }
                                
                             else 
                        if(features.isFeature(graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS;
    

                                    }
                                
                             else 
                        if(features.isFeature(graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS;
    

                                    }
                                
                             else 
                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getStringForFeature(graphicsFeature);;
    
}


                //@Throws(Exception.constructor)
            
    public getStringForFeature(graphicsFeature: GraphicsFeature): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let graphicsFeatureFactory: GraphicsFeatureFactory = GraphicsFeatureFactory.getInstance()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    

    let features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(graphicsFeatureFactory!.VECTOR_GRAPHICS))
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS))
                        
                                    {
                                    
                        if(graphicsFeature == graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS || graphicsFeature == graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(graphicsFeature == graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS)
                        
                                    {
                                    stringBuffer!.append(this.SPRITE);
    

                                    }
                                
                             else 
                        if(graphicsFeature == graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS)
                        
                                    {
                                    stringBuffer!.append(this.QUARTER);
    
stringBuffer!.append(this.SPRITE);
    

                                    }
                                
                        else {
                            


                            throw new Exception("None/Unknown Sub Image Resource Type Specified");
                    

                        }
                            

                                    }
                                
                             else 
                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    stringBuffer!.append(CanvasStrings.getInstance()!.OBJ_MODEL);
    

                                    }
                                
                        else {
                            


                            throw new Exception("None/Unknown Main Image Resource Type Specified");
                    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}

