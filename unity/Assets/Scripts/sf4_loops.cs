using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf4_loops : MonoBehaviour {

    public GameObject[] spheres;
    public float speedX = 0.01f;
    public Color color;

    private Renderer ren;

    private void Awake() {
        ren = spheres[0].GetComponent<Renderer>();
    }

    private void Update() {
        moveSpheres();
        ren.sharedMaterial.SetColor("_Color", color);
    }

    private void moveSpheres() {
        for (int i = 0; i < spheres.Length; i++) {
            spheres[i].transform.Translate(speedX, 0f, 0f);
            Vector3 screenPos = Camera.main.WorldToScreenPoint(spheres[i].transform.position);
            if (screenPos.x < 0f || screenPos.x > Screen.width) {
                speedX *= -1f;
            }
        }
    }

}
