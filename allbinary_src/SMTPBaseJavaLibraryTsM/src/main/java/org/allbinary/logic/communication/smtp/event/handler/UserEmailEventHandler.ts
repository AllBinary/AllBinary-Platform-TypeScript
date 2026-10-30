
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { EmailEvent } from '../../../../../../../org/allbinary/logic/communication/smtp/event/EmailEvent.js';
//not GWT import const EmailEvent

import { UserEmailEventListenerInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
//not GWT import const UserEmailEventListenerInterface

import { UserEmailEventNameData } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
//not GWT import const UserEmailEventNameData

import { EmailInfo } from '../../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
//not GWT import const EmailInfo

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserEmailEventHandler
            extends Object
         {
        

    private emailVector: BasicArrayList;

    private emailInfo: EmailInfo;

    private userEmailEventNameData: UserEmailEventNameData;

public constructor (){

            super();
        this.emailVector= new BasicArrayListD();
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public receiveEmailInfo(userEmailEventNameData: UserEmailEventNameData, emailInfo: EmailInfo){
this.userEmailEventNameData= userEmailEventNameData;
    
this.emailInfo= emailInfo;
    
this.fireEmailEvent();
    
}

addListener(...args: any[]): any {
   
    if (args.length === 1) return this.addListener$overload1(args[0]);
   
    if (args.length === 1) return this.addListener$overload2(args[0]);
   
   throw new TypeError('No matching overload: addListener'); }
  //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addListener$overload1(vector: BasicArrayList){

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let userEmailEventListenerInterface: UserEmailEventListenerInterface = vector.get(index) as UserEmailEventListenerInterface;;
    
this.addListener(userEmailEventListenerInterface);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addListener$overload2(emailEventListenerInterface: UserEmailEventListenerInterface){
this.emailVector!.add(emailEventListenerInterface);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeListener(emailEventListenerInterface: UserEmailEventListenerInterface){
this.emailVector!.remove(emailEventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public fireEmailEvent(){

    let emailEvent: EmailEvent = new EmailEvent(this, this.userEmailEventNameData, this.emailInfo, 0);;
    

    let size: number = this.emailVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let emailEventListenerInterface: UserEmailEventListenerInterface = this.emailVector!.get(index) as UserEmailEventListenerInterface;;
    
emailEventListenerInterface!.onEmailSendRequest(emailEvent);
    
}

}


}

