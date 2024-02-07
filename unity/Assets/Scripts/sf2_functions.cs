using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf2_functions : MonoBehaviour {

    public Transform sphere;
    public float speedX = 0.01f;
    public Color color;

    private Material mtl;
    private Vector3 origPos;

    private void Awake() {
        mtl = sphere.GetComponent<Renderer>().sharedMaterial;
        origPos = sphere.position;
    }

    private void Update() {
        moveSphere();
    }

    private void moveSphere() {
        sphere.Translate(speedX, 0f, 0f);
        mtl.SetColor("_Color", color);
        if (Input.GetKeyDown(KeyCode.Space)) sphere.position = origPos;
    }

}
