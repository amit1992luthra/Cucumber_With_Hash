$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sdet.feature");
formatter.feature({
  "line": 1,
  "name": "google search functionality",
  "description": "",
  "id": "google-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Write String in Google Search Textbox",
  "description": "",
  "id": "google-search-functionality;write-string-in-google-search-textbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User Enter String in search box of google \"\u003cvalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The Results will Display \"\u003csample\u003e\" , \"\u003csample2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "google-search-functionality;write-string-in-google-search-textbox;",
  "rows": [
    {
      "cells": [
        "value",
        "sample",
        "sample2"
      ],
      "line": 14,
      "id": "google-search-functionality;write-string-in-google-search-textbox;;1"
    },
    {
      "cells": [
        "IBM",
        "samplestring",
        "samplestring 2"
      ],
      "line": 15,
      "id": "google-search-functionality;write-string-in-google-search-textbox;;2"
    },
    {
      "cells": [
        "IBM",
        "samplestring",
        "samplestring 2"
      ],
      "line": 16,
      "id": "google-search-functionality;write-string-in-google-search-textbox;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2210570400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open the browser and navigate to the google page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to Google Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_navigates_to_Google_Page()"
});
formatter.result({
  "duration": 1934384000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Write String in Google Search Textbox",
  "description": "",
  "id": "google-search-functionality;write-string-in-google-search-textbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User Enter String in search box of google \"IBM\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The Results will Display \"samplestring\" , \"samplestring 2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 43
    }
  ],
  "location": "StepDefination.user_Enter_String_in_search_box_of_google(String)"
});
formatter.result({
  "duration": 110874300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samplestring",
      "offset": 26
    },
    {
      "val": "samplestring 2",
      "offset": 43
    }
  ],
  "location": "StepDefination.the_Results_will_Display(String,String)"
});
formatter.result({
  "duration": 296900,
  "status": "passed"
});
formatter.after({
  "duration": 693492700,
  "status": "passed"
});
formatter.before({
  "duration": 1224603700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open the browser and navigate to the google page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to Google Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_navigates_to_Google_Page()"
});
formatter.result({
  "duration": 2032453800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Write String in Google Search Textbox",
  "description": "",
  "id": "google-search-functionality;write-string-in-google-search-textbox;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User Enter String in search box of google \"IBM\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The Results will Display \"samplestring\" , \"samplestring 2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 43
    }
  ],
  "location": "StepDefination.user_Enter_String_in_search_box_of_google(String)"
});
formatter.result({
  "duration": 114583300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samplestring",
      "offset": 26
    },
    {
      "val": "samplestring 2",
      "offset": 43
    }
  ],
  "location": "StepDefination.the_Results_will_Display(String,String)"
});
formatter.result({
  "duration": 147600,
  "status": "passed"
});
formatter.after({
  "duration": 747208400,
  "status": "passed"
});
});