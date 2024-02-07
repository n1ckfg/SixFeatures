using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf1_variables : MonoBehaviour {

    public Transform sphere;
    public Vector3 pos = Vector3.zero;
    public Vector3 scale = Vector3.one;
    public Color color;

    private Material mtl;

    private void Awake() {
        mtl = sphere.GetComponent<Renderer>().sharedMaterial;
    }

    private void Update() {
        sphere.position = pos;
        sphere.localScale = scale;
        mtl.SetColor("_Color", color);
	}

}
