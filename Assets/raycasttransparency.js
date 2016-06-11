#pragma strict

var alpha = 1.0;

function Start () {

}

function Update () {
	// bit shift the index of the layer to get a bit mask
var layerMask = ~(1 << 2); //ignore "ignore raycast"
// Does the ray intersect any objects which are in the player layer.
if (Physics.Linecast (Camera.main.transform.position, transform.position, layerMask)) {
    alpha -= alpha*0.5;//lerp towards 0
    //renderer.enabled = false;
    } else {
    alpha += (1.0 - alpha)*0.5;
    //renderer.enabled = true;
    }
if (alpha < 0.3) {
	GetComponent.<Renderer>().enabled = false;
	} else {
	GetComponent.<Renderer>().enabled = true;
transform.localScale *= alpha;//renderer.material.color.a = alpha;
}

}