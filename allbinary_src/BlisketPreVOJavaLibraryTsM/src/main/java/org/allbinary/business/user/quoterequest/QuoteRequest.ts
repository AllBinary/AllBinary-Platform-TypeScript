
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../java/util/Calendar.js';
//not GWT import const Calendar = globalThis.java.util.Calendar;

      
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { HttpServletRequest } from '../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { QuoteRequestData } from '../../../../../org/allbinary/business/quoterequest/QuoteRequestData.js';
//not GWT import const QuoteRequestData = globalThis.org.allbinary.business.quoterequest.QuoteRequestData;

      
import { UserData } from '../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { QuoteRequestIdGenerator } from '../../../../../org/allbinary/data/generator/QuoteRequestIdGenerator.js';
//not GWT import const QuoteRequestIdGenerator = globalThis.org.allbinary.data.generator.QuoteRequestIdGenerator;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlData } from '../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
//not GWT import const AbSqlData = globalThis.org.allbinary.logic.communication.sql.AbSqlData;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class QuoteRequest
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private id: string;

    private userName: string;

    private projectInfo: string;

    private userComments: string;

    private budget: string;

    private timeFrame: string;

    private comments: string;

public constructor (userName: string, request: HttpServletRequest){

            super();
        
    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;;
    
this.id= new QuoteRequestIdGenerator().getNext();
    
this.setUserName(userName);
    
this.setProjectInfo(request.getParameter(quoteRequestData!.PROJECT_INFO) as string);
    
this.setUserComments(request.getParameter(quoteRequestData!.CUSTOMER_COMMENTS) as string);
    
this.setBudget(request.getParameter(quoteRequestData!.BUDGET) as string);
    
this.setTimeFrame(request.getParameter(quoteRequestData!.TIMEFRAME) as string);
    
this.setComments(request.getParameter(quoteRequestData!.COMMENTS) as string);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Created with: " +this.toHashMap(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


public constructor (hashMap: HashMap<any, any>){

            super();
        
    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;;
    
this.id= hashMap!.get(quoteRequestData!.ID) as string;
    
this.setUserName(hashMap!.get(UserData.USERNAME) as string);
    
this.setProjectInfo(hashMap!.get(quoteRequestData!.PROJECT_INFO) as string);
    
this.setUserComments(hashMap!.get(quoteRequestData!.CUSTOMER_COMMENTS) as string);
    
this.setBudget(hashMap!.get(quoteRequestData!.BUDGET) as string);
    
this.setTimeFrame(hashMap!.get(quoteRequestData!.TIMEFRAME) as string);
    
this.setComments(hashMap!.get(quoteRequestData!.COMMENTS) as string);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Created with: " +this.toHashMap(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;;
    

                        if(this.userName == 
                                    null
                                 || this.userName!.length < 4 || this.userName!.length > 250)
                        
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
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    

                        if(this.userName == 
                                    null
                                 || this.userName!.length < 4 || this.userName!.length > 250)
                        
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
                        return stringBuffer!.toString();;
    

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


    public toVector(): BasicArrayList{

    var values: BasicArrayList = new BasicArrayListD();;
    
values.add(this.id);
    
values.add(this.userName);
    
values.add(this.projectInfo);
    
values.add(this.userComments);
    
values.add(this.budget);
    
values.add(this.timeFrame);
    
values.add(this.comments);
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toHashMap(): HashMap<any, any>{

    var quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;;
    

    var values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
values.put(UserData.USERNAME, userName);
    
values.put(quoteRequestData!.PROJECT_INFO, this.projectInfo);
    
values.put(quoteRequestData!.CUSTOMER_COMMENTS, this.userComments);
    
values.put(quoteRequestData!.BUDGET, this.budget);
    
values.put(quoteRequestData!.TIMEFRAME, this.timeFrame);
    
values.put(quoteRequestData!.COMMENTS, this.comments);
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public setUserName(value: string){
this.userName= value;
    
}


    public setProjectInfo(value: string){
this.projectInfo= value;
    
}


    public setUserComments(value: string){
this.userComments= value;
    
}


    public setBudget(value: string){
this.budget= value;
    
}


    public setTimeFrame(value: string){
this.timeFrame= value;
    
}


    public setComments(value: string){
this.comments= value;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

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



