import axios from 'axios';

/**
 * Simple Usage
 * Api.get('localhost:3030/posts').then(response => ...)
 */

export default class Api {
  static get = (
    route: string,
    options?: object,
    headers?: object,
  ): Promise<any> => Api.xhr(route, 'GET', options, headers);

  static post = (
    route: string,
    data: object | Array<object>,
    options,
    headers,
  ): Promise<any> => Api.xhr(route, 'POST', options, headers, data);

  static put = (
    route: string,
    options?: object,
    headers?: object,
  ): Promise<any> => Api.xhr(route, 'PUT', options, headers);

  static delete = (
    route: string,
    options?: object,
    headers?: object,
  ): Promise<any> => Api.xhr(route, 'DELETE', options, headers);

  static xhr = (
    route: string,
    method: string,
    options: object = {},
    headersIncome: object = {},
    data?: object,
  ): Promise<any> => {
    return axios({
      method,
      url: route,
      ...options,
      headers: { ...headersIncome },
      data,
    })
      .then(response => {
        /**TODO: Add loading action */
        return response;
      })
      .catch(error => {
        /**TODO: Add notification action */
        console.log(error);
      });
  };
}
