(async () => {

    var settings = Object.assign({}, app_settings);



    // get subject data from batch session

    var subData = await data_helper.get_subject_data(true).catch(function (e) {

        console.log('error getting subject data');

        console.log(e);

    });





    gameDay = [];


    function daysOfGame() {
        //check if played the day before
        //if no end game
        //if yes
        gameDay.push('playedToday')
        if (gameDay.length == 1) {

        } else if (gameDay.length == 2 || gameDay.length == 5) {

        } else if (gameDay.length == 3) {

        }
        else if (gameDay.length >> 5) {

        }

    };