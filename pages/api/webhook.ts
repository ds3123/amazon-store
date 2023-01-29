/* eslint-disable import/no-anonymous-default-export */

// import { buffer } from "micro" ;
import * as admin from "firebase-admin" ;


 
// Secure a connection to < FIREBASE > from the backend
const serviceAccount = require( "../../permission.json" ) ;
const app            = !admin.apps.length ? 
                            admin.initializeApp({ credential : admin.credential.cert( serviceAccount ) }) : 
                            admin.app() ;



// Establish connection to < STRIPE >
const stripe = require( "stripe" )( process.env.STRIPE_SECRET_KEY ) ; 



const endpointSecret = process.env.STRIPE_SIGNING_SECRET ;


// 將 Stripe 傳來的訂單資料，填入 Firebase 資料庫
const fulfillOrder = async( session : any ) => {


    return app.firestore()
              .collection( "users" ).doc( session.metadata.email )
              .collection( "orders" ).doc( session.id  )
              .set({
                       amount          : session.amount_total / 100 ,    
                       amount_shipping : session.total_details.amount_shipping / 100 ,
                       images          : JSON.parse( session.metadata.images ) ,
                       timestamp       : admin.firestore.FieldValue.serverTimestamp(),
                   })
              .then( () => {
              
                  console.log( `訂單 ( id : ${ session.id } ) ，已成功輸入資料庫` ) ;
                 
              } )

}
 

// Webhook : Stripe 與 資料庫 ( firebase )
export default async( req , res ) => {


    // if( req.method === "POST" ){

    //     const requestBuffer = await buffer( req ) ; 
    //     const payload       = requestBuffer.toString() ;
    //     const sig           = req.headers[ "stripe-signature" ] ;

        
    //     // Firebase 確認 _ 是否為來自 Stripe 推送的事件 ( Verify that the EVENT posted came from stripe )
    
    //     let event ;

    //     try{

    //         event = stripe.webhooks.constructEvent( payload , sig , endpointSecret ) ;

    //     }catch( err ){

    //         console.log( "ERROR : " , err.message ) ;
    //         return res.status( 400 ).send( `Webhook Error : ${ err.message }` ) ;

    //     }

    //     // 如果所觸發的事件是合法的 ( 來自於 Stripe )，Firebase 處理事件 ： checkout.session.completed
    //     if( event.type === "checkout.session.completed" ){

    //          const session = event.data.object ;

    //          // 將資料輸入 Firebase 資料庫
    //          return fulfillOrder( session )
    //                    .then( () => res.status( 200 ) )
    //                    .catch( err => res.status( 400 ).send( `Webhook Error : ${ err.message }` ) ) ;

    //     }


    // }


} ;


export const config = {

    api : {

              bodyParser       : false ,
              externalResolver : true 

          }

}

