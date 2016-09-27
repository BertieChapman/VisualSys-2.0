/**
 * Created by Bertie on 23/09/2016.
 */

var id = 1;

function initNetworkArea(){
    var netArea = document.getElementById('network_area');

    dataSet = {
        nodes: new vis.DataSet,
        edges: new vis.DataSet
    };
    var options = {
        physics: {
            enabled: false,
        }
    };
    // initialize network
    network = new vis.Network(netArea, dataSet, options);

}

function addNode(pos){
    dataSet.nodes.add({id :id, text : "test", x : pos.x , y : pos.y});
    id++;
    network.redraw();

}



