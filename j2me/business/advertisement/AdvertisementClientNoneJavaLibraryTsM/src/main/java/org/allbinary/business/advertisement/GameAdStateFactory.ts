
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameAdState } from '../../../../org/allbinary/game/GameAdState.js';
      //not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
import { SoftwareInformation } from '../../../../org/allbinary/logic/system/SoftwareInformation.js';
      //not GWT import const SoftwareInformation = globalThis.org.allbinary.logic.system.SoftwareInformation;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameAdStateFactoryInterface } from './GameAdStateFactoryInterface.js';
//not GWT import const GameAdStateFactoryInterface = globalThis.org.allbinary.business.advertisement.GameAdStateFactoryInterface;

                import { AppNameLicensingAdConfiguration } from './AppNameLicensingAdConfiguration.js';
//not GWT import const AppNameLicensingAdConfiguration = globalThis.org.allbinary.business.advertisement.AppNameLicensingAdConfiguration;

                import { GameAdStateBase } from './GameAdStateBase.js';
//not GWT import const GameAdStateBase = globalThis.org.allbinary.business.advertisement.GameAdStateBase;

                
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



