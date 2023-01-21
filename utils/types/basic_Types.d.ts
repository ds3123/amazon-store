
export interface I_Img{

    img_Title     : string ;  // 圖片標題
    img_Subtitle? : string ;  // 圖片副標題
    img_Alt?      : string ;
    img_Url       : string ; 

}

// -----------------------

// 可左右滾動圖片卡
export interface I_Scroll_Card extends I_Img {

    // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img   : string ;
    title : string ;

}

// 小圖卡
export interface I_Small_Card extends I_Img {

    // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img      : string ;
    title    : string ;
    distance : string ;
    location : string ;

}

// 大圖卡( 左側有文字、按鈕 )
export interface I_Large_Card extends I_Img {

    button_Text : string ;  // 按鈕上的文字

}

//  商品圖卡 ( 上圖、下方文字資訊 )
export interface I_Bottom_Info_Card extends I_Img {

     // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img   : string ;
    title : string ;

}






// Banner ( 左邊文字，右邊圖片 )
export interface I_Banner_Right_Image extends I_Img {

    img_Subtitle : string ;
    
 }


// Banner ( 中間有文字、按鈕 )
export interface I_Banner_Center_Info extends I_Img {

    button_Text : string ;  // 按鈕上的文字
    
 }