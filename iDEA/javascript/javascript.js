$(document).ready(function(){
    $( ".drag_and_drop_items" ).draggable({
        revert: "invalid",
        containment: '.container',
        refreshPositions: true,
        cursor: 'pointer',
        snap: '.dropbox',
        drag: function(event, ui) {
            $('.droppable').addClass('ui-state-highlight');
        },
        stop: function(event, ui) {
            $('.droppable').removeClass('ui-state-highlight');
            if ( $.ui.ddmanager.drop( $(this).data("draggable"), event ) ) {
                alert( 'was dropped' );
            }
            else {
                alert( 'it was not dropped' );
            }
        }
    });


    $("body").scrollTop($("#question2").offset().top);
    
    $( "#intrinsic" ).droppable({
        hoverClass: "ui-state-active",
        drop: function( event, ui ) {
            var targetElem = $(this).attr("id");
            //alert(targetElem);
            document.getElementById('intrinsic_popup').style.visibility='visible';
            setTimeout(function(){  document.getElementById('intrinsic_popup').style.visibility='hidden';
            },1500)
        }
    });
    
    $( "#extrinsic" ).droppable({
        hoverClass: "ui-state-active",
        drop: function( event, ui ) {
            var targetElem = $(this).attr("id");
            document.getElementById('extrinsic_popup').style.visibility='visible';
            setTimeout(function(){  document.getElementById('extrinsic_popup').style.visibility='hidden';
            },1500)
        }
    }); 
    
    $(document).ready(function() {
        $('.select_one_options_items').click(function() {
        $(this).toggle('slow');
    });
})
});