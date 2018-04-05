jQuery(document).ready(function($) 
{

  


  





  $(".btn-reveal").click(function() {
    if (
      $(this)
        .parent()
        .parent()
        .hasClass("is-collapsed")
    ) {
      //alert('is-collapsed');
      $(this)
        .parent()
        .parent()
        .removeClass("is-collapsed"); 
      $(this)
        .parent()
        .find("figure")
        .addClass("is-hidden");
      $(this)
        .parent()
        .find("span")
        .addClass("is-hidden");
      $(this).html("Masquer");
    } else {
      //alert("is-not-collapsed");
      $(this)
        .parent()
        .parent()
        .addClass("is-collapsed");
      $(this)
        .parent()
        .find("figure")
        .removeClass("is-hidden");
      $(this)
        .parent()
        .find("span")
        .removeClass("is-hidden");
      $(this).html("Révéler");
    }
  });

  // LAZYLOADING DES IMAGES AVEC LA CLASSE "LAZY"
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });

  // scroll indicator
  // $('body').progressScroll({
  //    backgroundColor: "#3498DB",
  //    height : "5px",
  // });

  // Vertical navigation
  //var dotCounter = $('p.f-inter').length;

  // init();
  // function init(){
  //    $('p.f-inter').each(function( index ) {
  //        $('nav ul').append('<li></li>');

  //    });

  //    $('nav ul li').on('click', function(e) {
  //        $('nav ul li').removeClass('is-active');
  //        $(this).addClass('is-active');
  //        //alert($(this).index());
  //        // SCROLL TO AN ELEMENT FUNCTION
  //        $('html, body').animate({
  //           scrollTop:$('p.f-inter:eq(' + $(this).index() + ')').offset().top
  //        }, 1);
  //    });

  // ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
  if ($(window).width() > 1200) {
    $(".zoom").click(function() {
      zoom.to({
        element: $(this)[0]
      });
    });
  }

  // }

  $(".slider").owlCarousel({
    margin: 10,
    loop: true,
    items: 1,
    lazyLoad: true,
    nav: false,
    navText: [
      '<i class="fa fa-caret-left" aria-hidden="true"></i>',
      '<i class="fa fa-caret-right" aria-hidden="true"></i>'
    ]
  });

  

  var chart1Done = false;
  $(window).scroll(function() {
    if ($("#myChart").is(":in-viewport") && chart1Done == false) {
      // CHART RÉPARTITION 16 ANS
      // CHART EVOLUTION DU NOMBRE D'ACTES ENREGISTRÉS PAR NIVEAU D'ENSEIGNEMENT
      var ctx = document
        .getElementById(
          "myChart"
        )
        .getContext(
          "2d"
        );
      var chart = new Chart(
        ctx,
        {
          type:
            "line",
          data: {
            labels: [
              "2011-2012",
              "2012-2013",
              "2013-2014",
              "2014-2015",
              "2015-2016",
              "2016-2017"
            ],
            datasets: [
              {
                fill: false,
                pointRadius: 2,
                label:
                  "École secondaire II",
                data: [
                  154,
                  145,
                  122,
                  140,
                  97,
                  98
                ],
                backgroundColor:
                  "#F4965E",
                borderColor:
                  "#F4965E",
                borderWidth: 5,
                lineTension: 0
              },
              {
                fill: false,
                pointRadius: 2,
                label:
                  "Cycle d'orientation",
                data: [
                  154,
                  165,
                  80,
                  110,
                  72,
                  135
                ],
                backgroundColor:
                  "#F0551B",
                borderColor:
                  "#F0551B",
                borderWidth: 5,
                lineTension: 0
              },
              {
                fill: false,
                pointRadius: 2,
                label:
                  "École primaire",
                data: [
                  102,
                  80,
                  99,
                  78,
                  52,
                  52
                ],
                backgroundColor:
                  "#985708",
                borderColor:
                  "#985708",
                borderWidth: 5,
                lineTension: 0
              }
            ]
          },
          options: {
            title: {
              display: true,
              text:
                "Évolution du nombre d'actes enregistrés par niveau d'enseignement"
            },
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
              enabled: false,
              mode:
                "nearest", //label
              callbacks: {
                afterTitle: function() {
                  window.total = 0;
                },
                label: function(
                  tooltipItem,
                  data
                ) {
                  var corporation =
                    data
                      .datasets[
                      tooltipItem
                        .datasetIndex
                    ]
                      .label;
                  var valor =
                    data
                      .datasets[
                      tooltipItem
                        .datasetIndex
                    ]
                      .data[
                      tooltipItem
                        .index
                    ];
                  window.total += valor;
                  return (
                    corporation +
                    ": " +
                    valor
                      .toString()
                      .replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        " "
                      )
                  );
                }
                // footer: function () {
                //     return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                // }
              }
            },
            scales: {
              yAxes: [
                {
                  // stacked: true,
                  ticks: {
                    beginAtZero: true,
                    stepSize: 50
                    //max: 200
                  },
                  scaleLabel: {
                    display: true
                    //labelString: "Nombre d'actes enregistés"
                  }
                }
              ],
              xAxes: [
                {
                  // stacked: true,
                  ticks: {
                    beginAtZero: true
                  },
                  scaleLabel: {
                    display: true
                    //labelString: "Années scolaires"
                  }
                }
              ]
            }
          }
        }
      );

      chart1Done = true;
    }
  });

  var chart2Done = false;
  $(window).scroll(function() {
    if ($("#myChart2").is(":in-viewport") && chart2Done == false) {
      // CHART RÉPARTITION 16 ANS
      var ctx2 = document.getElementById("myChart2").getContext("2d");
      var chart2 = new Chart(ctx2, {
        type: "horizontalBar",
        data: {
          labels: [
            "2016",
            "2015",
            "2014",
            "2013",
            "2012",
            "2011",
            "2010",
            "2009",
            "2008",
            "2007",
            "2006",
            "2005",
            "2004",
            "2003",
            "2002",
            "2001",
            "2000"
          ],
          datasets: [
            {
              fill: false,
              pointRadius: 2,
              label: "Formation gymnasiale",
              data: [44, 44, 47, 47, 46, 46, 45, 45, 44, 46, 45, 47, 49, 46, 44, 42, 47],
              backgroundColor: "#A6A6A6",
              borderColor: "#A6A6A6",
              borderWidth: 2,
              lineTension: 0
            },
            {
              fill: false,
              pointRadius: 2,
              label: "Formation de culture générale",
              data: [11, 11, 13, 12, 11, 10, 11, 11, 10, 9, 8, 7, 6, 5, 12, 11, 10],
              backgroundColor: "#C1C1C1",
              borderColor: "#C1C1C1",
              borderWidth: 2,
              lineTension: 0
            },
            {
              fill: false,
              pointRadius: 2,
              label: "Formation professionnelle en école à plein temps",
              data: [18, 18, 15, 15, 15, 15, 15, 16, 18, 17, 17, 19, 18, 22, 15, 17, 15],
              backgroundColor: "#D8D8D8",
              borderColor: "#D8D8D8",
              borderWidth: 2,
              lineTension: 0
            },
            {
              fill: false,
              pointRadius: 2,
              label: "Formation professionnelle duale",
              data: [4, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 5, 6, 5, 8, 9, 9],
              backgroundColor: "#F4965E",
              borderColor: "#F4965E",
              borderWidth: 2,
              lineTension: 0
            },
            {
              fill: false,
              pointRadius: 2,
              label: "Structures de transition et d'accueil",
              data: [15, 15, 14, 14, 14, 15, 15, 15, 13, 13, 14, 13, 12, 12, 10, 9, 7],
              backgroundColor: "#F0551B",
              borderColor: "#F0551B",
              borderWidth: 2,
              lineTension: 0
            },
            {
              fill: false,
              pointRadius: 2,
              label: "Autres orientations",
              data: [8, 9, 8, 9, 10, 10, 10, 8, 10, 10, 11, 10, 10, 10, 10, 12, 12],
              backgroundColor: "#EFEDED",
              borderColor: "#EFEDED",
              borderWidth: 2,
              lineTension: 0
            }
          ]
        },
        options: {
          title: {
            display: true,
            text:
              "Situation au 31 décembre des élèves scolarisés en 11e du cycle d'orientation l'année précédente"
          },
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            mode: "label", //label
            callbacks: {
              afterTitle: function() {
                window.total = 0;
              },
              label: function(tooltipItem, data) {
                var corporation = data.datasets[tooltipItem.datasetIndex].label;
                var valor =
                  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                window.total += valor;
                return (
                  corporation +
                  ": " +
                  valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+ '%'
                );
              }
              // footer: function () {
              //     return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
              // }
            }
          },
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  stepSize: 50

                  //max: 200
                },
                scaleLabel: {
                  display: true
                  //labelString: "Nombre d'actes enregistés"
                }
              }
            ],
            xAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  callback: function(tick) {
                    return tick.toString() + "%";
                  },
                  max: 100
                  
                },
                scaleLabel: {
                  display: true
                  //labelString: "Années scolaires"
                }
              }
            ]
          }
        }
      });

      chart2Done = true;
    }
  });

  var chart3Done = false;
  $(window).scroll(function(){
      if ( $('#myChart3').is(':in-viewport') && chart3Done == false) {
       // CHART PIE
        var ctx3 = document.getElementById("myChart3").getContext("2d");
        var chart3 = new Chart(ctx3, {
          type: "pie",
          data: {
            labels: ["GE", "NE", "VD", "JU", "FR", "VS"],
            datasets: [
              {
                label: "Très souvent",
                backgroundColor: [
                  "#F0551B",
                  "rgba(250,222,205,0.5)",
                  "rgba(244,234,206,0.5)",
                  "rgba(203,241,242,0.5)",
                  "rgba(181,228,234,0.5)",
                  "rgba(203,202,202,0.5)"
                ],
                data: [35.6, 23, 24.2, 23.3, 16.8, 14.6]
              },
              {
                label: "Souvent",
                backgroundColor: [
                 "#F0551B",
                  "rgba(250,222,205,0.5)",
                  "rgba(244,234,206,0.5)",
                  "rgba(203,241,242,0.5)",
                  "rgba(181,228,234,0.5)",
                  "rgba(203,202,202,0.5)"
                ],
                data: [30.1, 35, 29.8, 29.6, 30.3, 27.2]
              }
              // {
              //   label: "Jours maladies",
              //   backgroundColor: [
              //     "red",
              //     "#EFEDED",
              //     "#EFEDED",
              //     "#EFEDED",
              //     "#EFEDED",
              //     "#EFEDED",
              //     "#EFEDED"
              //   ],
              //   data: [17, 10, 5, 5, 3, 3, 1]
              // }
            ]
          },
          options: {
            title: {
              display: true,
              text:
                "J'ai l'impression de devoir «tenir le coup» pendant la période scolaire"
            },
            tooltips: {
              enabled: true,
              mode: "label", //label
              callbacks: {
                // afterTitle: function() {
                //   window.total = 0;
                // },
                label: function(tooltipItem, data) {
                  var corporation = data.datasets[tooltipItem.datasetIndex].label;
                  var valor =
                    data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                  window.total += valor;
                  return (
                    corporation +
                    ": " +
                    valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+ '%'
                  );
                }
                // footer: function () {
                //     return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                // }
              }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });

        chart3Done = true;
    }
  });

  

  // var chart3 = new Chart(ctx3, {
  //   type: "bar",
  //   data: {
  //     labels: ["GE", "FR", "VS", "JU", "NE", "VD", "BE"],
  //     datasets: [
  //       {
  //         label: "Très souvent",
  //         backgroundColor: [
  //           "#F0551B",
  //           "#DCA561",
  //           "#DCA561",
  //           "#DCA561",
  //           "#DCA561",
  //           "#DCA561",
  //           "#DCA561"
  //         ],
  //         data: [35.6, 16.8, 14.6, 23.3, 23, 24.2, 20.4]
  //       },
  //       {
  //         label: "Souvent",
  //         backgroundColor: [
  //           "#F4965E",
  //           "#FDC98A",
  //           "#FDC98A",
  //           "#FDC98A",
  //           "#FDC98A",
  //           "#FDC98A",
  //           "#FDC98A"
  //         ],
  //         data: [30.1, 30.3, 27.2, 29.6, 35, 29.8, 22]
  //       }
  //       // {
  //       //   label: "Jours maladies",
  //       //   backgroundColor: [
  //       //     "red",
  //       //     "#EFEDED",
  //       //     "#EFEDED",
  //       //     "#EFEDED",
  //       //     "#EFEDED",
  //       //     "#EFEDED",
  //       //     "#EFEDED"
  //       //   ],
  //       //   data: [17, 10, 5, 5, 3, 3, 1]
  //       // }
  //     ]
  //   },
  //   options: {
  //     scales: {
  //           xAxes: [{
  //               stacked: true
  //           }],
  //           yAxes: [{
  //               stacked: true
  //           }]
  //       },
  //     title: {
  //       display: true,
  //       text:
  //         "J'ai l'impression de devoir «tenir le coup» pendant la période scolaire"
  //     },
  //     tooltips: {
  //       enabled: true,
  //       mode: "label", //label
  //       callbacks: {
  //         afterTitle: function() {
  //           window.total = 0;
  //         },
  //         label: function(tooltipItem, data) {
  //           var corporation = data.datasets[tooltipItem.datasetIndex].label;
  //           var valor =
  //             data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  //           window.total += valor;
  //           return (
  //             corporation +
  //             ": " +
  //             valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
  //             "%"
  //           );
  //         }
  //         // footer: function () {
  //         //     return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  //         // }
  //       }
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false
  //   }
  // });

  // $(".button").on('click', function(e) {
  //    $('.button').removeClass('is-active');
  //    $(this).addClass('is-active');
  //    // alert('hello');
  //    // $(".iframe").load('http://theurltoload.com')
  //    // e.preventDefault();
  //    e.preventDefault();
  //    var $el = $(this);
  //    // alert($el.attr('map-url'));
  //    $(".iframe").attr("src", $el.attr('map-url'));
  // });

  // THIS IS EXECUTED WHEN EVERYTHING IS LOADED
  // var everythingLoaded = setInterval(function() {
  //   if (/loaded|complete/.f-inter(document.readyState)) {
  //     clearInterval(everythingLoaded);
  //   }
  // }, 10);

  // USE THIS IF SOMETHING CANT LOAD CORRECTLY
  // $(window).load(function(){
  // });

  // THIS IS DONE AT EVERY SCROLL
  // $(window).scroll(function (event) {
  //    });

  // SCROLL TO AN ELEMENT FUNCTION
  //$('html, body').animate({
  //    scrollTop:$('.element').offset().top
  //}, 1000);

  // SCROLL TO A CALCULATED HEIGHT
  //$('html, body').animate({
  //      scrollTop:$(scrollHeight).offset().top
  //}, 1000);

  // SIMPLE CLICK
  //    $(".menu").click(function(){
  // });

  // SET A DELAY IN A FUNCTION
  // setTimeout(function()
  // {
  // }, 250);

  // KEEP A DIV SQUARE HACK
  // var largeur = $('.un-quart').width();
  // $('.un-quart').height(largeur);

  //    $(window).resize(function(){
  //        var largeur = $('.un-quart').width();
  //        $('.un-quart').height(largeur);
  //    });

  // THIS IS EXECUTED ON RESIZE
  // $(window).resize(function(){

  // });

  // THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
  // if($(window).width() > 500)
  // {
  // }

    

});
