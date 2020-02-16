/* eslint-disable */
// tslint:disable
/**
 * Movie Reviews
 * With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics\' Picks.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Critic
 */
export interface Critic {
    /**
     * 
     * @type {string}
     * @memberof Critic
     */
    bio?: string;
    /**
     * 
     * @type {string}
     * @memberof Critic
     */
    display_name?: string;
    /**
     * 
     * @type {CriticMultimedia}
     * @memberof Critic
     */
    multimedia?: CriticMultimedia;
    /**
     * 
     * @type {string}
     * @memberof Critic
     */
    seo_name?: string;
    /**
     * 
     * @type {string}
     * @memberof Critic
     */
    sort_name?: string;
    /**
     * 
     * @type {string}
     * @memberof Critic
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface CriticMultimedia
 */
export interface CriticMultimedia {
    /**
     * 
     * @type {CriticMultimediaResource}
     * @memberof CriticMultimedia
     */
    resource?: CriticMultimediaResource;
}
/**
 * 
 * @export
 * @interface CriticMultimediaResource
 */
export interface CriticMultimediaResource {
    /**
     * 
     * @type {string}
     * @memberof CriticMultimediaResource
     */
    credit?: string;
    /**
     * 
     * @type {number}
     * @memberof CriticMultimediaResource
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof CriticMultimediaResource
     */
    src?: string;
    /**
     * 
     * @type {string}
     * @memberof CriticMultimediaResource
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof CriticMultimediaResource
     */
    width?: number;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    copyright?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    num_results?: number;
    /**
     * 
     * @type {Array<Critic>}
     * @memberof InlineResponse200
     */
    results?: Array<Critic>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    copyright?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    num_results?: number;
    /**
     * 
     * @type {Array<Movie>}
     * @memberof InlineResponse2001
     */
    results?: Array<Movie>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface Movie
 */
export interface Movie {
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    byline?: string;
    /**
     * 
     * @type {number}
     * @memberof Movie
     */
    critics_pick?: number;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    date_updated?: string;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    display_title?: string;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    headline?: string;
    /**
     * 
     * @type {MovieLink}
     * @memberof Movie
     */
    link?: MovieLink;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    mpaa_rating?: string;
    /**
     * 
     * @type {MovieMultimedia}
     * @memberof Movie
     */
    multimedia?: MovieMultimedia;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    opening_date?: string;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    publication_date?: string;
    /**
     * 
     * @type {string}
     * @memberof Movie
     */
    summary_short?: string;
}
/**
 * 
 * @export
 * @interface MovieLink
 */
export interface MovieLink {
    /**
     * 
     * @type {string}
     * @memberof MovieLink
     */
    suggested_link_text?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieLink
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieLink
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface MovieMultimedia
 */
export interface MovieMultimedia {
    /**
     * 
     * @type {MovieMultimediaResource}
     * @memberof MovieMultimedia
     */
    resource?: MovieMultimediaResource;
}
/**
 * 
 * @export
 * @interface MovieMultimediaResource
 */
export interface MovieMultimediaResource {
    /**
     * 
     * @type {number}
     * @memberof MovieMultimediaResource
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieMultimediaResource
     */
    src?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieMultimediaResource
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieMultimediaResource
     */
    width?: number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} resource_type all | full-time | part-time | [reviewer-name]  Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer\&#39;s name to get details about a particular reviewer. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        criticsResourceTypeJsonGet(resource_type: string, options: any = {}): RequestArgs {
            // verify required parameter 'resource_type' is not null or undefined
            if (resource_type === null || resource_type === undefined) {
                throw new RequiredError('resource_type','Required parameter resource_type was null or undefined when calling criticsResourceTypeJsonGet.');
            }
            const localVarPath = `/critics/{resource-type}.json`
                .replace(`{${"resource-type"}}`, encodeURIComponent(String(resource_type)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("api-key")
                    : configuration.apiKey;
                localVarQueryParameter["api-key"] = localVarApiKeyValue;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {'all' | 'picks'} resource_type Specify all to retrieve all reviews, including NYT Critics\&#39; Picks.  Specify picks to get NYT Critics\&#39; Picks currently in theaters.  
         * @param {number} [offset] Positive integer, multiple of 20
         * @param {'by-title' | 'by-publication-date' | 'by-opening-date'} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reviewsResourceTypeJsonGet(resource_type: 'all' | 'picks', offset?: number, order?: 'by-title' | 'by-publication-date' | 'by-opening-date', options: any = {}): RequestArgs {
            // verify required parameter 'resource_type' is not null or undefined
            if (resource_type === null || resource_type === undefined) {
                throw new RequiredError('resource_type','Required parameter resource_type was null or undefined when calling reviewsResourceTypeJsonGet.');
            }
            const localVarPath = `/reviews/{resource-type}.json`
                .replace(`{${"resource-type"}}`, encodeURIComponent(String(resource_type)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("api-key")
                    : configuration.apiKey;
                localVarQueryParameter["api-key"] = localVarApiKeyValue;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [query] Search keywords; matches movie title and indexed terms  To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query&#x3D;\&#39;28+days+later\&#39;). Otherwise, responses will include partial matches (\&quot;head words\&quot;) as well as exact matches (e.g., president will match president, presidents and presidential).      If you specify multiple terms without quotation marks, they will be combined in an OR search.      If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics\&#39; Picks request. 
         * @param {'Y' | 'N'} [critics_pick] Set this parameter to Y to limit the results to NYT Critics\&#39; Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick&#x3D;N. (To get all reviews regardless of critics-pick status, simply omit this parameter.) 
         * @param {string} [reviewer] Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis. 
         * @param {string} [publication_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The publication-date is the date the review was first published in The Times. 
         * @param {string} [opening_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The opening-date is the date the movie\&#39;s opening date in the New York region. 
         * @param {number} [offset] Positive integer, multiple of 20
         * @param {string} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reviewsSearchJsonGet(query?: string, critics_pick?: 'Y' | 'N', reviewer?: string, publication_date?: string, opening_date?: string, offset?: number, order?: string, options: any = {}): RequestArgs {
            const localVarPath = `/reviews/search.json`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("api-key")
                    : configuration.apiKey;
                localVarQueryParameter["api-key"] = localVarApiKeyValue;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (critics_pick !== undefined) {
                localVarQueryParameter['critics-pick'] = critics_pick;
            }

            if (reviewer !== undefined) {
                localVarQueryParameter['reviewer'] = reviewer;
            }

            if (publication_date !== undefined) {
                localVarQueryParameter['publication-date'] = publication_date;
            }

            if (opening_date !== undefined) {
                localVarQueryParameter['opening-date'] = opening_date;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} resource_type all | full-time | part-time | [reviewer-name]  Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer\&#39;s name to get details about a particular reviewer. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        criticsResourceTypeJsonGet(resource_type: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).criticsResourceTypeJsonGet(resource_type, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {'all' | 'picks'} resource_type Specify all to retrieve all reviews, including NYT Critics\&#39; Picks.  Specify picks to get NYT Critics\&#39; Picks currently in theaters.  
         * @param {number} [offset] Positive integer, multiple of 20
         * @param {'by-title' | 'by-publication-date' | 'by-opening-date'} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reviewsResourceTypeJsonGet(resource_type: 'all' | 'picks', offset?: number, order?: 'by-title' | 'by-publication-date' | 'by-opening-date', options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).reviewsResourceTypeJsonGet(resource_type, offset, order, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [query] Search keywords; matches movie title and indexed terms  To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query&#x3D;\&#39;28+days+later\&#39;). Otherwise, responses will include partial matches (\&quot;head words\&quot;) as well as exact matches (e.g., president will match president, presidents and presidential).      If you specify multiple terms without quotation marks, they will be combined in an OR search.      If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics\&#39; Picks request. 
         * @param {'Y' | 'N'} [critics_pick] Set this parameter to Y to limit the results to NYT Critics\&#39; Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick&#x3D;N. (To get all reviews regardless of critics-pick status, simply omit this parameter.) 
         * @param {string} [reviewer] Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis. 
         * @param {string} [publication_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The publication-date is the date the review was first published in The Times. 
         * @param {string} [opening_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The opening-date is the date the movie\&#39;s opening date in the New York region. 
         * @param {number} [offset] Positive integer, multiple of 20
         * @param {string} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reviewsSearchJsonGet(query?: string, critics_pick?: 'Y' | 'N', reviewer?: string, publication_date?: string, opening_date?: string, offset?: number, order?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).reviewsSearchJsonGet(query, critics_pick, reviewer, publication_date, opening_date, offset, order, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} resource_type all | full-time | part-time | [reviewer-name]  Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer\&#39;s name to get details about a particular reviewer. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        criticsResourceTypeJsonGet(resource_type: string, options?: any): AxiosPromise<InlineResponse200> {
            return DefaultApiFp(configuration).criticsResourceTypeJsonGet(resource_type, options)(axios, basePath);
        },
        /**
         * 
         * @param {'all' | 'picks'} resource_type Specify all to retrieve all reviews, including NYT Critics\&#39; Picks.  Specify picks to get NYT Critics\&#39; Picks currently in theaters.  
         * @param {number} [offset] Positive integer, multiple of 20
         * @param {'by-title' | 'by-publication-date' | 'by-opening-date'} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reviewsResourceTypeJsonGet(resource_type: 'all' | 'picks', offset?: number, order?: 'by-title' | 'by-publication-date' | 'by-opening-date', options?: any): AxiosPromise<InlineResponse2001> {
            return DefaultApiFp(configuration).reviewsResourceTypeJsonGet(resource_type, offset, order, options)(axios, basePath);
        },
        /**
         * 
         * @param {string} [query] Search keywords; matches movie title and indexed terms  To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query&#x3D;\&#39;28+days+later\&#39;). Otherwise, responses will include partial matches (\&quot;head words\&quot;) as well as exact matches (e.g., president will match president, presidents and presidential).      If you specify multiple terms without quotation marks, they will be combined in an OR search.      If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics\&#39; Picks request. 
         * @param {'Y' | 'N'} [critics_pick] Set this parameter to Y to limit the results to NYT Critics\&#39; Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick&#x3D;N. (To get all reviews regardless of critics-pick status, simply omit this parameter.) 
         * @param {string} [reviewer] Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis. 
         * @param {string} [publication_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The publication-date is the date the review was first published in The Times. 
         * @param {string} [opening_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The opening-date is the date the movie\&#39;s opening date in the New York region. 
         * @param {number} [offset] Positive integer, multiple of 20
         * @param {string} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reviewsSearchJsonGet(query?: string, critics_pick?: 'Y' | 'N', reviewer?: string, publication_date?: string, opening_date?: string, offset?: number, order?: string, options?: any): AxiosPromise<InlineResponse2001> {
            return DefaultApiFp(configuration).reviewsSearchJsonGet(query, critics_pick, reviewer, publication_date, opening_date, offset, order, options)(axios, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {string} resource_type all | full-time | part-time | [reviewer-name]  Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer\&#39;s name to get details about a particular reviewer. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public criticsResourceTypeJsonGet(resource_type: string, options?: any) {
        return DefaultApiFp(this.configuration).criticsResourceTypeJsonGet(resource_type, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {'all' | 'picks'} resource_type Specify all to retrieve all reviews, including NYT Critics\&#39; Picks.  Specify picks to get NYT Critics\&#39; Picks currently in theaters.  
     * @param {number} [offset] Positive integer, multiple of 20
     * @param {'by-title' | 'by-publication-date' | 'by-opening-date'} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public reviewsResourceTypeJsonGet(resource_type: 'all' | 'picks', offset?: number, order?: 'by-title' | 'by-publication-date' | 'by-opening-date', options?: any) {
        return DefaultApiFp(this.configuration).reviewsResourceTypeJsonGet(resource_type, offset, order, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {string} [query] Search keywords; matches movie title and indexed terms  To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query&#x3D;\&#39;28+days+later\&#39;). Otherwise, responses will include partial matches (\&quot;head words\&quot;) as well as exact matches (e.g., president will match president, presidents and presidential).      If you specify multiple terms without quotation marks, they will be combined in an OR search.      If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics\&#39; Picks request. 
     * @param {'Y' | 'N'} [critics_pick] Set this parameter to Y to limit the results to NYT Critics\&#39; Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick&#x3D;N. (To get all reviews regardless of critics-pick status, simply omit this parameter.) 
     * @param {string} [reviewer] Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis. 
     * @param {string} [publication_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The publication-date is the date the review was first published in The Times. 
     * @param {string} [opening_date] Single date: YYYY-MM-DD  Start and end date: YYYY-MM-DD;YYYY-MM-DD  The opening-date is the date the movie\&#39;s opening date in the New York region. 
     * @param {number} [offset] Positive integer, multiple of 20
     * @param {string} [order] Sets the sort order of the results.  Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.  If you do not specify a sort order, the results will be ordered by publication-date. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public reviewsSearchJsonGet(query?: string, critics_pick?: 'Y' | 'N', reviewer?: string, publication_date?: string, opening_date?: string, offset?: number, order?: string, options?: any) {
        return DefaultApiFp(this.configuration).reviewsSearchJsonGet(query, critics_pick, reviewer, publication_date, opening_date, offset, order, options)(this.axios, this.basePath);
    }

}


