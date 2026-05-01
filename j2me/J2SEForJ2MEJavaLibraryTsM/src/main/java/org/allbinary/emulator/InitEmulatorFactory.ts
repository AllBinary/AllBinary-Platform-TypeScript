
        /* Generated Code Do Not Modify */
        



            import { Object } from "../../../java/lang/Object.js";


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InitEmulatorFactory
            extends Object
         {
        

    private static readonly instance: InitEmulatorFactory = new InitEmulatorFactory();

    public static getInstance(): InitEmulatorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InitEmulatorFactory.instance;
    
}


    public setInitEmulator(initEmulator: boolean){
var initEmulator = initEmulator
this.initEmulator= initEmulator;
    
}


    public isInitEmulator(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initEmulator;
    
}


    private initEmulator: boolean = false;

}
                
            

