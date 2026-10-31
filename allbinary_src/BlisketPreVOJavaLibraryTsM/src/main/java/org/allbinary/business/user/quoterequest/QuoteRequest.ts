
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
//not GWT import const Calendar

import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { QuoteRequestData } from '../../../../../org/allbinary/business/quoterequest/QuoteRequestData.js';
//not GWT import const QuoteRequestData

import { UserData } from '../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData

import { QuoteRequestIdGenerator } from '../../../../../org/allbinary/data/generator/QuoteRequestIdGenerator.js';
//not GWT import const QuoteRequestIdGenerator

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlData } from '../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
//not GWT import const AbSqlData

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
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

    public constructor(...args: any[]) {
        super();if(args.length === 2) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(userName: string, request: HttpServletRequest): void {
        
    let quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;;
    
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
    
    private constructor$1(hashMap: HashMap<any, any>): void {
        
    let quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;;
    
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
    let valid: Boolean = Boolean.TRUE;;
    

                        if(this.userName == 
                                    null
                                 || this.userName!.length < 4 || this.userName!.length > 250)
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(this.projectInfo == 
                                    null
                                 || this.projectInfo!.length < 0 || this.projectInfo!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(this.userComments == 
                                    null
                                 || this.userComments!.length < 0 || this.userComments!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(this.budget == 
                                    null
                                 || this.budget.length < 0 || this.budget.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(this.timeFrame == 
                                    null
                                 || this.timeFrame!.length < 0 || this.timeFrame!.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(this.comments == 
                                    null
                                 || this.comments.length < 0 || this.comments.length > AbSqlData.MAXBLOB)
                        
                                    {
                                    valid= false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    

 }
   }
 
}


    public toVector(): BasicArrayList{

    let values: BasicArrayList = new BasicArrayListD();;
    
values.add(this.id);
    
values.add(this.userName);
    
values.add(this.projectInfo);
    
values.add(this.userComments);
    
values.add(this.budget);
    
values.add(this.timeFrame);
    
values.add(this.comments);
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toHashMap(): HashMap<any, any>{

    let quoteRequestData: QuoteRequestData = QuoteRequestData.getInstance()!;;
    

    let values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
values.put(UserData.USERNAME, userName);
    
values.put(quoteRequestData!.PROJECT_INFO, this.projectInfo);
    
values.put(quoteRequestData!.CUSTOMER_COMMENTS, this.userComments);
    
values.put(quoteRequestData!.BUDGET, this.budget);
    
values.put(quoteRequestData!.TIMEFRAME, this.timeFrame);
    
values.put(quoteRequestData!.COMMENTS, this.comments);
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
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
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

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

