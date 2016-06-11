#pragma strict

var whatobject : GameObject;
var howmany : int = 300;

function Start () {
	for (var i : int = 0; i < howmany; i++) {
		Instantiate(whatobject, Vector3(Random.value * 60.0 - 30.0, Random.value * 30.0, Random.Range( 30.0, -30.0)), Quaternion.identity);
		} 
}

function Update () {
	
}