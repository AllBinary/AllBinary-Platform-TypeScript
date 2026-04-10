
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
        



import { EventObject } from "../../../../../../java/util/EventObject.js";

    
import { EmailInfo } from "../../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class EmailEvent extends EventObject {
        

    private emailInfo: EmailInfo

    private userEmailEventNameData: UserEmailEventNameData

    private attempts: number= 0
public constructor (emailEventHandler: any = {}, userEmailEventNameData: UserEmailEventNameData, emailInfo: EmailInfo, attempts: number)                        

                            : super(emailEventHandler){

            super();
            var emailEventHandler = emailEventHandler
var userEmailEventNameData = userEmailEventNameData
var emailInfo = emailInfo
var attempts = attempts


                            //For kotlin this is before the body of the constructor.
                    
this.userEmailEventNameData= userEmailEventNameData
this.emailInfo= emailInfo
}


    public getEmailInfo(): EmailInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailInfo;
    
}


    public getAttempts(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return attempts;
    
}


    public setAttempts(attempts: number){
var attempts = attempts
this.attempts= attempts
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("EmailEvent Log: \n")
stringBuffer!.append("Event Name: ")
stringBuffer!.append(this.userEmailEventNameData!.toString())
stringBuffer!.append(this.getEmailInfo()!.toString())
stringBuffer!.append("\nNumber of Attempts: ")
stringBuffer!.appendint(this.getAttempts())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

