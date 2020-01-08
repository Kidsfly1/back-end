KIDS FLY!!

---

Back end for lambda schoosl build week project Kids Fly!!

Where we create accounts for familys and give a painless flying experience for your family. We do this by allowing users to set up trips with agents who can take care of your childs needs around the airport! Snacks, drinks, toys, any special purchase, even checking to make sure your child has all their belongings!!

All endpoints should use the URL https://kids-fly2020.herokuapp.com/

- Endpoints

---

REGISTER ACCOUNT
POST /api/user/register

Parameter | Type | Required | Description

- username: String: true: username is the email in kidsfly! 255 char max
- password: String: true: passwords must be at least 8 characters long!
- fullname: String: false: first and last name string 255 characters max
- phone: String: false: accepts all formats of phone #'s
- address: String: false: address max string 255 characters.
- state: String: false: state
- zip: Integer: false: zip code must be a integer.
- created: Date: false: This is generated by the server when created.

---

LOGIN ACCOUNT
POST /api/user/login

Parameter | Type | Required | Description

- username String: true: username is also the email in kidsfly!
- password String: true: password for the user!

---

UPDATE USER ACCOUNT
PUT /api/user/:user_id

ALL VALUES ARE OPTIONAL BUT ATLEAST 1 VALUE SHOULD BE UPDATED

Parameter | Type | Required | Description

- fullname: String: false: first and last name string 255 characters max
- phone: String: false: accepts all formats of phone #'s
- address: String: false: address max string 255 characters.
- state: String: false: state
- zip: Integer: false: zip code must be a integer.

---

LOGOUT ACCOUNT
GET /api/user/logout

If you can't figure this one out, I can't help you.

---

ADD TRIP
POST /api/trip

Parameter | Type | Required | Description

- date: String: true: accepts any format
- airport: String: true: 255 char max
- flight: String: true: 255 char max
- departure: String: true: time of departure accepts any format of time
- carryOn: Integer: true: number of items carrying on flight
- children: Integer: true: number of children on flight
- agentReq: String: false: Male or Female.. etc 255 char max
- special: String: false: Any special request?? 255 char max
- upgrades: String: false: Any upgrades purchased? 255 char max

---

GET ALL AGENTS
POST /api/user/agents

Only for admin use and returns all agents

---

GET ALL TRIPS
GET /api/trip/admin

Only for admin use

Example Response:
[
{
"id": 13,
"date": "Tuesday, January 7, 2020" 5:45PM,
"airport": "Los Angeles Airport LAX",
"flight": "45218",
"departure": "5:45PM",
"carryOn": "Nothing",
"agentReq": "Female",
"special": 'Apples and music,
"upgrades": First Class,
"family_id": 1,
"agent_id": 3
}
]

---

GET MY TRIPS
GET /api/trip/my

Only for family use

Example Response:
[
{
"id": 11,
"date": "Tuesday, January 2, 2020" 3:45PM,
"airport": "Daytona Beach Intl. Airport",
"flight": "4518",
"departure": "3:45PM",
"carryOn": "2 bags",
"agentReq": "None",
"special": 'Cookies',
"upgrades": First Class,
"family_id": 2,
"agent_id": 4
}
]

---

GET TRIP BY ID
GET /api/trip/:trip_id

if:
Family member: must be owner of trip:
Agent member: must be assigned to trip:
Admin: full access!

Example Response:
[
{
"id": 21,
"date": "Tuesday, January 22, 2020" 1:45PM,
"airport": "Jacksonville International Airport",
"flight": "2185",
"departure": "1:45PM",
"carryOn": "3 bags",
"agentReq": "Male",
"special": 'Cookies, Cake, Candy',
"upgrades": First Class,
"family_id": 4,
"agent_id": 4
}
]

---

GET TRIPS BY AGENT ID
GET /api/trip/agent

Only for agent use

Example Response:
[
{
"id": 11,
"date": "Tuesday, January 2, 2020" 3:45PM,
"airport": "Daytona Beach Intl. Airport",
"flight": "4518",
"departure": "3:45PM",
"carryOn": "2 bags",
"agentReq": "None",
"special": 'Cookies',
"upgrades": First Class,
"family_id": 2,
"agent_id": 4
},
{
"id": 21,
"date": "Tuesday, January 22, 2020" 1:45PM,
"airport": "Jacksonville International Airport",
"flight": "2185",
"departure": "1:45PM",
"carryOn": "3 bags",
"agentReq": "Male",
"special": 'Cookies, Cake, Candy',
"upgrades": First Class,
"family_id": 4,
"agent_id": 4
}
]

---

UPDATE TRIP BY ID
PUT /api/trip/:trip_id

if:
Family member: must be owner of trip:
Agent member: must be assigned to trip:
Admin: full access!

Parameter | Type | Required | Description

- date: String: true: accepts any format
- airport: String: true: 255 char max
- flight: String: true: 255 char max
- departure: String: true: time of departure accepts any format of time
- carryOn: String: true: list items that are carry on if none put "none" 255 char max
- agentReq: String: false: Male or Female.. etc 255 char max
- special: String: false: Any special request?? 255 char max
- upgrades: String: false: Any upgrades purchased? 255 char max

!IMPORTANT! When updating any value you must send all values even values that don't change!

---

DELETE TRIP BY ID
DELETE /api/trip/:trip_id

if:
Family member: must be owner of trip:
Agent member: must be assigned to trip:
Admin: full access!
