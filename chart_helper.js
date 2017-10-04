function graph_helper() {
	
	this.get_min_yaxis = function(value_liste1, value_liste2) {
		
		var min1 = 0;
		var min2 = 0;
		var min_graph = 0;
		
		if(typeof(value_liste1) !== 'undefined' && value_liste1.length > 0) {
			min1 = this.get_min_graph_value(value_liste1);
		}
		
		if(typeof(value_liste2) !== 'undefined' && value_liste2.length > 0) {
			min2 = this.get_min_graph_value(value_liste2);
		}
		
		if(min1 < min2) {
	    	min_graph = min1;
	    }
	    else {
	    	min_graph = min2;
	    }
		
		return min_graph;
	}
	
	this.get_max_yaxis = function(value_liste1, value_liste2) {
		
		var max1;
		var max2;
		var max_graph = 0;
		
		if(typeof(value_liste1) !== 'undefined' && value_liste1.length > 0) {
			max1 = this.get_max_graph_value(value_liste1);
		}
		else {
			max1 = 0;
		}
		
		if(typeof(value_liste2) !== 'undefined' && value_liste2.length > 0) {
	    	max2 = this.get_max_graph_value(value_liste2);
		}
		else {
			max2 = 0;
		}
		
		if(max1 > max2) {
	    	max_graph = max1;
	    }
	    else {
	    	max_graph = max2;
	    }
		
		return max_graph;
	}
	
	this.get_min_graph_value = function(graph_value) {
		
		var current_value = 0;
		var min_value = 0;
		var save_value = 0;
		
		for(index in graph_value) {
			
			var value = graph_value[index];
	    	
			current_value = value[1];
			
			if(current_value <= min_value) {
				min_value = current_value;
			}

			save_value = current_value;
	    }
	    
	    return min_value;
	}
	
	this.get_max_graph_value = function(graph_value) {
		
		var current_value = 0;
		var max_value = 0;
		var save_value = 0;
		
		for(index in graph_value) {
			var value = graph_value[index];
			
			current_value = value[1];
			
			if(current_value >= max_value) {
				max_value = current_value;
			}
			
			save_value = current_value;
		}
	    
	    return max_value;
	}
	
	this.round_next = function(number, next){
		return (Math.round(Number(number) / next) * next) + next;
	}
}
