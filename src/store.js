import { createStore } from 'redux';
import reducer from './reducer'

let results = 
{
  "query": {
   "count": 1,
   "created": "2018-10-02T22:25:26Z",
   "lang": "en-US",
   "results": {
    "channel": {
     "units": {
      "distance": "mi",
      "pressure": "in",
      "speed": "mph",
      "temperature": "F"
     },
     "title": "Yahoo! Weather - Nome, AK, US",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
     "description": "Yahoo! Weather for Nome, AK, US",
     "language": "en-us",
     "lastBuildDate": "Tue, 02 Oct 2018 02:25 PM AKDT",
     "ttl": "60",
     "location": {
      "city": "Nome",
      "country": "United States",
      "region": " AK"
     },
     "wind": {
      "chill": "46",
      "direction": "90",
      "speed": "32"
     },
     "atmosphere": {
      "humidity": "75",
      "pressure": "1000.0",
      "rising": "0",
      "visibility": "16.1"
     },
     "astronomy": {
      "sunrise": "9:14 am",
      "sunset": "8:26 pm"
     },
     "image": {
      "title": "Yahoo! Weather",
      "width": "142",
      "height": "18",
      "link": "http://weather.yahoo.com",
      "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
     },
     "item": {
      "title": "Conditions for Nome, AK, US at 01:00 PM AKDT",
      "lat": "64.499474",
      "long": "-165.405792",
      "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
      "pubDate": "Tue, 02 Oct 2018 01:00 PM AKDT",
      "condition": {
       "code": "23",
       "date": "Tue, 02 Oct 2018 01:00 PM AKDT",
       "temp": "52",
       "text": "Breezy"
      },
      "forecast": [
       {
        "code": "23",
        "date": "02 Oct 2018",
        "day": "Tue",
        "high": "52",
        "low": "50",
        "text": "Breezy"
       },
       {
        "code": "23",
        "date": "03 Oct 2018",
        "day": "Wed",
        "high": "51",
        "low": "50",
        "text": "Breezy"
       },
       {
        "code": "23",
        "date": "04 Oct 2018",
        "day": "Thu",
        "high": "50",
        "low": "48",
        "text": "Breezy"
       },
       {
        "code": "23",
        "date": "05 Oct 2018",
        "day": "Fri",
        "high": "50",
        "low": "46",
        "text": "Breezy"
       },
       {
        "code": "12",
        "date": "06 Oct 2018",
        "day": "Sat",
        "high": "49",
        "low": "47",
        "text": "Rain"
       },
       {
        "code": "28",
        "date": "07 Oct 2018",
        "day": "Sun",
        "high": "47",
        "low": "45",
        "text": "Mostly Cloudy"
       },
       {
        "code": "11",
        "date": "08 Oct 2018",
        "day": "Mon",
        "high": "51",
        "low": "47",
        "text": "Showers"
       },
       {
        "code": "11",
        "date": "09 Oct 2018",
        "day": "Tue",
        "high": "51",
        "low": "47",
        "text": "Showers"
       },
       {
        "code": "26",
        "date": "10 Oct 2018",
        "day": "Wed",
        "high": "47",
        "low": "44",
        "text": "Cloudy"
       },
       {
        "code": "39",
        "date": "11 Oct 2018",
        "day": "Thu",
        "high": "51",
        "low": "45",
        "text": "Scattered Showers"
       }
      ],
      "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/23.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Breezy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Tue - Breezy. High: 52Low: 50\n<BR /> Wed - Breezy. High: 51Low: 50\n<BR /> Thu - Breezy. High: 50Low: 48\n<BR /> Fri - Breezy. High: 50Low: 46\n<BR /> Sat - Rain. High: 49Low: 47\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
      "guid": {
       "isPermaLink": "false"
      }
     }
    }
   }
  }
 }

 let initialState = {
  locationFormInput: '',
  locationList: [],
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;