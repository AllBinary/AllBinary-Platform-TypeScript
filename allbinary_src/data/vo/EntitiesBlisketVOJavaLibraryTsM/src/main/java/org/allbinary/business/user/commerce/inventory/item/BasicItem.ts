
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { Calendar } from "../../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { ProductIdGenerator } from "../../../../../../../org/allbinary/data/generator/ProductIdGenerator.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonPhoneStrings } from "../../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

export class BasicItem
            extends Object
        
                , ItemInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    itemId: string

    number: string

    inBaskets: string

    weight: string

    enabled: string

    newOrUsed: string

    summary: string

    distributor: string

    idUsedByDistributor: string

    producedBy: string

    productionDate: string

    startProductionDate: string

    description: string

    keywords: string

    category: string

    type: string

    smallImage: string

    mediumImage: string

    largeImage: string

    price: Money

    comment: string

    customs: string

    private downloads: string

    groups: string

    options: string

    permissions: string

    specials: string

    private downloadable: boolean= false

    timeEntered: string

    lastModified: string
public constructor (itemHashMap: HashMap<any, any>){

            super();
            var itemHashMap = itemHashMap

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "Constructor(HashMap)");
    

                                    }
                                
this.itemId= itemHashMap!.get(BasicItemData.ID);

                         as String;
    
this.number= itemHashMap!.get(BasicItemData.NUMBER);

                         as String;
    
this.inBaskets= itemHashMap!.get(BasicItemData.INBASKETS);

                         as String;
    
this.weight= itemHashMap!.get(BasicItemData.WEIGHT);

                         as String;
    
this.enabled= itemHashMap!.get(EntryData.getInstance()!.ENABLE);

                         as String;
    
this.newOrUsed= itemHashMap!.get(BasicItemData.NEWORUSED);

                         as String;
    
this.summary= itemHashMap!.get(BasicItemData.SUMMARY);

                         as String;
    
this.distributor= itemHashMap!.get(BasicItemData.DISTRIBUTOR);

                         as String;
    
this.idUsedByDistributor= itemHashMap!.get(BasicItemData.IDUSEDBYDISTRIBUTOR);

                         as String;
    
this.producedBy= itemHashMap!.get(BasicItemData.PRODUCEDBY);

                         as String;
    
this.productionDate= itemHashMap!.get(BasicItemData.PRODUCTIONDATE);

                         as String;
    
this.startProductionDate= itemHashMap!.get(BasicItemData.STARTPRODUCTIONDATE);

                         as String;
    
this.description= itemHashMap!.get(BasicItemData.DESCRIPTION);

                         as String;
    
this.keywords= itemHashMap!.get(BasicItemData.KEYWORDS);

                         as String;
    
this.category= itemHashMap!.get(BasicItemData.CATEGORY);

                         as String;
    
this.type= itemHashMap!.get(BasicItemData.TYPE);

                         as String;
    
this.smallImage= itemHashMap!.get(BasicItemData.SMALLIMAGE);

                         as String;
    
this.mediumImage= itemHashMap!.get(BasicItemData.MEDIUMIMAGE);

                         as String;
    
this.largeImage= itemHashMap!.get(BasicItemData.LARGEIMAGE);

                         as String;
    
this.timeEntered= itemHashMap!.get(EntryData.getInstance()!.TIMECREATED);

                         as String;
    
this.lastModified= itemHashMap!.get(EntryData.getInstance()!.LASTMODIFIED);

                         as String;
    
this.price= new Money(itemHashMap!.get(BasicItemData.PRICE);

                         as String);
    
this.comment= itemHashMap!.get(BasicItemData.COMMENT);

                         as String;
    
this.customs= itemHashMap!.get(BasicItemData.CUSTOMS);

                         as String;
    
this.setDownloads(itemHashMap!.get(BasicItemData.DOWNLOADS);

                         as String);
    
this.groups= itemHashMap!.get(BasicItemData.GROUPS);

                         as String;
    
this.options= itemHashMap!.get(BasicItemData.OPTIONS);

                         as String;
    
this.permissions= itemHashMap!.get(BasicItemData.PERMISSIONS);

                         as String;
    
this.specials= itemHashMap!.get(BasicItemData.SPECIALS);

                         as String;
    
}

public constructor (){

            super();
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var EMPTY: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    
this.itemId= new ProductIdGenerator().
                            getNext();
    
this.number= CommonPhoneStrings.getInstance()!.ZERO;
    
this.inBaskets= EMPTY;
    
this.weight= EMPTY;
    
this.enabled= EMPTY;
    
this.newOrUsed= EMPTY;
    
this.summary= EMPTY;
    
this.distributor= EMPTY;
    
this.idUsedByDistributor= EMPTY;
    
this.producedBy= EMPTY;
    
this.productionDate= EMPTY;
    
this.startProductionDate= EMPTY;
    
this.description= EMPTY;
    
this.keywords= EMPTY;
    
this.category= EMPTY;
    
this.type= EMPTY;
    
this.smallImage= EMPTY;
    
this.mediumImage= EMPTY;
    
this.largeImage= EMPTY;
    
this.timeEntered= EMPTY;
    
this.lastModified= EMPTY;
    
this.price= new Money();
    
this.comment= EMPTY;
    
this.customs= EMPTY;
    
this.setDownloads(EMPTY);
    
this.groups= EMPTY;
    
this.options= EMPTY;
    
this.permissions= EMPTY;
    
this.specials= EMPTY;
    
}


    public setId(itemId: string){
var itemId = itemId
this.itemId= itemId;
    
}


    public setNumber(number: string){
var number = number
this.number= number;
    
}


    public setInBaskets(value: string){
var value = value
this.inBaskets= value;
    
}


    public setWeight(value: string){
var value = value
this.weight= value;
    
}


    public setNewOrUsed(value: string){
var value = value
this.newOrUsed= value;
    
}


    public setSummary(value: string){
var value = value
this.summary= value;
    
}


    public setDistributor(value: string){
var value = value
this.distributor= value;
    
}


    public setIdUsedByDistributor(value: string){
var value = value
this.idUsedByDistributor= value;
    
}


    public setProducedBy(value: string){
var value = value
this.producedBy= value;
    
}


    public setProductionDate(value: string){
var value = value
this.productionDate= value;
    
}


    public setStartProductionDate(value: string){
var value = value
this.startProductionDate= value;
    
}


    public setDescription(value: string){
var value = value
this.description= value;
    
}


    public setKeywords(value: string){
var value = value
this.keywords= value;
    
}


    public setCategory(value: string){
var value = value
this.category= value;
    
}


    public setType(value: string){
var value = value
this.type= value;
    
}


    public setSmallImage(value: string){
var value = value
this.smallImage= value;
    
}


    public setMediumImage(value: string){
var value = value
this.mediumImage= value;
    
}


    public setLargeImage(value: string){
var value = value
this.largeImage= value;
    
}


    public setTimeEntered(value: string){
var value = value
this.timeEntered= value;
    
}


    public setLastModified(value: string){
var value = value
this.lastModified= value;
    
}


    public setPrice(value: Money){
var value = value
this.price= value;
    
}


    public setComment(value: string){
var value = value
this.comment= value;
    
}


    public setCustoms(value: string){
var value = value
this.customs= value;
    
}


    public setDownloads(value: string){
var value = value
this.downloads= value;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(this.downloads);

                        )
                        
                                    {
                                    
    var downloadInteger: Integer = Integer(Integer.valueOf(this.downloads))!;
        
        
;
    

                        if(downloadInteger!.toInt() != 0)
                        
                                    {
                                    this.setDownloadable(true);
    

                                    }
                                

                                    }
                                
}


    public setGroups(value: string){
var value = value
this.groups= value;
    
}


    public setOptions(value: string){
var value = value
this.options= value;
    
}


    public setPermissions(value: string){
var value = value
this.permissions= value;
    
}


    public setSpecials(value: string){
var value = value
this.specials= value;
    
}


    public setEnabled(value: string){
var value = value
this.enabled= value;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemId;
    
}


    public getNumber(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.number;
    
}


    public getInBaskets(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inBaskets;
    
}


    public getWeight(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.weight;
    
}


    public getNewOrUsed(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.newOrUsed;
    
}


    public getSummary(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.summary;
    
}


    public getDistributor(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.distributor;
    
}


    public getIdUsedByDistributor(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.idUsedByDistributor;
    
}


    public getProducedBy(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.producedBy;
    
}


    public getProductionDate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.productionDate;
    
}


    public getStartProductionDate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startProductionDate;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public getKeywords(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keywords;
    
}


    public getCategory(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.category;
    
}


    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public getSmallImage(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.smallImage;
    
}


    public getMediumImage(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mediumImage;
    
}


    public getLargeImage(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.largeImage;
    
}


    public getTimeEntered(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeEntered;
    
}


    public getLastModified(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastModified;
    
}


    public getPrice(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.price;
    
}


    public getComment(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.comment;
    
}


    public getCustoms(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.customs;
    
}


    public getDownloads(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downloads;
    
}


    public getGroups(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.groups;
    
}


    public getOptions(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.options;
    
}


    public getPermissions(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.permissions;
    
}


    public getSpecials(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.specials;
    
}


    public setDownloadable(downloadable: boolean){
var downloadable = downloadable
this.downloadable= downloadable;
    
}


    public isDownloadable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downloadable;
    
}


    public getEnabled(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.enabled;
    
}


    public getTotal(): Money{

    var itemTotal: Money = new Money(this.price);
        
        
;
    
itemTotal!.multiply(new Integer(this.number).
                            toInt());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return itemTotal;
    
}


    public toHashMap(): HashMap<any, any>{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toHashMap");
    

                                    }
                                

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(BasicItemData.ID, this.itemId);
    
hashMap!.put(BasicItemData.NUMBER, this.number);
    
hashMap!.put(BasicItemData.INBASKETS, this.inBaskets);
    
hashMap!.put(BasicItemData.WEIGHT, this.weight);
    
hashMap!.put(EntryData.getInstance()!.ENABLE, this.enabled);
    
hashMap!.put(BasicItemData.NEWORUSED, this.newOrUsed);
    
hashMap!.put(BasicItemData.SUMMARY, this.summary);
    
hashMap!.put(BasicItemData.DISTRIBUTOR, this.distributor);
    
hashMap!.put(BasicItemData.IDUSEDBYDISTRIBUTOR, this.idUsedByDistributor);
    
hashMap!.put(BasicItemData.PRODUCEDBY, this.producedBy);
    
hashMap!.put(BasicItemData.PRODUCTIONDATE, this.productionDate);
    
hashMap!.put(BasicItemData.STARTPRODUCTIONDATE, this.startProductionDate);
    
hashMap!.put(BasicItemData.DESCRIPTION, this.description);
    
hashMap!.put(BasicItemData.KEYWORDS, this.keywords);
    
hashMap!.put(BasicItemData.CATEGORY, this.category);
    
hashMap!.put(BasicItemData.TYPE, this.type);
    
hashMap!.put(BasicItemData.SMALLIMAGE, this.smallImage);
    
hashMap!.put(BasicItemData.MEDIUMIMAGE, this.mediumImage);
    
hashMap!.put(BasicItemData.LARGEIMAGE, this.largeImage);
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = calendar.getTimeInMillis() as Long.
                            toString()!;
        
        
;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time);
    
hashMap!.put(BasicItemData.PRICE, this.price.toString());
    
hashMap!.put(BasicItemData.COMMENT, this.comment);
    
hashMap!.put(BasicItemData.CUSTOMS, this.customs);
    
hashMap!.put(BasicItemData.DOWNLOADS, this.getDownloads());
    
hashMap!.put(BasicItemData.GROUPS, this.groups);
    
hashMap!.put(BasicItemData.OPTIONS, this.options);
    
hashMap!.put(BasicItemData.PERMISSIONS, this.permissions);
    
hashMap!.put(BasicItemData.SPECIALS, this.specials);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): Vector{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toVector");
    

                                    }
                                

    var values: Vector = new Vector();
        
        
;
    
values.add(itemId);
    
values.add(number);
    
values.add(inBaskets);
    
values.add(weight);
    
values.add(enabled);
    
values.add(newOrUsed);
    
values.add(summary);
    
values.add(distributor);
    
values.add(idUsedByDistributor);
    
values.add(producedBy);
    
values.add(productionDate);
    
values.add(startProductionDate);
    
values.add(description);
    
values.add(keywords);
    
values.add(category);
    
values.add(type);
    
values.add(this.getSmallImage());
    
values.add(this.getMediumImage());
    
values.add(this.getLargeImage());
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = calendar.getTimeInMillis() as Long.
                            toString()!;
        
        
;
    
values.add(time);
    
values.add(time);
    
values.add(this.price.toString());
    
values.add(this.comment);
    
values.add(this.customs);
    
values.add(this.getDownloads());
    
values.add(this.groups);
    
values.add(this.options);
    
values.add(this.permissions);
    
values.add(this.specials);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


                //@Throws(Error::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getId();

                         as Object;
    
}


}
                
            

