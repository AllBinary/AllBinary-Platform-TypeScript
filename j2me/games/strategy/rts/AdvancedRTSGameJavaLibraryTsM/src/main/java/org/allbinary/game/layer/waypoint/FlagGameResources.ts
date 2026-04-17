
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

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FlagGameResources extends BasicGameResources {
        

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
        
        

                //@Throws(Error::class)
            
    init(ROOT: string, sizeString: string){
var ROOT = ROOT
var sizeString = sizeString
super.init(ROOT, sizeString);
    

    var string: string = GameGraphicsResourceUtil.getInstance()!.getName()!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(ROOT);
    
stringBuffer!.append(DESTROY);
    
stringBuffer!.append(string);
    
stringBuffer!.append(sizeString);
    
this.RESOURCE_DESTROY= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(ICON);
    
stringBuffer!.append(ROOT);
    
this.RESOURCE_ICON_ANIMATION= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(ROOT);
    
stringBuffer!.append(ICON);
    
stringBuffer!.append(string);
    
stringBuffer!.append(ICON_SIZE);
    
this.RESOURCE_ICON= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(ROOT);
    
stringBuffer!.append(ICON_BUILD);
    
stringBuffer!.append(string);
    
stringBuffer!.append(ICON_SIZE);
    
this.RESOURCE_ICON_BUILD= stringBuffer!.toString();
    
}


}
                
            

