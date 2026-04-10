
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
        




export class AngleIncrementInfoFactory
            extends Object
         {
        

    private static readonly instance: AngleIncrementInfoFactory = new AngleIncrementInfoFactory();
        
        

    public static getInstance(): AngleIncrementInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly angleIncrementInfo: AngleIncrementInfo[] = new Array(AngleFactory.getInstance()!.TOTAL_ANGLE.toInt());
        
        

    public getInstance(angleIncrement: number): AngleIncrementInfo{
var angleIncrement = angleIncrement

    var halfAngleIncrement: number = (angleIncrement.toInt() shr 1);
        
        


    var angleIncrementInfoCanBeNull: AngleIncrementInfo? = angleIncrementInfo[halfAngleIncrement];
        
        


    
                        if(angleIncrementInfoCanBeNull == 
                                    null
                                )
                        
                                    {
                                    angleIncrementInfoCanBeNull= AngleIncrementInfo(angleIncrement)
angleIncrementInfo[halfAngleIncrement]= angleIncrementInfoCanBeNull

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrementInfoCanBeNull;
    
}


}
                
            

