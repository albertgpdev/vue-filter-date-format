
import moment from 'moment';
/**
 *  Converts a date string into formated date string
 * 
 * 
 * @param {String} value
 *  @param {String} format
 */
function dateFormat (value, format) {
    return moment(value).format(format);
}

export default dateFormat;
