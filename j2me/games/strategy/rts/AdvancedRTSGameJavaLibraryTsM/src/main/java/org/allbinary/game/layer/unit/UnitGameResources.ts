
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { BasicGameResources } from '../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
      //not GWT import const BasicGameResources = globalThis.org.allbinary.game.layer.resources.BasicGameResources;

      
import { GameGraphicsResourceUtil } from '../../../../../org/allbinary/game/layer/resources/GameGraphicsResourceUtil.js';
      //not GWT import const GameGraphicsResourceUtil = globalThis.org.allbinary.game.layer.resources.GameGraphicsResourceUtil;

      
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
      //not GWT import const AndroidUtil = globalThis.org.allbinary.AndroidUtil;

      
import { GraphicsFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
      //not GWT import const GraphicsFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GraphicsFeatureFactory;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UnitGameResources extends BasicGameResources {
        

    private static readonly ICON: string = "_icon";

    private static readonly BUILD: string = "_build";

    private static readonly DESTROY: string = "_destroy";

    private static readonly ICON_BUILD: string = "_icon" +UnitGameResources.BUILD;

    public NAME: string = StringUtil.getInstance()!.EMPTY_STRING;

    public RESOURCE_ICON_ANIMATION: string = StringUtil.getInstance()!.EMPTY_STRING;

    public RESOURCE_ICON_BUILD: string = StringUtil.getInstance()!.EMPTY_STRING;

    public RESOURCE_ICON: string = StringUtil.getInstance()!.EMPTY_STRING;

protected constructor (){

            super();
        }


    private readonly ICON_SIZE: string = "_64_by_64.png";

                //@Throws(Exception.constructor)
            
    append(ROOT: string, sizeString: string){
super.append(ROOT, sizeString);
    

    var string: string = GameGraphicsResourceUtil.getInstance()!.getName()!;;
    
BasicGameResources.stringBuffer!.delete(0, BasicGameResources.stringBuffer!.length());
    
BasicGameResources.stringBuffer!.append(ROOT);
    
BasicGameResources.stringBuffer!.append(UnitGameResources.DESTROY);
    
BasicGameResources.stringBuffer!.append(string);
    
BasicGameResources.stringBuffer!.append(sizeString);
    
this.RESOURCE_DESTROY= BasicGameResources.stringBuffer!.toString();
    
BasicGameResources.stringBuffer!.delete(0, BasicGameResources.stringBuffer!.length());
    
BasicGameResources.stringBuffer!.append(UnitGameResources.ICON);
    
BasicGameResources.stringBuffer!.append(ROOT);
    
this.RESOURCE_ICON_ANIMATION= BasicGameResources.stringBuffer!.toString();
    
BasicGameResources.stringBuffer!.delete(0, BasicGameResources.stringBuffer!.length());
    
BasicGameResources.stringBuffer!.append(ROOT);
    
BasicGameResources.stringBuffer!.append(UnitGameResources.ICON);
    
BasicGameResources.stringBuffer!.append(string);
    
BasicGameResources.stringBuffer!.append(this.ICON_SIZE);
    
this.RESOURCE_ICON= BasicGameResources.stringBuffer!.toString();
    
BasicGameResources.stringBuffer!.delete(0, BasicGameResources.stringBuffer!.length());
    
BasicGameResources.stringBuffer!.append(ROOT);
    
BasicGameResources.stringBuffer!.append(UnitGameResources.ICON_BUILD);
    
BasicGameResources.stringBuffer!.append(string);
    
BasicGameResources.stringBuffer!.append(this.ICON_SIZE);
    
this.RESOURCE_ICON_BUILD= BasicGameResources.stringBuffer!.toString();
    
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



