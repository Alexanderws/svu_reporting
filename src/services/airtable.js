var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyiDbLrP8MWrW1a2" }).base(
  "appOdJ9DvrRHQa74h"
);

export const getRecords = (exisitingRecords, callBack) => {
  base("Innsending copy")
    .select({
      view: "Grid view"
    })
    .firstPage(function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log("Retrieved", record);
      });
      if (exisitingRecords.length <= 0) {
        callBack(records);
      }
    });
};

export const createRecord = formObject => {
  console.log(
    "createRecord - formObject: ",
    formObject.smittefrakkBeholdning
  );
  base("Innsending copy").create(
    [
      {
        fields: {
          Etat: ["recVMiYDLmF4BGleU"],
          "Smittefrakk behov": parseInt(formObject.smittefrakkBehov),
          "Smittefrakk beholdning": parseInt(
            formObject.smittefrakkBeholdning
          ),
          "Åndedrettsvern FFP2 beholdning": parseInt(
            formObject.andedrettsvernFFP2Beholdning
          ),
          "Åndedrettsvern FFP2 behov": parseInt(
            formObject.andedrettsvernFFP2Behov
          ),
          "Åndedrettsvern FFP3 beholdning": parseInt(
            formObject.andedrettsvernFFP3Beholdning
          ),
          "Åndedrettsvern FFP3 behov": parseInt(
            formObject.andedrettsvernFFP3Behov
          ),
          "Hansker: nitril, latex og vinyl behov": parseInt(
            formObject.hanskerBehov
          ),
          "Hansker: nitril, latex og vinyl beholdning": parseInt(
            formObject.hanskerBeholdning
          ),
          "Øyebeskyttelse:visir og briller beholdning": parseInt(
            formObject.oyebeskyttelseBeholdning
          ),
          "Øyebeskyttelse:visir og briller behov": parseInt(
            formObject.oyebeskyttelseBehov
          ),
          "Kirurgiske munnbind beholdning": parseInt(
            formObject.munnbindBeholdning
          ),
          "Kirurgiske munnbind behov": parseInt(formObject.munnbindBehov),
          "Kirurgiske munnbind med visir behov": parseInt(
            formObject.munnbindVisirBehov
          ),
          "Kirurgiske munnbind med visir beholdning": parseInt(
            formObject.munnbindVisirBeholdning
          ),
          "Operasjonsluer/hetter beholdning": parseInt(
            formObject.operasjonsluerBeholdning
          ),
          "Operasjonsluer/hetter behov": parseInt(
            formObject.operasjonsluerBehov
          )
        }
      }
    ],
    function(err, records) {
      if (err) {
        console.error(err);
        return false;
      }
      records.forEach(function(record) {
        console.log(record.getId());
      });
      return true;
    }
  );
};
