import http from 'k6/http';

export default function () {
  var url = 'http://test.k6.io/login';
  
  var payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer token'
    },
  };

  http.post(url, payload, params);
}