
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThirdPartyInApplicationPurchaseInterface } from './ThirdPartyInApplicationPurchaseInterface.js';
import { LockableFeature } from './LockableFeature.js';

export class ThirdPartyInApplicationPurchase
            extends Object
         implements ThirdPartyInApplicationPurchaseInterface {
        

    public isPurchased(lockableFeature: LockableFeature): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public onCreate(anyType: any = {}, stateObject: any = {}){
}


    public onDestroy(){
}


    public onStart(){
}


    public onActivityResult(requestCode: number, resultCode: number, dataObject: any = {}){
}


    public onSaveInstanceState(anyType: any = {}){
}


    public onStop(){
}


    public requestPurchase(lockableFeature: LockableFeature){
}


    public requestReceipts(){
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


    requestProducts(){
}


}
                
            

