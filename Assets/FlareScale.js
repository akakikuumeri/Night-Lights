#pragma strict

var cam : Camera = Camera.main;
var scalefactor: float = 0.6;
var alphafactor: float = 1.2;
var distancefactor: float = 30.0;
var scale : Vector3;

var scalecurve = new AnimationCurve(Keyframe(0, 1), Keyframe(1, 0));
var maxdistance: float = 40.0;
var alphacurve = new AnimationCurve(Keyframe(0, 1), Keyframe(1, 0));

function Start () {
	scale = transform.localScale;
}

function Update () {
	var dist :float= Vector3.Distance(Camera.main.transform.position, transform.position);
	transform.localScale = scale * scalecurve.Evaluate(dist/maxdistance);//scale * Mathf.Pow(dist, scalefactor);
	GetComponent.<Renderer>().material.color.a = alphacurve.Evaluate(dist/maxdistance);//Mathf.Min(alphafactor - dist/distancefactor, 1.0);
}