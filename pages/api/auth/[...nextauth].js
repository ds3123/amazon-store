
import NextAuth from "next-auth" ;

// 匯入 _ 各種授權供應商
import GithubProvider from "next-auth/providers/github" ;
import GoogleProvider from "next-auth/providers/google" ;
import LineProvider from "next-auth/providers/line";
import FacebookProvider from "next-auth/providers/facebook" ;


export const authOptions = {

  // 設定 _ 一個或多個 : 授權供應商 ( Auth Providers ) ，例如 : Google , Facebok , Line ...
  providers: [

    // * GitHub
    // GithubProvider({

    //   clientId     : process.env.GITHUB_ID,
    //   clientSecret : process.env.GITHUB_SECRET,

    // }),

    // * Google

    GoogleProvider({

        clientId     : process.env.GOOGLE_ID ,
        clientSecret : process.env.GOOGLE_SECRET ,
  
    }),

    LineProvider({

        clientId     : process.env.LINE_CLIENT_ID ,
        clientSecret : process.env.LINE_CLIENT_SECRET

    }) ,

    FacebookProvider({

        clientId     : process.env.FACEBOOK_ID ,
        clientSecret : process.env.FACEBOOK_SECRET ,
  
    }),


    // * Facebook


    // * Line



  ] ,

}

export default NextAuth( authOptions )