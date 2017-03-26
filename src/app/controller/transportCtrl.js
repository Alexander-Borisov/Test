app.controller('TransportCtrl', function ($scope,films) {
    $scope.message = {
        film:films.getFilms(),
        data: "Привет",
        dataReverse:  "Ghbdtn".split("").reverse().join("")
    }
});