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
        async: true,
        success: function(data) {

            var i = 1;
            //   var i = Math.floor(Math.random() * 3); // random generating person

            $('.main_title').append($('<h2>', {
                text: "Hallo, " + data.employees[i].naam
            }));

            $.each(data.employees[i].ontvangenuitnodiging, function(key, value) {
                var left = "<a class='left_decline'><i class='fa fa-times'></i></a>";
                var right = "<a class='right_accept'><i class='fa fa-check'></i></a>";
                var clickHandler = ("ontouchstart" in document.documentElement ? "touchstart" : "click");

                $('.ontvangen').append("<div class='columns small-6 medium-6 end'></div>");
                $('.ontvangen').find('.columns').eq(key).append("<div class='profile_container_o'></div>");
                $('.profile_container_o').eq(key).append("<div class='profilepic_o dashboard blanc'></div>");
                $('.profilepic_o').eq(key).append(left, right);
                $('.profilepic_o').eq(key).append($('<img src=' + this.foto + '>'));
                //   console.log(this.foto);

                $(".left_decline")
                    .bind(clickHandler,
                        function() {
                            //var $this = $(this);
                            var $ongedaan = $("<a class='undo'><i class='fa fa-undo fa-2x' aria-hidden='true'></i></a>");

                            $(this).closest(".profilepic_o").removeClass("blanc");
                            $(this).closest(".profilepic_o").addClass("decline");
                            $(this).closest(".profilepic_o").prepend($ongedaan);
                            $(this).closest(".profilepic_o").find(".right_accept").hide();
                            $(this).hide();

                            undo();
                        });

                $(".right_accept")
                    .bind(clickHandler,
                        function() {

                            var $ongedaan = $("<a class='undo'><i class='fa fa-undo fa-2x' aria-hidden='true'></i></a>");

                            $(this).closest(".profilepic_o").removeClass("blanc");
                            $(this).closest(".profilepic_o").addClass("accept");
                            $(this).closest(".profilepic_o").prepend($ongedaan);
                            $(this).closest(".profilepic_o").find(".left_decline").hide();
                            $(this).hide();

                            undo();
                        });

                function undo() {
                    $(".undo")
                        .bind(clickHandler,
                            function() {
                                $(this).closest(".profilepic_o").removeClass("accept");
                                $(this).closest(".profilepic_o").removeClass("decline");
                                $(this).closest(".profilepic_o").addClass("blanc");
                                $(this).closest(".profilepic_o").find(".left_decline").show();
                                $(this).closest(".profilepic_o").find(".right_accept").show();
                                $(this).remove();
                            });
                }
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
            // notities uitlezen van json?
            // notitie aanmaken en opslaan json?

            $.fn.serializeObject = function() {
                var o = {};
                var a = this.serializeArray();
                $.each(a, function() {
                    if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
                return o;
            };

            $(function() {
                $('#noteform').submit(function() {
                      $('.note').text(JSON.stringify($('#noteform').serializeObject()));
                      return false;
                });
            });

        }
    });
});
