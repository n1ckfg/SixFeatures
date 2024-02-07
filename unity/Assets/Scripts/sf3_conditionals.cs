using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf3_conditionals : MonoBehaviour {

    public Transform sphere;
    public float speedX = 0.01f;
    public Color color;

    private Material mtl;

    private void Awake() {
         mtl = sphere.GetComponent<Renderer>().sharedMaterial;
    }

    private void Update() {
        moveSphere();
    }

    private void moveSphere() {
        sphere.Translate(speedX, 0f, 0f);
        Vector3 screenPos = Camera.main.WorldToScreenPoint(sphere.position);
        if (screenPos.x < 0f || screenPos.x > Screen.width) {
            speedX *= -1f;
        }
        mtl.SetColor("_Color", color);
    }

}
