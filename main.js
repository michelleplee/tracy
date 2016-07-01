
	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "im mad old"
	    },
	    {
	    	quote:"and if id gone to work i woulda showed up with a brown paper bag on my head"
	   
	    },
	    {
	    	quote:"actually i dont even know what adulthood is. dont ask me"
	    },
	    {
	    	quote:"i got mega lit and passed out on the company bus"
	    },
	    {
	    	quote:"i have duck iq"

	    },
	    {
	    	quote:"definitely not grown, just ignorant and decrepit all at once"
	    },
	    {
	    	quote:"like if you're not good at 26 then maybe you'll be ungood forever"

	    },
	    {
	    	quote:"chinese investors fund new luxury housing for reddings 1%"
	    },
	    {
	    	quote: "impressing other humans is hard"
	    },
	    {
	    	quote: "k ill shave my head asap. ive not been feeling my hair for like a year"
	    },
	    {
	    	quote:"life is mad sad"
	    },
	    {
	    	quote:'thanks michelle maybe i will find that [special] person in hell'
	    },
	    {
	    	quote:"there nothing not to be emo about",

        }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();

			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready






