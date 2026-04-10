
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
        



import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GraphicsFeature } from "../../../../../org/allbinary/game/configuration/feature/GraphicsFeature.js";

    
import { GraphicsFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js";

    
import { CanvasStrings } from "../../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { OpenGLFeatureUtil } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class GameGraphicsResourceUtil
            extends Object
         {
        

    private static readonly instance: GameGraphicsResourceUtil = new GameGraphicsResourceUtil();
        
        

    public static getInstance(): GameGraphicsResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly SPRITE: string = "_sprite";
        
        

    public readonly QUARTER: string = "_quarter";
        
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (){

            super();
            
        try {
            this.name= this.getString()
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}


                @Throws(Exception::class)
            
    getString(): string{

    var graphicsFeatureFactory: GraphicsFeatureFactory = GraphicsFeatureFactory.getInstance()!;
        
        


    var graphicsFeature: GraphicsFeature = graphicsFeatureFactory!.NONE;
        
        


    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS

                                    }
                                
                             else 
    
                        if(features.isFeature(graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS

                                    }
                                
                             else 
    
                        if(features.isFeature(graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS

                                    }
                                
                             else 
    
                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY))
                        
                                    {
                                    graphicsFeature= graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getString(graphicsFeature);
    
}


                @Throws(Exception::class)
            
    public getString(graphicsFeature: GraphicsFeature): string{
var graphicsFeature = graphicsFeature

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var graphicsFeatureFactory: GraphicsFeatureFactory = GraphicsFeatureFactory.getInstance()!;
        
        

delete(0, stringBuffer!.length())

    var features: Features = Features.getInstance()!;
        
        


    
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
                                    append(SPRITE)

                                    }
                                
                             else 
    
                        if(graphicsFeature == graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS)
                        
                                    {
                                    append(QUARTER)
append(SPRITE)

                                    }
                                
                        else {
                            


                            throw Exception("None/Unknown Sub Image Resource Type Specified")

                        }
                            

                                    }
                                
                             else 
    
                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    append(CanvasStrings.getInstance()!.OBJ_MODEL)

                                    }
                                
                        else {
                            


                            throw Exception("None/Unknown Main Image Resource Type Specified")

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

