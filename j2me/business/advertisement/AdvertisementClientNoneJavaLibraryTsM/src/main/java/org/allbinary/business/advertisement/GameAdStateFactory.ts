
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameAdState } from '../../../../org/allbinary/game/GameAdState.js';
      const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
//not game specific package import { SoftwareInformation } from '../../../../org/allbinary/logic/system/SoftwareInformation.js';
      const SoftwareInformation = globalThis.org.allbinary.logic.system.SoftwareInformation;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameAdStateFactoryInterface } from './GameAdStateFactoryInterface.js';
import { AppNameLicensingAdConfiguration } from './AppNameLicensingAdConfiguration.js';
import { GameAdStateBase } from './GameAdStateBase.js';

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
            
    public getInstanceForApp(softwareInformation: SoftwareInformation): GameAdStateBase{
this.gameAdState= this.gameAdStateArray[0]!;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameAdStateArray[0]!;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



