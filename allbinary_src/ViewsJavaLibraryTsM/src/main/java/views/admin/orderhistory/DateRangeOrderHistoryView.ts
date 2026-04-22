
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
        



import { Calendar } from "../../../java/util/Calendar.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../javax/servlet/http/HttpServletRequest.js";

    
import { OrderData } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistory } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { OrderHistoryData } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { OrderHistoryEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { GLOBALS2 } from "../../../org/allbinary/globals/GLOBALS2.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TimeUtil } from "../../../org/allbinary/time/TimeUtil.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DateRangeOrderHistoryView extends HttpStoreComponentView implements ValidationComponentInterface, DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly VIEWALLORDERS: string = "View All";
        
        

    private readonly VIEWORDERSINLASTHOUR: string = "Last Hour";
        
        

    private readonly VIEWORDERSINLASTDAY: string = "Last Day";
        
        

    private readonly VIEWORDERSINLASTWEEK: string = "Last Week";
        
        

    private readonly VIEWORDERSINLAST30DAYS: string = "30 Days";
        
        

    private request: HttpServletRequest

    private shipped: string

    private partiallyShipped: string

    private processing: string

    private preprocessing: string

    private cancelled: string

    private dateType: string

    private toDate: string

    private fromDate: string

    private fromYear: string

    private fromMonth: string

    private fromDay: string

    private fromHour: string

    private toYear: string

    private toMonth: string

    private toDay: string

    private toHour: string

    private command: string

    private readonly ON: string = "on";
        
        

    private MAXLEN: number = 15;
        
        
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest();

                         as HttpServletRequest;
    
this.getFormData();
    
}


    getFormData(){
this.dateType= this.request.getParameter(OrderHistoryData.DATETYPE);
    
this.preprocessing= this.request.getParameter(OrderHistoryData.PREPROCESSINGNAME);
    
this.shipped= this.request.getParameter(OrderHistoryData.SHIPPEDNAME);
    
this.partiallyShipped= this.request.getParameter(OrderHistoryData.PARTIALLYSHIPPEDNAME);
    
this.processing= this.request.getParameter(OrderHistoryData.PROCESSINGNAME);
    
this.cancelled= this.request.getParameter(OrderHistoryData.CANCELLEDNAME);
    
this.fromYear= this.request.getParameter(OrderHistoryData.FROMYEAR);
    
this.fromMonth= this.request.getParameter(OrderHistoryData.FROMMONTH);
    
this.fromDay= this.request.getParameter(OrderHistoryData.FROMDAY);
    
this.fromHour= this.request.getParameter(OrderHistoryData.FROMHOUR);
    
this.toYear= this.request.getParameter(OrderHistoryData.TOYEAR);
    
this.toMonth= this.request.getParameter(OrderHistoryData.TOMONTH);
    
this.toDay= this.request.getParameter(OrderHistoryData.TODAY);
    
this.toHour= this.request.getParameter(OrderHistoryData.TOHOUR);
    
this.command= this.request.getParameter(GLOBALS2.ADMINCOMMAND);
    
}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


    public toXmlNode(document: Document): Node{
var document = document

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Attempt to View orders in (fromDate=");
    
stringBuffer!.append(this.fromDate);
    
stringBuffer!.append(",toDate=");
    
stringBuffer!.append(this.toDate);
    
stringBuffer!.append(") and status");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "view");
    

                                    }
                                

    var node: Node = document.createElement(OrderData.ORDERS)!;
        
        
;
    

                        if(this.preprocessing != 
                                    null
                                 && this.preprocessing.compareTo(this.ON) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Adding Preprocessing Orders", this, "toXmlNode");
    

                                    }
                                

    var orderHistoryVector: Vector = OrderHistoryEntityFactory.getInstance()!.getOrders(OrderHistoryData.PREPROCESSING, fromDate, toDate)!;
        
        
;
    

    var size: number = orderHistoryVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderHistory: OrderHistory = orderHistoryVector!.get(index);

                         as OrderHistory;
        
        
;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                                    }
                                

                        if(this.shipped != 
                                    null
                                 && this.shipped.compareTo(this.ON) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Adding Shipped Orders", this, "toXmlNode");
    

                                    }
                                

    var orderHistoryVector: Vector = OrderHistoryEntityFactory.getInstance()!.getOrders(OrderHistoryData.SHIPPED, fromDate, toDate)!;
        
        
;
    

    var size: number = orderHistoryVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderHistory: OrderHistory = orderHistoryVector!.get(index);

                         as OrderHistory;
        
        
;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                                    }
                                

                        if(this.partiallyShipped != 
                                    null
                                 && this.partiallyShipped!.compareTo(this.ON) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Adding Partially Shipped Orders", this, "toDomNode");
    

                                    }
                                

    var orderHistoryVector: Vector = OrderHistoryEntityFactory.getInstance()!.getOrders(OrderHistoryData.PARTIALLYSHIPPED, fromDate, toDate)!;
        
        
;
    

    var size: number = orderHistoryVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderHistory: OrderHistory = orderHistoryVector!.get(index);

                         as OrderHistory;
        
        
;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                                    }
                                

                        if(this.processing != 
                                    null
                                 && this.processing.compareTo(this.ON) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Adding Processing Orders", this, "toXmlNode");
    

                                    }
                                

    var orderHistoryVector: Vector = OrderHistoryEntityFactory.getInstance()!.getOrders(OrderHistoryData.PROCESSING, fromDate, toDate)!;
        
        
;
    

    var size: number = orderHistoryVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderHistory: OrderHistory = orderHistoryVector!.get(index);

                         as OrderHistory;
        
        
;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                                    }
                                

                        if(this.cancelled != 
                                    null
                                 && this.cancelled.compareTo(this.ON) == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Adding Cancelled Orders", this, "view");
    

                                    }
                                

    var orderHistoryVector: Vector = OrderHistoryEntityFactory.getInstance()!.getOrders(OrderHistoryData.CANCELLED, fromDate, toDate)!;
        
        
;
    

    var size: number = orderHistoryVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderHistory: OrderHistory = orderHistoryVector!.get(index);

                         as OrderHistory;
        
        
;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                                    }
                                
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.PREPROCESSINGNAME, OrderHistoryData.PREPROCESSING));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.PROCESSINGNAME, OrderHistoryData.PROCESSING));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.CANCELLEDNAME, OrderHistoryData.CANCELLED));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.PARTIALLYSHIPPEDNAME, OrderHistoryData.PARTIALLYSHIPPED));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.SHIPPEDNAME, OrderHistoryData.SHIPPED));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, GLOBALS2.VIEWNAME, GLOBALS2.VIEW));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(this.dateType == 
                                    null
                                 || (dateType!.compareTo(OrderHistoryData.TYPELONG) != 0 && dateType!.compareTo(OrderHistoryData.TYPECAESAR) != 0))
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(this.dateType != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.dateType!.compareTo(OrderHistoryData.TYPELONG) == 0)
                        
                                    {
                                    
    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var currentTime: number = calendar.getTimeInMillis()!;
        
        
;
    

    var rangeDate: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(this.command.compareTo(this.VIEWORDERSINLASTHOUR) == 0)
                        
                                    {
                                    
    var oneHour: number = 60 *60 *1000;
        
        
;
    
rangeDate= oneHour as Long.
                            toString();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(this.VIEWORDERSINLASTDAY) == 0)
                        
                                    {
                                    
    var oneDay: number = 24 *60 *60 *1000;
        
        
;
    
rangeDate= oneDay as Long.
                            toString();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(this.VIEWORDERSINLASTWEEK) == 0)
                        
                                    {
                                    
    var oneWeek: number = 7 *24 *60 *60 *1000;
        
        
;
    
rangeDate= oneWeek as Long.
                            toString();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(this.VIEWORDERSINLAST30DAYS) == 0)
                        
                                    {
                                    
    var thirtyDays: number = 30 *24 *60 *60 *1000;
        
        
;
    
rangeDate= thirtyDays as Long.
                            toString();
    

                                    }
                                
                             else 
                        if(this.command.compareTo(this.VIEWALLORDERS) == 0)
                        
                                    {
                                    rangeDate= currentTime as Long.
                            toString();
    

                                    }
                                

    var rangeDateLong: number = rangeDate as Long.
                            longValue()!;
        
        
;
    
this.fromDate= currentTime -rangeDateLong as Long.
                            toString();
    

    var time: string = currentTime as Long.
                            toString();
        
        
;
    
this.toDate= time;
    

                                    }
                                
                             else 
                        if(this.dateType!.compareTo(OrderHistoryData.TYPECAESAR) == 0)
                        
                                    {
                                    
    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    
TimeUtil.getInstance()!.setCalendar(calendar, fromYear, fromMonth, fromDay, fromHour);
    
this.fromDate= calendar.getTimeInMillis() as Long.
                            toString();
    
TimeUtil.getInstance()!.setCalendar(calendar, toYear, toMonth, toDay, toHour);
    
this.toDate= calendar.getTimeInMillis() as Long.
                            toString();
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(this.toDate) || this.toDate!.length > this.MAXLEN)
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(this.fromDate) || this.fromDate!.length > this.MAXLEN)
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Attempt to View orders in (fromDate=");
    
stringBuffer!.append(this.fromDate);
    
stringBuffer!.append(",toDate=");
    
stringBuffer!.append(this.toDate);
    
stringBuffer!.append(")");
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.put("Exception in validation", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public validationInfo(): string{

        try {
            
    var result: StringMaker = new StringMaker();
        
        
;
    

                        if(this.dateType == 
                                    null
                                 || (dateType!.compareTo(OrderHistoryData.TYPELONG) != 0 && dateType!.compareTo(OrderHistoryData.TYPECAESAR) != 0))
                        
                                    {
                                    result.append("DATETYPE not recognized");
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(this.toDate) || this.toDate!.length > this.MAXLEN)
                        
                                    {
                                    result.append("Invalid To Date");
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(this.fromDate) || this.fromDate!.length > this.MAXLEN)
                        
                                    {
                                    result.append("Invalid From Date");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


}
                
            

