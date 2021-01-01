# covid19-api-plots

covid19-api-plots is a React powered graph represention of COVID19 confirmed cases in India

  - Choose the dates you want to see the data for
  - Categorize data in daily, montly and quaterly basis
  - Be updated with the happenings and stay safe!

### Tech

covid19-api-plots uses a number of open source projects to work properly:

* [ReactJs](https://reactjs.org/) - HTML enhanced for stateful web apps!
* [CORONAVIRUS COVID19 API postman collection](https://documenter.getpostman.com/view/10808728/SzS8rjbc#intro) - awesome web-based text editor

covid19-api-plots uses npm packages like [moment](https://www.npmjs.com/package/moment) for date handling, [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) for plotting grpahs, and [axios](https://www.npmjs.com/package/axios) for making HTTP requests, and of course covid19-api-plots itself is open source with a [public repository] on GitHub.


### Installation

covid19-api-plots is build on [React - 17.0.1](https://reactjs.org/) 

Install the dependencies and devDependencies and start the frontend server.

```sh
$ cd covid19-api-plots
$ npm install
$ npm start
```



### Todos

 - For now, we support only India, using [this API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#7934d316-f751-4914-9909-39f1901caeb8), we can get all the countries, and we can populate a dropdown and use the [same API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#b07f97ba-24f4-4ebe-ad71-97fa35f3b683) we are using to allow user to view stats of various countries
 - For the [same API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#b07f97ba-24f4-4ebe-ad71-97fa35f3b683) we are using now, we plot 2 more graphs for deaths and recovered cases for the select timeslot and categorization 

License
----

MIT
