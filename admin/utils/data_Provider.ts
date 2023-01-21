

import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl     = 'https://jsonplaceholder.typicode.com/';
const httpClient = fetchUtils.fetchJson;



// @ 自訂 API 請求
export default {

                    // 讀取 _ 列表
                    getList: (resource , params) => {

                        const { page , perPage } = params.pagination;
                        const { field , order }  = params.sort;

                        const query = {
                                        sort: JSON.stringify([field, order]),
                                        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                                        filter: JSON.stringify(params.filter),
                                       };

                        const url = `${apiUrl}/${resource}?${stringify(query)}` ;

                        return httpClient(url).then(({ headers, json }) => ({
                                                                                data: json,
                                                                                total: parseInt(headers.get('content-range').split('/').pop(), 10),
                                                                            }));

                    },


                    // 讀取 _ 單一資料
                    getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({ data: json })),


                    // 讀取 _ 多筆資料
                    getMany: (resource, params) => {

                                                     const query = { filter: JSON.stringify({ id: params.ids }) };
                                                     const url   = `${apiUrl}/${resource}?${stringify(query)}`;

                                                     return httpClient(url).then(({ json }) => ({ data: json }));

                                                   } ,

                    // 讀取 _ 多筆參考
                    getManyReference: (resource, params) => {

                                                                const { page, perPage } = params.pagination;
                                                                const { field, order } = params.sort ;

                                                                const query = {
                                                                                sort   : JSON.stringify([field, order]),
                                                                                range  : JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                                                                                filter : JSON.stringify({
                                                                                                        ...params.filter,
                                                                                                        [params.target]: params.id,
                                                                                                        }),
                                                                };
                                                                
                                                                const url = `${apiUrl}/${resource}?${stringify(query)}`;

                                                                return httpClient(url).then(({ headers, json }) => ({
                                                                    data: json,
                                                                    total: parseInt(headers.get('content-range').split('/').pop(), 10),
                                                                }));

                                                            } ,

                    // 更新                                        
                    update: (resource, params) => httpClient( `${apiUrl}/${resource}/${params.id}`, { method: 'PUT', body: JSON.stringify(params.data), })
                                                    .then(({ json }) => ({ data: json })),


                    // 更新 _ 多筆資料   
                    updateMany: (resource, params) => {

                        const query = { filter: JSON.stringify({ id: params.ids}) };

                        return httpClient( `${apiUrl}/${resource}?${stringify(query)}`, { method: 'PUT', body: JSON.stringify(params.data) })
                                   .then(({ json }) => ({ data: json }));
                   
                    },


                    // 新增 _ 資料
                    create : (resource, params) => httpClient(`${apiUrl}/${resource}`, { method: 'POST', body: JSON.stringify(params.data) })
                                                     .then(({ json }) => ({ data: { ...params.data, id: json.id } })),

                    
                    // 刪除 _ 資料                                 
                    delete : (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, { method: 'DELETE', })
                                                     .then(({ json }) => ({ data: json })),


                    // 刪除 _ 多筆資料
                    deleteMany: (resource, params) => {

                        const query = { filter: JSON.stringify({ id: params.ids}) };

                        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, { method: 'DELETE' })
                                   .then(({ json }) => ({ data: json }));

                    }

              };