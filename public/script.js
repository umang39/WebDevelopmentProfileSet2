$(()=>{
	let i = 1
	///var settings
	let left = $('#left').val().toLowerCase()
	let right = $('#right').val().toLowerCase()
	


	//changing effect of left
	$('#left').change(function() {
		$('#list').empty()
	
		
	 left = $('#left').val().toLowerCase()
	 console.log(left + ' ' + right)
	 $.get('/fetch',function(data){
		console.log(data)
	
		
		for (var key in data) {
			
			
			if (data.hasOwnProperty(key) && data[key].base_unit == left && data[key].quote_unit == right) {
			  console.log(key + ": " + data[key].name);
			  $('#list').append(`
				<thead class="rows">
				<th class="cols">${i++}</th>
				<th class= "cols">${data[key].name}</th>
				<th class="cols">${data[key].last}</th>
				<th class="cols">${data[key].buy}/${data[key].sell}</th>
				<th class="cols">${data[key].volume}</th>
				<th class="cols">${data[key].base_unit}</th>
			</thead>`)
			}
			
		  }
	
	})
	})


	//changing effect of right
	$('#right').change(function() {
		$('#list').empty()
	
		
		right = $('#right').val().toLowerCase()
		console.log(left + ' ' + right)

		$.get('/fetch',function(data){
			console.log(data)
			for (var key in data) {
				
				
				if (data.hasOwnProperty(key) && data[key].base_unit == left && data[key].quote_unit == right) {
				  console.log(key + ": " + data[key].name);
				  $('#list').append(`
				  
					<thead class="rows">
					
					<th class="cols">${i++}</th>
					<th class= "cols">${data[key].name}</th>
					<th class="cols">${data[key].last}</th>
					<th class="cols">${data[key].buy}/${data[key].sell}</th>
					<th class="cols">${data[key].volume}</th>
					<th class="cols">${data[key].base_unit}</th>
					
				</tr>`)
				}
		
				
			  }
			
		})
	   })
	

	   $.get('/fetch',(data)=>{
		console.log(data)
		for (var key in data) {
			
			
			if (data.hasOwnProperty(key) && data[key].base_unit == left && data[key].quote_unit == right) {
			  console.log(key + ": " + data[key].name);
			  $('#list').append(`
				<thead class="rows">
				<th class="cols">${i++}</th>
				<th class= "cols">${data[key].name}</th>
				<th class="cols">${data[key].last}</th>
				<th class="cols">${data[key].buy}/${data[key].sell}</th>
				<th class="cols">${data[key].volume}</th>
				<th class="cols">${data[key].base_unit}</th>
			</thead>`)
			}
			
		  }
	
	})
	
})