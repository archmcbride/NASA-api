$(document).ready(function(){//This is my code and it is NOT working
    
    $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-28&end_date=2017-07-28&api_key=ENpozZli8AWY4CB8f8IJi82EzWrORjimvItqd21l').then(function(data){
        console.log(data)
        var asteroids = []
        for (var i = 0; i < data.near_earth_objects["2017-07-28"].length; i++) {
            if (data.near_earth_objects["2017-07-28"][i].is_potentially_hazardous_asteroid === true) {
                console.log(`${data.near_earth_objects["2017-07-28"][i].name} is hazardous`)
                asteroids.push(data.near_earth_objects["2017-07-28"][i])
            }
        }
        console.log(asteroids)
        for (var i = 0; i < asteroids.length; i++) {
        	$("#asteroids").append(`
        		<h2>Name: ${asteroids[i].name}</h2>
        	`)
        	$("#asteroids").append(`
        		<h2>Velocity per hour: ${asteroids[i].close_approach_data[0].relative_velocity.miles_per_hour} miles per hour</h2>
    		`)
    		$("#asteroids").append(`
        		<h2>Diameter: ${asteroids[i].estimated_diameter.feet.estimated_diameter_max} ft</h2>
    		`)
    		$("#asteroids").append(`
        		<h2>Distance from Earth: ${asteroids[i].close_approach_data["0"].miss_distance.miles} miles</h2>
    		`)
        }
    })

    
    })
