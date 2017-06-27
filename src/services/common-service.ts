/**
 * Created by Alan on 6/27/2017.
 */
export class CommonService{
  sortArray(array, propertyName, order = "asc"): any{
    function ArraySort(property, order) {
      var sortOrder = 1;
      if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        if(order == "desc"){
          result = result * -1;
        }
        return result * sortOrder;
      }
    }
    return array.sort(ArraySort(propertyName, order));
  }
}
