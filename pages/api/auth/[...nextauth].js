
import NextAuth from "next-auth" ;

// 匯入 _ 各種授權供應者
import GithubProvider from "next-auth/providers/github" ;
import GoogleProvider from "next-auth/providers/google" ;
import LineProvider from "next-auth/providers/line";
import FacebookProvider from "next-auth/providers/facebook" ;


//
// import { FirebaseAdapter } from "@next-auth/firebase-adapter" ;
// import { db } from "../../../firebase" ;



export const authOptions = {


  // JWT Token 可於終端機輸入 : openssl rand -base64 32 來取得隨機的 32 位元 token
  secret : process.env.NEXTAUTH_SECRET ,  

  // 設定 _ 一個或多個 : 授權供應者 ( Auth Providers ) ，例如 : Google , Facebok , Line ...
  providers : [

                  // * Google
                  GoogleProvider({

                      clientId     : process.env.GOOGLE_ID ,
                      clientSecret : process.env.GOOGLE_SECRET ,
                
                  }),


                  // * Line
                  LineProvider({

                      clientId     : process.env.LINE_CLIENT_ID ,
                      clientSecret : process.env.LINE_CLIENT_SECRET

                  }) ,

                  // Facebook
                  FacebookProvider({

                      clientId     : process.env.FACEBOOK_ID ,
                      clientSecret : process.env.FACEBOOK_SECRET ,
                
                  }),

                  // * GitHub
                  // GithubProvider({

                  //   clientId     : process.env.GITHUB_ID ,
                  //   clientSecret : process.env.GITHUB_SECRET ,

                  // }) ,

               ] ,

  // 設定 _ 授權接合器 ( Auth Adapter )
  // adapter   : FirebaseAdapter( db )   // Google Firebase
                


}

export default NextAuth( authOptions )