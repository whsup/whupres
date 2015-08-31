	function column(result) {	
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Summary Status of January, 2015 to May, 2015'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'number of Status'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Status in 2015: <b>{point.y:.1f} Percent</b>'
        },
        series: [{
            name: 'Population',
            data: result.data,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
	}