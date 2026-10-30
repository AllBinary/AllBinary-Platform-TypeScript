
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
import { Calendar } from '../../../../../../../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set

import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadableItem } from './DownloadableItem.js';
//sameFolderImports - not GWT import - same folder const DownloadableItem
import { DownloadItemData } from './DownloadItemData.js';
//sameFolderImports - not GWT import - same folder const DownloadItemData

export class DownloadableItemView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private downloadableItem: DownloadableItem;

public constructor (downloadableItem: DownloadableItem){

            super();
        this.downloadableItem= downloadableItem;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toXmlNode");
    

                                    }
                                

    let hashMap: HashMap<any, any> = this.downloadableItem!.toHashMap()!;;
    

    let totalTime: number = this.downloadableItem!.getValidTime()!.longValue()!;;
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let year: number = calendar.get(Calendar.YEAR)!;;
    

    let month: number = calendar.get(Calendar.MONTH)!;;
    

    let day: number = calendar.get(Calendar.DAY_OF_MONTH)!;;
    

    let hour: number = calendar.get(Calendar.HOUR)!;;
    

    let minute: number = calendar.get(Calendar.MINUTE)!;;
    

    let second: number = calendar.get(Calendar.SECOND)!;;
    
calendar.setTimeInMillis(calendar.getTimeInMillis() +totalTime);
    

    let yearDelta: number = calendar.get(Calendar.YEAR)!;;
    

    let monthDelta: number = calendar.get(Calendar.MONTH)!;;
    

    let dayDelta: number = calendar.get(Calendar.DAY_OF_MONTH)!;;
    

    let hourDelta: number = calendar.get(Calendar.HOUR)!;;
    

    let minuteDelta: number = calendar.get(Calendar.MINUTE)!;;
    

    let secondDelta: number = calendar.get(Calendar.SECOND)!;;
    
hashMap!.put(DownloadItemData.VALID_TIME_YEARS, Integer.valueOf(yearDelta -year));
    
hashMap!.put(DownloadItemData.VALID_TIME_MONTHS, Integer.valueOf(monthDelta -month));
    
hashMap!.put(DownloadItemData.VALID_TIME_DAYS, Integer.valueOf(dayDelta -day));
    
hashMap!.put(DownloadItemData.VALID_TIME_HOURS, Integer.valueOf(hourDelta -hour));
    
hashMap!.put(DownloadItemData.VALID_TIME_MINUTES, Integer.valueOf(minuteDelta -minute));
    
hashMap!.put(DownloadItemData.VALID_TIME_SECONDS, Integer.valueOf(secondDelta -second));
    

    let keySet: Set = hashMap!.keys()!;;
    

    let node: Node = document.createElement(DownloadItemData.NAME)!;;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let nameArray: any[] = keySet!.()!;;
    

    let size: number = nameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let name: string = nameArray[index]! as string;;
    

    let value: string = hashMap!.get(name) as string;;
    
value= stringUtil!.getNonNull(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}

