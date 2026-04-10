
        /* Generated Code Do Not Modify */
        



import { GameAdState } from "../../../../org/allbinary/game/GameAdState.js";

    
import { SoftwareInformation } from "../../../../org/allbinary/logic/system/SoftwareInformation.js";

    

export class GameAdStateFactory
            extends Object
         {
        

    private static readonly instance: GameAdStateFactory = new GameAdStateFactory();
        
        

    public static getInstance(): GameAdStateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly gameAdStateArray: GameAdState[] = 
                                                        [
                                                            GameAdState(AppNameLicensingAdConfiguration())
                                                        ];
        
        

    private gameAdState: GameAdState = gameAdStateArray[0]!;
        
        

    public getCurrentInstance(): GameAdState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameAdState;
    
}


                //@Throws(Error::class)
            
    public getInstance(softwareInformation: SoftwareInformation): GameAdState{
    //var softwareInformation = softwareInformation
this.gameAdState= gameAdStateArray[0]!



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameAdStateArray[0]!;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

