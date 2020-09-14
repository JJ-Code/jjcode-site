
//helper function needs to be moved to client side. there is no window object in backend
//leaving it for now
//helper cookie function to create new cookie
const SetCookie = (name, value) => {
  let document = window.document;
  var now = new Date();
  now.setMonth(now.getMonth() + 1);
  console.log('i ran')
  document.cookie = `${name}=${value}`;
  document.cookie = "expires=" + now.toUTCString() + ";"

}



const ReadCookie = () => {
  var allcookies = window.document.cookie;


  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');

  document.write(cookiearray)
  console.log(cookiearray);
  // Now take key value pair out of this array
  // for (var i = 0; i < cookiearray.length; i++) {
  //   name = cookiearray[i].split('=')[0];
  //   value = cookiearray[i].split('=')[1];
  //   document.write("Key is : " + name + " and Value is : " + value);
  // }

}

module.exports = SetCookie, ReadCookie;