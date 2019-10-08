//console.log('11-gtm-out');
$(document).on("click", ".gtm-out", function() {
    var pos = $(this).parent().parent();
    var dataPos = pos.attr('data-event-pos');
    var page = $('.gtm-page');
    var dataPage = page.attr('data-event-page');
    dataLayer.push({
        'event': 'GAEvent',
        'eventCategory': 'Outbound Click',
        'eventAction': dataPage + '-' + dataPos,
        'eventLabel': 'Site Name'
    });
});