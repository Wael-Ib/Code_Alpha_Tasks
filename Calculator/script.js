document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        // Get input values
        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value;
        const year = document.getElementById('year').value;
        
        // Validate inputs
        if (!day || !month || !year) {
            alert('Please fill in all fields');
            return;
        }
        
        // Create date objects
        const birthDate = new Date(year, month, day);
        const today = new Date();
        
        // Validate date (in case of invalid dates like February 30)
        if (birthDate.getDate() != day || birthDate.getMonth() != month || birthDate.getFullYear() != year) {
            alert('Please enter a valid date');
            return;
        }
        
        // Calculate age
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // Adjust age if birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        // Calculate days until next birthday
        let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }
        const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
        
        // Get day of week for birthday
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[birthDate.getDay()];
        
        // Display results
        document.getElementById('age').textContent = age;
        document.getElementById('birthday').textContent = dayOfWeek;
        document.getElementById('next-birthday').textContent = daysUntilBirthday;
        document.getElementById('result').style.display = 'block';
    }
});