
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
        



import { Calendar } from "../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { QuoteRequestData } from "../../../../../org/allbinary/business/quoterequest/QuoteRequestData.js";

    
import { UserData } from "../../../../../org/allbinary/business/user/UserData.js";

    
import { QuoteRequestIdGenerator } from "../../../../../org/allbinary/data/generator/QuoteRequestIdGenerator.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { Boolean } from "./Boolean.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class QuoteRequest
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private id: string

    private userName: string

    private projectInfo: string

    private userComments: string

    private budget: string

    private timeFrame: string

    private comments: string
public constructor (userName: string, request: HttpServletRequest){

            super();
            var userName = userName
var request = request

    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;
        
        
;
    
this.id= new QuoteRequestIdGenerator().
                            getNext();
    
this.setUserName(userName);
    
this.setProjectInfo(request.getParameter(quoteRequestData!.PROJECT_INFO);

                         as String);
    
this.setUserComments(request.getParameter(quoteRequestData!.CUSTOMER_COMMENTS);

                         as String);
    
this.setBudget(request.getParameter(quoteRequestData!.BUDGET);

                         as String);
    
this.setTimeFrame(request.getParameter(quoteRequestData!.TIMEFRAME);

                         as String);
    
this.setComments(request.getParameter(quoteRequestData!.COMMENTS);

                         as String);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Created with: " +this.toHashMap(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap

    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;
        
        
;
    
this.id= hashMap!.get(quoteRequestData!.ID);

                         as String;
    
this.setUserName(hashMap!.get(UserData.USERNAME);

                         as String);
    
this.setProjectInfo(hashMap!.get(quoteRequestData!.PROJECT_INFO);

                         as String);
    
this.setUserComments(hashMap!.get(quoteRequestData!.CUSTOMER_COMMENTS);

                         as String);
    
this.setBudget(hashMap!.get(quoteRequestData!.BUDGET);

                         as String);
    
this.setTimeFrame(hashMap!.get(quoteRequestData!.TIMEFRAME);

                         as String);
    
this.setComments(hashMap!.get(quoteRequestData!.COMMENTS);

                         as String);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Created with: " +this.toHashMap(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(userName == 
                                    null
                                 || userName!.length < 4 || userName!.length > 250)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(this.projectInfo == 
                                    null
                                 || this.projectInfo!.length < 0 || this.projectInfo!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(this.userComments == 
                                    null
                                 || this.userComments!.length < 0 || this.userComments!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(this.budget == 
                                    null
                                 || this.budget.length < 0 || this.budget.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(this.timeFrame == 
                                    null
                                 || this.timeFrame!.length < 0 || this.timeFrame!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(this.comments == 
                                    null
                                 || this.comments.length < 0 || this.comments.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(userName == 
                                    null
                                 || userName!.length < 4 || userName!.length > 250)
                        
                                    {
                                    stringBuffer!.append("Please enter a User Name with more than 4 characters.<br>");
    

                                    }
                                

                        if(this.projectInfo == 
                                    null
                                 || this.projectInfo!.length < 0 || this.projectInfo!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Please enter Project Info with less than " +AbSqlData.MAXBLOB +" characters.<br>");
    

                                    }
                                

                        if(this.userComments == 
                                    null
                                 || this.userComments!.length < 0 || this.userComments!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Please enter User Comments with less than " +AbSqlData.MAXBLOB +" characters.<br>");
    

                                    }
                                

                        if(this.budget == 
                                    null
                                 || this.budget.length < 0 || this.budget.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Please enter Budget with less than " +AbSqlData.MAXBLOB +" characters.<br>");
    

                                    }
                                

                        if(this.timeFrame == 
                                    null
                                 || this.timeFrame!.length < 0 || this.timeFrame!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Please enter time frame with less than " +AbSqlData.MAXBLOB +" characters.<br>");
    

                                    }
                                

                        if(this.comments == 
                                    null
                                 || this.comments.length < 0 || this.comments.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Please enter comments with less than " +AbSqlData.MAXBLOB +" characters.<br>");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toVector(): Vector{

    var values: Vector = new Vector();
        
        
;
    
values.add(id);
    
values.add(userName);
    
values.add(this.projectInfo);
    
values.add(this.userComments);
    
values.add(this.budget);
    
values.add(this.timeFrame);
    
values.add(this.comments);
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toHashMap(): HashMap<any, any>{

    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;
        
        
;
    

    var values: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
values.put(UserData.USERNAME, userName);
    
values.put(quoteRequestData!.PROJECT_INFO, this.projectInfo);
    
values.put(quoteRequestData!.CUSTOMER_COMMENTS, this.userComments);
    
values.put(quoteRequestData!.BUDGET, this.budget);
    
values.put(quoteRequestData!.TIMEFRAME, this.timeFrame);
    
values.put(quoteRequestData!.COMMENTS, this.comments);
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public setUserName(value: string){
var value = value
this.userName= value;
    
}


    public setProjectInfo(value: string){
var value = value
this.projectInfo= value;
    
}


    public setUserComments(value: string){
var value = value
this.userComments= value;
    
}


    public setBudget(value: string){
var value = value
this.budget= value;
    
}


    public setTimeFrame(value: string){
var value = value
this.timeFrame= value;
    
}


    public setComments(value: string){
var value = value
this.comments= value;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

                        if(this.comments == 
                                    null
                                )
                        this.comments= stringUtil!.EMPTY_STRING
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public getProjectInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.projectInfo;
    
}


    public getUserComments(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userComments;
    
}


    public getBudget(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.budget;
    
}


    public getTimeFrame(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeFrame;
    
}


    public getComments(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.comments;
    
}


}
                
            

