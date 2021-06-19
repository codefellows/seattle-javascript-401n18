'use strict';

// see this as a similar thing as a "node" in BT, LL, etc
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// this is the line between vertexes
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  // the only thing we need to hold on our graph is a the list of all edges and their related verticies
  // we can do that, by holding them in a key/val pair set, using new Map()
  constructor() {
    this.adjacencyList = new Map(); // this is going to be used to keep track of our edges (key = some vertex // value = some edge)
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []); // this will be used to store edges
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    let adjancencies = this.adjacencyList.get(startVertex);
    console.log('list type:', adjancencies);
    adjancencies.push(new Edge(endVertex, weight)); // adds this edge to a set of connected verticies
  }

  getNeighbors(vertex) {
    return [...adjacencyList.get(vertex)] // create a copy of our list and return the copy -> this contains all related vertixes on this list
  }
}

const graph = new Graph();

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');

graph.addVertex(a);
graph.addVertex(b);
graph.addVertex(c);
graph.addVertex(d);
graph.addVertex(e);
graph.addVertex(f);

console.log('build up graph', graph);

graph.addDirectedEdge(a, b);

console.log('one edge added', graph);

graph.addDirectedEdge(b, c);
graph.addDirectedEdge(c, a);

console.log('cyclical', graph);