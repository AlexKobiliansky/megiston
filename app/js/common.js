$(document).ready(function() {
    
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").toggleClass("on");
        return false;
    });

    $('.portfolio-wrap').photoswipe();

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        t = th.find(".btn-form").text();
        th.find(".btn-form").prop("disabled", "disabled").addClass('inactive').text("Заявка отправлена!");

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                th.find(".btn-form").removeAttr('disabled').removeClass('inactive').text(t);
                th.trigger("reset");
            }, 2000);
        });
        return false;
    });

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 500);


    /**
     * map
     */
    var mapAttr = $('#map'),
        latitude = mapAttr.data('lat'),
        longitude = mapAttr.data('lng'),
        image = mapAttr.data('marker'),
        zoom = mapAttr.data('zoom'),
        infowindow,
        location = {lat: latitude, lng: longitude};


    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: zoom,
        disableDefaultUI: true,
        mapTypeId: 'terrain',
        styles: [
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        saturation: 36
                    },
                    {
                        color: "#000000"
                    },
                    {
                        lightness: 40
                    }]
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "landscape",
                elementType: "labels.icon",
                stylers: [{
                    saturation: "-100"
                }, {
                    lightness: "-54"
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: "0"
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [{
                    saturation: "-89"
                }, {
                    lightness: "-55"
                }]
            }, {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: "-55"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: "-55"
                }, {
                    weight: 0.2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: "-55"
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: "-55"
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "transit.station",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "on"
                }, {
                    saturation: "-100"
                }, {
                    lightness: "-51"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#151515"
                }, {
                    lightness: 1
                }]
            }]
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
    });

    /**
     * end map
     */

});
