
$(document).ready(function() { 
    initHighChart();  
    var data = [
        {
            "year" : "2014",
            "pass": true,
            "display": false,
            "content": [
                {
                    "title": "May – June",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "July – September",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "October – December",
                    "text": ["Lorem Ipsum"]
                }
            ]
        },
        {
            "year" : "2015",
            "pass": true,
            "display": false,
            "content": [
                {
                    "title": "January – May",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "June – August",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "September – November",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "December",
                    "text": ["Lorem Ipsum"]
                }
            ]
        },
        {
            "year": "2016",
            "pass": true,
            "display": false,
            "content": [
                {
                    "title": "January – May",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "June",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "June – July",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "August – September",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "October",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "November - December",
                    "text": ["Lorem Ipsum"]
                }
            ]
        },
        {
            "year": "2017",
            "pass": true,
            "display": false,
            "content": [
                {
                    "title": "January – February",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "April",
                    "text": ["Lorem Ipsum", "Lorem Ipsum"]
                },
                {
                    "title": "July",
                    "text": ["Lorem Ipsum", "Lorem Ipsum"]
                },
                {
                    "title": "October",
                    "text": ["Lorem Ipsum", "Lorem Ipsum"]
                },
                {
                    "title": "November - December",
                    "text": ["Lorem Ipsum"]
                }
            ]
        },
        {
            "year": "2018",
            "pass": true,
            "display": true,
            "content": [
                {
                    "title": "January",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "March",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "September",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "December",
                    "text": ["Lorem Ipsum"]
                }
            ]
        },
        {
            "year": "2019",
            "pass": false,
            "display": false,
            "content": [
                {
                    "title": "February",
                    "text": ["Lorem Ipsum"]
                },
                {
                    "title": "April",
                    "text": ["Lorem Ipsum"]
                }
            ]
        }
    ];
    $('.loading-overlay').show();
    setTimeout(function() {$('.loading-overlay').hide()}, 5000);
    
    var isPlaying = function(audio) {return !audio.paused;}
    var a = document.getElementById('main_audio');
    a.volume = 0.05;
    $('.music_btn').on('click', function() {
        if (isPlaying(a)) {
            a.pause();
            $("#on_off").html('on');
        } else {
            a.play();
            $("#on_off").html('off');
        }
    });
    for(var i = 0; i < data.length; i++) {
        var year = i + 1;
        var monthtext = [];
        var monthtitle = [];
        var monthdata = [];
        var yeardata = [];
        yeardata[i] = '';

        if(data[i].pass == true) {
            $('.s_2__timeline__year.s_2__timeline__year-' + year).find('.s_2__timeline__checkbox').css("background-image", "url('img/graph-active-point.png')");
        } 
        $('.s_2__timeline__year.s_2__timeline__year-' + year).find('.s_2__timeline__label').append(data[i].year);
        var content = data[i].content;
        for(var j = 0; j < content.length; j++) {
            if(data[i].content[j] != null) {
                monthtext[j] = '';
                var text = content[j].text;
                for(var k = 0; k < text.length; k++) {
                    monthtext[j] += '<br>' + text[k];
                }   
                monthtitle[j] = '';
                monthtitle[j] = '<strong>' + content[j].title + '</strong>';
                monthdata[j] = '';
                monthdata[j] =  '<div class="d-table-cell s_2__tabs__col">' + monthtitle[j] + monthtext[j] + '</div>';                     
                yeardata[i] += monthdata[j]; 
            }                
        }  
        var style = '';
        if(data[i].display == true) {
            style = 'block';
        } else {
            style = 'none';
        }
        var temp = '<div class="s_2__tab" id="s_2__tab-' + year + '" style="display: ' + style + '"><div class="d-table">' + yeardata[i] + '</div></div>';
        $("#myroadmap").append(temp);
    }
});      


$("a, .bounty").on('mouseover', function(e) {
    var x = document.getElementById("bg_music");
    x.play();
});
function initHighChart(){
    var options = {
        chart: {
            type: 'pie',
            renderTo: 'chart',
            backgroundColor: 'transparent',
            width:245,
            height:300,
            events: {
                load: function () { 
                  $(".highcharts-legend-item rect").attr('height', 0);
                  $(".highcharts-legend-item rect").attr('width', 0);
                },
                redraw: function () {
                  $(".highcharts-legend-item rect").attr('height', 0);
                  $(".highcharts-legend-item rect").attr('width', 0);
                }
            }
        },
        title: {
            text: '',
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f}%',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }

        },
        credits:{enabled: false},
        // colors: ['#60cae9', '#48ea8d', '#FFFFFF', '#48afea'],
        legend: {
            enabled: true,
            labelFormatter: function() {
                return '';            
            },            
        },
        series: [
            {
                name: 'TOKEN ALLOCATION',
                colorByPoint: true,
                data: [
                    {
                        name: 'Early (SUP holders) Backers',
                        y: 3
                    }, 
                    {
                        name: 'Dapp destribution favouring to early SUP holders',
                        y: 45
                    }, 
                    {
                        name: 'Dapp/SuperDA0 Partners',
                        y: 5
                    }, 
                    {
                        name: 'Bounty Pool',
                        y: 15
                    }, 
                    {
                        name: 'Marketing Budget ',
                        y: 10
                    }, 
                    {
                        name: 'Endownment Fund',
                        y: 10
                    }, 
                    {
                        name: 'CoreTeam Allocation ',
                        y: 12
                    }
                ]
            }
        ]
    };
    
    var chart = new Highcharts.Chart(options);
}