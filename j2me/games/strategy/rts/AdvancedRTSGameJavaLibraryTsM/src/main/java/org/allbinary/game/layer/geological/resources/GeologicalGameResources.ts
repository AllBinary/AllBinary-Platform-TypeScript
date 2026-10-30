
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { BasicGameResources } from '../../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
//not GWT import const BasicGameResources

import { GameGraphicsResourceUtil } from '../../../../../../org/allbinary/game/layer/resources/GameGraphicsResourceUtil.js';
//not GWT import const GameGraphicsResourceUtil

import { AndroidUtil } from '../../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil

import { GraphicsFeatureFactory } from '../../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
//not GWT import const GraphicsFeatureFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GeologicalGameResources extends BasicGameResources {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): BasicGameResources{

                        if(GeologicalGameResources.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GeologicalGameResources.instance= new GeologicalGameResources();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeologicalGameResources.instance as GeologicalGameResources;
    
}


private constructor (){

            super();
        
    let ROOT: string = "/resource";;
    

    let SMALL: string = "_20_by_20.png";;
    

    let MEDIUM: string = SMALL;;
    

    let SIZE_FOUR: string = SMALL;;
    

    let SIZE_FIVE: string = SMALL;;
    

    let SIZE_SIX: string = SMALL;;
    

    let SIZE: string[] = 
                                                        [
                                                            SMALL,MEDIUM,SIZE_FOUR,SIZE_FIVE,SIZE_SIX
                                                        ];;
    
super.init(ROOT, SIZE);
    
}


                //@Throws(Exception.constructor)
            
    append(ROOT: string, sizeString: string){
super.append(ROOT, sizeString);
    
}


                //@Throws(Exception.constructor)
            
    getString(): string{

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameGraphicsResourceUtil.getInstance()!.getStringForFeature(GraphicsFeatureFactory.getInstance()!.SPRITE_QUARTER_ROTATION_GRAPHICS);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getString();;
    

                        }
                            
}


}

