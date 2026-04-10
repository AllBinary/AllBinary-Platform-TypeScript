
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
        




export class LicenseLoadingTypeFactory
            extends Object
         {
        

    private static readonly instance: LicenseLoadingTypeFactory = new LicenseLoadingTypeFactory();
        
        

    public static getIntance(): LicenseLoadingTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly INITIAL_LOADING: LicenseLoadingType = new LicenseLoadingType("Initial Loading");
        
        

    public readonly GAME_START: LicenseLoadingType = new LicenseLoadingType("Game Start");
        
        

    public readonly LOGIN: LicenseLoadingType = new LicenseLoadingType("Login");
        
        

    public readonly OTHER: LicenseLoadingType = new LicenseLoadingType("Other/Usually The First Non Demo Level");
        
        

}
                
            

