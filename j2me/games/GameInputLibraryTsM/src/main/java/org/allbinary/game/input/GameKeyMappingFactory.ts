
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
        
        
;
    
this.set(gameKeyFactory!.NONE);
    
this.set(gameKeyFactory!.UP);
    
this.set(gameKeyFactory!.DOWN);
    
this.set(gameKeyFactory!.LEFT);
    
this.set(gameKeyFactory!.RIGHT);
    
this.set(gameKeyFactory!.KEY_POUND);
    
this.set(gameKeyFactory!.KEY_STAR);
    
this.set(gameKeyFactory!.KEY_NUM0);
    
this.set(gameKeyFactory!.KEY_NUM1);
    
this.set(gameKeyFactory!.KEY_NUM2);
    
this.set(gameKeyFactory!.KEY_NUM3);
    
this.set(gameKeyFactory!.KEY_NUM4);
    
this.set(gameKeyFactory!.KEY_NUM5);
    
this.set(gameKeyFactory!.KEY_NUM6);
    
this.set(gameKeyFactory!.KEY_NUM7);
    
this.set(gameKeyFactory!.KEY_NUM8);
    
this.set(gameKeyFactory!.KEY_NUM9);
    
this.set(gameKeyFactory!.GAME_A);
    
this.set(gameKeyFactory!.GAME_B);
    
this.set(gameKeyFactory!.GAME_C);
    
this.set(gameKeyFactory!.GAME_D);
    
this.set(gameKeyFactory!.FIRE);
    
this.set(gameKeyFactory!.LEVEL_DOWN);
    
this.set(gameKeyFactory!.LEVEL_UP);
    
}


    public getInstance(key: number): GameKey{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intKeyToGameKey[key]!;
    
}


    set(gameKey: GameKey){
var gameKey = gameKey
intKeyToGameKey[gameKey!.getId()]= gameKey;
    
}


}
                
            

