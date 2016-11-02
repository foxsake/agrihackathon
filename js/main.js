$(document).ready(function(){
    var map;
    var marker;
    var myCenter=new google.maps.LatLng(15.669759, 120.890059);

    function initialize(){
    var mapProp = {
        center:myCenter,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(
                document.getElementById("google_map"),
                mapProp
        );

        marker = new google.maps.Marker({
                position:myCenter,
                map:map,
                title:"We are here",
                animation:google.maps.Animation.DROP
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-84954118-1','auto');ga('send','pageview');


    function showpdf(path){
        $('#pdfModalObject').attr('data',path);
        $('#pdfModalObject>p>a').attr('href',path);
        $('#pdfModal').modal('show')
    }


    $('button').click(function(){
	if($(this).attr('data-toggle') || $(this).attr('data-dismiss'))
	    return;
	else
	    showpdf($(this).attr('data-target'));
    });

    $('#djt').click(function(){
        showpdf('pdf/Dr.Jasper_Tallada.pdf');
    });
});
