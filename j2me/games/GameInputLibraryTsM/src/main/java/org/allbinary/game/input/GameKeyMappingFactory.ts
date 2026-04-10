
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
        




export class GameKeyMappingFactory
            extends Object
         {
        

    private static readonly SINGLETON: GameKeyMappingFactory = new GameKeyMappingFactory();
        
        

    public static getInstance(): GameKeyMappingFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private intKeyToGameKey: GameKey[] = new Array(InputFactory.getInstance()!.MAX);
        
        
private constructor (){

            super();
            
    var gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

this.this.set(gameKeyFactory!.NONE)
this.this.set(gameKeyFactory!.UP)
this.this.set(gameKeyFactory!.DOWN)
this.this.set(gameKeyFactory!.LEFT)
this.this.set(gameKeyFactory!.RIGHT)
this.this.set(gameKeyFactory!.KEY_POUND)
this.this.set(gameKeyFactory!.KEY_STAR)
this.this.set(gameKeyFactory!.KEY_NUM0)
this.this.set(gameKeyFactory!.KEY_NUM1)
this.this.set(gameKeyFactory!.KEY_NUM2)
this.this.set(gameKeyFactory!.KEY_NUM3)
this.this.set(gameKeyFactory!.KEY_NUM4)
this.this.set(gameKeyFactory!.KEY_NUM5)
this.this.set(gameKeyFactory!.KEY_NUM6)
this.this.set(gameKeyFactory!.KEY_NUM7)
this.this.set(gameKeyFactory!.KEY_NUM8)
this.this.set(gameKeyFactory!.KEY_NUM9)
this.this.set(gameKeyFactory!.GAME_A)
this.this.set(gameKeyFactory!.GAME_B)
this.this.set(gameKeyFactory!.GAME_C)
this.this.set(gameKeyFactory!.GAME_D)
this.this.set(gameKeyFactory!.FIRE)
this.this.set(gameKeyFactory!.LEVEL_DOWN)
this.this.set(gameKeyFactory!.LEVEL_UP)
}


    public getInstance(key: number): GameKey{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intKeyToGameKey[key]!;
    
}


    set(gameKey: GameKey){
var gameKey = gameKey
intKeyToGameKey[gameKey!.getId()]= gameKey
}


}
                
            

