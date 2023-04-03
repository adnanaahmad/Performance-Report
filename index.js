// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Performance report</h1>`;

// array of notes
let notesArray = [];

// extract notes
function getNotes(array) {
  const results = array.filter((item) => (item.notes ? item.notes : ''));
  for (var i = 0; i < results.length; i++) {
    // notesArray.push(results['notes']);
    notesArray = results[i]['notes'];
  }
  return notesArray;
}
// paste your json
const parseJson = [
  {
    id: 2426,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-01T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      "729: updated description and logo in meta and deployed a new build of the mockup app.\n822: moved the file size validation for upload to the setLogo handler and displayed a warning if the file exceeds 5 MB.\n829: fixed the issue where the pop up message was not displaying when a user was revoked or restored from the edit member's page.\nand deployed a new build to barbarian server.",
    meta: null,
    created: '2023-03-01T22:58:11.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2487,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-02T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'reviewing syntax and features of ts. will later on move to design patterns with ts.\nhuddled with Syed to discuss and close some remaining tickets that were outside the scope.\n835: currently looking into it.',
    meta: null,
    created: '2023-03-02T23:47:21.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2524,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-03T00:00:00.000Z',
    time: 300,
    channel_id: 'C02H0HZ86KG',
    notes:
      'reviewed the type annotations.\nattended the project standup meeting and shared the blockers with the team.\nall frontend bugs and enhancements, except for those related to forms, have been resolved. for form validation, we may need to install a related library. assuming we install the library, our next step will be to design how errors will be displayed on the new application page. we will also need to apply this design to other forms in order to ensure consistency across our app.',
    meta: null,
    created: '2023-03-03T21:33:13.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2590,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-06T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'looked at type annotations around variables, objects and functions.\ncurrently working on familiarizing myself with the yoda codebase so that it can be refactored by extracting the generic code into a common library that can be shared across multiple projects.',
    meta: null,
    created: '2023-03-07T00:16:29.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2638,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-07T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'reviewed 835\nexplored type annotations around arrays, as well as got an introduction to interfaces and classes.\nlooked into the yoda codebase in detail and identified possible files that could be extracted into a common module, such as utils and logger',
    meta: null,
    created: '2023-03-07T23:50:54.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2701,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-08T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'deployed a new build of backoffice-app.\nhuddled with ahmad to discuss recently added tasks on gitlab.\n843: identifying functions within the yoda codebase that could be reused in other projects, and will categorize them later.',
    meta: null,
    created: '2023-03-08T23:54:26.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2738,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-09T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'looked at classes, methods and field modifiers, and inheritance in TS.\nreviewed and discussed recently added tasks on gitlab with Ahmad.\ndid a code review of 836 and suggested improvements to Ahmad.\ndeployed a new build after merging the code to main.\n843: started categorizing and adding comments to the reusable functions in the utils file within yoda codebase.',
    meta: null,
    created: '2023-03-09T23:09:41.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2774,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-10T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'reviewed the gitlab tasks and prioritized them with ahmad. also discussed 839 and 845 in detail.\nattended standup and shared the weekly update.\n843: categorized and annotated almost 2/3 reusable functions in the utils.',
    meta: null,
    created: '2023-03-10T23:27:40.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
  {
    id: 2895,
    team_id: 'T02H0G6CFPY',
    user_id: 'U03TRC71M5H',
    client: 'fortifid',
    date: '2023-03-14T00:00:00.000Z',
    time: 480,
    channel_id: 'C02H0HZ86KG',
    notes:
      'reviewed recently added tasks on gitlab with ahmad.\ndid a code review and merged the code to main to deploy a new build.\n843: categorized and annotated almost all the reusable functions in the utils. will next start working on the logger file.',
    meta: null,
    created: '2023-03-15T00:27:58.000Z',
    modified: null,
    modified_by: null,
    options: ['post'],
    status: 0,
    category: null,
    user_name: 'Adnan Ahmad',
  },
];
// get Notes
const notesvalue = getNotes(parseJson);
console.log(notesvalue);
appDiv.innerHTML = `${notesvalue}`;
