
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
        




export class J2MEKeyFactory
            extends Object
         {
        

    private static readonly instance: J2MEKeyFactory = new J2MEKeyFactory();
        
        

    public static getInstance(): J2MEKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

    public init(){

    var gameKeyArray: GameKey[] = 
                                                        [
                                                            gameKeyFactory!.DOWN,gameKeyFactory!.FIRE,gameKeyFactory!.GAME_A,gameKeyFactory!.GAME_B,gameKeyFactory!.GAME_C,gameKeyFactory!.GAME_D,gameKeyFactory!.KEY_NUM0,gameKeyFactory!.KEY_NUM1,gameKeyFactory!.KEY_NUM2,gameKeyFactory!.KEY_NUM3,gameKeyFactory!.KEY_NUM4,gameKeyFactory!.KEY_NUM5,gameKeyFactory!.KEY_NUM6,gameKeyFactory!.KEY_NUM7,gameKeyFactory!.KEY_NUM8,gameKeyFactory!.KEY_NUM9,gameKeyFactory!.KEY_POUND,gameKeyFactory!.KEY_STAR,gameKeyFactory!.LEFT,gameKeyFactory!.LEVEL_DOWN,gameKeyFactory!.LEVEL_UP,gameKeyFactory!.NONE,gameKeyFactory!.RIGHT,gameKeyFactory!.UP
                                                        ];
        
        
;
    

    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        
;
    




                        for (
    var index: number = gameKeyArray!.length
                ;
        
        
--index >= 0; )
        {
inputFactory!.add(gameKeyArray[index]!.getId(), gameKeyArray[index]!);
    
}

}


    public isSubmission(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.FIRE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDelete(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.GAME_D)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isBackSpace(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isUp(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.UP)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDown(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.DOWN)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLeft(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.LEFT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isRight(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.RIGHT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isEnter(input: Input): boolean{
var input = input

                        if(input == gameKeyFactory!.FIRE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

