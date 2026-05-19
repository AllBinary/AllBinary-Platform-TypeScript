
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PlayerStateUtil
            extends Object
         {
        

    private static readonly instance: PlayerStateUtil = new PlayerStateUtil();

    public static getInstance(): PlayerStateUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlayerStateUtil.instance;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public readonly UNREALIZED: string = "UNREALIZED";

    public readonly REALIZED: string = "REALIZED";

    public readonly PREFETCHED: string = "PREFETCHED";

    public readonly STARTED: string = "STARTED";

    public readonly CLOSED: string = "CLOSED";

    public convert(state: number): string{

                        if(state == PlayerI.UNREALIZED)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.UNREALIZED;
    

                                    }
                                
                             else 
                        if(state == PlayerI.REALIZED)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.REALIZED;
    

                                    }
                                
                             else 
                        if(state == PlayerI.PREFETCHED)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.PREFETCHED;
    

                                    }
                                
                             else 
                        if(state == PlayerI.STARTED)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.STARTED;
    

                                    }
                                
                             else 
                        if(state == PlayerI.CLOSED)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.CLOSED;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.commonStrings!.UNKNOWN;
    
}


}
                
            

