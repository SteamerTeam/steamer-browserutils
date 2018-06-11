/**
 * @description JS url processing
 * @author heyli
 * @date 2016.07.30
 */
import global from './gb';

/**
 * get hash param
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getHash(key) {
    let m = '';
    let location = global.location;
    if (location) {
        m = location.hash.match(new RegExp('(#|&)' + key + '=([^&#]*)(#|&|$)'));
    }
    return !m ? '' : decodeURIComponent(m[2]);
}

/**
 * get query param
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getQuery(key) {
    let m = '';
    let location = global.location;
    if (location) {
        m = location.search.match(new RegExp('(\\?|&)' + key + '=([^&]*)(#|&|$)'));
    }
    return !m ? '' : decodeURIComponent(m[2]);
}

/**
 * get query or hash param
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getUrlParam(key) {
    let m = '';
    let location = global.location;

    if (location) {
        m = location.search.match(new RegExp('(\\?|#|&)' + key + '=([^&]*)(#|&|$)'));
    }

    if (!m && location) {
        m = location.hash.match(new RegExp('(#|&)' + key + '=([^&#]*)(#|&|$)'));
    }

    return !m ? '' : decodeURIComponent(m[2]);
}
