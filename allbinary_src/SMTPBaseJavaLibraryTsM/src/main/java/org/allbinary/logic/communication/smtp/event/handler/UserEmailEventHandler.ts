
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { EmailEvent } from "../../../../../../../org/allbinary/logic/communication/smtp/event/EmailEvent.js";

    
import { UserEmailEventListenerInterface } from "../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js";

    
import { UserEmailEventNameData } from "../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { EmailInfo } from "../../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    

export class UserEmailEventHandler
            extends Object
         {
        

    private emailVector: Vector

    private emailInfo: EmailInfo

    private userEmailEventNameData: UserEmailEventNameData
public constructor (){

            super();
            this.emailVector= new Vector();
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public receiveEmailInfo(userEmailEventNameData: UserEmailEventNameData, emailInfo: EmailInfo){
var userEmailEventNameData = userEmailEventNameData
var emailInfo = emailInfo
this.userEmailEventNameData= userEmailEventNameData;
    
this.emailInfo= emailInfo;
    
this.fireEmailEvent();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addListener(vector: Vector){
var vector = vector

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userEmailEventListenerInterface: UserEmailEventListenerInterface = vector.get(index);

                         as UserEmailEventListenerInterface;
        
        
;
    
this.addListener(userEmailEventListenerInterface);
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addListener(emailEventListenerInterface: UserEmailEventListenerInterface){
var emailEventListenerInterface = emailEventListenerInterface
this.emailVector!.add(emailEventListenerInterface);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeListener(emailEventListenerInterface: UserEmailEventListenerInterface){
var emailEventListenerInterface = emailEventListenerInterface
this.emailVector!.remove(emailEventListenerInterface);
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public fireEmailEvent(){

    var emailEvent: EmailEvent = new EmailEvent(this, this.userEmailEventNameData, this.emailInfo, 0);
        
        
;
    

    var size: number = emailVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var emailEventListenerInterface: UserEmailEventListenerInterface = emailVector!.get(index);

                         as UserEmailEventListenerInterface;
        
        
;
    
emailEventListenerInterface!.onEmailSendRequest(emailEvent);
    
}

}


}
                
            

