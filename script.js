// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

function performApiCalls() {
  const promisesAll = apiUrls.map((url) => fetchData(url));
  const promisesAny = [...promisesAll];

  const startAll = performance.now();
  Promise.all(promisesAll)
    .then(() => {
      const endAll = performance.now();
      const timeAll = endAll - startAll;
      document.getElementById("output-all").textContent = timeAll.toFixed(2);
    })
    .catch((error) => {
      console.log(error);
    });

  const startAny = performance.now();
  Promise.any(promisesAny)
    .then(() => {
      const endAny = performance.now();
      const timeAny = endAny - startAny;
      document.getElementById("output-any").textContent = timeAny.toFixed(2);
    })
    .catch((error) => {
      console.log(error);
    });
}

performApiCalls();

// You can write your code here
