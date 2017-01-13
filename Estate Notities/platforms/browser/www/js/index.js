// clickhandler voor mobiel (touch) / muis (klik), zodat ze op alle apparaten werken
var clickHandler = ("ontouchstart" in document.documentElement ? "touchstart" : "click");


   // Decline hover + click
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

   // accepteren hover + click
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

   // functie ongedaan maken keuze
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
