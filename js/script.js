$(document).ready(function() {
    (function() {
        "use strict";
        var toggles = document.querySelectorAll(".cmn-toggle-switch");
        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function(e) {
                e.preventDefault();
                (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
            });
        }
    })();

    $('#after').click(function() {
      $(this).css('background', '#F1C657');
      $('#before').css('background', '#F2EFEF');
    });

    $('.burger_menu').click(function(event) {
        event.preventDefault();
        $('.nav_menu').toggleClass('nav_menu_active');
        $(this).toggleClass('burger_close');
    });

});


function changeContentC2() {
    var x = document.getElementById('calc2').rows[6].cells;
    var t = document.getElementById('c2').value;
    var tX = document.getElementById('c2X').value;
    var tXX = document.getElementById('c2XX').value;
    if (t != "" && t != "0") {
        t = 450 + t * 450;
        x[2].innerHTML = "<span class='totalsun'><strong>" + t + "</strong> грн</span>";
    } else x[2].innerHTML = "<span class='totalsun'><strong>" + 0 + "</strong> грн</span>";
    if (tX != "" && tX != "0") {
        tX = 500 + tX * 500;
        x[3].innerHTML = "<span class='totalsun'><strong>" + tX + "</strong> грн</span>";
    } else x[3].innerHTML = "<span class='totalsun'><strong>" + 0 + "</strong> грн</span>";
    if (tXX != "" && tXX != "0") {
        tXX = 400 + tXX * 400;
        x[1].innerHTML = "<span class='totalsun'><strong>" + tXX + "</strong> грн</span>";
    } else x[1].innerHTML = "<span class='totalsun'><strong>" + 0 + "</strong> грн</span>";
}

function changeContentC3() {
    var x = document.getElementById('calc3').rows[7].cells;
    var t = document.getElementById('c3').value;
    var L = document.getElementById('L3').value;
    var tX = document.getElementById('c3X').value;
    var LX = document.getElementById('L3X').value;
    var tXX = document.getElementById('c3XX').value;
    var LXX = document.getElementById('L3XX').value;
    if (t != "" && t != "0" && L != "" && L != "0") {
        t = 0 + t * 300 + L * 16;
        x[2].innerHTML = "<span class='totalsun'><strong>" + t + "</strong> грн</span>";
    } else x[2].innerHTML = "<span class='totalsun'><strong>" + 0 + "</strong> грн</span>";
    if (tX != "" && tX != "0" && LX != "" && LX != "0") {
        tX = 0 + tX * 350 + LX * 18;
        x[3].innerHTML = "<span class='totalsun'><strong>" + tX + "</strong> грн</span>";
    } else x[3].innerHTML = "<span class='totalsun'><strong>" + 0 + "</strong> грн</span>";
    if (tXX != "" && tXX != "0" && LXX != "" && LXX != "0") {
        tXX = 0 + tXX * 250 + LXX * 14;
        x[1].innerHTML = "<span class='totalsun'><strong>" + tXX + "</strong> грн</span>";
    } else x[1].innerHTML = "<span class='totalsun'><strong>" + 0 + "</strong> грн</span>";
}


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "/js/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '/js/analytics.js', 'ga');
ga('create', 'UA-48533996-1', 'akran.kiev.ua');
ga('send', 'pageview');


(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '/js/analytics.js', 'ga');
ga('create', 'UA-48533996-1', 'akran.kiev.ua');
ga('send', 'pageview');


function getinputvalue(id) {
    var value = document.getElementById(id).value;
    if (value !== '') {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
    } else {
        value = 0;
    }
    return value;
}

function gettext(id) {
    var value = document.getElementById(id).textContent;
    if (value !== '') {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
    } else {
        value = 0;
    }
    return value;
}

function getresult() {
    var c1count = getinputvalue('c1count');
    var c2count = getinputvalue('c2count');
    var c3count = getinputvalue('c3count');
    //var c4count = getinputvalue('c4count'); 
    var c5count = getinputvalue('c5count');
    //var c6count = getinputvalue('c6count'); 
    var deys = getinputvalue('deys');
    var c1price = gettext('c1price');
    var c2price = gettext('c2price');
    var c3price = gettext('c3price');
    //var c4price = gettext('c4price'); 
    var c5price = gettext('c5price');
    //var c6price = gettext('c6price');   
    var c1total = (c1count * c1price) * deys;
    document.getElementById('c1total').innerHTML = c1total;
    var c2total = (c2count * c2price) * deys;
    document.getElementById('c2total').innerHTML = c2total;
    var c3total = (c3count * c3price) * deys;
    document.getElementById('c3total').innerHTML = c3total;
    //var c4total = (c4count*c4price);    
    //document.getElementById('c4total').innerHTML = c4total; 
    var c5total = (c5count * c5price) * deys;
    document.getElementById('c5total').innerHTML = c5total;
    //var c6total = (c6count*c6price)*deys;   
    //document.getElementById('c6total').innerHTML = c6total;   
    var totalprice = c1total + c2total + c3total + c5total;
    document.getElementById('totalresult').innerHTML = totalprice;
}
getresult();

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "/js/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
