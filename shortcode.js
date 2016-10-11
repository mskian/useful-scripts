/*
 * Blogger Shortcode Plugin By Mohammad Mustafa Ahmedzai
 * All Shortcodes Here Created By Shivansh Verma Skv
 * Examples and documentation at: http://www.BloggerGuiders.blogspot.com
 * Copyright (c) 2008-2015 STCnetwork.org
 * Version: 1.0 (29-March-2015)
 * Dual licensed under the MIT and GPL licenses.
 * Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 */

$(document).ready(function() {

// Global Variables
var bhf = ['gbutton', 'tfollow', 'ttweet', 'gbadge', 'embed', 'fbsend', 'fbfollow', 'fbshare', 'fblike', 'blockquote'];

// Can be added in Blog posts
$('.post').each(function() {
    var html = $(this).html();
    html = mbt(html);
    if (html != '') {
        $(this).html(html);
    }
});

// Can be added in Sidebar widgets
$('.widget-content').each(function() {
    var html = $(this).html();
    html = mbt(html);
    if (html != '') {
        $(this).html(html);
    }
});


// Can be added in Comments
$('.comment').each(function() {
    var html = $(this).html();
    html = mbt(html);
    if (html != '') {
        $(this).html(html);
    }
});

// Handler function & Shortcode Parser
function mbt(html) {
    var be = false;
    for (var i = 0; i < bhf.length; i++) {
        var aR = '[' + bhf[i];
        var bA = '<div class="shortcode sc-' + bhf[i] + '"';
        var bx = '[/' + bhf[i] + ']';
        var bb = '</div>';
        var aj = '/]';
        var bj = '></div>';
        var aT = 0;
        var bs = 0;
        var bF = 0;
        for (j = 0; j < 100; j++) {
            aT = html.indexOf(aR, aT);
            var aY = true;
            var k = '';
            if (aT != -1) {
                var bq = html.indexOf(bx, aT);
                var bH = html.indexOf(aj, aT);
                if ((bq != -1 && bH == -1) || (bq != -1 && bH != -1 && bq < bH)) {
                    k = html.substring(aT, bq + bx.length);
                    k = k.replace(bx, bb);
                    bs = bq;
                    bF = bx.length;
                } else if ((bq == -1 && bH != -1) || (bq != -1 && bH != -1 && bq > bH)) {
                    k = html.substring(aT, bH + aj.length);
                    k = k.replace(bx, bj);
                    bs = bH;
                    bF = aj.length;
                } else {
                    aY = false;
                }
            } else {
                break;
            }
            if (aY) {
                be = true;
                k = k.replace(aR, bA);
                k = k.replace(']', '>');
                html = html.substring(0, aT) + k + html.substring(bs + bF);
            } else {}
            aT++;
        }
    }
    if (be) {
        return html;
    }
    return '';
};

 // Button Shortcode
        $('.sc-mlink').each(function () {
            var sbh = $(this).attr('subhd');
            var sblink = $(this).attr('link');
            var sbtitle = $(this).attr('title');

            var html = '<div class="in-post"><tp><strong>' + sbh + '</strong></tp> <a href="' + sbh + '" />' + sbtitle + '</a></div>'
            $(this).replaceWith(html);
        });
