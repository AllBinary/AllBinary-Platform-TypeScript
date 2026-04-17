
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
        



import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LockableFeature } from "./LockableFeature.js";

export class InApplicationPurchaseFactory
            extends Object
         {
        

    private static readonly instance: InApplicationPurchaseFactory = new InApplicationPurchaseFactory();
        
        

    public static getInstance(): InApplicationPurchaseFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public init(anyType: any = {}, stateObject: any = {}){
var anyType = anyType
var stateObject = stateObject
}


    public onCreate(anyType: any = {}, stateObject: any = {}){
var anyType = anyType
var stateObject = stateObject
}


    public onStart(){
}


    public onResult(requestCode: number, resultCode: number, data: any = {}){
    //var requestCode = requestCode
    //var resultCode = resultCode
    //var data = data
}


    public onSaveState(anyType: any = {}){
    //var anyType = anyType
}


    public onStop(){
}


    public onDestroy(){
}


    public purchase(lockableFeature: LockableFeature){
var lockableFeature = lockableFeature
}


    public isPurchased(lockableFeature: LockableFeature): boolean{
var lockableFeature = lockableFeature



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public add(lockableFeature: LockableFeature){
var lockableFeature = lockableFeature
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
                
            

