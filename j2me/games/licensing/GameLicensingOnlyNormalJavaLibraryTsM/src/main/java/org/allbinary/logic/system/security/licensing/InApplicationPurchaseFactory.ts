
        /*
                *  
                *  To change this license header, choose License Headers in Project Properties. 
                *  To change this template file, choose Tools | Templates  and open the template in the editor.  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LockableFeature } from './LockableFeature.js';

export class InApplicationPurchaseFactory
            extends Object
         {
        

    private static readonly instance: InApplicationPurchaseFactory = new InApplicationPurchaseFactory();

    public static getInstance(): InApplicationPurchaseFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InApplicationPurchaseFactory.instance;
    
}

private constructor (){

            super();
        }


    public init(anyType: any = {}, stateObject: any = {}){
}


    public onCreate(anyType: any = {}, stateObject: any = {}){
}


    public onStart(){
}


    public onResult(requestCode: number, resultCode: number, data: any = {}){
}


    public onSaveState(anyType: any = {}){
}


    public onStop(){
}


    public onDestroy(){
}


    public purchase(lockableFeature: LockableFeature){
}


    public isPurchased(lockableFeature: LockableFeature): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public add(lockableFeature: LockableFeature){
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

