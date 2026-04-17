
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
        



import { AdvertisementImageInterface } from "../../../../org/allbinary/business/advertisement/image/AdvertisementImageInterface.js";

    
import { AdvertisementProductInterface } from "../../../../org/allbinary/business/advertisement/product/AdvertisementProductInterface.js";

    
import { AdvertisementThumbnailInterface } from "../../../../org/allbinary/business/advertisement/thumbnail/AdvertisementThumbnailInterface.js";

    
import { Money } from "../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { DisplayInBrowserContraintsInterface } from "../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Advertisement
            extends Object
         implements AdvertisementInterface {
        

    private artist: string

    private artistLink: string

    private title: string

    private dateAdded: string

    private directory: string

    private framedLink: string

    private rank: number= 0

    private listPrice: Money

    private ourPrice: Money

    private image: AdvertisementImageInterface

    private product: AdvertisementProductInterface

    private thumbnail: AdvertisementThumbnailInterface

    private readonly displayInBrowserContraintsInterface: DisplayInBrowserContraintsInterface
public constructor (){

            super();
            this.displayInBrowserContraintsInterface= 
                                        null
                                    ;
    
}


    public getArtist(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return artist;
    
}


    public setArtist(artist: string){
var artist = artist
this.artist= artist;
    
}


    public getArtistLink(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return artistLink;
    
}


    public setArtistLink(artistLink: string){
var artistLink = artistLink
this.artistLink= artistLink;
    
}


    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return title;
    
}


    public setTitle(title: string){
var title = title
this.title= title;
    
}


    public getDateAdded(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dateAdded;
    
}


    public setDateAdded(dateAdded: string){
var dateAdded = dateAdded
this.dateAdded= dateAdded;
    
}


    public getDirectory(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directory;
    
}


    public setDirectory(directory: string){
var directory = directory
this.directory= directory;
    
}


    public getFramedLink(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return framedLink;
    
}


    public setFramedLink(framedLink: string){
var framedLink = framedLink
this.framedLink= framedLink;
    
}


    public getListPrice(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return listPrice;
    
}


    public setListPrice(listPrice: Money){
var listPrice = listPrice
this.listPrice= listPrice;
    
}


    public getOurPrice(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ourPrice;
    
}


    public setOurPrice(ourPrice: Money){
var ourPrice = ourPrice
this.ourPrice= ourPrice;
    
}


    public getRank(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rank;
    
}


    public setRank(rank: number){
var rank = rank
this.rank= rank;
    
}


    public getImage(): AdvertisementImageInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public setImage(image: AdvertisementImageInterface){
var image = image
this.image= image;
    
}


    public getProduct(): AdvertisementProductInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return product;
    
}


    public setProduct(product: AdvertisementProductInterface){
var product = product
this.product= product;
    
}


    public getThumbnail(): AdvertisementThumbnailInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return thumbnail;
    
}


    public setThumbnail(thumbnail: AdvertisementThumbnailInterface){
var thumbnail = thumbnail
this.thumbnail= thumbnail;
    
}


    public getDisplayInBrowserContraintsInterface(): DisplayInBrowserContraintsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return displayInBrowserContraintsInterface;
    
}


}
                
            

