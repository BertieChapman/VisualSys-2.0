/**
 * Created by Bertie on 23/09/2016.
 */

var id = 100;

var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);


function initNetworkArea(){
    var netArea = document.getElementById('network_area');

    dataSet = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        width : '500px',
        height: '500px'
    };
    // initialize network
    network = new vis.Network(netArea, dataSet, options);
}

function addNode(pos){
    dataSet.nodes.add({id :id, text : "test", x : pos.x , y : pos.y});
    id++;
    network.redraw();
}



