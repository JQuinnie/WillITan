# Will I Tan? :sunny:
Web App that will take in user input (including geo-location, weather, skin type, etc.) and determine the amount of time it will take the user to tan on a given day. 

### Main User Story
As a user, I want to know the amount of time needed to stay in the sun, so that I can get a nice tan

### Plan of Action Outline
- Research variable relationships
  - Skin type
    - Fitzpatrick Skin Type Chart: https://en.wikipedia.org/wiki/Fitzpatrick_scale
    - Add'l reference: https://www2.palomar.edu/anthro/adapt/adapt_4.htm
  - UV radiation exposure
    - Geography
    - Altitude
    - Time of year
    - Time of day: _new Date()_
    - Weather condition
    - Surface reflection
  - UV index
    - OpenWeather API: https://openweathermap.org/api/uvi
  - Duration
  - Use of sun block
    - usage vs uv index: http://www.theozonehole.com/uvindex.htm
- Determine input requirements
  - USER: selects skin type
  - USER: selects location
  - USER: selects time of day
- Create logic between variables for calculation
  > max sun tan time = (self protected time or skin type * 8)/(UVI * SPF)
- Collection of APIs for data
- Create wireframe skeleton
- Code logic in backend
- Test test test
- Fancy up frontend
- Make responsive
- Deploy
