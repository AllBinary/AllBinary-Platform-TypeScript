
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
        



import { BasicGameResources } from "../../../../../../org/allbinary/game/layer/resources/BasicGameResources.js";

    

export class MineWeaponResources extends BasicGameResources {
        

    private static readonly SINGLETON: MineWeaponResources = new MineWeaponResources();
        
        

    public static getInstance(): MineWeaponResources{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public readonly DROP_TEXT_RESOURCE: string = "/mine_drop_text_20_by_20.png";
        
        

    public readonly DROP_RESOURCE: string = "/mine_drop_20_by_20.png";
        
        

    public readonly DROP_ICON_RESOURCE: string = "/mine_drop_icon_20_by_20.png";
        
        
protected constructor (){

            super();
            
    var ROOT: string = "/mine";
        
        


    var SMALL: string = "_20_by_20.png";
        
        


    var MEDIUM: string = SMALL;
        
        


    var SIZE_FOUR: string = SMALL;
        
        


    var SIZE_FIVE: string = SMALL;
        
        


    var SIZE_SIX: string = SMALL;
        
        


    var SIZE: string[] = 
                                                        [
                                                            SMALL,MEDIUM,SIZE_FOUR,SIZE_FIVE,SIZE_SIX
                                                        ];
        
        

super.init(ROOT, SIZE)
}


}
                
            

