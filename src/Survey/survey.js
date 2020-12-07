import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";


Survey.StylesManager.applyTheme("modern");
function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

export function SurveyPage() {
    var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"How often do you get a haircut?","choices":[{"value":"item1","text":"Bi-Weekly"},{"value":"item2","text":"Monthly"},{"value":"item3","text":"Varies"}]}]},{"name":"page2","elements":[{"type":"radiogroup","name":"question2","title":"Confidence is key to achieve any goals?","choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"},{"value":"item3","text":"Maybe"}]}],"title":"Help makes ThyFlow Better"}]}
    return (
    <div className="container">
        <h2>SurveyJS Library - a sample survey below</h2>
        <Survey.Survey
            json={ surveyJSON } onComplete={ sendDataToServer }
          />
    </div>
    );
  }