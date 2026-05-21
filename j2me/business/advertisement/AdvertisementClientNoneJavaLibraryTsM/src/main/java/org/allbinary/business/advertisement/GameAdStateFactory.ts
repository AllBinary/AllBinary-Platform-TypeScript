
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { GameAdState } from '../../../../org/allbinary/game/GameAdState.js';
      
import { SoftwareInformation } from '../../../../org/allbinary/logic/system/SoftwareInformation.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameAdStateFactoryInterface } from './GameAdStateFactoryInterface.js';
import { AppNameLicensingAdConfiguration } from './AppNameLicensingAdConfiguration.js';

export class GameAdStateFactory
            extends Object
         implements GameAdStateFactoryInterface {
        

    private static readonly instance: GameAdStateFactory = new GameAdStateFactory();

    public static getInstance(): GameAdStateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameAdStateFactory.instance;
    
}


    private readonly gameAdStateArray: GameAdState[] = 
                                                        [
                                                            new GameAdState(new AppNameLicensingAdConfiguration())
                                                        ];

    private gameAdState: GameAdState = this.gameAdStateArray[0]!;

    public getCurrentInstance(): GameAdState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameAdState;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceForApp(softwareInformation: SoftwareInformation): GameAdState{
this.gameAdState= this.gameAdStateArray[0]!;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameAdStateArray[0]!;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

