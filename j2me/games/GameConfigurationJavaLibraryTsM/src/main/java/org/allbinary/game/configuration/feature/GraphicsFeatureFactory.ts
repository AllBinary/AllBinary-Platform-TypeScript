
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
        



import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GraphicsFeatureFactory
            extends Object
         {
        

    private static readonly instance: GraphicsFeatureFactory = new GraphicsFeatureFactory();
        
        

    public static getInstance(): GraphicsFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NONE: GraphicsFeature = new GraphicsFeature(StringUtil.getInstance()!.NULL_STRING);
        
        

    public readonly TRANSPARENT_IMAGE_CREATION: GraphicsFeature = new GraphicsFeature("Transparent Image Creation");
        
        

    public readonly IMAGE_GRAPHICS: GraphicsFeature = new GraphicsFeature("Image Graphics");
        
        

    public readonly IMAGE_ROTATION_ON_THE_FLY: GraphicsFeature = new GraphicsFeature("Image Rotated On The Fly");
        
        

    public readonly IMAGE_TO_ARRAY_GRAPHICS: GraphicsFeature = new GraphicsFeature("Image To Array Graphics");
        
        

    public readonly SPRITE_QUARTER_ROTATION_GRAPHICS: GraphicsFeature = new GraphicsFeature("Sprite Quarter Rotation Graphics");
        
        

    public readonly SPRITE_FULL_GRAPHICS: GraphicsFeature = new GraphicsFeature("Sprite Full Rotation Graphics");
        
        

    public readonly VECTOR_GRAPHICS: GraphicsFeature = new GraphicsFeature("Vector Graphics");
        
        

    public readonly VECTOR_TO_IMAGE_GRAPHICS: GraphicsFeature = new GraphicsFeature("Vector To Image Graphics");
        
        

}
                
            

