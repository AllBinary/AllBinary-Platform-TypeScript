
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


        
import { GameConfiguration } from '../../../../../org/allbinary/game/configuration/GameConfiguration.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseChangedGameFeatureListener } from './BaseChangedGameFeatureListener.js';

export class ChangedGameFeatureListener extends BaseChangedGameFeatureListener {
        

    private static readonly gameFeatureListener: ChangedGameFeatureListener = new ChangedGameFeatureListener();

    public static getInstance(): ChangedGameFeatureListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ChangedGameFeatureListener.gameFeatureListener;
    
}


    public isChangedGameConfiguration(gameConfiguration: GameConfiguration): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(gameConfiguration);;
    
}


}
                
            

