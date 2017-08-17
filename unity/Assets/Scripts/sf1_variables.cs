using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf1_variables : MonoBehaviour {

    public GameObject sphere;
    public Vector3 pos = Vector3.zero;
    public Vector3 scale = Vector3.one;
    public Color color;

    private Renderer ren;

    private void Awake() {
        ren = sphere.GetComponent<Renderer>();
    }

    private void Update() {
        sphere.transform.position = pos;
        sphere.transform.localScale = scale;
        ren.material.SetColor("_Color", color);
	}

}
