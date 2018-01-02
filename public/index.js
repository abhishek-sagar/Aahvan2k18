$(document).ready(function(){
	$('#name_logout').hover(function(){
		text = $(this).text();
		$(this).text("Logout");
	},function(){
		$(this).text(text);
	});


	$('.col').hover(function(){
		$('.col').not(this).toggleClass('scale-down');
		$(this).toggleClass('scale-up');
	});

$('#players').on('input',function(){
  $('.team-players').empty();
  var players = $(this).val();
  for(var i=0;i<players;i++){
    $('.team-players').append("<div class='form-group'><input type='text' class='form-control' id='player"+(i)+"' name='player_name"+(i)+"' placeholder='Enter Player "+(i+1)+" Name' required='true'></div>");
}
});
});


// end of document.onready 





AOS.init({
  duration: 1200,
});




particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);






	  // $(".nav-link").on("click", function(event) {
   //    $(".nav-link").removeClass("active");
   //    $(this).addClass("active");
   //  });
	// $("#showTeams").on("click" , function(event){
 //  		event.preventDefault();
	// 	event.stopPropagation();
	// 	$.ajax({
	// 		url: "http://localhost:3000/admin/showTeams" , 
	// 		cache: false , 
	// 		data: {
	// 			"password" : "3110"
	// 		},
	// 		dataType: 'json' ,
	// 		success: function(html){
	// 			$("#showDetails").html(html);
	// 		},
	// 		failure: function(err){
	// 			console.log(err);
	// 		}
	// 	});
		
	// });

