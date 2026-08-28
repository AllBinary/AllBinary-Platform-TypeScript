
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
        
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { EmailEvent } from '../../../../../../../org/allbinary/logic/communication/smtp/event/EmailEvent.js';
      const EmailEvent = globalThis.org.allbinary.logic.communication.smtp.event.EmailEvent;

      
//not game specific package import { UserEmailEventListenerInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
      const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
//not game specific package import { UserEmailEventNameData } from '../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
//not game specific package import { EmailInfo } from '../../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
      const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserEmailEventHandler
            extends Object
         {
        

    private emailVector: Vector;

    private emailInfo: EmailInfo;

    private userEmailEventNameData: UserEmailEventNameData;

public constructor (){

            super();
        this.emailVector= new Vector();
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public receiveEmailInfo(userEmailEventNameData: UserEmailEventNameData, emailInfo: EmailInfo){
this.userEmailEventNameData= userEmailEventNameData;
    
this.emailInfo= emailInfo;
    
this.fireEmailEvent();
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addListener(vector: Vector){

    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userEmailEventListenerInterface: UserEmailEventListenerInterface = vector.get(index) as UserEmailEventListenerInterface;;
    
this.addListener(userEmailEventListenerInterface);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addListener(emailEventListenerInterface: UserEmailEventListenerInterface){
this.emailVector!.add(emailEventListenerInterface);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeListener(emailEventListenerInterface: UserEmailEventListenerInterface){
this.emailVector!.remove(emailEventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public fireEmailEvent(){

    var emailEvent: EmailEvent = new EmailEvent(this, this.userEmailEventNameData, this.emailInfo, 0);;
    

    var size: number = this.emailVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var emailEventListenerInterface: UserEmailEventListenerInterface = this.emailVector!.get(index) as UserEmailEventListenerInterface;;
    
emailEventListenerInterface!.onEmailSendRequest(emailEvent);
    
}

}


}



