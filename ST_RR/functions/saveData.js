

const dataToSave = {
    expDays: expDays,
    doneDays: doneDays,
    startDate: startDate
};


saveData = {};


saveData[jatos.workerId] = dataToSave;
jatos.submitResultData(saveData);


jatos.batchSession.add(saveData);
jatos.appendResultData(saveData);