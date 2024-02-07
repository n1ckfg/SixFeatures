using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf4_loops : MonoBehaviour {

    public Transform[] spheres;
    public float speedX = 0.01f;
    public Color color;

    private Material mtl;

    private void Awake() {
        mtl = spheres[0].GetComponent<Renderer>().sharedMaterial;
    }

    private void Update() {
        moveSpheres();
    }

    private void moveSpheres() {
        for (int i = 0; i < spheres.Length; i++) {
            spheres[i].Translate(speedX, 0f, 0f);
            Vector3 screenPos = Camera.main.WorldToScreenPoint(spheres[i].position);
            if (i == spheres.Length - 1 && (screenPos.x < 0f || screenPos.x > Screen.width)) {
                speedX *= -1f;
            }
        }
        mtl.SetColor("_Color", color);
    }

}
