// Create a global jsPDF object
window.jsPDF = window.jspdf.jsPDF;

// Get the button element and add a click event listener
document.getElementById('generate-pdf').addEventListener('click', function() {
    // Create a new jsPDF instance
    var doc = new jsPDF();
    
    // Define the font size
    var fontSize = 14;
  
    // Loop through each question text input element
    var y = 30;
    for (var i = 1; i <= 10; i++) {
      var question = document.getElementById('question' + i).value.trim();
  
      // If the question is not empty, add it to the PDF
      if (question !== '') {
        // Add the question number and text to the PDF
        doc.setFontSize(fontSize);
        doc.text('Question ' + i + ': ' + question, 10, y);
        y += 15;
      }
    }
  
    // Save the PDF
    doc.save('math-worksheet.pdf');
  });
  

/*

// Add a click event listener to the "Download PDF" button
document.getElementById("generate-pdf").addEventListener("click", function() {
	try {
		// Create a new PDF instance
		var doc = new jsPDF();
		
		// Define the math questions to include in the PDF
		var questions = [
			"What is 2 + 2?",
			"What is 5 * 7?",
			"What is 10 / 2?",
			"What is 8 - 3?",
			"What is the square root of 64?",
			"What is the value of pi (rounded to two decimal places)?"
		];
		
		// Set the initial vertical position for the questions
		var yPos = 20;
		
		// Loop through the questions and add them to the PDF
		for (var i = 0; i < questions.length; i++) {
			doc.text(20, yPos, questions[i]);
			yPos += 10;
		}
		
		// Save the PDF file
		doc.save("math-questions.pdf");
	} catch (e) {
		// Show an error message to the user if the PDF could not be generated
		alert("An error occurred while generating the PDF: " + e.message);
	}
});
*/