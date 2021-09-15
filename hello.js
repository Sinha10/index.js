function send()
{
    console.log("Hi");
    var jsonvalues = userAction();
    console.log("jsonvalues", jsonvalues);
}

const userAction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json();
    return myJson;
}









