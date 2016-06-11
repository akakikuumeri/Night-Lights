using UnityEngine;
using System.Collections;

public class CameraFacingBillboard : MonoBehaviour
{
	public Camera m_Camera = Camera.main;
	
	void Update()
	{
		transform.rotation = Camera.main.transform.rotation;//transform.LookAt(Camera.main.transform.position, Camera.main.transform.up);
	}
}