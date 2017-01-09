// extern script
//   $(function() {
//       $.ajax({
//           url: 'http://sketch.esta-w01.estatetilburg.local/test.json',
//           dataType: 'json',
//           crossDomain: true,
//           success: function(data) {
//               console.log(data);
//           }
//       });
//   });

// lokaal script
$(function() {
    $.ajax({
        url: 'json/testdata.json',
        dataType: 'json',
        async: false,
        success: function(data) {

            var i = 1;
            //   var i = Math.floor(Math.random() * 3); // random generating person

            $('.main_title').append($('<h2>', {
                text: "Hallo, " + data.employees[i].naam
            }));

            $.each(data.employees[i].ontvangenuitnodiging, function(key, value) {
                var left = "<a href='#'class='left_decline' onclick=''><i class='fa fa-times'></i></a>";
                var right = "<a href='#' class='right_accept' onclick=''><i class='fa fa-check'></i></a>";

                $('.ontvangen').append("<div class='columns small-6 medium-6 end'></div>");
                $('.ontvangen').find('.columns').eq(key).append("<div class='profile_container_o'></div>");
                $('.profile_container_o').eq(key).append("<div class='profilepic_o dashboard blanc'></div>");
                $('.profilepic_o').eq(key).append(left, right);
                $('.profilepic_o').eq(key).append($('<img src=' + this.foto + '>'));
                //   console.log(this.foto);
            });

            $.each(data.employees[i].verstuurdeuitnodiging, function(key, value) {
                $('.verstuurd').append("<div class='columns small-6 medium-6 end'></div>");
                $('.verstuurd').find('.columns').eq(key).append("<div class='profile_container_v'></div>");
                $('.profile_container_v').eq(key).append("<div class='profilepic_v dashboard blanc'></div>");
                $('.profilepic_v').eq(key).append($('<img src=' + this.foto + '>'));
                // console.log(this.foto);
            });

            $.each(data.employees[i].tebeoordelen, function(key, value) {
                $('.beoordelen').append("<div class='columns small-6 medium-6 end'></div>");
                $('.beoordelen').find('.columns').eq(key).append("<div class='profile_container_b'></div>");
                $('.profile_container_b').eq(key).append("<div class='profilepic_b dashboard blanc'></div>");
                $('.profilepic_b').eq(key).append($('<img src=' + this.foto + '>'));
                // console.log(this.foto);
            });

            $('.deadline').append($('<p>', {
                text: data.employees[i].deadline
            }));

            $.each(data.employees[i].topcompetentie, function(key, value) {
                $('.hoogst').find(".competentie").append($('<li>', {
                    text: value
                }));
            });

            $.each(data.employees[i].verbeterpunt, function(key, value) {
                $('.laagst').find(".competentie").append($('<li>', {
                    text: value
                }));
            });

            $('.gemiddeld').append($('<p>', {
                text: data.employees[i].gemiddeld
            }));

            $('.budget').append($('<p>', {
                text: data.employees[i].opleidingsbudget
            }));

            if (data.employees[i].opleidingsdagen == 1) {
                $('.dagen').append($('<p>', {
                    text: data.employees[i].opleidingsdagen + " dag"
                }));
            } else {
                $('.dagen').append($('<p>', {
                    text: data.employees[i].opleidingsdagen + " dagen"
                }));
            }

            // toe te voegen:
            // notities uitlezen van json
            // notitie aanmaken en opslaan json

        }
    });
});
