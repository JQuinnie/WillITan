# TODO List

## Plan of Action Outline

- [ ] Research variable relationships
  - Skin type
    - Fitzpatrick Skin Type Chart: https://en.wikipedia.org/wiki/Fitzpatrick_scale
    - Add'l reference: https://www2.palomar.edu/anthro/adapt/adapt_4.htm
    - OpenUV knowledge base: https://www.openuv.io/kb
  - UV radiation exposure
    - Geography
    - Altitude
    - Time of year
    - Time of day: _new Date()_
    - Weather condition
    - Surface reflection
  - UV index
  - Duration
  - Use of sun block
    - usage vs uv index: http://www.theozonehole.com/uvindex.htm
- [ ] Determine input requirements
  - USER: selects skin type
  - USER: selects location
  - USER: selects time of day
- [ ] Create logic between variables for calculation
  > max sun tan time = (self protected time or skin type * 8)/(UVI * SPF)
- [ ] Collection of APIs for data
  - OpenWeather API: https://openweathermap.org/api/uvi
  - OpenUV API: https://www.openuv.io/
  - Google Elevation API: https://developers.google.com/maps/documentation/elevation/start
  - HTML5 Geolocation: https://www.w3schools.com/htmL/html5_geolocation.asp
  - GMaps.js: https://hpneo.github.io/gmaps/
- [ ] Code logic in backend, review program flow
- [ ] Modular functions
- [ ] Async.js
- [ ] Add logging
- [ ] Add error handling
- [ ] Add unit, integration, coverage tests
- [ ] Include API callouts
- [ ] Include a db (postgres? and redis)
- [ ] Update Readme, how to run (backend client?)
- [ ] Create wireframe skeleton
- [ ] Front-end Client UI
  - React with Hooks
  - check web responsiveness
  - ~~Material UI~~ Tailwaind CSS
  - All logic flow on server-side!
- [ ] Deploy online
- [ ] Incorporate Analytics
