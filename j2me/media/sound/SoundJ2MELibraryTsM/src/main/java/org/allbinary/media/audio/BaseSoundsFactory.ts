
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
import { Sound } from './Sound.js';

export class BaseSoundsFactory
            extends Object
         implements SoundsFactoryInterface {
        

    private initialized: boolean= false

    public init(){
}


                //@Throws(Exception.constructor)
            
    public getSoundInterfaceArray(): Sound[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public setInitialized(initialized: boolean){
this.initialized= initialized;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initialized;
    
}


}
                
            

