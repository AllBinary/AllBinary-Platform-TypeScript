
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ActivityFractureControllerUtilFactory } from './ActivityFractureControllerUtilFactory.js';
//not GWT import const ActivityFractureControllerUtilFactory = globalThis.org.allbinary.game.input.ActivityFractureControllerUtilFactory;

                import { AndroidKeyFactory } from './AndroidKeyFactory.js';
//not GWT import const AndroidKeyFactory = globalThis.org.allbinary.game.input.AndroidKeyFactory;

                import { AndroidGameKey } from './AndroidGameKey.js';
//not GWT import const AndroidGameKey = globalThis.org.allbinary.game.input.AndroidGameKey;

                import { Input } from './Input.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;

                
export class PlatformKeyFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): PlatformKeyFactory{

                        if(PlatformKeyFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    PlatformKeyFactory.instance= new PlatformKeyFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlatformKeyFactory.instance as PlatformKeyFactory;
    
}


    private readonly androidKeyFactory: AndroidKeyFactory = ActivityFractureControllerUtilFactory.getInstance()!;

    public getString(keyCode: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidGameKey.getString(keyCode);;
    
}


    public isSubmission(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isSubmission(input);;
    
}


    public isDelete(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isDelete(input);;
    
}


    public isBackSpace(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isBackSpace(input);;
    
}


    public isLeft(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isLeft(input);;
    
}


    public isRight(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isRight(input);;
    
}


    public isUp(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isUp(input);;
    
}


    public isDown(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isDown(input);;
    
}


    public isEnter(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.androidKeyFactory!.isEnter(input);;
    
}


}



