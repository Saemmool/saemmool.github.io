const pollData = [
    {
     option: "Spider-Man", 
     votes: 11,
     color: "rgb(255, 99, 132)"
    },

    {
     option: "Superman", 
     votes: 8,
     color: "rgb(54, 162, 235)"
    },
    {
     option: "Batman", 
     votes: 11,
     color: "rgb(36, 36, 36)"
    },
    
    {
     option: "Son Goku", 
     votes: 5,
     color: "rgb(255, 159, 64)"
    },
    {
     option: "Hulk", 
     votes: 3,
     color: "rgb(75, 192, 192)"
    },
    {
     option: "Wolverine", 
     votes: 8,
     color: "rgb(255, 206, 8 6)"
    },
];

function rgbToRgba(rgb, alpha=1) {
    return `rgba(${rgb.substring(rgb.indexOf('(')+1, rgb.length-1).split(',').join()}, ${alpha})`;
}

Chart.defaults.global.defaultFontFamily = '"Comic Sans MS", cursive, sans-serif';

const ctx = document.getElementById('chart').getContext('2d');
 const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: pollData.map(pollOption => pollOption.option),
            datasets: [{
            label: '# of Votes',
            data: pollData.map(pollOption => pollOption.votes),
            backgroundColor: pollData.map(pollOption => rgbToRgba(pollOption.color, 0.75)),
            borderWidth: 1,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Favorite Superheroes',
            fontColor: "#333",
            fontSize: 20,
            padding: 20
        },
        legend: {
            display: false
        }
    }
});










