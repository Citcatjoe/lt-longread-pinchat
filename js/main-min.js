jQuery(document).ready(function($){function e(){setTimeout(function(){$("footer").nextAll("div").css("display","none")},3e3)}$(".btn-reveal").click(function(){$(this).parent().parent().hasClass("is-collapsed")?($(this).parent().parent().removeClass("is-collapsed"),$(this).parent().find("figure").addClass("is-hidden"),$(this).parent().find("span").addClass("is-hidden"),$(this).html("Masquer")):($(this).parent().parent().addClass("is-collapsed"),$(this).parent().find("figure").removeClass("is-hidden"),$(this).parent().find("span").removeClass("is-hidden"),$(this).html("Révéler"))}),$("img.lazy").lazyload({effect:"fadeIn"}),$(window).width()>1200&&$(".zoom").click(function(){zoom.to({element:$(this)[0]})}),$(".slider").owlCarousel({margin:10,loop:!0,items:1,lazyLoad:!0,nav:!1,navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>']});var a=!1,t=document.getElementById("myChart").getContext("2d"),o=new Chart(t,{type:"line",data:{labels:["2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2016-2017"],datasets:[{fill:!1,pointRadius:1,label:"École secondaire II",data:[154,145,122,140,97,98],backgroundColor:"#F4965E",borderColor:"#F4965E",borderWidth:3},{fill:!1,pointRadius:1,label:"Cycle d'orientation",data:[154,165,80,110,72,135],backgroundColor:"#F0551B",borderColor:"#F0551B",borderWidth:3},{fill:!1,pointRadius:1,label:"École primaire",data:[102,80,99,78,52,52],backgroundColor:"#985708",borderColor:"#985708",borderWidth:3}]},options:{title:{display:!0,text:"Évolution du nombre d'actes enregistrés par niveau d'enseignement"},responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!1,mode:"nearest",callbacks:{afterTitle:function(){window.total=0},label:function(e,a){var t=a.datasets[e.datasetIndex].label,o=a.datasets[e.datasetIndex].data[e.index];return window.total+=o,t+": "+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:50},scaleLabel:{display:!0}}],xAxes:[{ticks:{beginAtZero:!0},scaleLabel:{display:!0}}]}}}),i=!1,l=document.getElementById("myChart2").getContext("2d"),n=new Chart(l,{type:"horizontalBar",data:{labels:["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000"],datasets:[{fill:!1,pointRadius:2,label:"Formation gymnasiale",data:[44,44,47,47,46,46,45,45,44,46,45,47,49,46,44,42,47],backgroundColor:"#A6A6A6",borderColor:"#A6A6A6",borderWidth:2,lineTension:0},{fill:!1,pointRadius:2,label:"Formation de culture générale",data:[11,11,13,12,11,10,11,11,10,9,8,7,6,5,12,11,10],backgroundColor:"#C1C1C1",borderColor:"#C1C1C1",borderWidth:2,lineTension:0},{fill:!1,pointRadius:2,label:"Formation professionnelle en école à plein temps",data:[18,18,15,15,15,15,15,16,18,17,17,19,18,22,15,17,15],backgroundColor:"#D8D8D8",borderColor:"#D8D8D8",borderWidth:2,lineTension:0},{fill:!1,pointRadius:2,label:"Formation professionnelle duale",data:[4,3,4,4,5,5,5,5,5,6,6,5,6,5,8,9,9],backgroundColor:"#F4965E",borderColor:"#F4965E",borderWidth:2,lineTension:0},{fill:!1,pointRadius:2,label:"Structures de transition et d'accueil",data:[15,15,14,14,14,15,15,15,13,13,14,13,12,12,10,9,7],backgroundColor:"#F0551B",borderColor:"#F0551B",borderWidth:2,lineTension:0},{fill:!1,pointRadius:2,label:"Autres orientations",data:[8,9,8,9,10,10,10,8,10,10,11,10,10,10,10,12,12],backgroundColor:"#EFEDED",borderColor:"#EFEDED",borderWidth:2,lineTension:0}]},options:{title:{display:!0,text:"Situation au 31 décembre des élèves scolarisés en 11e du cycle d'orientation l'année précédente"},responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0,mode:"label",callbacks:{afterTitle:function(){window.total=0},label:function(e,a){var t=a.datasets[e.datasetIndex].label,o=a.datasets[e.datasetIndex].data[e.index];return window.total+=o,t+": "+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+"%"}}},scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0,stepSize:50},scaleLabel:{display:!0}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0,callback:function(e){return e.toString()+"%"},max:100},scaleLabel:{display:!0}}]}}});i=!0;var r=!1,d=document.getElementById("myChart3").getContext("2d"),s=new Chart(d,{type:"pie",data:{labels:["GE","NE","VD","JU","FR","VS"],datasets:[{label:"Très souvent",backgroundColor:["#F0551B","rgba(250,222,205,0.5)","rgba(244,234,206,0.5)","rgba(203,241,242,0.5)","rgba(181,228,234,0.5)","rgba(203,202,202,0.5)"],data:[35.6,23,24.2,23.3,16.8,14.6]},{label:"Souvent",backgroundColor:["#F0551B","rgba(250,222,205,0.5)","rgba(244,234,206,0.5)","rgba(203,241,242,0.5)","rgba(181,228,234,0.5)","rgba(203,202,202,0.5)"],data:[30.1,35,29.8,29.6,30.3,27.2]}]},options:{title:{display:!0,text:"J'ai l'impression de devoir «tenir le coup» pendant la période scolaire"},tooltips:{enabled:!0,mode:"label",callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label,o=a.datasets[e.datasetIndex].data[e.index];return window.total+=o,t+": "+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+"%"}}},responsive:!0,maintainAspectRatio:!1}});r=!0});