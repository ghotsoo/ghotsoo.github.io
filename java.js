// DOM Elements
const busSearchForm = document.getElementById('busSearchForm');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const resultsContainer = document.getElementById('resultsContainer');
const popularRoutesContainer = document.querySelector('.popular-routes');

// Sample Data (in a real app, this would come from an API)
const busData = {
    "tiruppur-coimbatore": [
        {
            busNumber: "12A",
            operator: "TNSTC",
            departure: "5:00 AM",
            arrival: "6:15 AM",
            frequency: "Every 15 minutes",
            fare: "₹25",
            type: "Ordinary"
        },
        {
            busNumber: "34B",
            operator: "TNSTC",
            departure: "5:30 AM",
            arrival: "6:45 AM",
            frequency: "Every 30 minutes",
            fare: "₹30",
            type: "Express"
        }
    ],
    "tiruppur-erode": [
        {
            busNumber: "78D",
            operator: "TNSTC",
            departure: "5:30 AM",
            arrival: "7:00 AM",
            frequency: "Every 30 minutes",
            fare: "₹40",
            type: "Ordinary"
        }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load popular routes
    loadPopularRoutes();
    
    // Form submission