
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
        




export class EarlySoundsFactory extends BaseSoundsFactory {
        

    private static readonly instance: EarlySoundsFactory = new EarlySoundsFactory();
        
        

    public static getInstance(): EarlySoundsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                @Throws(Exception::class)
            
    public getSoundInterfaceArray(): Sound[]{

    var soundInterfaceArray: Sound[] = new Array(2);
        
        


    var index: number = 0;
        
        

soundInterfaceArray[index++]= SelectSound.getInstance()
soundInterfaceArray[index++]= ErrorSound.getInstance()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return soundInterfaceArray;
    
}


}
                
            

