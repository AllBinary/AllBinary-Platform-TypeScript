
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
        




export class FinalPositionRaceTrackFactory
            extends Object
         {
        

    public static readonly FIRST_POSITION: number = 1;
        
        

    private index: number = FIRST_POSITION;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index++;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static reset(){
index= FIRST_POSITION;
    
}

private constructor (){

            super();
            }


}
                
            

