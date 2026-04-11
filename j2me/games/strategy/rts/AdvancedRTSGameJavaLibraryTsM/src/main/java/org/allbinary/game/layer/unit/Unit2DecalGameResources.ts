
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { BasicGameResources } from "../../../../../org/allbinary/game/layer/resources/BasicGameResources.js";

    
import { GameGraphicsResourceUtil } from "../../../../../org/allbinary/game/layer/resources/GameGraphicsResourceUtil.js";

    
import { AndroidUtil } from "../../../../../org/allbinary/AndroidUtil.js";

    
import { GraphicsFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js";

    

export class Unit2DecalGameResources extends BasicGameResources {
        

    private static readonly instance: Unit2DecalGameResources = new Unit2DecalGameResources();
        
        

    public static getInstance(): BasicGameResources{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            
    var ROOT: string = "/unit_decal";
        
        
;
    

    var SMALL: string = "_30_by_30.png";
        
        
;
    

    var MEDIUM: string = SMALL;
        
        
;
    

    var SIZE_FOUR: string = SMALL;
        
        
;
    

    var SIZE_FIVE: string = SMALL;
        
        
;
    

    var SIZE_SIX: string = SMALL;
        
        
;
    

    var SIZE: string[] = 
                                                        [
                                                            SMALL,MEDIUM,SIZE_FOUR,SIZE_FIVE,SIZE_SIX
                                                        ];
        
        
;
    
super.init(ROOT, SIZE);
    
}


                //@Throws(Error::class)
            
    init(ROOT: string, sizeString: string){
var ROOT = ROOT
var sizeString = sizeString
super.init(ROOT, sizeString);
    
}


                //@Throws(Error::class)
            
    getString(): string{

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameGraphicsResourceUtil.getInstance()!.getString(GraphicsFeatureFactory.getInstance()!.SPRITE_QUARTER_ROTATION_GRAPHICS);

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getString();

                        ;
    

                        }
                            
}


}
                
            

