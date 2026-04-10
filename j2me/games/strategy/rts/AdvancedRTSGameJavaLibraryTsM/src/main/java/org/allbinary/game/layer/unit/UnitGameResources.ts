
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

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class UnitGameResources extends BasicGameResources {
        

    private static readonly ICON: string = "_icon";
        
        

    private static readonly BUILD: string = "_build";
        
        

    private static readonly DESTROY: string = "_destroy";
        
        

    private static readonly ICON_BUILD: string = "_icon" +BUILD;
        
        

    public NAME: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public RESOURCE_ICON_ANIMATION: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public RESOURCE_ICON_BUILD: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public RESOURCE_ICON: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
protected constructor (){

            super();
            }


    private readonly ICON_SIZE: string = "_64_by_64.png";
        
        

                @Throws(Exception::class)
            
    init(ROOT: string, sizeString: string){
var ROOT = ROOT
var sizeString = sizeString
init(ROOT, sizeString)

    var string: string = GameGraphicsResourceUtil.getInstance()!.getName()!;
        
        

delete(0, stringBuffer!.length())
append(ROOT)
append(DESTROY)
append(string)
append(sizeString)
this.RESOURCE_DESTROY= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(ICON)
append(ROOT)
this.RESOURCE_ICON_ANIMATION= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(ROOT)
append(ICON)
append(string)
append(ICON_SIZE)
this.RESOURCE_ICON= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(ROOT)
append(ICON_BUILD)
append(string)
append(ICON_SIZE)
this.RESOURCE_ICON_BUILD= stringBuffer!.toString()
}


                @Throws(Exception::class)
            
    getString(): string{

    
                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameGraphicsResourceUtil.getInstance()!.getString(GraphicsFeatureFactory.getInstance()!.SPRITE_QUARTER_ROTATION_GRAPHICS);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getString();
    

                        }
                            
}


}
                
            

